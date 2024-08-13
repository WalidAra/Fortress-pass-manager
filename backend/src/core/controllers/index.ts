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
  getAccountByID,
} from "./account.controller";

export { markRecentAccount } from "./recent.controller";
export { markFavAccount, deleteFavAccount } from "./favorite.controller";
export {
  createCollection,
  addNewAccountToCollection,
  deleteCollection,
} from "./collection.controller";
