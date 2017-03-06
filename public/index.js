/* let's go! */
var user = 'finnhodgkin';
var accessToken = 'a7877da7e6a11f605a4124a1bf06542eb7add404';
var url = ['https://api.github.com/users/', user, '?access_token=', accessToken].join('');

function getRequest(url, callback) {
    xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            var response = JSON.parse(xhr.response);
            callback(null, response)
        } else if (xhr.status === 404) {
            callback("It's not working!! Oh GOOOOOD: 404")
        }
    }

    xhr.open('GET', url, true);
    xhr.send();
}

getRequest(url, function(error, response) {
    if (error) {
        console.log(error);
    } else if (response) {
        var username = document.querySelector('#github-user-handle');
        username.innerText = response.name + " (" + response.login + ")"
        var avatar = document.querySelector('#github-user-avatar');
        avatar.src = response.avatar_url;
        var repos = document.querySelector('#repos');
        repos.innerText = "Number of Repos:  " + response.public_repos;

        var languages = document.querySelector('#github-repos-languages');

    }
});
