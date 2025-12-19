import express from "express";
import {
  store,
  fetch,
  activeUpdate,
  remove,
} from "../controllers/ticketController.js";
const router = express.Router();

// Yeni Etiket Ekleme
router.post("/store", store);
router.get("/fetch", fetch);
router.delete("/delete/:id", remove);
router.post("/active-update", activeUpdate);
export default router;
