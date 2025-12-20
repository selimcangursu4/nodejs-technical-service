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
const router = express.Router();

// Yeni Servis Kaydı Ekle Ekleme
router.post("/store", store);
// Servis Kayıt Detaylarını Getir
router.get("/edit/:id", edit);
// Tüm Servis Kayıtlarını Getir
router.get("/fetch", fetch);
// Seçili Servis Kayıt Bilgilerini Güncelle
router.post("/update/:id", update);
// Seçili Servis Kaydını Sil
router.delete("/delete/:id", remove);
// Servis Kayıt Aktivitesi Gir
router.post("create-activities/:id", createActivities);
// Cihazı İşleme Al
router.post("process-activities/:id", processDevice);
// Cihaz Kontorle Alındı
router.post("start-inspection-activities/:id", processDevice);
// Cihazi Kontrol Edildi
router.post("complete-inspection-activities/:id", completeDeviceInspection);
// Cihazi Teslim Edildi
router.post("deliver-device-activities/:id", deliverDevice);
// Odeme Bekleniyor
router.post("payment-pending-activities/:id", setPaymentPending);
// Odeme Iptal Edildi
router.post("payment-cancel-activities/:id", cancelPayment);
// Odeme Tamamlandi
router.post("payment-complete-activities/:id", completePayment);
// Yedek Parca Bekliyor
router.post("waiting-sparepart-activities/:id", setWaitingForSparePart);
export default router;
