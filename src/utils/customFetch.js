let is_ok = true;

const customFetch = (data, error) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (is_ok) {
                resolve(data);
            } else {
                reject(error);
            }
        }, 2000);
    });
};

export default customFetch;