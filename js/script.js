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

});

// Define the voice files used in the game.
monogatari.assets ('voices', {

});

// Define the sounds used in the game.
monogatari.assets ('sounds', {

});

// Define the videos used in the game.
monogatari.assets ('videos', {
	'video1': 'movie1.mp4',
	'video2': 'movie2.mp4',
	'materi1': 'materi1.mp4'
});

// Define the images used in the game.
monogatari.assets ('images', {
	'inov1': 'inovasi1.png',
	'inov2': 'inovasi2.png',
	'inov3': 'inovasi3.png',
	'inov4': 'inovasi4.png',
	'inov5': 'inovasi5.png',
	'inov6': 'inovasi6.png'
});

// Define the backgrounds for each scene.
monogatari.assets ('scenes', {
	'bg1': 'bg1.png',
	'bg2': 'bg2.png',
	'inovasi1': 'inovasi1.png',
	'inovasi2': 'inovasi2.png',
	'inovasi3': 'inovasi3.png',
	'inovasi4': 'inovasi4.png',
	'inovasi5': 'inovasi5.png',
	'inovasi6': 'inovasi6.png'
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
			d9: 'd9.png',
			d10: 'd10.png',
			d11: 'd11.png',
			d12: 'd12.png'
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
			s6: 's6.png',
			s7: 's7.png',
			s8: 's8.png',
			s9: 's9.png',
			s10: 's10.png',
			s11: 's11.png',
			s12: 's12.png'
		}
	}
});

