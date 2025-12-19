import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import userController from "./src/controllers/userController"
import ticketController from "./src/controllers/ticketController"
import productController from "./src/controllers/productController"

dotenv.config()

const app = express()
app.use(express.json())
app.use('/user',userController);
app.use('/ticket',ticketController);
app.use('/product',productController);


const PORT = process.env.PORT || 5000
const MONGO_URI = process.env.MONGODB_URI

// MongoDB bağlantısı
mongoose.connect(MONGO_URI)
  .then(() => {
    console.log('MongoDB bağlantısı başarılı')
  })
  .catch((err) => {
    console.error('MongoDB bağlantı hatası:', err)
  })

// Server ayağa kaldırma
app.listen(PORT, () => {
  console.log(`Server ${PORT} portunda çalışıyor`)
})
