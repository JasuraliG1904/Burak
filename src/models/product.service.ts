import ProductSchema from "../schema/Product.schema";

class ProductService{
    private readonly productModel;
    constructor(){
        this.productModel =ProductSchema
    }
}

export default ProductService;