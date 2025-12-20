import Service from "../models/service";
import ServiceActivities from "../models/serviceActivities";

import { sendSms } from "./smsController";

// Yeni Servis Kaydı Ekle
export const store = async (req, res) => {
  try {
    const data = req.body;

    const newService = new Service({
      customer_fullname: data.customer_fullname,
      phone: data.phone,
      alternative_phone: data.alternative_phone,
      land_phone: data.land_phone,
      email: data.email,
      city_id: data.city_id,
      district_id: data.district_id,
      address: data.address,
      product_id: data.product_id,
      color_id: data.color_id,
      imei: data.imei,
      warranty_status: data.warranty_status,
      warranty_date: data.warranty_date,
      fault_note: data.fault_note,
      fault_category_id: data.fault_category_id,
      priority: data.priority,
      ticket: data.ticket,
      user_id: null,
      service_status_id: 1, // Servise Alındı
    });

    const createService = await newService.save();

    // Müşteriye Servise Ürünün Alındığına Dair SMS Gönder
    if (createService && createService.phone) {
      const message = `Merhaba ${createService.customer_fullname}, ürününüz servise alınmıştır. Servis numaranız: ${createService._id}`;
      sendSms(createService.phone, message);
    }

    res.json({
      success: true,
      message: "Servis kaydı başarıyla oluşturuldu",
      data: createService,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "Servis kaydı oluşturulamadı",
      err: error.message,
    });
  }
};
// Servis Kayıt Detayı
export const edit = async (req, res) => {
  try {
    let serviceId = req.params.id;

    let service = await Service.findById(serviceId);

    if (!service) {
      res.json({
        success: false,
        message: "Servis Kaydı Bulunamadı!",
      });
    }
    res.json({
      success: true,
      message: "Servis Kaydı Bulundu!",
      data: service,
    });
  } catch (error) {
    res.json({
      success: false,
      message: "Servis Kaydı Bulunamadı Hata!",
      err: error,
    });
  }
};
// Tüm Servis Kayıtlarını Listele
export const fetch = async (req, res) => {
  try {
    let services = await Service.find();

    res.json({
      success: true,
      message: "TÜm Servis Kayıtları Getirildi!",
      data: services,
    });
  } catch (error) {
    res.json({
      success: false,
      message: "Servis Kayıtları Getirilemedi Hata!",
      err: error,
    });
  }
};
// Servis Kaydını Güncelle
export const update = async (req, res) => {
  try {
    let data = req.body;
    let serviceId = req.params.id;

    await Service.findByIdAndUpdate(serviceId, {
      customer_fullname: data.customer_fullname,
      phone: data.phone,
      alternative_phone: data.alternative_phone,
      land_phone: data.land_phone,
      email: data.email,
      city_id: data.city_id,
      district_id: data.district_id,
      address: data.address,
      product_id: data.product_id,
      color_id: data.color_id,
      imei: data.imei,
      warranty_status: data.warranty_status,
      warranty_date: data.warranty_date,
      fault_note: data.fault_note,
      fault_category_id: data.fault_category_id,
      ticket: data.ticket,
    });
    res.json({
      success: true,
      message: "Servis Kayıt Bilgileri Başarıyla Güncellendi!",
    });
  } catch (error) {
    res.json({
      success: false,
      message: "Servis Kayıt Bilgileri Güncellenemedi!",
      err: error,
    });
  }
};
// Servis Kayıt Aktivitesi Gir
export const createActivities = async (req, res) => {
  try {
    let serviceId = req.params.id;
    let data = req.body;

    // Yeni Servis Aktivitesi Oluştur
    let newActivities = new ServiceActivities({
      service_id: serviceId,
      note: data.note,
      user_id: 1,
      status_id: data.status_id,
    });
    await newActivities.save();
    // Servis Kayıt Durumunu Güncelle
    let newServiceStatus = await Service.findByIdAndUpdate(serviceId, {
      service_status_id: data.status_id,
    });
    res.json({
      success: true,
      message: "Servis Aktivitesi Başarıyla Oluşturuldu!",
    });
  } catch (error) {
    res.json({
      success: false,
      message: "Servis Aktivitesi Oluşturulamadı!",
      err: error,
    });
  }
};
// Servis Kaydını Sil
export const remove = async (req, res) => {
  try {
    let serviceId = req.params.id;

    await Service.findByIdAndDelete(serviceId);

    res.json({
      success: true,
      message: "Servis Kaydı Başarıyla Silindi!",
    });
  } catch (error) {
    res.json({
      success: false,
      message: "Servis Kaydı Silinemedi!",
      err: error,
    });
  }
};
// Cihazı İşleme Al Durumuna Getir - Durum 2
export const processDevice = async (req, res) => {
  try {
    let serviceId = req.params.id;
    let data = req.body;

    // Servis Kaydında Durumu Güncelle
    await Service.findByIdAndUpdate(serviceId, {
      service_status_id: 2, // Test amaçlı 2 eklendi objectId ile dinamikleştirelecek!
    });
    // Servis Aktivitiesine Ekle
    let newStatusActivity = new ServiceActivities({
      service_id: serviceId,
      note: "Cihaz İşleme Alındı!",
      user_id: 1,
      status_id: 2, // Test amaçlı 2 eklendi objectId ile dinamikleştirelecek!
    });
    await newStatusActivity.save();

    res.json({
      success: true,
      message: "Cihaz İşleme Alındı!",
    });
  } catch (error) {
    res.json({
      success: false,
      message: "Cihaz İşleme Alınamadı Hata!",
      err: error,
    });
  }
};
// Cihazi Kontrol Edildi Durumuna Getir - Durum 4
export const completeDeviceInspection = async (req, res) => {
  try {
    let serviceId = req.params.id;

    await Service.findByIdAndUpdate(serviceId, {
      service_status_id: 4,
    });

    await new ServiceActivities({
      service_id: serviceId,
      note: "Cihaz Kontrol Edildi!",
      user_id: 1,
      status_id: 4,
    }).save();

    res.json({ success: true, message: "Cihaz Kontrol Edildi!" });
  } catch (error) {
    res.json({ success: false, message: "Islem Basarisiz!", err: error });
  }
};

