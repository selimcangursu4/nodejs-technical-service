import express from 'express'
import { store,fetch } from '../controllers/userController.js'
const router = express.Router()

// Yeni kullanıcı ekleme
router.post('/store', store)
// Tüm Kullanıcıları Listeleme
router.get('/fetch', fetch)
// Seçili Kullanıcı Detaylarını Getir

// Kullanıcı Bilgilerini Güncelle

// Kullanıcıyı Sil

export default router