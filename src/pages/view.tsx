
import { useState } from "react";
import apiClient from "../utils/axios";
import {Session, ApiResponse} from "../interface/session";
import Ul from "../styles/styledUl";
import Header from "../styles/styledHeader";

const View = () => {
    const [response, setResponse] = useState<Session[]>([]);
    apiClient.get<ApiResponse>("")
            .then((response) => setResponse(response.data.Items))
            .catch((e) => {
                console.error(e);
            });
    return (
        <>
        <Header>
            <h1>Sessions</h1>
        </Header>
            <Ul>
                {response.map((item) => (
                        <li key={item.id}>
                            <div>Hostname: {item.hostname}</div>
                            <div>Players: {item.players}</div>
                            <div>Map: {item.map}</div>
                            <div>Mode: {item.mode}</div>
                        </li>
                    ))
                }
            </Ul>
        </>
    );
}

export default View;