// Cihazi Teslim Edildi Durumuna Getir - Durum 5
export const deliverDevice = async (req, res) => {
  try {
    let serviceId = req.params.id;

    await Service.findByIdAndUpdate(serviceId, {
      service_status_id: 5,
    });

    await new ServiceActivities({
      service_id: serviceId,
      note: "Cihaz Teslim Edildi!",
      user_id: 1,
      status_id: 5,
    }).save();

    res.json({ success: true, message: "Cihaz Teslim Edildi!" });
  } catch (error) {
    res.json({ success: false, message: "Islem Basarisiz!", err: error });
  }
};

// Cihazi Odeme Bekliyor Durumuna Getir - Durum 6
export const setPaymentPending = async (req, res) => {
  try {
    let serviceId = req.params.id;

    await Service.findByIdAndUpdate(serviceId, {
      service_status_id: 6,
    });

    await new ServiceActivities({
      service_id: serviceId,
      note: "Odeme Bekleniyor!",
      user_id: 1,
      status_id: 6,
    }).save();

    res.json({ success: true, message: "Odeme Bekleniyor!" });
  } catch (error) {
    res.json({ success: false, message: "Islem Basarisiz!", err: error });
  }
};

// Cihazi Odeme Iptal Edildi Durumuna Getir - Durum 7
export const cancelPayment = async (req, res) => {
  try {
    let serviceId = req.params.id;

    await Service.findByIdAndUpdate(serviceId, {
      service_status_id: 7,
    });

    await new ServiceActivities({
      service_id: serviceId,
      note: "Odeme Iptal Edildi!",
      user_id: 1,
      status_id: 7,
    }).save();

    res.json({ success: true, message: "Odeme Iptal Edildi!" });
  } catch (error) {
    res.json({ success: false, message: "Islem Basarisiz!", err: error });
  }
};

// Cihazi Odeme Tamamlandi Durumuna Getir - Durum 8
export const completePayment = async (req, res) => {
  try {
    let serviceId = req.params.id;

    await Service.findByIdAndUpdate(serviceId, {
      service_status_id: 8,
    });

    await new ServiceActivities({
      service_id: serviceId,
      note: "Odeme Tamamlandi!",
      user_id: 1,
      status_id: 8,
    }).save();

    res.json({ success: true, message: "Odeme Tamamlandi!" });
  } catch (error) {
    res.json({ success: false, message: "Islem Basarisiz!", err: error });
  }
};

// Cihazi Yedek Parca Bekliyor Durumuna Getir - Durum 9
export const setWaitingForSparePart = async (req, res) => {
  try {
    let serviceId = req.params.id;

    await Service.findByIdAndUpdate(serviceId, {
      service_status_id: 9,
    });

    await new ServiceActivities({
      service_id: serviceId,
      note: "Yedek Parca Bekleniyor!",
      user_id: 1,
      status_id: 9,
    }).save();

    res.json({ success: true, message: "Yedek Parca Bekleniyor!" });
  } catch (error) {
    res.json({ success: false, message: "Islem Basarisiz!", err: error });
  }
};
