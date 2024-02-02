import axios from "axios";
import { useEffect, useState } from "react";

export default function useUsers(query) {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        try {
            const getUsers = async () => {
                const response = await axios.get(`https://paytm-clone-backend-jafc.onrender.com/api/v1/user/bulk?filter=${query}`);
                setUsers(response.data.user);
            }
            getUsers();
        } catch (err) {
            console.log("Could not get all users :(");
        }

    }, [query])

    return users;
}
