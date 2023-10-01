const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken")
const {prisma} = require("../prisma/prisma-client")

const login = async (req, res) => {
    try{
        const {email, password} = req.body;

        if(!email || !password) return res.status(400).json({message: "Заполните необходимые поля"})
    
        const user = await prisma.user.findFirst({
            where: {
                email
            }
        })
    
        const isPasswordCorrect = user && (await bcrypt.compare(password, user.password));
    
        const secret = process.env.JWT_SECRET
    
        if(user && isPasswordCorrect && secret) {
            res.status(200).json({
                id: user.id,
                email: user.email,
                token: jwt.sign({id: user.id}, secret, {expiresIn: '3d'})
            })
        }
        else return res.status(400).json({message: 'Данные введены неправильно'});
    }
    catch(err) {
        return res.status(500).json({message: 'Произошла техническая ошибка: ', err})
    }
    

}

const register = async (req, res) => {
    try{
        const {lastName, firstName, patronymic, email, password } = req.body;
        if(!lastName || !firstName || !patronymic || !email || !password)
            res.status(400).json({message: "Пожалуйста, заполните необходимые поля"})
        
        const isRegistered = await prisma.user.findFirst({
            where: {
                email
            }
        })
    
        if(isRegistered) return res.status(400).json({message: "Пользователь с таким email уже существует"})
    
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);
        
        const user = await prisma.user.create({
            data: {
                lastName,
                firstName,
                patronymic,
                email,
                password: hashedPassword
            }
        })
    
    
        const secret = process.env.JWT_SECRET;
    
        if(user && secret) {
            res.status(201).json({
                id: user.id,
                lastName: user.lastName,
                firstName: user.firstName,
                patronymic: user.patronymic,
                email: user.email,
                token: jwt.sign({id: user.id}, secret, {expiresIn: '3d'})
            })
        }
        else {
            return res.status(400).json({message: 'Не удалось создать пользователя'})
        }
    }
    catch(err) {
        res.status(500).json({message: "Произошла техническая ошибка: ", err})
        console.log(err)
    }
    

}

module.exports = {
    login,
    register
}