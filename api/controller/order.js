const Order = require("../models/Order");


const createOrder = async(req,res)=>{
    try {
        const newOrder = new Order(req.body);
        const savedOrder = await newOrder.save();
        res.status(200).json(savedOrder)
    } catch (error) {
        res.status(500).json(error)
    }
}

const updateOrder = async(req,res)=>{
    try {
        const updatedOrder = await Order.findByIdAndUpdate(req.params.orderId,{
            $set:req.body
        },{new:true});

        res.status(200).json(updatedOrder)
    } catch (error) {
        res.status(500).json(error)
    }
}

const deleteOrder = async(req,res)=>{
    try {
        await Order.findByIdAndDelete(req.params.orderId);
        res.status(200).json("Your order has been Deleted Sucessfully!");
    } catch (error) {
        res.status(500).json(error)
    }
}


const getUserOrder = async(req,res)=>{
    try {
        const userOrders = await Order.find({
            userId:req.params.userId
        })
        res.status(200).json(userOrders)
    } catch (error) {
        res.status(500).json(error)
    }
}

const getAllOrders = async(req,res)=>{
    try {
        const Orders = await Order.find();
        res.status(200).json(Orders)
    } catch (error) {
        res.status(500).json(error)
    }
}

const getIncome = async(req,res)=>{
    const productId = req.query.pid
    const date = new Date() 
    const lastMonth = new Date(date.setMonth(date.getMonth()-1));
    const previousMonth = new Date(new Date().setMonth(lastMonth.getMonth()-1));
    try {
        const income =await Order.aggregate([
            {
               $match: {
                  createdAt: { $gte: previousMonth },
                  ...(productId && {
                    products: { $elemMatch: { productId } },
                  }),
                },
              },
            {$project:{
                month:{$month:"$createdAt"},
                sales:"$amount"
            }},
            {$group:{
                _id:"$month",
                income:{$sum:"$sales"}
            }}
        ])
        
        res.status(200).json(income)
    } catch (error) {
        res.status(500).json(error)
    }
}

module.exports = {createOrder, updateOrder, deleteOrder, getUserOrder, getAllOrders, getIncome}