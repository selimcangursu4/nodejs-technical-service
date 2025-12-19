import express from 'express'
import { store,fetch,edit,remove } from '../controllers/ticketController.js'
const router = express.Router()

// Yeni Etiket Ekleme
router.post('/store', store)


export default router