export const fetchWithDelay = (url,method) => {
    const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(fetch(url, {
          method: method,
        })
        .then((response) => response.json()));
      }, 3000)
    });
    return promise;
  }
  