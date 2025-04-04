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

//search button e click korle ja hoy
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
    // left_main_library_svg.style.filter = 'invert(1)';
    // left_main_library_svg.nextElementSibling.style.filter = 'invert(0)';

});

left_main_library.firstElementChild.addEventListener('mouseleave', () => {
    // left_main_library_svg.style.filter = 'invert(0.7)';
    // left_main_library_svg.nextElementSibling.style.filter = 'invert(0.3)';

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
});
language_changing_innerdiv.addEventListener('mouseout', () => {
    language_changing_innerdiv.style.border = '1px solid rgba(255, 255, 255, 0.462)';
    language_changing_innerdiv.style.transform = 'scale(1)';
});

// async function getsongs() {
//     let songs = await fetch("musics/");                                             //fetching data from the server/filesystem
//     let response = await songs.text();                                              //converting the songs to html text format
//     let newdiv = document.createElement("div");
//     newdiv.innerHTML = response;                                                    //html text to html
//     let a = newdiv.getElementsByTagName("a");                                       //filtering all the <a> elements from html 
//     const songs_arr = [];
//     for (const element of a) {
//         if (element.href.endsWith(".mp3")) {                                        //all the elements ended with .mp3
//             songs_arr.push(element.href);
//         }
//     }
//     return songs_arr;                                                               //returning the songs as an array
// }

