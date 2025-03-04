const getSuspender = <T>(promise: Promise<T>) => {
    let status = 'pending'
    let response: T

    const suspender = promise.then(
        (res) => {
            status = 'success'
            response = res
        },
        (err) => {
            status = 'error'
            response = err
        }
    );
    const read = () => {
        switch (status) {
            case 'pending':
                throw suspender
            case 'error':
                throw response
            default:
                return response
        }
    };
    return {read}
};

export const fetchData = <T>(url: string) => {
    const promise = fetch(url)
    .then((response) => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json() as Promise<T>;
    });

    return getSuspender(promise);
}