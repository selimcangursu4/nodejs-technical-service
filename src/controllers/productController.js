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

// Ürün Detaylarını Getir

// Ürünü Sil

// Ürün Bilgilerini Güncelle