(async function main() {
    // let p = await getsongs();       
    let p = ["musics/Abhi Mujh Mein Kahin.mp3",
        "musics/Afreen Afreen.mp3",
        "musics/O Rangrez.mp3",
        "musics/Pyaar Ke Pal.mp3",
        "musics/Saudebaazi.mp3",
        "musics/Tere Bina.mp3",
        "musics/Tum Prem Ho.mp3",
        "musics/Tum Tak.mp3"]                                                       //storing the promise values into 
    const name_only_songs_array = [];                                              //songs array to display as song name
    for (const element of p) {
        // let x = element.slice(element.indexOf("musics/") + 7).replaceAll("%20", " ").replaceAll(".mp3", "");
        let x = element.slice(element.indexOf("musics/") + 7).replaceAll(".mp3", "");
        name_only_songs_array.push(x);
    }
    class songs {                                                                  // creating class for object creation
        constructor(poster, only_name_of_song, artist_arr, song_link) {
            this.poster = poster;
            this.only_name_of_song = only_name_of_song;
            this.artist = artist_arr;
            this.song_link = song_link;
        }
    }
    // all the songs
    const artist_arr_song1 = ["Ajay-Atul", "Sonu Nigam"];
    const song1 = new songs("artists/Abhi Mujh Me Kahin.jpeg", name_only_songs_array[0], artist_arr_song1, p[0]);

    const artist_arr_song2 = ["Rahat Fateh Ali Khan", "Nusrat Fateh Ali Khan"];
    const song2 = new songs("artists/afreen afreen.jpg", name_only_songs_array[1], artist_arr_song2, p[1]);

    const artist_arr_song3 = ["Shankar-Ehsaan-Loy", "Shreya Ghoshal", "Javed Bashir", "Yusuf Mohammed", "Vajid Ali"];
    const song3 = new songs("artists/o rangrez.jpg", name_only_songs_array[2], artist_arr_song3, p[2]);

    const artist_arr_song4 = ["KK"];
    const song4 = new songs("artists/pal.jpg", name_only_songs_array[3], artist_arr_song4, p[3]);

    const artist_arr_song5 = ["Pritam", "Javed Ali", "Anupam Amod"];
    const song5 = new songs("artists/saudebaazi.jpg", name_only_songs_array[4], artist_arr_song5, p[4]);

    const artist_arr_song6 = ["A.R.Rahman", "Chinmayi", "Murtuza Khan", "Qadir Khan"];
    const song6 = new songs("artists/tere bina.jpg", name_only_songs_array[5], artist_arr_song6, p[5]);

    const artist_arr_song7 = ["Mohit Lalwani", "Bharat Kamal"];
    const song7 = new songs("artists/tum prem ho.jpg", name_only_songs_array[6], artist_arr_song7, p[6]);

    const artist_arr_song8 = ["A.R.Rahman", "Javed Ali", "Pooja AV", "Kirti Saghathia"];
    const song8 = new songs("artists/tum tak.jpg", name_only_songs_array[7], artist_arr_song8, p[7]);

    //all the arrays
    const songs_arr = [song1, song2, song3, song4, song5, song6, song7, song8];    // songs array to play
    const artist_arr = ["Sonu Nigam", "A.R.Rahman", "Rahat Fateh Ali Khan", "Shreya Ghoshal", "KK", "Javed Ali"];
    const artist_photo = ["artists/Sonu Nigam.webp", "artists/AR Rahman.jpg", "artists/Rahat Fateh Ali Khan.webp", "artists/shreya_ghoshal.jpg", "artists/kk.jpeg", "artists/javed ali.jpg"];
    const liked_songs = [];
    const arr_sonu = [];
    const arr_rahat = [];
    const arr_shreya = [];
    const arr_kk = [];
    const arr_ar = [];
    const arr_javed = [];

    for (const element of songs_arr) {
        for (let index = 0; index < element.artist.length; index++) {
            if (element.artist[index] == "Sonu Nigam") {
                arr_sonu.push(element);
            }
            else if (element.artist[index] == "Rahat Fateh Ali Khan") {
                arr_rahat.push(element)
            }
            else if (element.artist[index] == "Shreya Ghoshal") {
                arr_shreya.push(element)
            }
            else if (element.artist[index] == "KK") {
                arr_kk.push(element)
            }
            else if (element.artist[index] == "A.R.Rahman") {
                arr_ar.push(element)
            }
            else if (element.artist[index] == "Javed Ali") {
                arr_javed.push(element)
            }
        }
    }
    let currentIndex = 0;
    const audio = new Audio();                                                     //creating audio element
    audio.src = songs_arr[currentIndex].song_link;                                 // first song set to play

    //all the functions
    const play_button_wishlist = () => {
        Array.from(document.getElementsByClassName("all_song_list")).forEach(element => {
            element.lastElementChild.src = "svg/play.svg";
        })
    }

    const play_button_library_artist = () => {
        Array.from(document.getElementsByClassName("artist_song_count")).forEach(element => {
            element.lastElementChild.src = "svg/play.svg";
        })
    }

    const play_button_all = () => {
        Array.from(document.getElementById("scrollContainer_first").getElementsByClassName("all_song_list")).forEach(element => {
            element.lastElementChild.src = "svg/play.svg";
        })
    }

    const play_button_artist = () => {
        Array.from(document.getElementById('scrollContainer_second').getElementsByClassName("playlist-row")).forEach(element => {
            element.firstElementChild.firstElementChild.firstElementChild.src = "svg/play.svg";
        })
    }

    const pause_button = () => {
        Array.from(document.getElementsByClassName("all_song_list")).forEach(element => {
            if (element.firstElementChild.nextElementSibling.innerHTML == current_audio.firstElementChild.nextElementSibling.firstElementChild.innerHTML) {
                element.lastElementChild.src = "svg/pause.svg";
            }
        })
    }

    const plus_bar = () => {
        if (liked_songs.includes(songs_arr[currentIndex])) {
            current_audio.lastElementChild.src = "svg/footer_plus_after_liked.svg";
        }
        else {
            current_audio.lastElementChild.src = "svg/footer-plus.svg";
        }
    }

    const library = (poster, artist, mufasa) => {
        libraries.lastElementChild.innerHTML = "";
        let new_div = document.createElement("div");
        new_div.innerHTML = `<img src="${poster}" alt="">
                        <div>${artist}</div>
                        <div>${mufasa}
                        </div>`;
        libraries.lastElementChild.append(new_div);
    }

    // updating currently playing audio information in left side of footer
    let current_audio = document.getElementById("a");
    let poster_imgtag = current_audio.firstElementChild.firstElementChild;
    let song_name_while_play = current_audio.firstElementChild.nextElementSibling.firstElementChild;
    let artist_list = song_name_while_play.nextElementSibling;
    let new_div = document.createElement("div");
    const updatecurrent_audio = () => {
        poster_imgtag.src = songs_arr[currentIndex].poster;
        song_name_while_play.innerHTML = songs_arr[currentIndex].only_name_of_song;
        new_div.innerHTML = ``;
        for (let i = 0; i < songs_arr[currentIndex].artist.length; i++) {
            if (i > 0) {
                new_div.innerHTML += `, <a href="">${songs_arr[currentIndex].artist[i]}</a>`;
            }
            else {
                new_div.innerHTML += `<a href="">${songs_arr[currentIndex].artist[i]}</a>`;
            }
        }
        artist_list.append(new_div);
    };
    updatecurrent_audio();

    // previous audio
    document.getElementById("prev").addEventListener("click", () => {
        currentIndex = (currentIndex - 1 + p.length) % p.length;
        audio.src = songs_arr[currentIndex].song_link;
        audio.play();
        playpause.src = "svg/pause.svg";
        updatecurrent_audio();
        play_button_all();
        play_button_wishlist();
        pause_button();
        plus_bar();
        play_button_library_artist();
        play_button_artist();
    });

    // playpause audio
    let playpause = document.getElementById("playpause");
    playpause.addEventListener("click", () => {
        if (audio.paused) {
            audio.play();
            playpause.src = "svg/pause.svg";
            pause_button();
        } else {
            audio.pause();
            playpause.src = "svg/play.svg";
            play_button_all();
            play_button_wishlist();
            play_button_library_artist();
            play_button_artist();
        }
    });

    // next audio
    document.getElementById("next").addEventListener("click", () => {
        currentIndex = (currentIndex + 1) % songs_arr.length;
        audio.src = songs_arr[currentIndex].song_link;
        audio.play();
        playpause.src = "svg/pause.svg";
        updatecurrent_audio();
        play_button_all();
        play_button_wishlist();
        pause_button();
        plus_bar();
        play_button_library_artist();
        play_button_artist();
    });

    // when audio ends
    audio.addEventListener("ended", () => {
        current_audio.lastElementChild.src = "svg/footer-plus.svg";
        document.getElementById("next").click();
    });

    //audio manipulate-bar
    let audio_bar = document.getElementById("audio-seek-bar");
    audio.addEventListener('loadedmetadata', () => {
        let time = Math.round(audio.duration);
        let x = Math.floor(time / 60);
        let y = time % 60;
        if (x < 10) {
            x = x.toString().padStart(2, "0");
        }
        if (y < 10) {
            y = y.toString().padStart(2, "0");
        }
        audio_bar.nextElementSibling.innerHTML = x + ":" + y;
        audio_bar.max = time;
    });

    //updating the value of current time duration of audio    
    audio.addEventListener('timeupdate', () => {
        let time = Math.round(audio.currentTime);
        if (time % 60 != 0) {
            let x = Math.floor(time / 60);
            let y = time % 60;
            let t = (audio.currentTime / audio.duration) * 100;
            if (x < 10) {
                x = x.toString().padStart(2, "0");
            }
            if (y < 10) {
                y = y.toString().padStart(2, "0");
            }
            audio_bar.previousElementSibling.innerHTML = `${x}:${y}`;
            audio_bar.style.background = `linear-gradient(to right, #ffcc00 ${t}%, #ccc ${t}%)`;
        }
        else {
            x = Math.floor(time / 60);
            audio_bar.previousElementSibling.innerHTML = `0${x}:00`;
            audio_bar.style.background = `linear-gradient(to right, #ffcc00 , #ccc `;
        }
        audio_bar.value = Math.round(audio.currentTime);
    });

    // setting the position of moving circle in bar
    audio_bar.addEventListener('input', () => {
        audio.currentTime = audio_bar.value;
    });

    //looping or not
    let loop_btn = document.getElementById("loop");
    let isLooping = false;
    loop_btn.addEventListener('click', () => {
        isLooping = !isLooping;
        audio.loop = isLooping;
        loop_btn.src = isLooping ? "svg/repeat1.svg" : 'svg/repeat.svg';
    });

    //volume manipulation
    let sound = document.getElementById("sound-bar");
    audio.volume = sound.value / 100;
    sound.addEventListener('input', () => {
        let volume = sound.value / 100;
        audio.volume = volume;
        if (audio.volume == 0) {
            sound.previousElementSibling.src = "svg/mute_sound.svg";
        }
        else if (audio.volume > 0.30 && audio.volume <= 0.75) {
            sound.previousElementSibling.src = "svg/medium_sound.svg";
        }
        else if (audio.volume > 0.75) {
            sound.previousElementSibling.src = "svg/high_sound.svg";
        }
        else {
            sound.previousElementSibling.src = "svg/low_sound.svg";
        }
    })
    sound.previousElementSibling.addEventListener('click', () => {
        if (audio.muted) {
            audio.muted = false; // unmute
            if (audio.volume > 0.30 && audio.volume <= 0.75) {
                sound.previousElementSibling.src = "svg/medium_sound.svg";
                sound.value = audio.volume * 100;
            }
            else if (audio.volume > 0.75) {
                sound.previousElementSibling.src = "svg/high_sound.svg";
                sound.value = audio.volume * 100;
            }
            else {
                sound.previousElementSibling.src = "svg/low_sound.svg";
                sound.value = audio.volume * 100;
            }
        } else {
            audio.muted = true; // mute
            sound.value = 0;
            sound.previousElementSibling.src = "svg/mute_sound.svg";
        }
    });

    let libraries = document.getElementById("library");
    //adding in wishlist
    current_audio.lastElementChild.addEventListener('click', () => {
        if (liked_songs.includes(songs_arr[currentIndex])) {
            let pos = liked_songs.indexOf(songs_arr[currentIndex], 0);
            liked_songs.splice(pos, 1);
            plus_bar();
        }
        else {
            liked_songs.push(songs_arr[currentIndex]);
            plus_bar();
        }
        document.getElementById("number_of_songs").innerHTML = liked_songs.length;
    })
    document.getElementById("your-library-section").nextElementSibling.firstElementChild.addEventListener('click', () => {
        if (libraries.firstElementChild.contains(document.querySelector(".all_song_list"))) {

            document.getElementById("your-library-section").nextElementSibling.firstElementChild.src = "svg/hidden-logo.svg";
            document.getElementById("your-library-section").nextElementSibling.firstElementChild.nextElementSibling.innerHTML = "show wishlist";
            libraries.firstElementChild.innerHTML =
                `<div id="kalu">
                <img src="svg/liked_songs_left_bar.svg" alt="">
                <div>
                    <div>Your liked songs</div>
                    <div class="playlist">
                        <span id="number_of_songs">${liked_songs.length}</span>
                    </div>
                </div>
            </div>`;
        }
        else {

            document.getElementById("your-library-section").nextElementSibling.firstElementChild.src = "svg/show-logo.svg";
            document.getElementById("your-library-section").nextElementSibling.firstElementChild.nextElementSibling.innerHTML = "";
            libraries.firstElementChild.innerHTML =
                `<div id="kalu">
                <img src="svg/liked_songs_left_bar.svg" alt="">
                <div>
                    <div>Your liked songs</div>
                    <div class="playlist">
                        <span id="number_of_songs">${liked_songs.length}</span>
                    </div>
                </div>
            </div>`;
            if (liked_songs.length == 0) {
                libraries.firstElementChild.innerHTML += `
            <div class = "all_song_list no_song">No songs added to wishlist</div>`;
            }
            else {

                for (const element of liked_songs) {
                    libraries.firstElementChild.innerHTML +=
                        `<div class="all_song_list">
                        <img src="${element.poster}" alt="lol">
                        <div>${element.only_name_of_song}</div>
                        <img title="Play/Pause" src="svg/play.svg" alt="">
                    </div>`;
                }

            }
            Array.from(libraries.firstElementChild.querySelectorAll(".all_song_list")).forEach((e) => {
                e.addEventListener('click', () => {
                    for (let index = 0; index < songs_arr.length; index++) {
                        if (e.firstElementChild.nextElementSibling.textContent == songs_arr[index].only_name_of_song) {
                            currentIndex = index;

                        }
                    }
                    if (e.lastElementChild.src.endsWith("svg/play.svg")) {
                        audio.src = songs_arr[currentIndex].song_link;
                        audio.play();
                        updatecurrent_audio();
                        pause_button();
                        play_button_wishlist();
                        play_button_all();
                        e.lastElementChild.src = "svg/pause.svg";
                        playpause.src = "svg/pause.svg";
                        play_button_library_artist();
                        play_button_artist();
                        plus_bar();
                    }
                    else {
                        e.lastElementChild.src = "svg/play.svg";
                        audio.pause();
                        playpause.src = "svg/play.svg";
                        play_button_all();
                        plus_bar();
                    }
                })
            })
        }
    }
    )
    let arr_heading = ["All Songs", "Popular artists", ""];
    let arr_show = ["", "", ""];
    for (const element of arr_heading) {
        let new_headings_right = document.createElement("div");
        new_headings_right.innerHTML = `<div class="headings-row">
                                            <div>${element}</div>
                                            <div>
                                            ${arr_show[arr_heading.indexOf(element)]}
                                            </div>
                                        </div>
                                        <div>
                                            <img src="svg/scroll_left.svg" class='hidden scrollbtn'>
                                            <div class="all_the_rows"></div>
                                            <img src="svg/scroll_right.svg" class='hidden scrollbtn'>
                                        </div>`;
        document.getElementById("right-main").append(new_headings_right);
        if (arr_heading.indexOf(element) == 0) {
            document.getElementById("right-main").lastElementChild.lastElementChild.innerHTML = `
                <div class="all_the_rows"></div>
                <img src="svg/scroll_left.svg" class='hidden scrollbtn'>
                <img src="svg/scroll_right.svg" class='hidden scrollbtn'>`;
            for (const element of songs_arr) {
                document.getElementById("right-main").lastElementChild.lastElementChild.firstElementChild.innerHTML +=
                    `<div class="all_song_list">
                <img src="${element.poster}" alt="lol">
                <div>${element.only_name_of_song}</div>
                <img title="Play/Pause" src="svg/play.svg" alt="">
            </div>` ;
            }
        }
        else if (arr_heading.indexOf(element) == 1) {
            let index = 0;
            for (const element of artist_arr) {
                document.getElementById("right-main").lastElementChild.lastElementChild.firstElementChild.nextElementSibling.innerHTML +=
                    `<div class="playlist-row">
                        <div class="container">
                            <div class="playbutton">
                                <img src="svg/play.svg" alt="">
                            </div>
                            <div class="thumbnail">
                                <img src="${artist_photo[index]}" alt="">
                            </div>
                            <div class="artist-name">${element}</div>
                        </div>
                    </div>`;
                index++;
            }
        }
        else if (arr_heading.indexOf(element) == 2) {
            document.getElementById("right-main").lastElementChild.lastElementChild.innerHTML = `<div class="lower-portion-main">
                <div class="website-info">
                    <a href="" class="website-info_all">Legal</a>
                    <a href="" class="website-info_all">Safety and Privacy Center</a>
                    <a href="" class="website-info_all">Privacy Policy</a>
                    <a href="" class="website-info_all">Cookies</a>
                    <a href="" class="website-info_all">About Ads</a>
                    <a href="" class="website-info_all">Accessibility</a>
                </div>
                <div id="language-changing" >
                    <div id="language-changing-innerdiv" style="display: none;">
                        <img src="svg/left_main_browser.svg" alt="">
                        <span id="english">English</span>
                    </div>
                </div>
            </div>`
        }
    }

    Array.from(document.getElementsByClassName("all_song_list")).forEach((element, index) => {
        element.lastElementChild.addEventListener('click', () => {
            if (element.lastElementChild.src.endsWith("svg/play.svg")) {
                currentIndex = index;
                audio.src = songs_arr[currentIndex].song_link;
                updatecurrent_audio();
                audio.play();
                play_button_all();
                play_button_wishlist();
                play_button_library_artist();
                play_button_artist();
                // <img title="Play/Pause" id="playpause" src="svg/play.svg" alt=""></img>
                document.getElementById("playpause").src = "svg/pause.svg";
                element.lastElementChild.src = "svg/pause.svg";
                plus_bar();
            }
            else {
                element.lastElementChild.src = "svg/play.svg"
                audio.pause();
                document.getElementById("playpause").src = "svg/play.svg";
                play_button_wishlist();
                plus_bar();
            }
        }
        )
    })

    document.getElementById("right-main").firstElementChild.lastElementChild.firstElementChild.setAttribute('id', "scrollContainer_first");
    let scrollContainer_first = document.getElementById('scrollContainer_first');
    scrollContainer_first.nextElementSibling.setAttribute('id', 'scrollLeft_first')
    scrollContainer_first.nextElementSibling.nextElementSibling.setAttribute('id', 'scrollRight_first')
    let scrollLeft_first = document.getElementById('scrollLeft_first');
    let scrollRight_first = document.getElementById('scrollRight_first');

    function updateButtonVisibility_first() {
        // Check if the scroll position is at the start
        if (scrollContainer_first.scrollLeft_first === 0) {
            scrollLeft_first.classList.add('hidden');
        } else {
            scrollLeft_first.classList.remove('hidden');
        }
        // Check if the scroll position is at the end
        if (scrollContainer_first.scrollLeft_first + scrollContainer_first.clientHeight >= scrollContainer_first.scrollHeight) {
            scrollRight_first.classList.add('hidden');
        } else {
            scrollRight_first.classList.remove('hidden');
        }
    }
    // Scroll left on button click
    scrollLeft_first.addEventListener('click', () => {
        scrollContainer_first.scrollBy({ top: -50, behavior: 'smooth' });
    });
    // Scroll right on button click
    scrollRight_first.addEventListener('click', () => {
        scrollContainer_first.scrollBy({ top: 50, behavior: 'smooth' });
    });
    // Update button visibility on scroll
    scrollContainer_first.addEventListener('scroll', updateButtonVisibility_first);
    // Initial button visibility check
    updateButtonVisibility_first();
    //playlists
    //artist list er kaaj
    let container = Array.from(document.getElementsByClassName("container"));
    container.forEach(e => {
        e.addEventListener('mouseover', () => {
            e.firstElementChild.firstElementChild.style.top = '120px';
            e.firstElementChild.firstElementChild.style.right = '25px';
            e.firstElementChild.firstElementChild.style.opacity = '1';
            e.style.transform = 'scale(1.05)';
        })
        e.addEventListener('mouseout', () => {
            e.firstElementChild.firstElementChild.style.top = '170px';
            e.firstElementChild.firstElementChild.style.right = '25px';
            e.firstElementChild.firstElementChild.style.opacity = '0';
            e.style.transform = 'inherit';
        })
    });
    document.getElementById("right-main").firstElementChild.nextElementSibling.lastElementChild.firstElementChild.nextElementSibling.setAttribute('id', "scrollContainer_second");
    let scrollContainer_second = document.getElementById('scrollContainer_second');
    scrollContainer_second.previousElementSibling.setAttribute('id', 'scrollLeft_second')
    scrollContainer_second.nextElementSibling.setAttribute('id', 'scrollRight_second')
    let scrollLeft_second = document.getElementById('scrollLeft_second');
    let scrollRight_second = document.getElementById('scrollRight_second');

    function updateButtonVisibility_second() {
        // Check if the scroll position is at the start
        if (scrollContainer_second.scrollLeft_second === 0) {
            scrollLeft_second.classList.add('hidden');
        } else {
            scrollLeft_second.classList.remove('hidden');
        }
        // Check if the scroll position is at the end
        if (scrollContainer_second.scrollLeft_second + scrollContainer_second.clientWidth >= scrollContainer_second.scrollWidth) {
            scrollRight_second.classList.add('hidden');
        } else {
            scrollRight_second.classList.remove('hidden');
        }
    }
    // Scroll left on button click
    scrollLeft_second.addEventListener('click', () => {
        scrollContainer_second.scrollBy({ left: -100, behavior: 'smooth' });
    });
    // Scroll right on button click
    scrollRight_second.addEventListener('click', () => {
        scrollContainer_second.scrollBy({ left: 100, behavior: 'smooth' });
    });
    // Update button visibility on scroll
    scrollContainer_second.addEventListener('scroll', updateButtonVisibility_second);
    // Initial button visibility check
    updateButtonVisibility_second();

    
    document.getElementById("main-library-svg").addEventListener('click', () => {
        let left_main = document.getElementById("left-main");
        console.log(left_main.offsetWidth);
        let currentWidth = parseInt(window.getComputedStyle(left_main).width);
        if (currentWidth === 80) {
            document.getElementById("main-library-svg").src = "svg/collapse.svg";
            left_main.style.width = "200px";

            Array.from(document.getElementById("scrollContainer_first").getElementsByClassName("all_song_list")).forEach(e => {
                e.style.width = "300px";
            });
            //"show wishlist" will be visible
            document.getElementById("your-library-section").nextElementSibling.lastElementChild.style.display = "inline";
            //"Your library" will be visible
            document.getElementById("your-library-section").firstElementChild.lastElementChild.style.display = "inline";
            //"+" will be visible
            document.getElementById("your-library-section").lastElementChild.firstElementChild.style.display = "inline";


            //Your liked songs part and lineheight will be visible
            document.getElementById("kalu").lastElementChild.style.display = "block";
            document.getElementById("kalu").lastElementChild.firstElementChild.style.lineHeight = "20px";

            //artist name
            try {
                const element = document.getElementById("library").lastElementChild.firstElementChild.firstElementChild.nextElementSibling;
            
                if (element) {
                    element.style.display = "block";
                } else {
                    throw new Error("Element not found.");
                }
            } catch (error) {
                console.error("An error occurred:", error.message);
            }
            // document.getElementById("library").lastElementChild.firstElementChild.firstElementChild.nextElementSibling.style.display = "block";

            Array.from(document.getElementsByClassName("artist_song_count")).forEach(e => {
                //song name in artist list
                e.firstElementChild.nextElementSibling.style.display = "block"
                e.firstElementChild.nextElementSibling.style.fontSize = "12px"
            });

            Array.from(document.getElementById("library").firstElementChild.getElementsByClassName("all_song_list")).forEach(e => {
                //song name wishlist
                e.firstElementChild.nextElementSibling.style.display = "block";
                e.firstElementChild.nextElementSibling.style.fontSize = "12px";
            });


        } else if (currentWidth < 200) {
            document.getElementById("main-library-svg").src = "svg/expand.svg";
            left_main.style.width = "80px";
            Array.from(document.getElementById("scrollContainer_first").getElementsByClassName("all_song_list")).forEach(e => {
                e.style.width = "inherit";
            });

            //"show wishlist" will be visible
            document.getElementById("your-library-section").nextElementSibling.lastElementChild.style.display = "none";

            //"Your library" will be visible
            document.getElementById("your-library-section").firstElementChild.lastElementChild.style.display = "none";

            //"+" will be visible
            document.getElementById("your-library-section").lastElementChild.firstElementChild.style.display = "none";

            //Your liked songs part and lineheight will be visible
            document.getElementById("kalu").lastElementChild.style.display = "none";

            //artist name
            try {
                const element = document.getElementById("library").lastElementChild.firstElementChild.firstElementChild.nextElementSibling;
            
                if (element) {
                    element.style.display = "none";
                } else {
                    throw new Error("Element not found.");
                }
            } catch (error) {
                console.error("An error occurred:", error.message);
            }
            // document.getElementById("library").lastElementChild.firstElementChild.firstElementChild.nextElementSibling.style.display = "none";

            Array.from(document.getElementsByClassName("artist_song_count")).forEach(e => {
                //song name in artist list
                e.firstElementChild.nextElementSibling.style.display = "none"
            });

            Array.from(document.getElementById("library").firstElementChild.getElementsByClassName("all_song_list")).forEach(e => {
                //song name wishlist
                e.firstElementChild.nextElementSibling.style.display = "none";
            });
        }

    })
    document.getElementById("your-library-section").nextElementSibling.firstElementChild.addEventListener('click', () => {
        if (parseInt(window.getComputedStyle(document.getElementById("left-main")).width) < 200 && parseInt(window.getComputedStyle(document.getElementById("left-main")).width) != 80) {
            //Your liked songs part and lineheight will be visible
            document.getElementById("kalu").lastElementChild.style.display = "block";
            document.getElementById("kalu").lastElementChild.firstElementChild.style.lineHeight = "20px";

            Array.from(document.getElementById("library").firstElementChild.getElementsByClassName("all_song_list")).forEach(e => {
                //song name wishlist
                e.firstElementChild.nextElementSibling.style.display = "block";
                e.firstElementChild.nextElementSibling.style.fontSize = "12px";
            });
        }
        else if (parseInt(window.getComputedStyle(document.getElementById("left-main")).width) === 80) {
            //Your liked songs part and lineheight will be visible
            document.getElementById("kalu").lastElementChild.style.display = "none";
            document.getElementById("kalu").lastElementChild.firstElementChild.style.lineHeight = "20px";
            Array.from(document.getElementById("library").firstElementChild.getElementsByClassName("all_song_list")).forEach(e => {
                //song name wishlist
                e.firstElementChild.nextElementSibling.style.display = "none";
                e.firstElementChild.nextElementSibling.style.fontSize = "12px";
            });
        }
    })
    const artist_songs_arr = [arr_sonu, arr_ar, arr_rahat, arr_shreya, arr_kk, arr_javed]
    Array.from(document.querySelectorAll('.playlist-row')).forEach((e, i) => {
        let btn_of_artist = e.firstElementChild.firstElementChild.firstElementChild;
        btn_of_artist.addEventListener('click', () => {
            let mufasa = "";
            for (let index = 0; index < artist_songs_arr[i].length; index++) {
                mufasa +=
                    `<div class = "artist_song_count">
                    <img src="${artist_songs_arr[i][index].poster}" alt="lol">
                    <div>${artist_songs_arr[i][index].only_name_of_song}</div>
                    <img title="Play/Pause" src="svg/play.svg" alt="">
                </div>`;
            }
            let artist_poster = e.firstElementChild.firstElementChild.nextElementSibling.firstElementChild.src;
            let artist_name = e.firstElementChild.lastElementChild.innerHTML;
            library(artist_poster, artist_name, mufasa);
            if (btn_of_artist.src.endsWith("svg/play.svg")) {
                play_button_artist();
                btn_of_artist.src = "svg/pause.svg";
                libraries.lastElementChild.firstElementChild.lastElementChild.setAttribute('id', "playlists-songs");
                let song_list = document.getElementById("playlists-songs");
                song_list.firstElementChild.lastElementChild.src = "svg/pause.svg";
                for (let j = 0; j < songs_arr.length; j++) {
                    if (song_list.children[0].firstElementChild.nextElementSibling.textContent == songs_arr[j].only_name_of_song) {
                        currentIndex = j;
                    }
                }
                audio.src = songs_arr[currentIndex].song_link;
                audio.play();
                updatecurrent_audio();
                document.getElementById("playpause").src = "svg/pause.svg";
                play_button_wishlist();
                plus_bar();
                for (let index = 0; index < artist_songs_arr[i].length; index++) {
                    song_list.children[index].lastElementChild.addEventListener('click', () => {
                        if (song_list.children[index].lastElementChild.src.endsWith("svg/play.svg")) {
                            play_button_library_artist();
                            song_list.children[index].lastElementChild.src = "svg/pause.svg";
                            for (let k = 0; k < songs_arr.length; k++) {
                                if (song_list.children[index].firstElementChild.nextElementSibling.textContent == songs_arr[k].only_name_of_song) {
                                    currentIndex = k;
                                }
                            }
                            audio.src = songs_arr[currentIndex].song_link;
                            audio.play();
                            play_button_all();
                            play_button_wishlist();
                            document.getElementById("playpause").src = "svg/pause.svg";
                            btn_of_artist.src = "svg/pause.svg"
                            updatecurrent_audio();
                            plus_bar();
                        }
                        else {
                            song_list.children[index].lastElementChild.src = "svg/play.svg"
                            audio.pause();
                            document.getElementById("playpause").src = "svg/play.svg";
                            btn_of_artist.src = "svg/play.svg";
                            play_button_all();
                            play_button_wishlist();
                            plus_bar();
                        }
                    });
                }
            }
            else {
                btn_of_artist.src = "svg/play.svg";
                libraries.lastElementChild.innerHTML = "";
                document.getElementById("playpause").src = "svg/play.svg";
                audio.pause();
            }
            if (parseInt(window.getComputedStyle(document.getElementById("left-main")).width) < 200 && parseInt(window.getComputedStyle(document.getElementById("left-main")).width) !== 80) {
                Array.from(document.getElementsByClassName("artist_song_count")).forEach(element => {
                    document.getElementById("library").lastElementChild.firstElementChild.firstElementChild.nextElementSibling.style.display = "block";
                    element.firstElementChild.nextElementSibling.style.display = "block"
                    element.firstElementChild.nextElementSibling.style.fontSize = "12px"
                    element.style.marginRight = "10px";
                })
            }
            else if (parseInt(window.getComputedStyle(document.getElementById("left-main")).width) === 80) {
                Array.from(document.getElementsByClassName("artist_song_count")).forEach(element => {
                    document.getElementById("library").lastElementChild.firstElementChild.firstElementChild.nextElementSibling.style.display = "none";
                    element.firstElementChild.nextElementSibling.style.display = "none"
                    element.firstElementChild.nextElementSibling.style.fontSize = "12px"
                    element.style.marginRight = "10px";
                })
            }
        });
    });

})()

