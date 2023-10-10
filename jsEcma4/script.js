/**
 * Задание 1. 
 *
 */
async function getUserData(id) {
    try {
        const response = await fetch(`https://reqres.in/api/users/${id}`);
        if (response.ok) {
            console.log(await response.json());
        }
    } catch {
        (error) => console.log(error);
    }
}
getUserData(2);
getUserData(23);

/**
 * Задание 2. Отправка данных на сервер.
 
 */

const user = {
    name: "John Doe",
    job: "unknown",
};

async function saveUserData(user) {
    try {
        let response = await fetch("https://reqres.in/api/users", {
            method: "POST",
            headers: {
                "Content-Type": "application/json;charset=utf-8",
            },
            body: JSON.stringify(user),
        });

        if (response.ok) {
            console.log("Data saved successfully");
        }
    } catch {
        (error) => console.log(error);
    }
}
saveUserData(user);