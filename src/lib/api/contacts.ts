import axios from "axios";

interface RequestBody {
    firstName: string;
    lastName: string;
    email: string;
    message: string;
}

interface GetContactMessageResponseBody {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    message: string;
    createdAt: string;
}

export async function registerContactMessage(data: RequestBody): Promise<{ message: string }> {
    try {
        const response = await axios.post("/api/contacts/", data);
        return response.data;
    } catch {
        throw new Error("Method not implemented.");
    }
}

export async function getContactsMessage(): Promise<GetContactMessageResponseBody[]> {
    try {
        const response = await axios.get("/api/contacts/");
        return response.data;
    } catch {
        throw new Error("Method not implemented.");
    }
}
