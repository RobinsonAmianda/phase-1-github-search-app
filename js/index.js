document.addEventListener("DOMContentLoaded", () => {
    fetch("https://api.github.com/users/octocat/repos")
    .then(res => res.json())
    .then(data => {
        data.forEach(repo => {
            const repoDiv = document.createElement(`div`)
            repoDiv.className = `repoDiv`
            repoDiv.innerHTML = `
            <h2>GitHub Search</h2>

            <form id='github-form'>
              <input id='search' type='text' name='search'>
              <input type='submit' name='submit'/>
            </form>
            `
            main.appendChild(repoDiv)
      })
    })})