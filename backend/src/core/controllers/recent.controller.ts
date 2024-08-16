import { prisma } from "../../config";
import { Request, Response } from "express";

export const markRecentAccount = async (req: Request, res: Response) => {
  const { id } = (req as any).user;
  const { accountId } = req.body;
  try {

    const existingRecent = await prisma.recent.findFirst({
      where: {
        accountId,
        userId: id,
      },
    });

    if (existingRecent) {
      return res.status(400).json({
        status: false,
        message: "Recent account already exists",
        data: null,
      });
    }

    const recentAccount = await prisma.recent.create({
      data: {
        accountId,
        userId: id,
      },
    });

    return res.status(200).json({
      status: true,
      message: "Recent account added successfully",
      data: recentAccount,
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
