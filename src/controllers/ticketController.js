import Ticket from "../models/ticket";

// Yeni Ticket Ekle
export const store = async (req, res) => {
  try {
    let data = req.body;

    let newTicket = new Ticket({
      name: data.name,
      description: data.description,
    });
    await newTicket.save();

    res.json({
      success: true,
      message: "Yeni Etiket Başarıyla Oluşturuldu!",
    });

  } catch (error) {
    res.json({
      success: false,
      message: "Yeni Ticket Eklenemedi!",
      err: error,
    });
  }
};
// Ticketleri Listele

// Ticket Sil

// Ticket Aktiflik Durumunu Değiştir
