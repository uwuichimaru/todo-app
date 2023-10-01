const {prisma} = require("../prisma/prisma-client")
const jwt = require('jsonwebtoken');

const addTask = async (req,res) => {
    try{
        const {description, type, deadline, notification} = req.body;
        const token = req.headers.authorization?.split(" ")[1];
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        if(!description || !type) return res.status(400).json({message: 'Не все поля были заполнены'});

        const tasks = await prisma.task.create({
            data: {
                description,
                type,
                userId: decoded.id,
                deadline: deadline,
                notification: notification
            }
        })
        
        if(tasks) {
            res.status(201).json({
                id: tasks.id,
                description: tasks.description,
                ready: tasks.ready,
                userId: tasks.userId
            })
        }
    }
    catch(err) {
        console.log(err)
        return res.status(500).json({message: "Что-то пошло не так", err})
    }

}



const getAllTasks = async (req,res) => {
    try{
        const tasks = await prisma.task.findMany();
        return res.status(200).json(tasks)
    }
    catch(err) {
        return res.status(500).json({message: 'Что-то пошло не так', err})
    }
}
const getImportantTasks = async (req,res) => {
    try{
        const tasks = await prisma.task.findMany({
            where: {
                type: "FAVORITE"
            }
        })
        return res.status(200).json(tasks)
    }
    catch(err) {
        return res.status(500).json({message: "Что-то пошло не так", err})
    }
}
const getMyDayTasks = async (req,res) => {
    try{
        const tasks = await prisma.task.findMany({
            where: {
                type: "MYDAY"
            }
        })
        return res.status(200).json(tasks)
    }
    catch(err) {
        return res.status(500).json({message: "Что-то пошло не так", err})
    }
}
const getPlannedTasks = async (req,res) => {
    try{
        const tasks = await prisma.task.findMany({
            where: {
                type: "PLANNED"
            }
        })
        return res.status(200).json(tasks)
    }
    catch(err) {
        return res.status(500).json({message: "Что-то пошло не так", err})
    }
}

const updateType = async(req, res) => {
    try{
        const {taskId, type} = req.body;

        if(!taskId || !type) 
            return res.status(400).json({message: 'Заполните необходимые поля'});


        const tasks = await prisma.task.update({
            where: {id: taskId},
            data: {type: type}
        })

        return res.status(201).json(tasks);
    }
    catch(err) {
        res.status(500).json({message: 'Что-то пошло не так'})
    }
}

module.exports = {
    addTask,
    getAllTasks,
    getImportantTasks,
    getMyDayTasks,
    getPlannedTasks,
    updateType
}