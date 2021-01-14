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
			'BackButton': 'Go back',
		
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
			'LoadAutoSaveSlots': 'Auto Saved Games',
			'LoadButton': 'Open the Load Screen',
			'Loading': 'Harap Tunggu',
			'LoadingMessage': 'Wait while the assets are loaded',
			'LoadSlots': 'Saved Games',
			'LocalStorageWarning': 'Local Storage is not available in this browser',
			'Log': 'Log',
		
			'Music': 'Suara Musik',
		
			'NewContent': 'There is new content available, reload the page to get the latest version',
			'NoSavedGames': 'No saved games',
			'NoAutoSavedGames': 'No automatically saved games',
			'NoDialogsAvailable': 'No dialogs available. Dialogs will appear here as they show up',
		
			'OK': 'OK',
			'OrientationWarning': 'Please rotate your device to play',
			'Overwrite': 'Overwrite',
		
			'QuickButtons': 'Quick Menu Buttons',
			'QuickMenu': 'Quick Menu',
			'Quit': 'Quit',
			'QuitButton': 'Quit Game',
		
			'Resolution': 'Resolution',
		
			'Save': 'Simpan',
			'SaveButton': 'Open the Save Screen',
			'SaveInSlot': 'Save in slot',
			'SelectYourLanguage': 'Select your language',
			'Settings': 'Pengaturan',
			'SettingsButton': 'Open the Settings Screen',
			'Show': 'Show',
			'Skip': 'Skip',
			'SkipButton': 'Enter skip mode',
			'SlotDeletion': 'Are you sure you want to delete this slot?',
			'SlotOverwrite': 'Are you sure you want to overwrite this slot?',
			'Sound': 'Sound Volume',
			'Start': 'Mulai',
			'Stop': 'Stop',
		
			'TextSpeed': 'Text Speed',
		
			'Video': 'Video Volume',
			'Voice': 'Voice Volume',
		
			'Windowed': 'Windowed'
		});
		monogatari.preference("Language", "Indonesia");
		monogatari.localize();
	});
});
