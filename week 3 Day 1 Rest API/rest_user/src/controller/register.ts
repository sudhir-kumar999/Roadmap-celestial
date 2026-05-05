import { response, type Request, type Response } from "express";
import fs from "fs";
import bcrypt from "bcrypt"

interface reqData{
  name:string,
  age:number,
  email:string,
  password:string,
  place:string,
  city:string
}
interface useParams{
  mail:string
}
interface password{
  password:string
}

export const getData = (req: Request, res: Response) => {
  try {
    let allData:reqData[]=[]
    fs.readFile("/Users/sudhirkumar/Roadmap-celestial/week 3 Day 1 Rest API/rest_user/data.json","utf-8",(err,data:string)=>{
      if(err){
        console.log(err)
      }
      if(data){
        let parsed=JSON.parse(data)
        allData.push(parsed)
        return res.json({
          success:true,
          message:"",
          data:parsed
        })
      }
      return res.json({
        success:false,
        message:"no user found"
      })

    })
    
  } catch (error) {}
};

export const postData = async(req: Request, res: Response) => {
  try {
    const bodyData:reqData = req.body;
    const {password}:password = bodyData
    console.log(password)
    // console.log(bodyData)
    fs.readFile(
      "/Users/sudhirkumar/Roadmap-celestial/week 3 Day 1 Rest API/rest_user/data.json",
      "utf-8",
      async(err, data:string) => {
        if (err) {
          console.log(err);
        }
        let readData:reqData[]= [];
        // console.log(data)
        if (data && data.length>0) {
          readData = JSON.parse(data);
          // console.log(readData);
          let duplicate:boolean = readData.some(
            (ele:reqData) => ele.email == bodyData.email,
          );
          if (duplicate) {
            return res.json({
              success: false,
              message: "give unique email",
            });
          }
          const strPassword=password.toString()
          const hashed=await bcrypt.hash(strPassword,10)
          console.log(hashed)
          bodyData.password=hashed
          readData.push(bodyData);

          fs.writeFile(
            "/Users/sudhirkumar/Roadmap-celestial/week 3 Day 1 Rest API/rest_user/data.json",
            JSON.stringify(readData),
            (err) => {
              if (err) {
                console.log(err);
              }
              return res.json({
                success: true,
                message: "data added first",
              });
            },
          );
        } else {
          const strPassword=password.toString()
          const hashed=await bcrypt.hash(strPassword,10)
          bodyData.password=hashed

          readData.push(bodyData);

          fs.writeFile(
            "/Users/sudhirkumar/Roadmap-celestial/week 3 Day 1 Rest API/rest_user/data.json",
            JSON.stringify(readData),
            (err) => {
              if (err) {
                console.log(err);
              }
              return res.json({
                success: true,
                message: "data added first",
              });
            },
          );
        }
      },
    );
  } catch (error) {
    console.log(error);
  }
};

export const updateData=async(req:Request,res:Response)=>{
    try {
      let resData=[]
      const bodyData=req.body
      // console.log(bodyData)
      const mail:string=String(req.params.email)
      console.log(mail)
      fs.readFile("/Users/sudhirkumar/Roadmap-celestial/week 3 Day 1 Rest API/rest_user/data.json","utf-8",(err,data)=>{
        if(err){
          console.log(err)
        }
        if(data){
          resData=JSON.parse(data)
          // console.log(resData)

          let item=resData.find((ele:reqData)=>ele.email==mail)
          console.log("items",item)
          if(item){
          item={...item,...bodyData}
          console.log(item)
        return res.json({
        success:true,
        message:"data updated with your email"
      })
    }
    return res.json({
        success:false,
        message:"no data found"
      })
        
    }
      return res.json({
        success:false,
        message:"no data found"
      })

      })
      
      

    } catch (error) {
      
    }
}

export const deleteData=(req:Request ,res:Response)=>{
  try {
    const mail:string=String(req.params.email);
  console.log(mail)
  // let jsonData:reqData[]=[]
  fs.readFile("/Users/sudhirkumar/Roadmap-celestial/week 3 Day 1 Rest API/rest_user/data.json","utf-8",(err,data)=>{
    if(err){
      console.log(err)
    }
    const result=JSON.parse(data)
    // console.log(result)
    let duplicate=result.filter((ele:reqData)=>ele.email!=mail)
    console.log(duplicate)
    fs.writeFile("/Users/sudhirkumar/Roadmap-celestial/week 3 Day 1 Rest API/rest_user/data.json",JSON.stringify(duplicate),(err)=>{
      if(err){
        console.log(err)
      }
    })
    return res.json({
      success:true,
      message:"data deleted",
      
    })
  })
  } catch (error) {
    console.log(error)
  }
}