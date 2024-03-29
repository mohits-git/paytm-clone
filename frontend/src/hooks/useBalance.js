import { useEffect, useState } from "react";
import useAuth from "../AuthProvider";
import axios from "axios";

export default function useBalance() {
    const [balance, setBalance] = useState();
    const { user } = useAuth();

    useEffect(() => {
        try {
            const getBalance = async () => {
                const response = await axios.get('https://paytm-clone-backend-jafc.onrender.com/api/v1/account/balance', {
                    headers: {
                        "Authorization": `Bearer ${user}`
                    },
                });
                setBalance(response.data.balance);
            }
            getBalance();
        }
        catch (err) {
            console.log(err.message);
        }
    });

    return balance;
}
