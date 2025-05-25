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
        staleTime: 600000,
    });

    const contact = useMutation({
        mutationFn: registerContactMessage,
    });
    const getContact = useQuery({
        queryFn: getContactsMessage,
        queryKey: ["getContacts"],
        staleTime: 600000,
    });

    return {
        createComplaint,
        getComplaint,
        contact,
        getContact,
    };
}
