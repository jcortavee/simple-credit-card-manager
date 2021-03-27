import { HttpHeaders } from "@angular/common/http";

export const Config = {
    BASEURL: 'http://localhost:8080/CCManager/api',
    httpOptions: {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    },
};