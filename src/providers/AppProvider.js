import axios from 'axios';

const axiosAppProvider = axios.create({
    baseURL: "https://app.futurelegis.com.br/api"
});
axiosAppProvider.interceptors.response.use(
    (response) => {
        return new Promise(async (resolve, reject) => {
            resolve(response);
        });
    },
    (err) => {
        return new Promise(async (resolve, reject) => {
            reject(err)
        });
    }
);

const config = {
    headers: {
        "Content-Type": "application/json"
    }
}

export function listEmpresa(parameters) {

    let v_CurrentPage = 1
    if (parameters && parameters.page && parameters.page.current) {
        v_CurrentPage = parameters.page.current
    }

    return axiosAppProvider.post('/company/listCompanies?page=' + v_CurrentPage, parameters, config);
}
