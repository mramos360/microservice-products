const express = require('express');
const router = express.Router();
const db = require('../models');

router.get("/", (req, res) => {
    db.products.findAll()
        .then(results => {
            const response = {
                count: results.length,
                products: results.map(result => {
                    console.log(result.id)
                    return {
                        id: result.id,
                        name: result.name,
                        createdAt: result.createdAt,
                        updatedAt: result.updatedAt
                    }
                })
            }
            res.status(200).json(response);
        })
})

router.get("/:id", (req, res) => {
    db.products.findAll({
        where: {
            id: req.params.id
        }
    }).then(results => {
        res.status(200).json(results[0]);
    })
})

router.post("/", (req, res) => {
    db.products.create({
        name: req.body.name
    }).then(result => {
        res.status(201).json({
            message: "Product created",
            createdProduct: {
                name: result.name
            }
        })
    })
})

router.patch("/:id", (req, res) => {
    db.products.update({
        name: req.body.name
    },{
        where: {
            id: req.params.id
        }
    }).then(result => {        
        if (result == 1) {
            res.status(200).json({
                message: "Product updated",
                product: {
                    id: req.params.id,
                    name: req.body.name
                }
            })
        } else {
            res.status(404).json({
                message: "Product not found"
            })
        }
    }).catch(err => {
        res.status(404).json({
            error: err
        })
    })
})



module.exports = router;