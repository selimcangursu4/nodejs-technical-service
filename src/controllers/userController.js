import User from "../models/user";
import bcrypt from "bcrypt";

// Yeni Kullanıcı Ekleme
export const store = async (req, res) => {
  try {
    // formdan gelen tüm kullanıcı verilerini al
    let userInfo = req.body;

    // daha önce e-posta adresi kullanılmış mı kontrol et
    const emailCheck = await User.find({
      email: userInfo.email,
    });
    if (emailCheck) {
      res.json({
        success: false,
        message: "Bu Email Adresi Zaten Kayıtlı!",
      });
    }
    // şifre hashlenir
    const hashedPassword = await bcrypt.hash(userInfo.password, 10);
    // yeni kullanıcıyı veritabanına ekle
    let newUser = new User({
      fullname: userInfo.fullname,
      email: userInfo.email,
      password: hashedPassword,
      role: userInfo.role,
      isActive: true,
      phone: userInfo.phone,
      businessPhone: userInfo.businessPhone,
      birthday: userInfo.birthday,
      gender: userInfo.gender,
    });
    await newUser.save();

    res.json({ success: true, message: "Yeni Kullanıcı Başarıyla Eklendi" });
  } catch (error) {
    res.json({
      success: false,
      message: "Yeni Kullanıcı Eklenemedi! Konsola Bakınız...",
      err: error,
    });
    throw error;
  }
};
// Tüm Kullanıcıları Listele
export const fetch = async (req, res) => {
  try {
    let users = await User.find({
      isActive: true,
    });
    res.status(200).json({
      success: true,
      message: "Kullanıcılar listelendi",
      data: users,
    });
  } catch (error) {
    res.json({
      success: false,
      message: "Kullanıcılar Listelenemedi Hata !",
      err: error,
    });
    throw error;
  }
};
// Seçili Kullanıcı Detaylarını Getir

// Kullanıcı Bilgilerini Güncelle

// Kullanıcıyı Sil
