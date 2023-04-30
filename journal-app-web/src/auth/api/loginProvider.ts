import { ILoginRequest, IUser } from "../interfaces";

export const apiLoginProvider = async (login: ILoginRequest) : Promise<IUser> => {
    try {
        const url = 'http://localhost:3000/api/v1/auth/login';
        const body = login;
        const response = await fetch(url, {
            method: 'POST',
            headers: { 
                'Content-Type': 'application/json' ,
                //  cors
                'Access-Control-Allow-Origin': '*',
            },
            body: JSON.stringify(body),
        });
        const data = await response.json() as IUser;

        if (!response.ok) {
            throw new Error(data.message || 'Register error');
        } else {
            data.message = null;
        }

        return data;
    }
    catch (error: any ){
        return {
            id: '',
            displayName: '',
            email: '',
            message: String(error.message || 'Register error'),
        }
    }
    
};