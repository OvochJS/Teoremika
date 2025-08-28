export function jsonTyped<T>(response: Response) {
    return response.json() as T;
}