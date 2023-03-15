const express = require('express');
const path = require('path');
const hbs = require('hbs')
 //const geocode = require('./utils/forecast')
// const forecast = require('utils/forecast')

//console.log(__dirname)
const publicPathDirectory = path.join(__dirname,'public')

const viewPath = path.join(__dirname,'/templates/views')
const partialsPath = path.join(__dirname,'/templates/partials')
const app = express(); 
app.use(express.static(publicPathDirectory))
 
hbs.registerPartials(partialsPath)

app.set('view engine', 'hbs');
app.set('views',viewPath)
app.get('/index',(req,res)=>{

    res.render('index',{
        title:'My Dynamic Page 123',
        name : 'Praveen',
        footer:'Footer Goes here'
    })
}
)

app.get('/about',(req,res)=>{
    res.render('about',{
        title:"About me",
        footer:'Footer Goes here'
    })

})

app.get('/help/*',(req,res)=>{
     res.render('404',{
        message:"My message goes here",
        title: "Help Menu",
        errorMessage:"Help artical page not found",
        footer:'Footer Goes here'
     })
})
app.get('/products',(req,res) =>{
    if(!req.query.search){
        res.send('You must send query string')
    }
     res.send({
        products:[]
     })

})

// app.get('*',(req,res)=>{
//    // res.send("Page Not Found - 404")
//    res.render('404',{
//     errorMessage:"Page not found"

//    })

// })
    
 




// app.get('',(req,res)=>{
//     res.send('<h1>Hello Express</h1>')

// })

// app.get('/help',(req,res)=>{
//     res.send([{
//         name:'praveen'
        
//     },
//     {
//         name:'Sia'
//     },
// {
//     name:'saanvi'
// },
// {
//     name: 'sujaya'
// }
// ]
    
//     )

// })

// app.get('/about',(req,res)=>{
//     res.send("<h1>About page</h1>")
// })

app.get('/weather',(req,res)=>{

    // if(!req.query.address){
    //     return res.send([{error:'Address to be displayed'}])
    // } else {
        
        res.send([{location:'india' },{forecast:"Raining" } ,{address:req.query.address}])

    //   geocode(req.query.address, (error, latitude,longitude,location) => {
    //     if(error){
    //         return res.send({error})
    //     }
      
    // })

    // forecast(req.query.address,(latitude,longitude,location)=>{
    //     if(error){
    //         return res.send({error})
    //     }

    //     res.send({
    //         forcast:forcastData,
    //         location,
    //         address:req.query.address
    //     })


    })


  

   

 




app.listen(3000,()=>{
    console.log('Server is up and running!')

})

