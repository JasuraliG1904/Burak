import express from "express";
import restaurantController from "./controllers/restaurant.cont";
import productController from "./controllers/product.cont";
import makeUploader from "./libs/utils/uploader";
// import { uploadProductImage } from "./libs/utils/uploader";
const routerAdmin = express.Router();

// restaurant

routerAdmin.get("/", restaurantController.goHome);

routerAdmin
    .get("/login", restaurantController.getLogin)
    .post("/login", restaurantController.processLogin);;


routerAdmin
    .get("/signup", restaurantController.getSignup)
    .post("/signup", makeUploader("members").single("memberImage"), restaurantController.processSignup);

routerAdmin
.get("/logout", restaurantController.logout)
.get("/check-me", restaurantController.checkAuthession)


// product

routerAdmin
.get("/product/all", 
    restaurantController.verifyRestaurant,
    productController.getAllProducts)

.post("/product/create", 
    restaurantController.verifyRestaurant,
    // uploadProductImage.single("productImage"),
    makeUploader("products").array("productImages",5),
    productController.createNewProducts)

.post("/product/:id", 
    restaurantController.verifyRestaurant,
    productController.updateChosenProducts)





// user

export default routerAdmin;
