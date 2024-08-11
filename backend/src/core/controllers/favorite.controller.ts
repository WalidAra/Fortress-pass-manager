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
