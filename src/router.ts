import express from "express";
const router = express.Router();
import memberController from "./controllers/member.cont";
import uploader from "./libs/utils/uploader";
import productController from "./controllers/product.cont";

// Member
router.get("/member/restaurant", memberController.getRestaurant);
router.post("/member/login", memberController.login);
router.post("/member/signup", memberController.signup);
router.post(
  "/member/logout",
  memberController.verifyAuth,
  memberController.logout,
);
router.get(
  "/member/detail",
  memberController.verifyAuth,
  memberController.getMemberDetail,
);

router.post(
  "/member/update",
  memberController.verifyAuth,
  uploader("member").single("memberImage"),
  memberController.updateMember,
);

router.get("/member/top-users", memberController.getTopUsers);

// Product
router.get("/product/all", productController.getProducts);
// {router.get("/product/all/:id/:name", productController.getProducts) postmanda urldan /id/11/name/dav yozsak, terminalda params: { id: '11', name: 'dav' } - chiqadi};
router.get(
  "/product/:id",
  memberController.retrieveAuth,
  productController.getProduct,
);

export default router;
