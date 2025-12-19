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
