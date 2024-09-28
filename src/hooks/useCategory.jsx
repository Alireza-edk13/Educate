import { useQuery, useQueryClient, useMutation } from "@tanstack/react-query";
import useToast from "../Components/Toast/Toast";
import apiRequests from "../Services/config";

function useGetCategories() {
    return useQuery(
        {
            queryKey: ["Category"],
            queryFn: async () => {
                const { data } = await apiRequests.get('/category')
                return data
            },
        }
    );
}
function useAddNewCategory() {
    const showToast = useToast()
    const queryClient = useQueryClient();

    return useMutation(
        {
            mutationFn: async (values) => {
                const { data } = await apiRequests.post("/category", values);
                return data;
            },
            onSuccess: (res) => {
                console.log("Success", res);
                queryClient.invalidateQueries(["Category"]);
                showToast("Category Added successfully", "success")
            },
            onError: (error) => {
                console.log("Error !!", error);
                showToast("Category didnt add", "error")
            },

        }
    );
}
function useDeleteCategory() {
    const showToast = useToast()
    const queryClient = useQueryClient();

    return useMutation(
        {
            mutationFn: async (categoryId) => {
                const { res } = await apiRequests.delete(`/category/${categoryId}`);
                return res;

            },
            onSuccess: (res) => {
                console.log("Success", res);
                queryClient.invalidateQueries(["Category"]);
                showToast("Category Removed", "success")
            },
            onError: (error) => {
                console.log("Error !!", error);
                showToast("Category didnt Remove", "error")
            },

        }
    );
}
export {
    useGetCategories,
    useAddNewCategory,
    useDeleteCategory,
}