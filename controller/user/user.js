'use strict'

const User = require('../../models/user/user');
const bcrypt = require('bcrypt-node')

function pruebas (req, res){
    res.status(200).send({message: 'mensaje de prueba'})
}

function saveUser (req, res){
    var params = req.body;
    var user = new User();

    if(params.name && params.nick && params.surname && params.email && params.pasword){
        user.name = params.name;
        user.nick = params.nick;
        user.email = params.email;
        user.image = null;
        user.region = params.region;
        user.comuna = params.comuna;
        user.desctipcion = params.desctipcion;
        user.role = 'ROLE_USER '

        bcrypt.hash(params.pasword, null,null, (err, hash) =>{
            user.pasword = hash;
            user.save((error, userStored)=>{
                if(error) return res.status(500).send({message: 'Error al guardar el usuario'})
                if(userStored){
                    res.status(200).send({user: userStored})
                }else{
                     res.status(404).send({message: 'No se ha registrado el usuarios'})
                }
            });
        });

   
    }else{
        res.status(200).send({ message:'Debe ingresar todos los campos requeridos'})
    }

}

module.exports = {
    pruebas,
    saveUser
}