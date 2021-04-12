import express from 'express';
const router=express.Router();

router.get('/', (req, res)=>{
    res.end("user-root");
});
router.post('/', (req, res)=>{
    res.end("......................,Post..........");
});
router.post('/', (req, res)=>{
    res.end("bad developer");
});
router.post('/login', (req, res)=>{
    res.end("Login successfully");
});
router.post('/registration', (req, res)=>{
    res.end("Registration successfully");
});

export default router;