import express from 'express'
import { store,fetch,edit,remove } from '../controllers/userController.js'
const router = express.Router()

// Yeni kullanıcı ekleme
router.post('/store', store)
// Tüm Kullanıcıları Listeleme
router.get('/fetch', fetch)
// Seçili Kullanıcı Detaylarını Getir
router.get('/edit/:id', edit)
// Kullanıcı Bilgilerini Güncelle
router.post('/update/:id', edit)
// Kullanıcıyı Sil
router.delete('/delete/:id', remove)
export default router