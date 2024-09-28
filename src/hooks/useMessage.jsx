import { useQuery, useQueryClient, useMutation } from "@tanstack/react-query";
import useToast from "../Components/Toast/Toast";
import apiRequests from "../Services/config";

function useGetMessage() {
    return useQuery(
        {
            queryKey: ["Messages"],
            queryFn: async () => {
                const { data } = await apiRequests.get("/contact")
                return data
            },
        }
    );
}


function useDeleteMessage() {
    const showToast = useToast()
    const queryClient = useQueryClient();

    return useMutation(
        {
            mutationFn: async (messageId) => {
                const { res } = await apiRequests.delete(`/contact/${messageId}`)
                return res

            },
            onSuccess: (res) => {
                console.log("Success", res);
                queryClient.invalidateQueries(["Messages"]);
                showToast("Message Removed !", "success")
            },
            onError: (error) => {
                console.log("Error !!", error);
                showToast("Message didnt Remove", "error")
            },

        }
    );
}

// contact

function useSendMessage() {
    const showToast = useToast()
    const queryClient = useQueryClient();

    return useMutation(
        {
            mutationFn: async (values) => {

                const { res } = await apiRequests.post('/contact', values);
                return res ;

            },
            onSuccess: (res) => {
                console.log("Success", res);
                queryClient.invalidateQueries(["Messages"]);
                showToast("Your Message was Sent", "success", "/")

            },
            onError: (error) => {
                console.log("Error !!", error);
                showToast("Your Message wasnt Sent", "error")
            },

        }
    );
}


export {
    useGetMessage,
    useDeleteMessage,
    useSendMessage
}