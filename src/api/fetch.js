export const fetchWithDelay = (url,meth) => {
    const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(fetch(url, {
          method: meth,
        })
          .then((response) => response.json()));
      }, 3000)
    });
    return promise;
  }