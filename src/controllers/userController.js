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
export const edit = async (req, res) => {
  try {
    let userId = res.params.id;

    let user = await User.findById(userId);

    if (!user) {
      res.json({
        success: false,
        message: "Kullanıcı Bulunamadı!",
      });
    }
    res.json({
      success: true,
      message: "Kullanıcı Bulundu!",
      data: user,
    });
  } catch (error) {
    res.json({
      success: false,
      message: "Kullanıcı Detayları Getirilemedi Hata !",
      err: error,
    });
    throw error;
  }
};
// Kullanıcı Bilgilerini Güncelle
export const update = async (req, res) => {
  try {
    const userId = req.params.id;
    const data = req.body;

    // şifre hashlenir
    const hashedPassword = await bcrypt.hash(data.password, 10);

    await User.findByIdAndUpdate(userId, {
      fullname: data.fullname,
      email: data.email,
      password: hashedPassword,
      role: data.role,
      isActive: data.isActive,
      phone: data.phone,
      businessPhone: data.businessPhone,
      birthday: data.birthday,
      gender: data.gender,
    });

    res.json({
      success: true,
      message: "Kullanıcı Bilgileri Güncellendi!",
    });
  } catch (error) {
    res.json({
      success: false,
      message: "Kullanıcı Bilgileri Güncellenemedi Hata !",
      err: error,
    });
    throw error;
  }
};
// Kullanıcıyı Sil
export const remove = async (req, res) => {
  try {
    let userId = req.params.id;

    const removeUser = await User.findByIdAndDelete(userId);

    if (!removeUser) {
      res.json({
        success: true,
        message: "Kullanıcı Bulunamadı!",
      });
    }
    res.json({
      success: true,
      message: "Kullanıcı Başarıyla Silindi !",
    });
  } catch (error) {
    res.json({
      success: false,
      message: "Kullanıcı Silinemedi Hata!",
      err: error,
    });
    throw error;
  }
};
