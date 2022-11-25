const express = require('express')



const sql = require('mssql')


(async function appp () {
    try {
        let pool = await sql.connect(config)
        let result1 = await pool.request()
            .input('input_parameter', sql.Int, value)
            .query('select * from mytable where id = @input_parameter')
            
        console.dir(result1)
    
        // Stored procedure
        
        let result2 = await pool.request()
            .input('input_parameter', sql.Int, value)
            .output('output_parameter', sql.VarChar(50))
            .execute('procedure_name')
        
        console.dir(result2)
    } catch (err) {
        console.log(err)
    }
})()


async () => {
    try {
        await sql.connect('Server=localhost,1433;Database=database;User Id=sa;Password=reallyStrongPwd123;Encrypt=true')
        const result = await sql.query`select * from mytable where id = ${value}`
        console.dir(result)
    } catch (err) {
       console.log(err)
    }
}

sql.on('error', err => {
    // ... error handler
})


app.post('/products', async (req, res) => {

    //logic to add your product
})

app.get('/products', async (req, res) => {

    
 })
 
 app.get('/products/:id', async (req, res) => {
 
    //logic to get one product
 
 })
 
 app.post('/products/:id', async (req, res) => {
 
 
 })
 
 app.delete('/products/:id/delete', async (req, res) => {
 
    
 
 })


