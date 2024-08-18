
import apiClient from "../utils/axios";
const View = () => {
    apiClient.get("").then((response) => console.log(response.data)).catch(e => console.log(e));

    return (
        <>
            <p>Está funfando</p>
        </>
    )
}

export default View;