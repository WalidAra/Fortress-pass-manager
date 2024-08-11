export { register, login, refresh } from "./auth.controller";

export {
  getClientProfile,
  updateProfile,
  deleteProfile,
} from "./client.controller";

export {
  createAccount,
  deleteAccount,
  updateAccount,
  getUserAccounts,
  getSavedCreds,
  getSavedPasswords,
  getFavAccounts,
  getRecentAccounts,
  getAccountsByCategory,
} from "./account.controller";

export { markRecentAccount } from "./recent.controller";
export { markFavAccount } from "./favorite.controller";
export { createCollection } from "./collection.controller";
