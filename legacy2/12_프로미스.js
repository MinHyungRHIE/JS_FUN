function promisifyRequest(request) {
  return new Promise(function (resolve, reject) {
    request.onsuccess = function () {
      resolve(request.result);
    };

    request.onerror = function () {
      reject(request.error);
    };
  });
}

let request = {
  result: "성공",
  error: "실패",
};

promisifyRequest(request)
  .then((result) => {
    console.log(result);
  })
  .catch((err) => {
    console.log(err);
  });
