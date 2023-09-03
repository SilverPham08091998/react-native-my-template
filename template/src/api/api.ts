import { store } from "@/core";
import axios from "axios";
import { API, DOMAIN } from "./urlAPI";

const CODE_UNAUTHORIZED = 401;
const CODE_SERVICE_UNAVAILABLE = 503;

interface configs {
  domain?: string;
  url?: string;
  authorization?: string;
  header?: object;
  params?: any;
  method: "POST" | "GET" | "PUT" | "DELETE";
  options?: {
    json?: boolean;
    formData?: boolean;
    formUrlEncoded?: boolean;
  };
  timeout?: number;
}

export default class UtilApi {
  static request = (configs: configs) => {
    let header: any = {
      "Content-Type": "application/x-www-form-urlencoded",
      "X-CSRF-TOKEN": "",
      ...configs.header,
    };

    if (
      store.getState().home?.accessToken &&
      store.getState().home.accessToken.length > 0
    ) {
      header.Authorization = `Bearer ${store.getState().home.accessToken}`;
      header["X-CSRF-TOKEN"] = `Bearer ${store.getState().home.accessToken}`;
    }

    if (configs.authorization && configs.authorization.length > 0) {
      header.Authorization = configs.authorization;
    }

    const domain = configs.domain ? configs.domain : DOMAIN;

    configs.url = `${domain}/${configs.url}`;

    if (configs.options?.json) {
      configs.params = JSON.stringify(configs.params);
      header["Content-Type"] = "application/json";
    } else if (configs.options?.formData) {
      header["Content-Type"] = "multipart/form-data";
    } else {
      header["Content-Type"] = "application/x-www-form-urlencoded";
    }

    const req: Promise<any> = axios
      .request({
        url: configs.url,
        timeout: configs.timeout || 30000,
        headers: header,
        method: configs.method,
        params: configs.params,
        ...(configs.options?.json && { data: configs.params, params: {} }),
      })
      .then((response) => {
        if (configs?.url != null) {
          __DEV__ &&
            LogRequest(
              configs?.url,
              configs.method,
              configs.params,
              header,
              response.data
            );
        }
        return response.data;
      })
      .catch((error) => {
        if (configs?.url) {
          __DEV__ &&
            LogRequest(
              configs.url,
              configs.method,
              configs.params,
              header,
              error?.response?.data
            );
        }
        if (
          configs?.url &&
          (configs?.url.includes(API.LOGIN) ||
            configs?.url.includes(API.REFRESH_TOKEN))
        ) {
          return error?.response;
        } else {
          const httpStatusCode = error?.response?.status;
          handleError(httpStatusCode);
          return error?.response;
        }
      });

    return req;
  };
}

const LogRequest = (
  url: string,
  method: string,
  params: any,
  header: any,
  response: any
) => {
  console.log(
    "=============== REQUEST ===============\n",
    "\nURL: ",
    url,
    "\nMethod: ",
    method,
    "\nParams: ",
    params,
    "\nHeader: ",
    header
  );
  console.log(
    "=============== RESPONSE ===============\n",
    JSON.stringify(response, null, " ") || true,
    "\n======================================="
  );
};

/**
 * =========================================
 * HANDLE ERROR
 * =========================================
 */
function handleError(code: number) {
  switch (code) {
    case CODE_UNAUTHORIZED:
      handleInvalidToken();
      break;
    case CODE_SERVICE_UNAVAILABLE:
      handleServiceUnavailable();
      break;
    // more case ....
    default:
      break;
  }
}

/**
 * =========================================
 * INVALID OR EXPIRED TOKEN
 * =========================================
 */
export function handleInvalidToken() {}

/**
 * =========================================
 * SERVICE UNAVAILABLE
 * =========================================
 */
function handleServiceUnavailable() {}
