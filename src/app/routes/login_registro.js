//Rutas
const bcryptjs = require('bcryptjs');
const connection = require('../../config/db');

module.exports = app => {
   app.get('/', (req,res) => {
        res.render('../views/index.ejs');
    })

    app.get('/login', (req,res) => {
        res.render('../views/login.ejs');
    })

    app.get('/register', (req,res) => {
        res.render('../views/register.ejs');
    })

    app.get('/canasta', (req,res) => {
        res.render('../views/canasta.ejs');
    })

    //Solicitudes POST en el registro
    app.post("/register", async (req, res) => {
        const { correo,nombre,celular,comuna,direccion,nacimiento,pass} = req.body;
        console.log(req.body);
        let passwordHaash = await bcryptjs.hash(pass, 8);
        connection.query("INSERT INTO users SET ?", {
            correo: correo,
            nombre:nombre,
            celular: celular,
            comuna: comuna,
            direccion: direccion,
            nacimiento:nacimiento,
            pass:passwordHaash,
        }, async(error, results) => {
            if(error){
                console.log(error);
            } else {
                res.render('../views/register.ejs', {
                    alert:true,
                    alertTitle:'Registration',
                    alertMessage:'Successful Registration',
                    alertIcon:'success',
                    showConfirmButton:false,
                    timer:1500,
                    ruta:''
                })
            }
        })
    })


}

