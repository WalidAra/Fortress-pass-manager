import { accountSelection } from "../../constants";
import { prisma } from "../../config";
import AES from "../../helpers/aes.helper";
import { Request, Response } from "express";

const aes = new AES();

export const getAccountByID = async (req: Request, res: Response) => {
  const { id } = (req as any).user;
  const { accountId } = req.params;

  try {
    const account = await prisma.account.findUnique({
      where: {
        id: accountId,
        userId: id,
      },
    });

    if (!account) {
      return res.status(404).json({
        status: false,
        message: "Account not found",
        data: null,
      });
    }

    const decryptedPassword = aes.decrypt(account.password);
    res.status(200).json({
      status: true,
      message: "Get account by id successfully",
      data: {...account, password: decryptedPassword},
    });
  } catch (error) {
    if (error instanceof Error) {
      console.error("~> Error :", error.message);
    } else {
      console.error("An unknown error occurred");
    }
    res.status(500).json({
      status: false,
      message: "Internal server error",
      data: null,
    });
  }
};

export const getAccountsByCategory = async (req: Request, res: Response) => {
  const { id } = (req as any).user;
  const { category } = req.params;
  try {
    const accounts = await prisma.account.findMany({
      where: {
        userId: id,
        category: category as any,
      },
    });

    res.status(200).json({
      status: true,
      message: "Get accounts by category successfully",
      data: accounts,
    });
  } catch (error) {
    if (error instanceof Error) {
      console.error("~> Error :", error.message);
    } else {
      console.error("An unknown error occurred");
    }
    res.status(500).json({
      status: false,
      message: "Internal server error",
      data: null,
    });
  }
};

export const getFavAccounts = async (req: Request, res: Response) => {
  const { id } = (req as any).user;

  try {
    const accounts = await prisma.favorite.findMany({
      where: {
        userId: id,
      },

      include: {
        Account: {
          select: accountSelection,
        },
      },
    });

    res.status(200).json({
      status: true,
      message: "Get favorite accounts successfully",
      data: accounts,
    });
  } catch (error) {
    if (error instanceof Error) {
      console.error("~> Error :", error.message);
    } else {
      console.error("An unknown error occurred");
    }
    res.status(500).json({
      status: false,
      message: "Internal server error",
      data: null,
    });
  }
};

export const getRecentAccounts = async (req: Request, res: Response) => {
  const { id } = (req as any).user;

  try {
    const accounts = await prisma.recent.findMany({
      where: {
        userId: id,
      },

      include: {
        Account: {
          select: accountSelection,
        },
      },
    });

    res.status(200).json({
      status: true,
      message: "Get recent accounts successfully",
      data: accounts,
    });
  } catch (error) {
    if (error instanceof Error) {
      console.error("~> Error :", error.message);
    } else {
      console.error("An unknown error occurred");
    }
    res.status(500).json({
      status: false,
      message: "Internal server error",
      data: null,
    });
  }
};

export const getSavedCreds = async (req: Request, res: Response) => {
  const { id } = (req as any).user;
  try {
    const accounts = await prisma.account.findMany({
      where: {
        globalCategory: "SAVED_CREDENTIALS",
        userId: id,
      },
    });

    res.status(200).json({
      status: true,
      message: "Get saved credentials successfully",
      data: accounts,
    });
  } catch (error) {
    if (error instanceof Error) {
      console.error("~> Error :", error.message);
    } else {
      console.error("An unknown error occurred");
    }
    res.status(500).json({
      status: false,
      message: "Internal server error",
      data: null,
    });
  }
};

export const getSavedPasswords = async (req: Request, res: Response) => {
  const { id } = (req as any).user;

  try {
    const accounts = await prisma.account.findMany({
      where: {
        globalCategory: "SAVED_PASSWORD",
        userId: id,
      },
    });

    res.status(200).json({
      status: true,
      message: "Get saved passwords successfully",
      data: accounts,
    });
  } catch (error) {
    if (error instanceof Error) {
      console.error("~> Error :", error.message);
    } else {
      console.error("An unknown error occurred");
    }
    res.status(500).json({
      status: false,
      message: "Internal server error",
      data: null,
    });
  }
};

export const getUserAccounts = async (req: Request, res: Response) => {
  const { id } = (req as any).user;
  console.log("====================================");
  console.log("here", id);
  console.log("====================================");
  try {
    const accounts = await prisma.account.findMany({
      where: {
        userId: id,
      },
    });

    res.status(200).json({
      status: true,
      message: "Get user accounts successfully",
      data: accounts,
    });
  } catch (error) {
    if (error instanceof Error) {
      console.error("~> Error :", error.message);
    } else {
      console.error("An unknown error occurred");
    }
    res.status(500).json({
      status: false,
      message: "Internal server error",
      data: null,
    });
  }
};

export const createAccount = async (req: Request, res: Response) => {
  const { id } = (req as any).user;
  const {
    credential,
    password,
    flag,
    globalCategory,
    category,
    note,
    title,
    image,
  } = req.body;
  try {
    const encryptedPassword = aes.encrypt(password);
    const account = await prisma.account.create({
      data: {
        category,
        credential,
        globalCategory,
        note,
        password: encryptedPassword,
        userId: id,
        flag,
        title,
        image,
      },
    });

    res.status(201).json({
      status: true,
      message: "Created new cred successfully",
      data: account,
    });
  } catch (error) {
    if (error instanceof Error) {
      console.error("~> Error :", error.message);
    } else {
      console.error("An unknown error occurred");
    }
    res.status(500).json({
      status: false,
      message: "Internal server error",
      data: null,
    });
  }
};

export const updateAccount = async (req: Request, res: Response) => {
  const {
    credential,
    password,
    flag,
    globalCategory,
    category,
    note,
    title,
    accountId,
  } = req.body;
  try {
    const currentAccount = await prisma.account.findUnique({
      where: {
        id: accountId,
      },
    });

    if (!currentAccount) {
      return res.status(404).json({
        status: false,
        message: "Account not found",
        data: null,
      });
    }

    const updatedAccount = await prisma.account.update({
      where: {
        id: accountId,
      },
      data: {
        credential: credential || currentAccount.credential,
        password: password ? aes.encrypt(password) : currentAccount.password,
        flag: flag || currentAccount.flag,
        globalCategory: globalCategory || currentAccount.globalCategory,
        category: category || currentAccount.category,
        note: note || currentAccount.note,
        title: title || currentAccount.title,
      },
    });

    res.status(200).json({
      status: true,
      message: "Updated account successfully",
      data: updatedAccount,
    });
  } catch (error) {
    if (error instanceof Error) {
      console.error("~> Error :", error.message);
    } else {
      console.error("An unknown error occurred");
    }
    res.status(500).json({
      status: false,
      message: "Internal server error",
      data: null,
    });
  }
};

export const deleteAccount = async (req: Request, res: Response) => {
  const { id } = (req as any).user;
  const { accountId } = req.body;

  try {
    await prisma.account.delete({
      where: {
        id: accountId,
        userId: id,
      },
    });

    return res.status(200).json({
      status: true,
      message: "Account deleted successfully",
      data: null,
    });
  } catch (error) {
    if (error instanceof Error) {
      console.error("~> Error :", error.message);
    } else {
      console.error("An unknown error occurred");
    }
    res.status(500).json({
      status: false,
      message: "Internal server error",
      data: null,
    });
  }
};
