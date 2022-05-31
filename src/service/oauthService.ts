import axios from "axios";
import UserDto from '../dto/userDto';
import { AppDataSource } from "../data-source";
import { User } from "../entity/User";
async function getUserDetails(access_token: string) {
    try {
        const url = 'https://www.googleapis.com/oauth2/v2/userinfo'
        const response = await axios({
            url,
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${access_token}`
            }
        })
        const userInfo = response.data
        return userInfo

    } catch (e) {
        console.log(e);
        throw e;
    }
}

async function createUser(payload: UserDto) {
    try {
        const existUser = await AppDataSource.getRepository(User).findOne({
            where: {
                email: payload.email
            }
        })
        console.log(existUser);
        if (!existUser) {
            const user = new User();
            user.name = payload.name;
            user.email = payload.email;
            user.family_name = payload.family_name;
            await AppDataSource.getRepository(User).save(user);
            return "User Created Successfully";
        }
        return " Access token.";
    } catch (e) {
        console.log(e);
        throw e;
    }
}

export {
    getUserDetails,
    createUser
}