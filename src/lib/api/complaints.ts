import axios from "axios";

interface RequestBody {
    name: string;
    phone: string;
    date: string;
    personComplainedAgainst: string;
    incidentDescription: string;
    expectedResolution: string;
}

interface GetComplaintResponseBody {
    id: string;
    name: string;
    phone: string;
    date: string;
    personComplainedAgainst: string;
    incidentDescription: string;
    expectedResolution: string;
    createdAt: string;
}

export async function registerComplaint(data: RequestBody): Promise<{ message: string }> {
    try {
        const response = await axios.post("/api/complaints/", data);
        return response.data;
    } catch {
        throw new Error("Method not implemented.");
    }
}

export async function getComplaints(): Promise<GetComplaintResponseBody[]> {
    try {
        const response = await axios.get("/api/complaints/");
        return response.data;
    } catch {
        throw new Error("Method not implemented.");
    }
}
