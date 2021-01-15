/* global monogatari */

// Define the messages used in the game.
monogatari.action ('message').messages ({
	'Help': {
		title: 'Help',
		subtitle: 'Some useful Links',
		body: `
			<p><a href='https://developers.monogatari.io/documentation/'>Documentation</a> - Everything you need to know.</p>
			<p><a href='https://monogatari.io/demo/'>Demo</a> - A simple Demo.</p>
		`
	}
});

// Define the notifications used in the game
monogatari.action ('notification').notifications ({
	'Welcome': {
		title: 'Welcome',
		body: 'This is the Monogatari VN Engine',
		icon: ''
	}
});

// Define the Particles JS Configurations used in the game
monogatari.action ('particles').particles ({

});

// Define the canvas objects used in the game
monogatari.action ('canvas').objects ({

});

// Credits of the people involved in the creation of this awesome game
monogatari.configuration ('credits', {

});


// Define the images that will be available on your game's image gallery
monogatari.assets ('gallery', {

});

// Define the music used in the game.
monogatari.assets ('music', {
	'bm1': 'bm1.mp3'
});

// Define the voice files used in the game.
monogatari.assets ('voices', {
	'o1d1': 'o1d1.mp3',
	'o1d2': 'o1d2.mp3',
	'o1d3': 'o1d3.mp3',
	'o1d4': 'o1d4.mp3',
	'o1d5': 'o1d5.mp3',
	'o1d6': 'o1d6.mp3',
	'o1d7': 'o1d7.mp3',
	'o1d8': 'o1d8.mp3',
	'o1d9': 'o1d9.mp3',
	'o1d10': 'o1d10.mp3',
	'o1s1': 'o1s1.mp3',
	'o1s2': 'o1s2.mp3',
	'o1s3': 'o1s3.mp3',
	'o1s4': 'o1s4.mp3',
	'o1s5': 'o1s5.mp3',
	'o1s6': 'o1s6.mp3',
	'o1s7': 'o1s7.mp3',
	'o1s8': 'o1s8.mp3',
	'c1d1': 'c1d1.mp3',
	'c1d2': 'c1d2.mp3',
	'c1s1': 'c1s1.mp3',
	'c1s2': 'c1s2.mp3',
	'o2s1': 'o2s1.mp3',
	'c2d1': 'c2d1.mp3',
	'c2d2': 'c2d2.mp3',
	'c2s1': 'c2s1.mp3',
	'c2s2': 'c2s2.mp3'
});

// Define the sounds used in the game.
monogatari.assets ('sounds', {

});

// Define the videos used in the game.
monogatari.assets ('videos', {
	'video1': 'movie1.mp4',
	'video2': 'movie2.mp4',
	'materi1': 'materi1.mp4',
	'materi2': 'materi2.mp4'
});

// Define the images used in the game.
monogatari.assets ('images', {

});

// Define the backgrounds for each scene.
monogatari.assets ('scenes', {
	'bg1': 'bg1.png'
});


// Define the Characters
monogatari.characters ({
	'd': {
		name: 'Devi',
		color: '#5bcaff',
		sprites: {
			d1: 'd1.png',
			d2: 'd2.png',
			d3: 'd3.png',
			d4: 'd4.png',
			d5: 'd5.png',
			d6: 'd6.png',
			d7: 'd7.png',
			d8: 'd8.png',
			d9: 'd9.png'
		}
	},
	's': {
		name: 'Sari',
		color: '#5bcaff',
		sprites: {
			s1: 's1.png',
			s2: 's2.png',
			s3: 's3.png',
			s4: 's4.png',
			s5: 's5.png',
			s6: 's6.png'
		}
	},

	'c': {
		name: 'COVID-19',
		color: '#DF0E0E',
		sprites: {
			c1: 'c1.png',
		}
	}
});

