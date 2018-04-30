const app = "I don't do much.";

const token = 'd9bc57ac0b87ffa49ee5eef3ba3c95663a13d362'
fetch('https://api.github.com/user/repos', {
  headers: {
    Authorization: `token ${token}`
  }
}).then(res => res.json()).then(json => console.log(json));
