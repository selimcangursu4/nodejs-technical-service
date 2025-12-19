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
      data: tickets,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "Etiketler Listelenemedi",
      error: error.message,
    });
  }
};
// Ticket Sil
export const remove = async (req, res) => {
  try {
    const id = req.params.id;

    const ticket = await Ticket.findByIdAndDelete(id);

    if (!ticket) {
      return res.status(404).json({
        success: false,
        message: "Etiket Bulunamadi",
      });
    }

    res.status(200).json({
      success: true,
      message: "Etiket Basariyla Silindi",
      data: ticket,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "Etiket Silinemedi",
      error: error.message,
    });
  }
};
// Ticket Aktiflik Durumunu Değiştir
export const activeUpdate = async (req, res) => {
  try {
    let ticketId = req.params.id;
    let data = req.body;

    let ticket = await Ticket.findByIdAndUpdate(ticketId, {
      isActive: data.isActive,
    });

    if (!ticket) {
      res.json({
        success: false,
        message: "Etiket Bulunamadı!",
      });
    }
    res.json({
      success: true,
      message: "Etiket Durumu Başarıyla Güncellendi!",
    });
  } catch (error) {
    res.json({
      success: false,
      message: "Ticket Aktiflik Durumu Güncellenemedi!",
      err: error,
    });
  }
};
