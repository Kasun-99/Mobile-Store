const Payments = require('../models/paymentModel')
const Users = require('../models/userModel')
const Products = require('../models/productModel')


const paymentCtrl = {
    getPayments: async(req, res) =>{
        try {
            const payments = await Payments.find()
            res.json(payments)
        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    },
    createPayment: async(req, res) => {
        try {
            const user = await Users.findById(req.user.id).select('name email')
            if(!user) return res.status(400).json({msg: "User does not exist."})

            const {cart, paymentID, address} = req.body;

            const {_id, name, email} = user;

            const newPayment = new Payments({
                user_id: _id, name, email, cart, paymentID, address
            })

            cart.filter(item => {
                return sold(item._id, item.quantity, item.sold)
            })

            cart.filter(item => {
                return qty(item._id, item.quantity, item.stock)
            })
            await newPayment.save()
            res.json({msg: "Payment Succes!"})
            
        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    }
}

const sold = async (id, quantity, oldSold) =>{
    await Products.findOneAndUpdate({_id: id}, {
        sold: quantity + oldSold
    })
}

const qty = async (id,quantity,stock) =>{
    const min = stock - quantity
    console.log(min)
    await Products.findOneAndUpdate({_id:id}, {
        stock: min
    })
    // await Payments.findOneAndUpdate({_id:id}, {
    //     cart.qty: min
    // })
}
module.exports = paymentCtrl
