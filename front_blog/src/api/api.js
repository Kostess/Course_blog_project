const API_BASE_URL = 'http://localhost:3000/api';

const customFetch = async (url, options = {}) => {
    const token = localStorage.getItem('token');
    if (token) {
        options.headers = {
            ...options.headers,
            'Authorization': `Bearer ${token}`,
        };
    }
    const response = await fetch(`${API_BASE_URL}${url}`, options);
    console.log(`Запрос к ${url} завершен с кодом ${response.status}`);
    if (!response.ok) {
        throw new Error(`Error ${response.status}`);
    }
    if (response.status === 204) {
        return {};
    }
    return response.json();
};

export const getUsers = () => customFetch('/users-get');
export const getUserAndProfile = (id) => customFetch(`/user/${id}`);
export const createUser = (user) => customFetch(`/register`, {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json;charset=utf-8',
    },
    body: JSON.stringify(user),
});
export const updateUser = (id, formData) => {
    return customFetch(`/user-update/${id}`, {
        method: 'PUT',
        body: formData,
    })
};
export const deleteUser = (id) => customFetch(`/users-delete/${id}`, {
    method: 'DELETE',
});

export const loginUser = async (credentials) => {
    const response = await customFetch('/user-login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(credentials),
    });
    if (response.token) {
        localStorage.setItem('token', response.token);
    }
    return response;
};

export const confirmRegistration = async (token) => {
    return await customFetch('/confirm', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({token}),
    });
};

// Новые функции для работы с сообщениями
export const submitForm = (formData) => {
    return customFetch('/admin-message', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
    });
}

export const getMessages = () => customFetch('/admin-messages');

export const sendReply = (replyData) => customFetch('/send-message', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(replyData),
});