import express from "express"
import { 
    createProduct, 
    deleteProduct, 
    getProduct, 
    getProductById, 
    updateProduct
} from "../controller/productController.js"

const router = express.Router()

router.post("/", createProduct)
router.get("/", getProduct)
router.get("/:id", getProductById)
router.put("/:id", updateProduct)
router.delete("/:id", deleteProduct)

export default router

