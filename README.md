🎵 Discord Music Bot

Bot Discord musik modern dengan dukungan berbagai fitur pemutar lagu dari YouTube dan antrian dinamis. Dibangun menggunakan Node.js, discord.js, dan distube, serta dikendalikan sepenuhnya lewat Slash Commands.

✨ Fitur Utama:

🔎 /play [judul/url] — Putar musik dari YouTube, SoundCloud, dll.

⏯️ /pause, /resume, /stop, /skip — Kontrol penuh pemutaran lagu.

📜 /queue, /nowplaying — Lihat daftar lagu yang sedang dan akan diputar.

🔁 /loop, /shuffle, /clear — Kelola antrian dengan lebih fleksibel.

🔊 /volume — Ubah volume suara bot sesuai kebutuhan.

⚡ Respons cepat dan antarmuka slash command modern.

📦 Instalasi

Clone repo:
```bash
git clone https://github.com/username/discord-music-bot.git
cd discord-music-bot
```

Instal dependensi:
```bash
pip install -r requirements.txt
```

Atur .env:
```bash
DISCORD_TOKEN=YOUR_BOT_TOKEN
```

Jalankan bot:
```bash
python bot.py
```

| Command       | Fungsi                                     |
| ------------- | ------------------------------------------ |
| `/play`       | Memutar lagu dari YouTube                  |
| `/pause`      | Menjeda lagu yang sedang diputar           |
| `/resume`     | Melanjutkan lagu yang dijeda               |
| `/stop`       | Menghentikan lagu dan mengosongkan antrian |
| `/skip`       | Melewati lagu saat ini                     |
| `/queue`      | Menampilkan daftar lagu dalam antrian      |
| `/nowplaying` | Menampilkan info lagu yang sedang diputar  |
| `/volume`     | Mengatur volume bot                        |
| `/clear`      | Menghapus semua lagu dari antrian          |
| `/loop`       | Mengaktifkan/mematikan mode pengulangan    |
| `/shuffle`    | Mengacak lagu dalam antrian                |
| `/ping`       | Melihat latensi bot                        |
| `/help`       | Menampilkan daftar perintah bot            |

💡 Informasi Tambahan:

Bot ini hanya bisa digunakan jika kamu berada di voice channel.
Antrian lagu otomatis dihapus saat bot keluar dari voice channel.
Source audio didukung langsung dari YouTube (melalui yt-dlp).

🤝 Kontribusi:

Kontribusi terbuka untuk siapa pun! Kamu bisa membuat fitur baru, memperbaiki bug, atau meningkatkan performa bot. Silakan fork, edit, dan buat pull request.
