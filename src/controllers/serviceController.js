import Service from '../models/service';
import { sendSms } from './smsController';

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
