import axios from "axios";
import { useMutation } from "@tanstack/react-query";

interface RequestBody {
    name: string;
    phone: string;
    date: string;
    personComplainedAgainst: string;
    incidentDescription: string;
    expectedResolution: string;
}

async function registerComplaint(data: RequestBody): Promise<{ message: string }> {
    try {
        const response = await axios.post("/api/complaints/", data);
        return response.data;
    } catch {
        throw new Error("Method not implemented.");
    }
}

export function useAPI() {
    const complaint = useMutation({
        mutationFn: registerComplaint,
    });

    return {
        complaint,
    };
}
