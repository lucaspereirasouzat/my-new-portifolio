import http from 'k6/http';
import { check, sleep } from 'k6';


export const options = {
    stages: [
        { duration: '30s', target: 200 },
        { duration: '1h', target: 500 },
        { duration: '20s', target: 0 },
    ],
};

export default function () {
    const params = {
        headers: {
            'Content-Type': 'application/json',
            origin: 'https://lucas.dashboard.you2sales.com.br'
        },
    };
    const payload = JSON.stringify({ "username": `v32rv180l@mozmail.com`, "password": "Es'9fT%'p)n=p.Tf", "country": "" });
    const res = http.get('http://lucas.dashboard.you2sales.com.br', payload, params);
    check(res, { 'status was 200': (r) => r.status == 200 });
    sleep(1);
}
