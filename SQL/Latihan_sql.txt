/* 
Nama    : Muhammad Naufal Baihaqi
NRP     : 5025211103
*/

-- NOMOR 1
SELECT nama, ukt FROM `mci2-365013.latihan_day1.mahasiswa`
ORDER BY ukt DESC

-- NOMOR 2
SELECT nama, ukt FROM `mci2-365013.latihan_day1.mahasiswa`
ORDER BY ukt DESC, nama

-- NOMOR 3
SELECT COUNT(*) AS Jumlah_Mahasiswa FROM `mci2-365013.latihan_day1.mahasiswa`
WHERE ipk >= 3.5 AND semester = 8

-- NOMOR 4
SELECT nama, ukt, 
CASE 
WHEN ukt <= 1000000 THEN 'A'
WHEN ukt > 1000000 AND ukt <= 2000000 THEN 'B'
WHEN ukt > 2000000 THEN 'C'
END AS Golongan
FROM `mci2-365013.latihan_day1.mahasiswa`

-- NOMOR 5
SELECT nama, semester, ipk FROM `mci2-365013.latihan_day1.mahasiswa` data1
WHERE ipk = (
  SELECT MAX(ipk) FROM `mci2-365013.latihan_day1.mahasiswa` data2
  WHERE data1.semester = data2.semester
)
ORDER BY semester, nama
