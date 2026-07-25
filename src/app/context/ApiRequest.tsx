
export interface apiData {
  url: string;
  method?: "GET" | "POST" | "OPTIONS" | "PUT" | "DELETE";
  body?: any;
  headers?: object;
}

//export const baseUrl = "https://api.phindol.com";
export const baseUrl = "https://phindol.local";

export async function ApiRequest({
  url,
  method = "GET",
  body = null,
  headers = {},
}: apiData) {
  if (!url) {
    throw new Error("Requires a url");
  }

  const isFormData = body instanceof FormData;
  const needsOverride =
    isFormData && ["PUT", "PATCH", "DELETE"].includes(method);

  const options: RequestInit = {
    method: needsOverride ? "POST" : method,
    headers: isFormData
      ? {
          ...headers,
          ...(needsOverride && { "X-HTTP-Method-Override": method }),
        }
      : {
          "Content-Type": "application/json",
          ...headers,
        },
    credentials: "include",
  };

  if (body && method !== "GET") {
    options.body = isFormData
      ? body
      : typeof body === "string"
        ? body
        : JSON.stringify(body);
  }

  const response = await fetch(url, options);

  let result;
  const ContentType = response.headers.get("content-type");

  if (ContentType && ContentType?.includes("application/json")) {
    result = await response.json();
  } else {
    result = await response.text();
  }

  if (!response.ok) {
    throw new Error(result?.message || `Request failed with status `);
  }

  return result;
}
