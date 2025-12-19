import Product from "../models/product";
// Yeni Ürün Ekle
export const store = async (req, res) => {
  try {
    let data = req.body;

    let newProduct = new Product({
      name: data.name,
      sku: data.sku,
      barcode: data.barcode,
      category_id: data.category_id,
      brand_id: data.brand_id,
      description: data.description,
      isActive: data.isActive,
      purchasePrice: data.purchasePrice,
      salePrice: data.salePrice,
      stock: data.stock,
      minStock: data.minStock,
      warrantyPeriod: data.warrantyPeriod,
      images: data.images,
    });
    await newProduct.save();

    res.json({
      success: true,
      message: "Yeni Ürün Başarıyla Eklendi!",
    });
  } catch (error) {
    res.json({
      success: false,
      message: "Yeni Ürün Eklenemedi Hata !",
      err: error,
    });
  }
};
// Ürünleri Listele
export const fetch = async (req, res) => {
  try {
    let products = await Product.find();

    if (!products) {
      res.json({
        success: false,
        message: "Ürünler Tablosundan Ürünler Bulunamadı!",
      });
    }
    res.json({
      success: true,
      message: "Ürünler Listelendi!",
      data: products,
    });
  } catch (error) {
    res.json({
      success: false,
      message: "Ürünler Listelenemedi!",
      err: error,
    });
  }
};
// Ürün Detaylarını Getir
export const edit = async (req, res) => {
  try {
    const productId = req.params.brand_id;

    const product = await Product.findById(productId);

    if (!product) {
      res.json({
        success: false,
        message: "Ürün Bulunamadı!",
      });
    }

    res.json({
      success: true,
      message: "Ürün Detayları Bulundu",
      data: product,
    });
  } catch (error) {
    res.json({
      success: false,
      message: "Ürün Detayı Getirilemedi!",
      err: error,
    });
  }
};
// Ürünü Sil
export const remove = async (req, res) => {
  try {
    let productId = req.params.brand_id;

    await Product.findByIdAndDelete(productId);

    res.json({
      success: false,
      message: "Ürün Başarıyla Silindi",
    });
  } catch (error) {
    res.json({
      success: false,
      message: "Ürün Silinemedi Hata !",
      err: error,
    });
  }
};
// Ürün Bilgilerini Güncelle