monogatari.script ({
	// The game starts here.
	'Start': [
		'show scene #f7f6f6',
		{
			'Choice': {
				'Dialog': 'Pilih apa yang ingin dilakukan',
				'vaksin1': {
					'Text': 'Sosilasisasi vaksin 1',
					'Do': 'jump vaksin1'
				},
				'vaksin2': {
					'Text': 'Sosialisasi vaksin 2',
					'Do': 'jump vaksin2'
				},
				'quiz': {
					'Text': 'Kalahkan COVID-19',
					'Do': 'jump quiz'
				}
			}
		}
	],

	'vaksin1': [
		'show video video1 modal immersive with close',
		'',
		'show background bg1 with fadeIn',
		'play music bm1 with loop with volume 10',
		'show character d d1 at left with fadeIn',
		'play voice o1d1',
		'd Halo semua',
		'show character d d2 at left with fadeIn',
		'play voice o1d2',
		'd Apakah kalian tahu jumlah Kasus covid-19 di Indonesia?',
		'show character d d3 at left with fadeIn',
		'play voice o1d3',
		'd Sampai tanggal 4 Januari 2021, Kementrian Kesehatan melaporkan 772.103 kasus konfirmasi covid-19 dengan 22.991 kasus meninggal',
		'show character d d4 at left with fadeIn',
		'play voice o1d4',
		'd Eiits, tapi tunggu dulu, apakah kalian tahu mengenai covid-19?',
		'show character d d5 at left with fadeIn',
		'play voice o1d5',
		'd Hmm… kita cari tahu bareng-bareng yuk!',
		'show character d d2 at left with fadeIn',
		'play voice o1d6',
		'd Sebenarnya Covid-19 itu apa sih?',
		'show character s s1 at right with fadeIn',
		'play voice o1s1',
		's Coronavirus Disease 2019 atau disingkat COVID-19, adalah penyakit menular yang disebabkan oleh virus yaitu SARS-CoV-2. SARS-CoV-2 ini lebih menular dibandingkan dengan SARS-CoV dan MERS-CoV.',
		'show character d d6 at left with fadeIn',
		'play voice o1d7',
		'd Wah serem juga ya,',
		'show character d d2 at left with fadeIn',
		'play voice o1d8',
		'd sebenernya gimana sih gejala covid-19?',
		'show character s s2 at right with fadeIn',
		'play voice o1s2',
		's Gejala covid-19 yang paling umum adalah demam, rasa lelah, dan batuk kering.',
		'show character s s1 at right with fadeIn',
		'play voice o1s3',
		's Beberapa pasien juga mungkin mengalami rasa nyeri, hidung tersumbat, pilek, hilang penciuman, sakit tenggorokan, diare, bahkan ruam kulit.',
		'play voice o1s4',
		'show character s s2 at right with fadeIn',
		's Namun, ada juga pasien covid-19 yang tidak menunjukkan gejala apapun.',
		'show character d d7 at left with fadeIn',
		'play voice o1d9',
		'd Terus biar ngga tertular gimana ya?',
		'show character s s1 at right with fadeIn',
		'play voice o1s5',
		's Covid-19 bisa ditularkan dari orang yang bergejala pada jarak dekat (yaitu kurang dari 1 meter) melalui droplet.',
		'show character s s2 at right with fadeIn',
		'play voice o1s6',
		's Bisa juga ditularkan dari benda yang digunakan oleh orang yang terinfeksi.',
		'show character s s4 at right with fadeIn',
		'play voice o1s7',
		's Maka dari itu, kita harus selalu mematuhi 3M yaitu Mencuci tangan, Memakai masker, dan Menjaga jarak.',
		'show character d d8 at left with fadeIn',
		'play voice o1d10',
		'd Oh gitu… makasih banget ya informasinya!',
		'show character s s3 at right with fadeIn',
		'play voice o1s8',
		's Kalau mau tau lebih lanjut, jangan kemana-mana ya!',
		'stop music bm1',
		//'show video materi1 modal immersive with close',
		"",
		'play music bm1 with loop with volume 10',
		'show character d d9 at left with fadeIn',
		'play voice c1d1',
		'd Terima kasih telah menonton video ini.',
		'show character s s5 at right with fadeIn',
		'play voice c1s1',
		's Jangan lupa untuk share informasi ini ke teman-teman dan orang-orang di sekitarmu ya.',
		'show character d d8 at left with fadeIn',
		'play voice c1d2',
		'd Supaya lebih banyak orang yang teredukasi mengenai vaksinasi covid-19 di Indonesia.',
		'show character d d1 at right with fadeIn',
		'show character s s6 at right with fadeIn',
		'play voice c1s2',
		's Sampai jumpa di video selanjutnya',
		'stop music bm1',
		'show video video2 modal immersive with close',
		'end'
	],

	'vaksin2': [
		'show video video1 modal immersive with close',
		'',
		'play music bm1 with loop with volume 10',
		'show background bg1 with',
		'show character s s6 with fadeIn',
		'play voice o2s1',
		's Halo semua, di video sebelumnya, kita sudah membahas mengenai apa itu covid-19, vaksin, dan hoax tentang vaksin. Sekarang yuk kita membahas mengenai rencana pemerintah untuk program vaksin di Indonesia.',
		'hide character s',
		'stop music bm1',
		//'show video materi2 modal immersive with close',
		'play music bm1 with loop with volume 10',
		'show character d d9 with fadeIn at left',
		'show character s s5 with fadeIn at right',
		'play voice c2d1',
		'd Terima kasih telah menonton video ini.',
		'play voice c2s1',
		's Jangan lupa untuk share informasi ini ke teman-teman dan orang-orang di sekitarmu ya.',
		'show character d d8 with fadeIn at left',
		'play voice c2d2',
		'd Supaya lebih banyak orang yang teredukasi mengenai vaksinasi covid-19 di Indonesia.',
		'show character d d1 with fadeIn at left',
		'show character s s3 with fadeIn at right',
		'play voice c2s2',
		's Sampai jumpa',
		'stop music bm1',
		'show video video2 modal immersive with close',
		'end'
	],

	'quiz': [
		'show character c c1 with fadeIn at center',
		'c jika kau ingin mengalahkanku, kau harus dapat menjawab pertanyaan-pertanyaanku dengan benar',
		'baik siapa takut, akan ku kalahkan kau',
		{
			'Choice': {
				'Dialog': 'Benar atau Salah? Vaksin adalah produk berisi antigen yang dapat menimbulkan kekebalan terhadap penyakit tertentu?',
				'j1s1': {
					'Text': 'Benar',
					'Do': 'Karena Aku tahu Vaksin juga dapat mengurangi penularan penyakit dan menurunkan angka kesakitan dan kematian.'
				},
				'j2s1': {
					'Text': 'Salah',
					'Do': 'c hahah jawabanmu salah, Vaksin juga dapat mengurangi penularan penyakit dan menurunkan angka kesakitan dan kematian.'
				}
			}
		},
		'c pertanyaan kedua',
		{
			'Choice': {
				'Dialog': 'Benar atau Salah? Orang yang memiliki penyakit kronis atau sedang menjalani perawatan penyakit kronis (seperti kemoterapi) tidak boleh mendapatkan vaksin dan harus menunggu sebelum mendapatkannya?',
				'j1s2': {
					'Text': 'Benar',
					'Do': 'Hal ini dikarenakan selain orang yang memiliki penyakit kronis bawaan, orang-orang yang memiliki alergi parah dan sedang sakit parah/demam tinggi sebelum di vaksin juga tidak boleh mendapatkan vaksin dan harus menunggu hingga kondisi medisnya membaik.'
				},
				'j2s2': {
					'Text': 'Salah',
					'Do': 'c Kau salah, Selain orang yang memiliki penyakit kronis bawaan, orang-orang yang memiliki alergi parah dan sedang sakit parah/demam tinggi sebelum di vaksin juga tidak boleh mendapatkan vaksin dan harus menunggu hingga kondisi medisnya membaik.'
				}
			}
		},
		'c pertanyaan ketiga',
		{
			'Choice': {
				'Dialog': 'Benar atau Salah? Dengan cakupan vaksinasi yang tinggi di masyarakat akan menyebabkan kekebalan kelompok atau herd immunity?',
				'j1s2': {
					'Text': 'Benar',
					'Do': 'c Cakupan vaksinasi yang lebih dari 60%, dapat berdampak pada kekebalan kelompok suatu penyakit di masyarakat luas.'
				},
				'j2s2': {
					'Text': 'Salah',
					'Do': 'c hahah jawabanmu salah'
				}
			}
		},
		'c pertanyaan keempat',
		{
			'Choice': {
				'Dialog': 'Benar atau Salah? Vaksin Covid-19 dapat menyebabkan kelumpuhan wajah?',
				'j1s2': {
					'Text': 'Benar',
					'Do': 'c haha jawabanmu salah'
				},
				'j2s2': {
					'Text': 'Salah',
					'Do': 'c Hasil uji klinis saat ini, diketahui efek samping Vaksin Covid-19 adalah efek samping umum seperti kelelahan, demam, dan sakit kepala'
				}
			}
		},
		'c pertanyaan kelima',
		{
			'Choice': {
				'Dialog': 'Benar atau Salah? Vaksin Covid-19 mengandung jaringan kera hijau Afrika sehingga tidak halal digunakan?',
				'j1s2': {
					'Text': 'Benar',
					'Do': 'c haha jawabanmu salah'
				},
				'j2s2': {
					'Text': 'Salah',
					'Do': 'Produk akhir Vaksin Covid-19 sudah tidak mengandung sel kera hijau Afrika serta telah mendapat fatwa Halal dan Suci dari MUI pada 8 Januari 2021'
				}
			}
		},
		'c pertanyaan keenam',
		{
			'Choice': {
				'Dialog': 'Benar atau Salah? Prioritas pertama penerima vaksin adalah tenaga kesehatan?',
				'j1s2': {
					'Text': 'Benar',
					'Do': 'Prioritas pertama penerima vaksin Covid-19 adalah para tenaga kesehatan yang masuk dalam Tahap 1 Pelaksanaan Vaksinasi pada Januari s/d April 2021'
				},
				'j2s2': {
					'Text': 'Salah',
					'Do': 'c haha jawabanmu salah'
				}
			}
		},
		'c pertanyaan ketujuh',
		{
			'Choice': {
				'Dialog': 'Benar atau Salah? Prioritas pertama penerima vaksin adalah tenaga kesehatan?',
				'j1s2': {
					'Text': 'Benar',
					'Do': 'c haha jawabanmu salah'
				},
				'j2s2': {
					'Text': 'Salah',
					'Do': 'Vaksin Covid-19 yang digunakan di Indonesia adalah Vaksin Sinovac yang diproduksi di China yang telah tiba di Indonesia sejak Desember 2020'
				}
			}
		},
		'c pertanyaan kedelapan',
		{
			'Choice': {
				'Dialog': 'Benar atau Salah? Penerima Vaksin Covid-19 akan mendapatkan pemberitahuan SMS dari PEDULICOVID?',
				'j1s2': {
					'Text': 'Benar',
					'Do': 'Sasaran penerima vaksinasi akan menerima pemberitahuan SMS dari PEDULICOVID dan kemudian melakukan registrasi untuk memilih jadwal dan tempat vaksinasi.'
				},
				'j2s2': {
					'Text': 'Salah',
					'Do': 'c haha jawabanmu salah'
				}
			}
		},
	]
});