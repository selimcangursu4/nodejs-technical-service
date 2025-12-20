# Node.js Technical Service Backend

Bu proje, bir **teknik servis yönetim sistemi** için backend uygulamasıdır. Proje, kullanıcıların giriş yapmasını, servis kayıtlarını oluşturmasını, güncellemesini, silmesini ve servis aktivitelerini takip etmesini sağlayan API endpointlerini içerir. Tüm işlemler **JWT ile korunmuş rotalar** üzerinden yapılmaktadır.

## Özellikler

- Kullanıcı yönetimi (login, kullanıcı doğrulama)
- Servis kaydı oluşturma, listeleme, detayları görüntüleme
- Servis kayıt aktivitelerinin tutulması (cihaz işleme alındı, kontrole alındı, kontrol edildi, teslim edildi vb.)
- Arıza kategori yönetimi (CRUD)
- JWT ile yetkilendirilmiş güvenli rotalar
- MongoDB ile veri yönetimi

## Teknolojiler

- Node.js (Express)
- MongoDB (Mongoose)
- JWT ile kimlik doğrulama
- Bcrypt ile şifreleme
- CORS ve dotenv konfigürasyonu

## Kurulum

1. Depoyu klonlayın:

```bash
git clone https://github.com/selimcangursu4/nodejs-technical-service.git


2.Proje dizinine gidin:
cd nodejs-technical-service

3.Bağımlılıkları yükleyin:
npm install

4..env dosyasını oluşturun ve aşağıdaki değerleri ekleyin:
PORT=5000
MONGODB_URI=mongodb://127.0.0.1:27017/mydatabase
JWT_SECRET=BurayaGüvenliJWTSecretKey

5.Sunucuyu başlatın:
npm start

Not: Express 5 kullanıldığı için npm start yerine node index.js veya nodemon index.js ile başlatabilirsiniz.

API Endpointleri


| Method | Endpoint    | Açıklama                           |
| ------ | ----------- | ---------------------------------- |
| POST   | /auth/login | Kullanıcı girişi ve JWT token alma |

| Method | Endpoint         | Açıklama                           |
| ------ | ---------------- | ---------------------------------- |
| POST   | /user/store      | Yeni kullanıcı ekle                |
| GET    | /user/fetch      | Tüm kullanıcıları listele          |
| GET    | /user/edit/:id   | Seçili kullanıcı detaylarını getir |
| POST   | /user/update/:id | Kullanıcı bilgilerini güncelle     |
| DELETE | /user/delete/:id | Kullanıcıyı sil                    |

| Method | Endpoint                   | Açıklama                         |
| ------ | -------------------------- | -------------------------------- |
| POST   | /fault-category/store      | Yeni arıza kategorisi ekle       |
| GET    | /fault-category/fetch      | Tüm arıza kategorilerini listele |
| POST   | /fault-category/update/:id | Arıza kategorisini güncelle      |
| DELETE | /fault-category/delete     | Arıza kategorisini sil           |

| Method | Endpoint            | Açıklama                  |
| ------ | ------------------- | ------------------------- |
| POST   | /product/store      | Yeni ürün ekle            |
| POST   | /product/fetch      | Tüm ürünleri listele      |
| GET    | /product/edit/:id   | Ürün detaylarını getir    |
| POST   | /product/update/:id | Ürün bilgilerini güncelle |
| DELETE | /product/remove/:id | Ürünü sil                 |

| Method | Endpoint                                    | Açıklama                       |
| ------ | ------------------------------------------- | ------------------------------ |
| POST   | /service/store                              | Yeni servis kaydı oluştur      |
| GET    | /service/fetch                              | Tüm servis kayıtlarını getir   |
| GET    | /service/edit/:id                           | Servis kaydı detaylarını getir |
| POST   | /service/update/:id                         | Servis kaydını güncelle        |
| DELETE | /service/delete/:id                         | Servis kaydını sil             |
| POST   | /service/create-activities/:id              | Servis aktivitesi ekle         |
| POST   | /service/process-activities/:id             | Cihazı işleme al               |
| POST   | /service/start-inspection-activities/:id    | Cihaz kontrole al              |
| POST   | /service/complete-inspection-activities/:id | Cihaz kontrol edildi           |
| POST   | /service/deliver-device-activities/:id      | Cihaz teslim edildi            |
| POST   | /service/payment-pending-activities/:id     | Ödeme bekleniyor               |
| POST   | /service/payment-cancel-activities/:id      | Ödeme iptal edildi             |
| POST   | /service/payment-complete-activities/:id    | Ödeme tamamlandı               |
| POST   | /service/waiting-sparepart-activities/:id   | Yedek parça bekleniyor         |

| Method | Endpoint      | Açıklama        |
| ------ | ------------- | --------------- |
| POST   | /sms/send-sms | Yeni SMS gönder |

| Method | Endpoint              | Açıklama                          |
| ------ | --------------------- | --------------------------------- |
| POST   | /ticket/store         | Yeni etiket ekle                  |
| GET    | /ticket/fetch         | Tüm etiketleri listele            |
| DELETE | /ticket/delete/:id    | Etiketi sil                       |
| POST   | /ticket/active-update | Etiket aktiflik durumunu güncelle |
