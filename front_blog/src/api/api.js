const API_BASE_URL = 'http://localhost:3000/api';

const customFetch = async (url, options = {}) => {
    const response = await fetch(`${API_BASE_URL}${url}`, options);
    if (!response.ok) {
        throw new Error('Network response was not ok'); // Строка 6
    }
    return response.json();
};

export const getUsers = () => customFetch('/users');
export const getUsersById = (id) => customFetch(`/users/${id}`);
export const createUser = async (user) => {
    const response = await fetch(`http://localhost:3000/api/users`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8',
        },
        body: JSON.stringify(user),
    });
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    return response.json();
};
export const updateUser = (id, user) => customFetch(`/users/${id}`, {
    method: 'PUT',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(user),
});
export const deleteUser = (id) => customFetch(`/users/${id}`, {
    method: 'DELETE',
});