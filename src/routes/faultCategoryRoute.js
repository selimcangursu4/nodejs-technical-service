import express from "express";
import { store } from "../controllers/faultCategoryController";
const router = express.Router();

// Yeni Arıza Kategorisi Ekleme
router.post("/store", store);

export default router;
