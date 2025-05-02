const express = require("express")
const app = express()
const {db,auth} = require('./firebase')
const cors = require('cors');

app.use(express.json());
app.use(cors());

app.get('/getUsers',async (req,res) => {
    
   try{ 
        var dataUsers = []
        const querySnapshot = await db.collection('users').get();
        querySnapshot.forEach(doc => {
                        
            const auth = getAuth();
            const user = auth.currentUser;

            dataUsers.add({
                uidUser: doc.id
            })
        })

       console.log("cantidad ",querySnapshot.size)
        res.json({
            message: "Datos obtenidos",
            data: querySnapshot,
            status: 200
        })
   }catch(error){
    console.log("Error al tomar los usuarios Error: ",error)
   }
})
app.listen(3000, () => {
    console.log("Puerto escuchando en 3000")
})