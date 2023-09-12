import * as apiHelper from "./api_helper.js";

const baseUrl = "https://jsonplaceholder.typicode.com/posts/";

async function getPostsByUserId(url, userId) {
  try {
    const posts = await apiHelper.get(url);
    return posts.filter((post) => post.userId === userId).map(({ title, ...rest }) => rest);
  } catch (error) {
    console.error(error.message);
  }
}

async function createNewPost(url, body) {
  try {
    const result = await apiHelper.post(url, body);
    return result;
  } catch (error) {
    console.error(error.message);
  }
}

function resolveNumber() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const randomNumber = Math.floor(Math.random() * 11);
      if (randomNumber > 5) {
        resolve(`Resolved ${randomNumber}`);
      } else {
        reject(`Rejected ${randomNumber}`);
      }
    }, 3000);
  });
}

// Виконуємо функції та оброблюємо результати
async function main() {
  const posts = await getPostsByUserId(baseUrl, 5);
  console.log(posts);

  const body = {
    userId: 155,
    title: "New title",
    body: "New body",
  };
  const result = await createNewPost(baseUrl, body);
  console.log(result);

  resolveNumber()
    .then((message) => console.log(message))
    .catch((error) => console.error(error));
}

main();
