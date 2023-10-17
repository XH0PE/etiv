const User = require("../models/user.model")
const bcrypt = require("bcrypt")
const jwt = require("../utils/jwt")

function register(req, res){

    // console.log(req.body)

    const { firstname, lastname, email, password } = req.body

    if(!email) res.status(400).send({msg: "El email es obligatorio"})
    if(!password) res.status(400).send({msg: "La contraseña es obligatoria"})

    const user = new User ({
        firstname,
        lastname,
        email: email.toLowerCase(),
        role: 'User',
        active: false,
    })

    const salt = bcrypt.genSaltSync(10)
    const hashPassword = bcrypt.hashSync(password, salt)

    user.password = hashPassword

    user.save((error, userStorage) => {
        if (error){
            res.status(400).send({msg: "Error al crear usuario"})
        } else {
            res.status(200).send(userStorage)
        }
    })    

}

function login(req, res){
    const { email, password } = req.body
    if(!email) res.status(400).send({msg: "El email es obligatorio"})
    if(!password) res.status(400).send({msg: "La contraseña es obligatoria"})

    const emailLowerCase = email.toLowerCase()

    User.findOne({email: emailLowerCase}, (error, userStore) => {
        if(error){
            res.status(500).send({msg: "Error del servidor"})
        } else
    })
}

module.exports = {
    register,
}