monogatari.script ({
	// The game starts here.
	'Start': [
		'show scene #f7f6f6',
		//'show notification Welcome',
		//{
		//	'Input': {
		//		'Text': 'Siapa Namamu?',
		//		'Validation': function (input) {
		//			return input.trim ().length > 0;
		//		},
		//		'Save': function (input) {
		//			this.storage ({
		//				player: {
		//					name: input
		//				}
		//			});
		//			return true;
		//		},
		//		'Revert': function () {
		//			this.storage ({
		//				player: {
		//					name: ''
		//				}
		//			});
		//		},
		//		'Warning': 'Ayo perkenalkan dirimu'
		//	}
		//},
		//'Halo {{player.name}}, apa yang ingin kamu pelajari hari ini',
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
				'inovasi_indonesia': {
					'Text': 'Inovasi Indonesia',
					'Do': 'jump inovasi_indonesia'
				}
			}
		}
	],

	'vaksin1': [
		'show video video1 modal immersive with close',
		'show background bg1 with fadeIn',
		'show character d d8 at left with fadeIn',
		'd Halo semua',
		'show character d d12 at left with fadeIn',
		'd Apakah kalian tahu jumlah Kasus covid-19 di Indonesia?',
		'show character d d3 at left with fadeIn',
		'd Sampai tanggal 4 Januari 2021, Kementrian Kesehatan melaporkan 772.103 kasus konfirmasi covid-19 dengan 22.991 kasus meninggal',
		'show character d d12 at left with fadeIn',
		'd Eiits, tapi tunggu dulu, apakah kalian tahu mengenai covid-19?',
		'show character d d11 at left with fadeIn',
		'd Hmm… kita cari tahu bareng-bareng yuk!',
		'show character s s4 at right with fadeIn',
		'show character d d12 at left with fadeIn',
		'd Sebenarnya Covid-19 itu apa sih?',
		'show character s s3 at right with fadeIn',
		's Coronavirus Disease 2019 atau disingkat COVID-19, adalah penyakit menular yang disebabkan oleh virus yaitu SARS-CoV-2. SARS-CoV-2 ini lebih menular dibandingkan dengan SARS-CoV dan MERS-CoV.',
		'show character d d10 at left with fadeIn',
		'd Wah serem juga ya, sebenernya gimana sih gejala covid-19?',
		's Gejala covid-19 yang paling umum adalah demam, rasa lelah, dan batuk kering.',
		's Beberapa pasien juga mungkin mengalami rasa nyeri, hidung tersumbat, pilek, hilang penciuman, sakit tenggorokan, diare, bahkan ruam kulit.',
		's Namun, ada juga pasien covid-19 yang tidak menunjukkan gejala apapun.',
		'show character d d12 at left with fadeIn',
		'd Terus biar ngga tertular gimana ya?',
		's Covid-19 bisa ditularkan dari orang yang bergejala pada jarak dekat (yaitu kurang dari 1 meter) melalui droplet.',
		's Bisa juga ditularkan dari benda yang digunakan oleh orang yang terinfeksi.',
		's Maka dari itu, kita harus selalu mematuhi 3M yaitu Mencuci tangan, Memakai masker, dan Menjaga jarak.',
		'show character d d1 at left with fadeIn',
		'd Oh gitu… makasih banget ya informasinya!',
		'show character s s1 at right with fadeIn',
		's Kalau mau tau lebih lanjut, jangan kemana-mana ya!',
		
		//'show video materi1 modal immersive with close',
		'show video video2 modal immersive with close',
		'show character d d4 at left with fadeIn',
		'd Terima kasih telah menonton video ini.',
		'show character s s11 at right with fadeIn',
		's Jangan lupa untuk share informasi ini ke teman-teman dan orang-orang di sekitarmu ya.',
		'show character d d1 at left with fadeIn',
		'd Supaya lebih banyak orang yang teredukasi mengenai vaksinasi covid-19 di Indonesia.',
		'show character s s6 at right with fadeIn',
		's Sampai jumpa di video selanjutnya',
		'end'
	],

	'vaksin2': [
		'show video video1 modal immersive with close',
		'show background bg2 with fadeIn',
		'show character s s1 with fadeIn',
		's Halo semua,',
		's Di video sebelumnya, kita sudah membahas mengenai apa itu covid-19, vaksin, dan hoax tentang vaksin.',
		's Sekarang yuk kita membahas mengenai rencana pemerintah untuk program vaksin di Indonesia.',
		
		'show video video2 modal immersive with close',

		'show character d d1 with fadeIn at left',
		'show character s s1 with fadeIn at right',
		'd Terima kasih telah menonton video ini.',
		's Jangan lupa untuk share informasi ini ke teman-teman dan orang-orang di sekitarmu ya.',
		'd Supaya lebih banyak orang yang teredukasi mengenai vaksinasi covid-19 di Indonesia.',
		's Sampai jumpa',
		'end'
	],

	'inovasi_indonesia': [
		'show scene #f7f6f6',
		{
			'Choice': {
				'Dialog': 'Pilih apa yang ingin dilakukan',
				'genose': {
					'Text': 'GeNose',
					'Do': 'jump genose'
				},
				'aumr': {
					'Text': 'AUMR',
					'Do': 'jump aumr'
				},
				'robotraisa': {
					'Text': 'Robot RAISA',
					'Do': 'jump robotraisa'
				},
				'imunogama': {
					'Text': 'Jamu Herbal ImunoGama',
					'Do': 'jump imunogama'
				},
				'bclugm': {
					'Text': 'BCL-UGM',
					'Do': 'jump bclugm'
				},
				'rdtmicrochip': {
					'Text': 'RDT Microchip',
					'Do': 'jump rdtmicrochip'
				}
			}
		}
	],

	'genose': [
		'show scene inovasi1 with fadeIn',
		'',
		'jump Start'
	],
	'aumr': [
		'show scene inovasi2 with fadeIn',
		'',
		'jump Start'
	],
	'robotraisa': [
		'show scene inovasi3 with fadeIn',
		'',
		'jump Start'
	],
	'imunogama': [
		'show scene inovasi4 with fadeIn',
		'',
		'jump Start'
	],
	'bclugm': [
		'show scene inovasi5 with fadeIn',
		'',
		'jump Start'
	],
	'rdtmicrochip': [
		'show scene inovasi6 with fadeIn',
		'',
		'jump Start'
	]
});