# Kelompok-1-LKPD-5

## Nama Anggota
1. Rizal (Project Manager) <br>
2. Sabrina (Reviewer/Tester dan Developer Navbar & Footer) <br>
3. Neng Dina (Developer Profil) <br>
4. Devit (Developer Anggota) <br>

Repository Pages: https://rizal69420.github.io/Kelompok-1-LKPD-5/
# Pertanyaan-Pertanyaan

## C. MISI 1
1. Apa fungsi GitHub Issue? <br>
=   GitHub Issue berfungsi sebagai media pencatatan tugas, perencanaan fitur, pelaporan bug, serta ruang diskusi proyek secara terstruktur dan transparan. <br>

2. Mengapa pekerjaan sebaiknya dicatat sebagai Issue? <br>
=   Agar pembagian tugas di dalam tim jelas, tidak terjadi duplikasi pengerjaan fitur yang sama, serta memudahkan Project Manager dalam memantau progress proyek. <br>

3. Apa perbedaan Issue dengan Commit? <br>
=   Issue: Merupakan catatan rencana kerja, instruksi tugas, atau pelaporan masalah (tahap perencanaan). <br>   
    Commit: Merupakan rekam jejak perubahan kode nyata yang disimpan ke dalam sistem Git (tahap eksekusi). <br>

## Q. SIMULASI MASALAH
Kasus 1: Andi dan Budi sama-sama mengerjakan halaman Profil. Apa yang seharusnya dilakukan? <br>
Jawaban: Project Manager harus menentukan satu penanggung jawab utama (Assignee) pada Issue Halaman Profil. Jika dikerjakan berdua, bagi tugas tersebut menjadi dua sub-bagian yang berbeda (misalnya: Andi mengerjakan struktur HTML dan Budi mengerjakan styling CSS) pada branch fitur masing-masing untuk menghindari merge conflict. <br>

Kasus 2: Satu Issue sudah dikerjakan tetapi belum ada Pull Request. Apakah Issue sebaiknya langsung dianggap selesai? <br>
Mengapa?: Tidak. Karena kode hasil pekerjaan yang ada di branch fitur belum ditinjau melalui Code Review dan belum di-merge ke branch utama (main). Issue baru dianggap selesai (Closed) setelah Pull Request disetujui dan kodenya resmi masuk ke main. <br>

Kasus 3: Budi memiliki 20 commit, sedangkan Andi hanya 5 commit. Apakah otomatis Budi memiliki kontribusi lebih besar? <br>
Jelaskan: Tidak otomatis. Jumlah commit tidak mengukur besarnya kontribusi. Andi bisa saja membuat 5 commit yang menyelesaikan fitur kompleks, sementara 20 commit milik Budi hanya berisi perbaikan kecil atau perbaikan kesalahan pengetikan. <br>

Kasus 4: Seseorang melakukan banyak commit tetapi sebagian besar hanya mengubah spasi atau format kode. Bagaimana cara menilai kontribusinya? <br>
Jawaban: Kontribusi dinilai dari fungsionalitas kode yang berhasil diselesaikan, kompleksitas fitur, serta kesesuaian hasil kerja dengan kebutuhan proyek, bukan hanya dari kuantitas commit atau jumlah baris kode. <br>

## S. REFLESKI TIM
a. Sebelum menggunakan GitHub Issues: <br>
    - Pembagian tugas kurang terstruktur, kemajuan proyek sulit dipantau secara langsung, dan berisiko adanya dua orang yang mengerjakan fitur yang sama tanpa disadari. <br>
b. Setelah menggunakan GitHub Issues: <br>
    - Alur kerja tim menjadi transparan, setiap anggota tahu persis tugas dan tanggung jawabnya (Assignee), serta integrasi kode ke branch main menjadi lebih aman. <br>
c. Hal yang paling membantu: <br>
    - Fitur pengait Issue dengan Pull Request (seperti kata kunci Closes #Issue), sehingga status pengerjaan otomatis tertutup saat kode di-merge oleh reviewer. <br>
d. Hal yang masih membingungkan: <br>
    - Mereviewkan Pull Request <br>
e. Perbaikan workflow tim: <br>
    - Memastikan setiap anggota selalu melakukan git pull origin main sebelum membuat branch baru, serta menuliskan pesan commit dan deskripsi Pull Request yang lebih informatif. <br>
