import express from "express";
import {
  store,
  edit,
  fetch,
  update,
  remove,
  createActivities,
  processDevice,
  completeDeviceInspection,
  deliverDevice,
  setPaymentPending,
  cancelPayment,
  completePayment,
  setWaitingForSparePart
} from "../controllers/serviceController";
import { verifyToken } from "../middlewares/authMiddleware.js";

const router = express.Router();

// Yeni Servis Kaydı Ekle
router.post("/store", verifyToken, store);

// Servis Kayıt Detaylarını Getir
router.get("/edit/:id", verifyToken, edit);

// Tüm Servis Kayıtlarını Getir
router.get("/fetch", verifyToken, fetch);

// Seçili Servis Kayıt Bilgilerini Güncelle
router.post("/update/:id", verifyToken, update);

// Seçili Servis Kaydını Sil
router.delete("/delete/:id", verifyToken, remove);

// Servis Kayıt Aktivitesi Gir
router.post("create-activities/:id", verifyToken, createActivities);

// Cihazı İşleme Al
router.post("process-activities/:id", verifyToken, processDevice);

// Cihaz Kontrole Alındı
router.post("start-inspection-activities/:id", verifyToken, processDevice);

// Cihazı Kontrol Edildi
router.post("complete-inspection-activities/:id", verifyToken, completeDeviceInspection);

// Cihazı Teslim Edildi
router.post("deliver-device-activities/:id", verifyToken, deliverDevice);

// Ödeme Bekleniyor
router.post("payment-pending-activities/:id", verifyToken, setPaymentPending);

// Ödeme İptal Edildi
router.post("payment-cancel-activities/:id", verifyToken, cancelPayment);

// Ödeme Tamamlandı
router.post("payment-complete-activities/:id", verifyToken, completePayment);

// Yedek Parça Bekliyor
router.post("waiting-sparepart-activities/:id", verifyToken, setWaitingForSparePart);

export default router;
