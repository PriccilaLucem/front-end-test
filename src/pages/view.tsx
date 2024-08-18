
import { useState } from "react";
import apiClient from "../utils/axios";
import {Session, ApiResponse} from "../interface/session";

const View = () => {
    const [response, setResponse] = useState<Session[]>([]);
    apiClient.get<ApiResponse>("")
            .then((response) => setResponse(response.data.Items))
            .catch((e) => {
                console.error(e);
            });
    return (
        <>
            <ul>
                {response.map((item) => (
                        <li key={item.id}>
                            <strong>Hostname:</strong> {item.hostname}<br />
                            <strong>Players:</strong> {item.players}<br />
                            <strong>Map:</strong> {item.map}<br />
                            <strong>Mode:</strong> {item.mode}
                        </li>
                    ))
                }
            </ul>
        </>
    );
}

export default View;