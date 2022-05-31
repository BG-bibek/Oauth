import { getUserDetails, createUser } from "../service/oauthService";
import { Request, Response } from "express";

async function sucessResponse(res: Response, data: String) {
    return res.status(200).send(data);
}

async function errorResponse(res: Response, err: any) {
    return res.status(err.statusCode || 400).send({
        code: err.statusCode,
        message: err.message || err.msg
    });
}
async function login(req: Request, res: Response) {

    try {
        const access_token = req.body.token;
        console.log(access_token);
        const UserData = await getUserDetails(access_token);
        const data = await createUser(UserData);
        res.status(200).send(data);
    } catch (err) {
        return errorResponse(res, err);
    }
}

export default login;

