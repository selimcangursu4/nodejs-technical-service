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
export const fetch = async (req, res) => {
  try {
    const tickets = await Ticket.find({ isActive: true });

    res.status(200).json({
      success: true,
      message: "Etiketler Listelendi",
      data: tickets
    });

  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "Etiketler Listelenemedi",
      error: error.message
    });
  }
};
// Ticket Sil

// Ticket Aktiflik Durumunu Değiştir
