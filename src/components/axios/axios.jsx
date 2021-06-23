import React from 'react'
import instance from './ai'

function AxiosApp() {
//https://reqres.in/api/users
    async function axiosHandler(){
        
        try{
            const res=await instance()
            console.log(res.data)
        }catch(e){
            console.log(e.message)
        }
      }
      axiosHandler()
    return (
        <div>
            
        </div>
    )
}

export default AxiosApp
