import { PrismaClient } from "@prisma/client";
try{
var prisma = new PrismaClient();
}
catch (err){
    console.log(err)
}
export default prisma;
