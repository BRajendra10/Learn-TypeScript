import axios, { AxiosResponse } from 'axios';

interface Todo {
    userId: number;
    id: number;
    title: string;
    completed: boolean
}

const fetchData = async () => {
    try {
        const response: AxiosResponse<Todo> = await axios
        .get("https://jsonplaceholder.typicode.com/photos");

        console.log("Todod", response.data)
    } catch (err: unknown) {
        if(axios.isAxiosError(err)){
            console.log(err.message)
        }
    }
}