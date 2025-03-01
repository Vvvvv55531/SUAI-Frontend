//2-й пункт задания
async ferchData(url) {
    try {
        let request = await fetch(url)

        if (!request.ok) {
           throw new Error("Ошибка " + request.status);
        }

        let result = await request.text()
        return result;
    }

    catch (error) {
        return Promise.reject("Ошибка запроса: " + error.message);
}
}

fetchData("https://api.example.com/data")

  .then(data => {
    alert("Данные:", data);
})

  .catch(error => {
    alert("Ошибка:", error);
});
