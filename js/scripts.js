function toggleColor(id) {
    var inactive = "rgb(42, 63, 90)";
    var active = "rgb(43, 110, 195)";
    var object = document.getElementById(id);
    var currentColor = window.getComputedStyle(object, null).backgroundColor;

    if (currentColor === inactive) {
        object.style.backgroundColor = active;
    } else {
        object.style.backgroundColor = inactive;
    };
}

function toggleTab(id) {
    var inactive = "rgb(42, 63, 90)";
    var active = "rgb(88, 129, 182)";

    // make all inactive first
    var tabsarray = document.getElementById("tabfilter").getElementsByTagName("button");

    for (var i = 0; i < tabsarray.length; i ++) {
        tabsarray[i].style.backgroundColor = inactive;
    }

    var object = document.getElementById(id);
    var currentColor = window.getComputedStyle(object, null).backgroundColor;

    if (currentColor == inactive) {
        object.style.backgroundColor = active;
    } else {
        object.style.backgroundColor = inactive;
    }

    // filter content
    var usercontents = document.getElementById("usercontents");
    var rows = usercontents.getElementsByClassName("row");
    for (var i = 0; i < rows.length; i ++) {
        var elements = rows[i].children;
        if (id !== "All") {
            for (var j = 0; j < elements.length; j ++) {
                if (elements[j].getElementsByClassName("category")[0].innerHTML === id) {
                    elements[j].className = "col-md";
                } else {
                    elements[j].className = "d-none";
                }
            }
        } else {
            for (var j = 0; j < elements.length; j ++) {
                elements[j].className = "col-md";
            }
        }
    }
}

function ratingClick(object) {
    var unrated = "rgb(255, 255, 255)"
    var rated = "rgb(43, 110, 195)"

    var article = object.parentElement;
    var articleStatus = article.getElementsByTagName("h1");
    var likes = articleStatus[0];
    var dislikes = articleStatus[1];

    var likesValue = parseInt(likes.textContent);
    var dislikesValue = parseInt(dislikes.textContent);
    var likesStatus = window.getComputedStyle(likes, null).color;
    var dislikesStatus = window.getComputedStyle(dislikes, null).color;

    if (object.id === "thumbs-up") {
        if (likesStatus === rated) {
            likes.innerHTML = likesValue - 1;
            likes.style.color = unrated;
        } else {
            likes.innerHTML = likesValue + 1;
            likes.style.color = rated;
        }
        if (dislikesStatus === rated) {
            dislikes.innerHTML = dislikesValue - 1;
            dislikes.style.color = unrated;
        }
    } else {
        if (dislikesStatus === rated) {
            dislikes.innerHTML = dislikesValue - 1;
            dislikes.style.color = unrated;
        } else {
            dislikes.innerHTML = dislikesValue + 1;
            dislikes.style.color = rated;
        }
        if (likesStatus === rated) {
            likes.innerHTML = likesValue  - 1;
            likes.style.color = unrated;
        }
    }
}

function jumpToComments() {
    document.getElementById("articlecomments").scrollIntoView();
}