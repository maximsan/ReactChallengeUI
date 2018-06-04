export default url => {
    return new Promise((resolve, reject) => {
        const request = new XMLHttpRequest();
        request.open('GET', url, true);

        request.addEventListener('load', () => {
            request.status >=200 && request.status < 400
            ? resolve(request.responseText)
            : reject(new Error()`Reauest failed: ${request.statusText}`);
        });

        request.addEventListener('error', () => {
            reject(new Error('Network error'));
        });

        request.send();
    });
};