import { userSelection } from "../constants";
import { prisma } from "../config";
import bcrypt from "bcrypt";

export const registerService = async (email: string, password: string) => {
  const isUser = await prisma.user.findUnique({
    where: {
      email,
    },

    select: userSelection,
  });

  if (isUser) {
    return null;
  }

  const hashedPW = await bcrypt.hash(password, 10);

  const user = await prisma.user.create({
    data: {
      email,
      password: hashedPW,
      name: email.split("@")[0],
      provider: "DIRECT",
    },

    select: userSelection,
  });

  return user;
};

export const loginService = async (email: string) => {
  const isUser = await prisma.user.findUnique({
    where: {
      email,
    },
  });

  return isUser;
};
