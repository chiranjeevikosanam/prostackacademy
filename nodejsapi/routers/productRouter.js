import express from 'express';
let router=express.Router();

router.get('/', (req, res)=>{
    res.end("Seperate Router file, ...productData");
});
router.get('/refr', (req, res)=>{
    res.end("Displaying products");
});
router.get('/tv', (req, res)=>{
    res.end("Displaying TV");
});

export default router;