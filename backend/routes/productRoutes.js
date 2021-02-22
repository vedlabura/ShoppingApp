import express from 'express'
const router = express.Router()
import products from '../data/products.js'

// @desc    Fetch all products
// @route   GET /api/products
// @access  Public
router.get('/', (req, res) => {
  res.json(products)
})

// @desc    Fetch single product
// @route   GET /api/products/:id
// @access  Public
router.get('/:id', (req, res) => {
  const product = products.find((p) => p._id === req.params.id)
  res.json(product)
})

export default router
