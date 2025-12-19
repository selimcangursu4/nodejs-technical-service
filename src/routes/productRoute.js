import express from "express";
import {
  store,
} from "../controllers/productController.js";
const router = express.Router();

// Yeni Ürün Ekleme
router.post("/store", store);


export default router;
