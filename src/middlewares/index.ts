import errorHandler from "./errorHandler.middleware";
import verifyNameExists from "./verifyNameExists.middleware";
import verifyIdExists from "./verifyIdExists.middleware";
import validateBody from "./validateBody.middleware";
import pagination from "./pagination.middleware";
import order from "./order.middleware";

export default {
  errorHandler,
  verifyNameExists,
  verifyIdExists,
  validateBody,
  pagination,
  order,
};
