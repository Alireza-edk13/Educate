import { useQuery, useQueryClient, useMutation } from "@tanstack/react-query";
import useToast from "../Components/Toast/Toast";
import apiRequests from "../Services/config";
function useGetSessions() {
    return useQuery(
        {
            queryKey: ["Sessions"],
            queryFn: async () => {

                const { data } = await apiRequests.get('/courses/sessions');
                return data;
            },
        }
    );
}

function useDeleteSession() {
    const showToast = useToast()
    const queryClient = useQueryClient();

    return useMutation(
        {
            mutationFn: async (sessionId) => {
                const { data } = await apiRequests.delete(`/courses/sessions/${sessionId}`);
                return data;

            },
            onSuccess: (res) => {
                console.log("Success", res);
                queryClient.invalidateQueries(["Courses"]);
                queryClient.invalidateQueries(["Sessions"]);
                showToast("Session Remove successfully", "success")

            },
            onError: (error) => {
                console.log("Error !!", error);
                showToast("Session didnt remove", "error")
            },

        }
    );
}

function useAddNewSession() {
    const showToast = useToast()
    const queryClient = useQueryClient();

    return useMutation(
        {
            mutationFn: async (values) => {
                let formData = new FormData();
                formData.append("title", values.name);
                formData.append("time", values.time);
                formData.append("video", values.video);
                formData.append("free", values.status);

                const { data } = await apiRequests.post(`/courses/${values.courseId}/sessions`, formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }
                });
                return data;

            },
            onSuccess: (res) => {
                console.log("Success", res);
                queryClient.invalidateQueries(["Courses"]);
                showToast("Session Added successfully", "success")
            },
            onError: (error) => {
                console.log("Error !!", error);
                showToast("Session didnt Add", "error")

            },

        }
    );
}


export {
    useGetSessions,
    useDeleteSession,
    useAddNewSession,
}