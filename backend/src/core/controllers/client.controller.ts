import { prisma } from "../../config";
import { getProfile } from "../../model/user.m";
import { Request, Response } from "express";
import bcrypt from "bcrypt";

export const deleteProfile = async (req: Request, res: Response) => {
  const { id } = (req as any).user;

  try {
    await prisma.user.delete({
      where: {
        id,
      },
    });

    res.status(200).json({
      status: true,
      message: "User deleted successfully",
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
      message: "Server is not running",
      data: null,
    });
  }
};

export const updateProfile = async (req: Request, res: Response) => {
  const { id } = (req as any).user;
  const { email, password, name, image } = req.body;

  try {
    const userData = await getProfile({ id, include: true });

    if (!userData) {
      return res.status(404).json({
        status: false,
        message: "User not found",
        data: null,
      });
    }

    const updatedUser = await prisma.user.update({
      where: {
        id,
      },

      data: {
        email: email || userData.email,
        password: password
          ? await bcrypt.hash(password, 10)
          : userData.password,
        name,
        image,
      },
    });

    const { password: undefined, ...userWithoutPassword } = updatedUser;

    res.status(200).json({
      status: true,
      message: "User updated successfully",
      data: userWithoutPassword,
    });
  } catch (error) {
    if (error instanceof Error) {
      console.error("~> Error :", error.message);
    } else {
      console.error("An unknown error occurred");
    }
    res.status(500).json({
      status: false,
      message: "Server is not running",
      data: null,
    });
  }
};

export const getClientProfile = async (req: Request, res: Response) => {
  const { id } = (req as any).user;
  try {
    const user = await getProfile({ id });

    if (!user) {
      return res.status(404).json({
        status: false,
        message: "User not found",
        data: null,
      });
    }

    res.status(200).json({
      status: true,
      message: "got user info",
      data: user,
    });
  } catch (error) {
    if (error instanceof Error) {
      console.error("~> Error :", error.message);
    } else {
      console.error("An unknown error occurred");
    }
    res.status(500).json({
      status: false,
      message: "Server is not running",
      data: null,
    });
  }
};
