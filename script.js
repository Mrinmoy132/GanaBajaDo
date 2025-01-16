// nav bar

let searchbar_firstdiv = document.getElementById("search-bar").firstElementChild;

//input element e focus korle
searchbar_firstdiv.nextElementSibling.addEventListener("focus", () => {
    document.getElementById("search-bar").style.outline = '2px solid white';
    searchbar_firstdiv.firstElementChild.style.filter = 'invert(1)';
});
searchbar_firstdiv.nextElementSibling.addEventListener("blur", () => {
    document.getElementById("search-bar").style.outline = 'none';
    searchbar_firstdiv.firstElementChild.style.filter = 'invert(0.7)';
});



//search button e click korle
searchbar_firstdiv.firstElementChild.addEventListener('click', () => {
    document.getElementById("search-bar").style.outline = '2px solid white';
    searchbar_firstdiv.firstElementChild.style.filter = 'invert(1)';
    searchbar_firstdiv.nextElementSibling.focus();
});

searchbar_firstdiv.firstElementChild.addEventListener("blur", () => {
    document.getElementById("search-bar").style.outline = 'none';
    searchbar_firstdiv.firstElementChild.style.filter = 'invert(0.7)';
});


//searchb button e mouseover korle
searchbar_firstdiv.firstElementChild.addEventListener('mouseover', () => {
    searchbar_firstdiv.firstElementChild.style.filter = 'invert(1)';
})
searchbar_firstdiv.firstElementChild.addEventListener('mouseout', () => {
    searchbar_firstdiv.firstElementChild.style.filter = 'invert(0.7)';
});


//searchbar puratate mouseover korle
document.getElementById("search-bar").addEventListener('mouseover', () => {
    document.getElementById("search-bar").style.backgroundColor = 'rgb(50,50,50)';
    searchbar_firstdiv.nextElementSibling.style.backgroundColor = 'rgb(50,50,50)';
});

document.getElementById("search-bar").addEventListener('mouseout', () => {
    document.getElementById("search-bar").style.backgroundColor = 'rgb(30, 30, 30)';
    searchbar_firstdiv.nextElementSibling.style.backgroundColor = 'rgb(30, 30, 30)';
});



// main-left
let left_main_library = document.getElementById("your-library-section");
let left_main_library_svg = document.getElementById("main-library-svg");
let left_main_library_plus = document.getElementById("your-library-section").lastElementChild;



//library r svg re mouseover korle
left_main_library.firstElementChild.addEventListener('mouseenter', () => {
    left_main_library_svg.style.filter = 'invert(1)';
    left_main_library_svg.nextElementSibling.style.filter = 'invert(0)';

});

left_main_library.firstElementChild.addEventListener('mouseleave', () => {
    left_main_library_svg.style.filter = 'invert(0.7)';
    left_main_library_svg.nextElementSibling.style.filter = 'invert(0.3)';

});


//plus er upore mouseover korle + in css also hover effect ache
left_main_library_plus.addEventListener('mouseover', () => {
    left_main_library_plus.firstElementChild.style.filter = 'invert(1)';
});
left_main_library_plus.addEventListener('mouseout', () => {
    left_main_library_plus.firstElementChild.style.filter = 'invert(0.7)';
});


let language_changing_innerdiv = document.getElementById("language-changing-innerdiv");

language_changing_innerdiv.addEventListener('mouseover', () => {
    language_changing_innerdiv.style.border = '1px solid rgb(255, 255, 255)';
    language_changing_innerdiv.style.transform = 'scale(1.05)';
    // language_changing_innerdiv.firstElementChild.style.transform = 'scale(1.1)'
    // language_changing_innerdiv.lastElementChild.style.transform = 'scale(1.1)'
});
language_changing_innerdiv.addEventListener('mouseout', () => {
    language_changing_innerdiv.style.border = '1px solid rgba(255, 255, 255, 0.462)';
    language_changing_innerdiv.style.transform = 'scale(1)';
    // language_changing_innerdiv.firstElementChild.style.transform = 'scale(1)'
    // language_changing_innerdiv.lastElementChild.style.transform = 'scale(1)'
});



//main left
//library
let libraries = document.getElementById("library");
function library(poster, song_name, playlist, artist) {
    let new_div = document.createElement("div");
    new_div.innerHTML = `<img src="${poster}" alt="">
                        <div>
                            <div>${song_name}</div>
                            <div class="playlist">
                                <span>${playlist}:</span>
                                <span>${artist}</span>
                            </div>
                        </div>`;
    libraries.append(new_div);
}

