import { prisma } from "../config";
import { userSelection } from "../constants";

type Props = {
  id: string;
  include?: boolean;
};

export const getProfile = async ({ id, include = false }: Props) => {
  const user = await prisma.user.findUnique({
    where: {
      id,
    },
    select: { ...userSelection, password: include },
  });

  return user;
};