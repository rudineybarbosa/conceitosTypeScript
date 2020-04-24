interface TechObject{
  title: string,
  experience: number
}

interface CreateUser{
  name?: string,
  email: string, 
  password: string,
  techs: Array<string | TechObject>,
  arrayNumerosQualquer: number[]
}

export default function creatUser({name, email, password}: CreateUser){

  const user = {
    name,
    email,
    password
  }

  return user;

}