import { prisma } from "../../config";
import { Request, Response } from "express";

export const createCollection = async (req: Request, res: Response) => {
  const { id } = (req as any).user;
  const { name } = req.body;
  try {
    const collection = await prisma.collection.create({
      data: {
        name,
        userId: id,
      },
    });

    res.status(201).json({
      status: true,
      message: "Collection created successfully",
      data: collection,
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

export const addNewAccountToCollection = async (
  req: Request,
  res: Response
) => {
  const { collectionId, accountId } = req.body;

  try {
    const collection = await prisma.collection.findUnique({
      where: {
        id: collectionId,
      },
    });

    if (!collection) {
      return res.status(404).json({
        status: false,
        message: "Collection not found",
        data: null,
      });
    }

    const account = await prisma.account.findUnique({
      where: {
        id: accountId,
      },
    });

    if (!account) {
      return res.status(404).json({
        status: false,
        message: "Account not found",
        data: null,
      });
    }

    const collectionAccount = await prisma.collectionAccount.create({
      data: {
        collectionId,
        accountId,
      },
    });

    res.status(201).json({
      status: true,
      message: "Account added to collection successfully",
      data: collectionAccount,
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

export const deleteCollection = async (req: Request, res: Response) => {

  const { collectionId } = req.params;
  try {
    const collection = await prisma.collection.findUnique({
      where: {
        id: collectionId,
      },
    });
    if (!collection) {
      return res.status(404).json({
        status: false,
        message: "Collection not found",
        data: null,
      });
    }

    await prisma.collection.delete({
      where: {
        id: collectionId,
      },
    });

    res.status(200).json({
      status: true,
      message: "Collection deleted successfully",
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
