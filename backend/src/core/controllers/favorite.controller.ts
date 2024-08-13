import { prisma } from "../../config";
import { Request, Response } from "express";

export const markFavAccount = async (req: Request, res: Response) => {
  const { id } = (req as any).user;
  const { accountId } = req.body;
  try {
    const newFavAccount = await prisma.favorite.create({
      data: {
        accountId,
        userId: id,
      },
    });

    res.status(201).json({
      status: true,
      message: "Account added to favorite lists",
      data: newFavAccount,
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

export const deleteFavAccount = async (req: Request, res: Response) => {
  const { id } = (req as any).user;
  const { accountId } = req.body;
  try {
    const deletedFavAccount = await prisma.favorite.deleteMany({
      where: {
        accountId: accountId as string,
        userId: id as string,
      },
    });

    if (deletedFavAccount.count === 0) {
      return res.status(404).json({
        status: false,
        message: "Favorite account not found",
        data: null,
      });
    }

    res.status(200).json({
      status: true,
      message: "Account removed from favorite list",
      data: deletedFavAccount,
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
