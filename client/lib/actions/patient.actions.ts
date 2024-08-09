import {users} from "../appwrite.config";
import {Query,ID} from "node-appwrite";

export const createUser=async (user:CreateUserParams)=>{
    try {
        const newUser= await users.create(
            ID.unique(),
            user.email,
            user.phone,
            user.email,
        );
        
    } catch (error: any) {
        if (error && error?.code===409 ){
            const documents=await users.list(
            [
                Query.equal('email',[user.email])
            ]);

            return documents?.users[0]
        }
    }

};
