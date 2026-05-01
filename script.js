const playlist = [
  {
    title: "Dive Back In Time",
    artist: "白鲨JAWS",
    src: "demo.mp3",
    cover: "demo.jpg"
  }
];

const audio = document.getElementById("audio");
const title = document.getElementById("title");
const artist = document.getElementById("artist");
const cover = document.getElementById("cover");
const list = document.getElementById("playlist");

let index = 0;

function loadSong(i) {
  const song = playlist[i];
  audio.src = song.src;
  title.textContent = song.title;
  artist.textContent = song.artist;
  cover.src = song.cover;
}

// 生成播放列表
playlist.forEach((song, i) => {
  const li = document.createElement("li");
  li.textContent = song.title;
  li.onclick = () => {
    index = i;
    loadSong(index);
    audio.play();
  };
  list.appendChild(li);
});

// 自动下一首
audio.addEventListener("ended", () => {
  index = (index + 1) % playlist.length;
  loadSong(index);
  audio.play();
});

loadSong(0);