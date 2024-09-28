import { useQuery, useQueryClient, useMutation } from "@tanstack/react-query";
import useToast from "../Components/Toast/Toast";
import apiRequests from "../Services/config";

// ========== public ==============


function useGetCourses() {
    return useQuery(
        {
            queryKey: ["Courses"],
            queryFn: async () => {
                const { data } = await apiRequests.get('/courses');
                return data;
            },
        }
    );
}
function useGetCourseDetails(courseName) {
    return useQuery(
        {
            queryKey: ["CourseDetails", courseName],
            queryFn: async (query) => {
                const { data } = await apiRequests.get(`/courses/${query.queryKey[1]}`)
                return data
            },
        }
    );
}
function useRegisterToCourse() {
    const showToast = useToast()
    const queryClient = useQueryClient();

    return useMutation(
        {
            mutationFn: async (course) => {
                const { data } = await apiRequests.post(`/courses/${course._id}/register`, { price: course.price });
                return data;

            },
            onSuccess: (res) => {
                console.log("Success", res);
                queryClient.invalidateQueries(["CourseDetails"]);
                showToast("Course Added successfully", "success")
            },
            onError: (error) => {
                console.log("Error !!", error);
                showToast("Course didnt Add", "error")
            },

        }
    );
}

// ========== user panel ============

function useGetUserCourses() {
    return useQuery(
        {
            queryKey: ["userCourses"],
            queryFn: async () => {
                const { data } = await apiRequests.get(`/orders`);
                return data;
            },
        }
    );
}
function useGetUserOrders() {
    return useQuery(
        {
            queryKey: ["userCourses"],
            queryFn: async () => {
                const { data } = await apiRequests.get(`/orders`);
                return data;
            },
        }
    );
}

// ========= admin panel ============

function useDeleteCourse() {
    const showToast = useToast()
    const queryClient = useQueryClient();

    return useMutation(
        {
            mutationFn: async (courseId) => {
                const { data } = await apiRequests.delete(`/courses/${courseId}`);
                return data;
            },
            onSuccess: (res) => {
                console.log("Success", res);
                queryClient.invalidateQueries(["Courses"]);
                showToast("Course Remove successfully", "success")
            },
            onError: (error) => {
                console.log("Error !!", error);
                showToast("Course didnt Remove", "error")
            },

        }
    );
}
function useAddNewCourse() {
    const showToast = useToast()
    const queryClient = useQueryClient();

    return useMutation(
        {
            mutationFn: async (values) => {

                let formData = new FormData();
                formData.append('name', values.name);
                formData.append('shortName', values.shortName);
                formData.append('description', values.desc);
                formData.append('categoryID', values.categoryId);
                formData.append('price', values.price);
                formData.append('support', values.support);
                formData.append('status', values.status);
                formData.append('cover', values.cover);

                const { data } = await apiRequests.post(`/courses`, formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                    },
                });

                return data;

            },
            onSuccess: (res) => {
                console.log("Success", res);
                queryClient.invalidateQueries(["Courses"]);
                showToast("Course Added successfully", "success")
            },
            onError: (error) => {
                console.log("Error !!", error);
                showToast("Course didnt add", "error")
            },

        }
    );
}


export {
    useGetCourses,
    useGetCourseDetails,
    useRegisterToCourse,
    useGetUserCourses,
    useGetUserOrders,
    useDeleteCourse,
    useAddNewCourse,
}