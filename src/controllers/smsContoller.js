import SmsLog from "../models/smsLog";

export const sendSms = async (phone, message) => {
  try {
    const smsCreate = new SmsLog({
      phone: phone,
      message: message,
      user_id: 1,
    });
    return { success: true, message: "SMS gönderildi" };
  } catch (error) {
    console.error("SMS gönderilemedi", error);
    return { success: false, message: "SMS gönderilemedi", err: error.message };
  }
};
