import http from 'k6/http';
import { check, sleep } from 'k6';

export const options = {
    stages: [
        { duration: '30s', target: 500 },
        { duration: '1m30s', target: 1000 },
        { duration: '20s', target: 0 },
    ],
};

export default function () {
    const params = {
        headers: {
            'Content-Type': 'application/json',
        },
    };
    const payload = JSON.stringify({ "username": `${Math.random()}@test.com`, "password": "123456", "country": "" })
    const res = http.get('https://marciodias.dashboard.u2sales.com.br/en/signin', payload, params);
    check(res, { 'status was 200': (r) => r.status == 200 });
    sleep(1);
}

