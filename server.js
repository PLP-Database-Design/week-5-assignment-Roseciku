const express = require('express')
const app =express()
const mysql = require('mysql2')
const dotenv = require('dotenv');


dotenv.config();

const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
})

db.connect((err)=>{
    if(err){
        return console.log('Error connecting to the database:', err)
    }
    console.log('Successfully connected to mysql:', db.threadId)
})

// question 1

app.get('', (req, res)=> {
  
    const getPatients = "SELECT patient_id, first_name, last_name, date_of_birth FROM patients"
    db.query(getPatients, (err,data) =>{
        if(err){
            return res.status(400).send('Failed to get patients', err)
        }
        res.status(200).send(data)
    })
    
    })

//question 2

    app.get('',(req, res)=>{

        const getProvider = "SELECT first_name, last_name, provider_specialty FROM providers"
        db.query(getProvider, (err,data) =>{
            if(err){
                return res.status(400).send('Failed to get providers', err)
            }
            res.status(200).send(data)
    })


})

//Question 3

app.get('',(req, res)=>{
    const getPatientFirstName = "SELECT first_name FROM patients"
    db.query(getPatientFirstName, (err,data) =>{
        if(err){
            return res.status(400).send('Failed to get patient first name', err)
        }
        res.status(200).send(data)
})


})

//Question 4

    app.get('',(req, res)=>{
        const getProviderSpecialty = "SELECT first_name, last_name, provider_specialty FROM providers"
        db.query(getProviderSpecialty, (err,data) =>{
            if(err){
                return res.status(400).send('Failed to get providers', err)
            }
            res.status(200).send(data)
    })
})

app.listen(3300,()=>{
    console.log('Server is running on port 3300...')
})