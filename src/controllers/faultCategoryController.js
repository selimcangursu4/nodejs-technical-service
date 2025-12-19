import FaultCategory from "../models/faultCategory";

// Yeni Ariza Kategorisi Ekle
export const store = async (req, res) => {
  try {
    const data = req.body;

    const newFaultCategory = new FaultCategory({
      name: data.name,
      description: data.description,
      isActive: data.isActive,
    });

    await newFaultCategory.save();

    res.json({
      success: true,
      message: "Yeni Ariza Kategorisi Basariyla Eklendi!",
    });
  } catch (error) {
    res.json({
      success: false,
      message: "Yeni Ariza Kategorisi Eklenemedi!",
      err: error.message,
    });
  }
};
// Tüm Arıza Kategorilerini Listele
export const fetch = async (req, res) => {
  try {
    const faultCategories = await FaultCategory.find();

    if (!faultCategories) {
      res.json({
        success: false,
        message: "Arıza Kategorileri Bulunamadı!",
      });
    }

    res.json({
      success: true,
      message: "Arıza Kategorileri Listelendi",
      data: faultCategories,
    });
  } catch (error) {
    res.json({
      success: false,
      message: "Arıza Kategorileri Listelenemedi Hata!",
      err: error,
    });
  }
};
// Ariza Kategorisini Guncelle
export const update = async (req, res) => {
  try {
    const faultCategoryId = req.params.id;
    const data = req.body;

    const updatedCategory = await FaultCategory.findByIdAndUpdate(
      faultCategoryId,
      {
        name: data.name,
        description: data.description,
        isActive: data.isActive,
      },
      {
        new: true,
        runValidators: true,
      }
    );

    if (!updatedCategory) {
      return res.json({
        success: false,
        message: "Ariza Kategorisi Bulunamadi!",
      });
    }

    res.json({
      success: true,
      message: "Ariza Kategorisi Basariyla Guncellendi!",
      data: updatedCategory,
    });
  } catch (error) {
    res.json({
      success: false,
      message: "Ariza Kategorisi Guncellenemedi!",
      err: error.message,
    });
  }
};
