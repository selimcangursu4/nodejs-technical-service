import express from 'express'
import { store, fetch, edit, remove } from '../controllers/userController.js'
import { verifyToken } from '../middlewares/authMiddleware.js'

const router = express.Router()

// Yeni kullanıcı ekleme
router.post('/store', verifyToken, store)
// Tüm Kullanıcıları Listeleme
router.get('/fetch', verifyToken, fetch)
// Seçili Kullanıcı Detaylarını Getir
router.get('/edit/:id', verifyToken, edit)
// Kullanıcı Bilgilerini Güncelle
router.post('/update/:id', verifyToken, edit)
// Kullanıcıyı Sil
router.delete('/delete/:id', verifyToken, remove)

export default router
