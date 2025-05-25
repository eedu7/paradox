import { useMutation, useQuery } from "@tanstack/react-query";
import { getComplaints, registerComplaint } from "@/lib/api/complaints";
import { getContactsMessage, registerContactMessage } from "@/lib/api/contacts";

export function useAPI() {
    const createComplaint = useMutation({
        mutationFn: registerComplaint,
    });

    const getComplaint = useQuery({
        queryFn: getComplaints,
        queryKey: ["getComplaints"],
    });

    const contact = useMutation({
        mutationFn: registerContactMessage,
    });
    const getContact = useQuery({
        queryFn: getContactsMessage,
        queryKey: ["getContact"],
    });

    return {
        createComplaint,
        getComplaint,
        contact,
        getContact,
    };
}
