import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import useToast from "../Components/Toast/Toast";
import apiRequests from "../Services/config";


// ========== public ==============


function useRegisterNewUser() {
    const showToast = useToast();

    return useMutation({
        mutationFn: async (newUserInfo) => {
            const { data } = await apiRequests.post('/auth/register', newUserInfo);
            return data;
        },
        onSuccess: (data) => {
            console.log("Success", data);
            const token = data.accessToken
            localStorage.setItem('user', JSON.stringify({ token }))
            showToast("Signed up successfully", "success", "/");
        },
        onError: (error) => {
            console.log("Error !!", error);
            showToast("Signed up is not successful", "error");
        },
    });
}

function useLogin() {
    const showToast = useToast();

    return useMutation({
        mutationFn: async (userInfo) => {
            const { data } = await apiRequests.post('/auth/login', userInfo);
            return data;
        },
        onSuccess: (data) => {
            console.log("Success", data);
            const token = data.accessToken
            localStorage.setItem('user', JSON.stringify({ token }))
            showToast("Signed up successfully", "success", "/");
        },
        onError: (error) => {
            console.log("Error !!", error);
            showToast("Signed up is not successful", "error");
        },
    });
}

function useGetUserInfo() {
    const localStorageData = JSON.parse(localStorage.getItem("user"));
    return useQuery({
        queryKey: ['userInfo', localStorageData],
        queryFn: async () => {
            const { data } = await apiRequests.get('/auth/me');
            return data;
        },
        enabled: !!localStorageData
    });
}

// ======= user panel =============

function useUpdateUserInfo() {
    const localStorageData = JSON.parse(localStorage.getItem("user"));
    const showToast = useToast();
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: async (newUserInfo) => {
            const { data } = await apiRequests.put('/users', newUserInfo);
            return data;
        },
        onSuccess: () => {
            showToast("Edit was successful", "success");
            queryClient.invalidateQueries(["userInfo"]);
        },
        onError: (error) => {
            console.log("Error !!", error);
            showToast("Edit was not successful", "error");
        },
    });
}

// ========  admin panel ==========

function useGetAdminPanelInfo() {
    const localStorageData = JSON.parse(localStorage.getItem("user"));
    return useQuery({
        queryKey: ['adminPanelInfo', localStorageData],
        queryFn: async () => {
            const { data } = await apiRequests.get('/infos/p-admin');
            return data;
        },
        enabled: !!localStorageData
    });
}

function useGetUsers() {
    return useQuery(
        {
            queryKey: ["Users"],
            queryFn: async () => {
                const { data } = await apiRequests.get('/users');
                return data;
            },
        }
    );
}

function useAddNewUser() {
    const showToast = useToast()
    const queryClient = useQueryClient();

    return useMutation(
        {
            mutationFn: async (newUserInfo) => {
                const { res } = await apiRequests.post('/auth/register', newUserInfo);
                return res;
            },
            onSuccess: (res) => {
                console.log("Success", res);
                queryClient.invalidateQueries(["Users"]);
                showToast("User Added successfully", "success");

            },
            onError: (error) => {
                console.log("Error !!", error);
                showToast("User was not added successfully", "error")
            },

        }
    );
}

function useUpdateUserInfoByAdmin() {
    const showToast = useToast();
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: async ({ userId, values }) => {
            const { res } = await apiRequests.put(`/users/${userId}`, values);
            return res;
        },
        onSuccess: (res) => {
            console.log(res);
            showToast("User Edited successfully", "success")
            queryClient.invalidateQueries(["Users"]);
        },
        onError: (error) => {
            console.log("Error !!", error);
            showToast("User info was not edit", "error")
        },
    });
}

function useRemoveUser() {
    const showToast = useToast()
    const queryClient = useQueryClient();

    return useMutation(
        {
            mutationFn: async (userId) => {
                const { res } = await apiRequests.delete(`/users/${userId}`);
                return res;

            },
            onSuccess: (res) => {
                console.log("Success", res);
                queryClient.invalidateQueries(["Users"]);
                showToast('User delete successfully', 'success')
            },
            onError: (error) => {
                console.log("Error !!", error);
                showToast('User was not delete successfully', 'error')
            },

        }
    );
}

function useBanUser() {
    const showToast = useToast()
    const queryClient = useQueryClient();

    return useMutation(
        {
            mutationFn: async (userId) => {
                const { res } = await apiRequests.put(`/users/ban/${userId}`);
                return res;

            },
            onSuccess: (res) => {
                console.log("Success", res);
                queryClient.invalidateQueries(["Users"]);
                showToast('User Ban successfully', 'success')
            },
            onError: (error) => {
                console.log("Error !!", error);
                showToast('User was not Ban successfully', 'error')
            },

        }
    );
}

function useChangeUserRole() {
    const showToast = useToast()
    const queryClient = useQueryClient();

    return useMutation(
        {
            mutationFn: async (reqBodyInfos) => {
                const { res } = await apiRequests.put(`/users/role`, reqBodyInfos);
                return res;
            },
            onSuccess: (res) => {
                console.log("Success", res);
                queryClient.invalidateQueries(["Users"]);
                showToast('User role changed', 'success')

            },
            onError: (error) => {
                console.log("Error !!", error);
                showToast('User role didnt changed ', 'error')
            },

        }
    );
}

export {
    useRegisterNewUser,
    useLogin,
    useGetUserInfo,
    useUpdateUserInfo,
    useGetAdminPanelInfo,
    useGetUsers,
    useAddNewUser,
    useUpdateUserInfoByAdmin,
    useRemoveUser,
    useBanUser,
    useChangeUserRole,
};
