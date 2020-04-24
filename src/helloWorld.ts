import {Request, Response} from 'express';
import createUser from './services/createUser';


export default function helloWord(request: Request, response: Response){
  
  const user = createUser(
    {
        email: 'email', 
        password: 'senha',
        techs: [
          "node", 
          'react native', 
          'react',
          {title: 'java', experience: 100}
        ],
        arrayNumerosQualquer: [11, 3, 4, 9]
    });

  console.log(user);


  return response.json({message: "HEllo World"});
}

