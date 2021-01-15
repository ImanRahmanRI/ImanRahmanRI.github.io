'use strict';
/* global Monogatari */
/* global monogatari */

/**
 * =============================================================================
 * This is the file where you should put all your custom JavaScript code,
 * depending on what you want to do, there are 3 different places in this file
 * where you can add code.
 *
 * 1. Outside the $_ready function: At this point, the page may not be fully
 *    loaded yet, however you can interact with Monogatari to register new
 *    actions, components, labels, characters, etc.
 *
 * 2. Inside the $_ready function: At this point, the page has been loaded, and
 *    you can now interact with the HTML elements on it.
 *
 * 3. Inside the init function: At this point, Monogatari has been initialized,
 *    the event listeners for its inner workings have been registered, assets
 *    have been preloaded (if enabled) and your game is ready to be played.
 *
 * You should always keep the $_ready function as the last thing on this file.
 * =============================================================================
 **/

const { $_ready, $_ } = Monogatari;

// 1. Outside the $_ready function:


$_ready (() => {
	// 2. Inside the $_ready function:

	monogatari.init ('#monogatari').then (() => {
		// 3. Inside the init function:
		monogatari.languageMetadata ('Indonesia', {
			code: 'id'
		});
		monogatari.translation ('Indonesia', {
			'AdvanceHelp': 'Untuk melanjutkan progress permainan, klik kiri atau sentuh diarea manapun atau tekan tombol spasi',
			'AllowPlayback': 'Klik disini untuk mengizinkan pengulangan suara',
			'Audio': 'Suara',
			'AutoPlay': 'Automatis',
			'AutoPlayButton': 'Automatis dinyalakan',
			'AutoPlaySpeed': 'Kecepatan Automatis',
		
			'Back': 'Kembali',
			'BackButton': 'Tombol Kembali',
		
			'Cancel': 'Batal',
			'Close': 'Tutup',
			'Confirm': 'Apakah Kamu mau keluar',
			'Credits': 'kredit',
		
			'Delete': 'Hapus',
			'DialogLogButton': 'Memunculkan catatan percakapan',
		
			'FullScreen': 'Layar Penuh',
		
			'Gallery': 'Foto',
		
			'Help': 'Bantuan',
			'Hide': 'Sembunyikan',
			'HideButton': 'Menyembunyikan kotak teks',
		
			'iOSAudioWarning': 'Pengaturan audio tidak mendukung pada iOS',
		
			'KeyboardShortcuts': 'Pintasan Keyboard',
		
			'Language': 'Bahasa',
			'Load': 'Lanjutkan',
			'LoadAutoSaveSlots': 'Penyimpanan Automatis',
			'LoadButton': 'Buka tampilan loading',
			'Loading': 'Harap Tunggu',
			'LoadingMessage': 'Harap Tunggu Selama Game Dimuat',
			'LoadSlots': 'Buka penyimpanan',
			'LocalStorageWarning': 'Penyimpanan lokal tidak tersedia di browser ini',
			'Log': 'Log',
		
			'Music': 'Suara Musik',
		
			'NewContent': 'Terdapat versi baru',
			'NoSavedGames': 'Tidak ada file penyimpanan',
			'NoAutoSavedGames': 'Tidak ada penyimpanan automatis',
			'NoDialogsAvailable': 'Tidak ada dialog',
		
			'OK': 'OK',
			'OrientationWarning': 'Harap Ganti HP Untuk Mulai Bermain',
			'Overwrite': 'Menimpa File',
		
			'QuickButtons': 'Tombol Menu Cepat',
			'QuickMenu': 'Menu cepat',
			'Quit': 'Keluar',
			'QuitButton': 'Keluar Game',
		
			'Resolution': 'Resolusi',
		
			'Save': 'Simpan',
			'SaveButton': 'Buka menu save',
			'SaveInSlot': 'Simpan di slot',
			'SelectYourLanguage': 'Pilih Bahasa',
			'Settings': 'Pengaturan',
			'SettingsButton': 'Buka menu pengaturan',
			'Show': 'Tampilkan',
			'Skip': 'Langkahi',
			'SkipButton': 'Nyalakan mode langkahi',
			'SlotDeletion': 'Apakah Kamu yakin ingin mengapus slot ini?',
			'SlotOverwrite': 'Apakah Kamu yakin ingin menggantikan slot ini',
			'Sound': 'Volume Suara',
			'Start': 'Mulai',
			'Stop': 'Berhenti',
		
			'TextSpeed': 'Kecepatan text',
		
			'Video': 'Volume Video',
			'Voice': 'Volume Percakapan',
		
			'Windowed': 'Jendela'
		});
		monogatari.preference("Language", "Indonesia");
		monogatari.localize();
		monogatari.storage ({
			player: {
				name: '',
				score: 0
			}
		});
	});
});
