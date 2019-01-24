import http from "k6/http";
import { check, sleep } from "k6";

export let options = {
  // stages: [
  //   { duration: "20s", target: 100 },
  //   { duration: "1m", target: 300 },
  //   { duration: "1m", target: 300 },
  //   { duration: "20s", target: 100 },
  // ]
  vus: 100,
  duration: "5m"
};

export default function() {
  let res = http.get(`http://localhost:3001/api/products?id=${ Math.floor(Math.random() * 100) }`);
  check(res, {
    "status was 200": (r) => r.status == 200,
    "transaction time OK": (r) => r.timings.duration < 200
  });
  sleep(0.1);
};

