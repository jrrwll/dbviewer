export default function retry(fn: any, retries: number, timeout: number, callback: any) {
    if (retries < 1) {
        callback(false);
        return;
    }
    if (fn()) {
        callback(true);
        return;
    }
    setTimeout(() => retry(fn, retries - 1, timeout, callback), timeout);
}