library("svg/liked_songs_left_bar.svg","Your liked songs","Songs",liked_songs.length);
library("artists/pritam.jpeg", "Abhi Mujh Mein Kahin", "Playlist", "Spotify");
// library("artists/pritam.jpeg","Abhi Mujh Mein Kahin","Playlist","Spotify");
// library("artists/pritam.jpeg","Abhi Mujh Mein Kahin","Playlist","Spotify");
// library("artists/pritam.jpeg","Abhi Mujh Mein Kahin","Playlist","Spotify");
// library("artists/pritam.jpeg","Abhi Mujh Mein Kahin","Playlist","Spotify");
// library("artists/pritam.jpeg","Abhi Mujh Mein Kahin","Playlist","Spotify");
// library("artists/pritam.jpeg","Abhi Mujh Mein Kahin","Playlist","Spotify");

// main-right

//headings for playlist
// let right_main = document.getElementById("right-main");
// let new_headings_function = (heading, show, src_poster, upor, niche) => {
//     let heading_left = heading;
//     let show_all = show;
//     let container_poster = src_poster;
//     let first_line = upor;
//     let second_line = niche;

//     let new_right_main_content = document.createElement("div");
//     new_right_main_content.innerHTML = `  <div class="headings-row">
//                                     <div>${heading_left}</div>
//                                     <div>${show_all}</div>
//                                 </div>
//                                 <div class="playlist-row">
//                                     <div class="container">
//                                         <div class="playbutton">
//                                             <img src="svg/play.svg" alt="">
//                                         </div>
//                                         <div class="thumbnail">
//                                             <img src=${container_poster} alt="">
//                                         </div>
//                                         <div class="artist-name">
//                                             <div>${first_line}</div>
//                                             <div>${second_line}</div>
//                                         </div>
//                                     </div>
//                                 </div>`;
//     right_main.append(new_right_main_content);
// }

// new_headings_function("Popular artists", "Show all", "artists/pritam.jpeg", "Pritam", "Artist");
// new_headings_function("Popular albums and singles", "Show all", "artists/pritam.jpeg", "Pritam", "Artist");
// new_headings_function("Popular radio", "Show all", "artists/pritam.jpeg", "Pritam", "Artist");
// new_headings_function("Featured Charts", "", "artists/pritam.jpeg", "Pritam", "Artist");
// new_headings_function("India's best", "Show all", "artists/pritam.jpeg", "Pritam", "Artist");

let arr_heading = ["Popular artists",
    // "Popular albums and singles",
    //  "Popular radio",
    "Featured Charts",
    //   "India's best"
];
let arr_show = ["Show all",
    //  "Show all",
    //   "Show all",
    //    "",
        "Show all"
    ];
let arr_src_poster = ["artists/pritam.jpeg",
    //  "artists/pritam.jpeg",
    //   "artists/pritam.jpeg",
    //    "artists/pritam.jpeg",
        "artists/pritam.jpeg"
    ];
let arr_upor = ["Pritam", "Arijit", "Sachin"];
let arr_niche = ["Artist", "Jimin", "Yo Yo Honey Singh"];

for (const element of arr_heading) {
    let new_headings_right_main_content = document.createElement("div");
    new_headings_right_main_content.innerHTML = `  <div class="headings-row">
                                                        <div>${element}</div>
                                                        <div>show_all</div>
                                                    </div>`;
    document.getElementById("right-main").append(new_headings_right_main_content);
}


//playlists



let container = Array.from(document.getElementsByClassName("container"));

container.forEach(e => {
    e.addEventListener('mouseover', () => {
        e.firstElementChild.firstElementChild.style.bottom = '70px';
        e.firstElementChild.firstElementChild.style.right = '25px';
        e.firstElementChild.firstElementChild.style.opacity = '1';
        e.style.backgroundColor = 'rgb(40, 40, 40)';
    })
    e.addEventListener('mouseout', () => {
        e.firstElementChild.firstElementChild.style.bottom = '30px';
        e.firstElementChild.firstElementChild.style.right = '25px';
        e.firstElementChild.firstElementChild.style.opacity = '0';
        e.style.backgroundColor = 'inherit';
    })
});

