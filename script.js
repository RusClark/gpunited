console.log('Script loaded')
document
	.getElementById('locality-dropdown')
	.addEventListener('change', function () {
		var locality = this.value
		updatePCNDropdown(locality)
		updatePracticeDropdown('') // Reset practice dropdown
	})

document.getElementById('pcn-dropdown').addEventListener('change', function () {
	var pcn = this.value
	updatePracticeDropdown(pcn)
})

function updatePracticeDropdown(pcn) {
	var practiceDropdown = document.getElementById('practice-dropdown')
	practiceDropdown.innerHTML = '<option value="">Select Practice</option>' // Reset practice dropdown

	var practices = {
		Tyntesfield: ['Tyntsfield Medical Group'],
		'Gordano Valley': [
			'Clevedon Medical Centre',
			'Harbourside Family Practice',
			'Heywood Family Practice',
			'Portishead Medical Group',
		],
		'Mendip Vale': ['Mendip Vale Medical Practice'],
		Healthwest: [
			'Pembroke Road Surgery',
			'Student Health Service',
			'The Family Practice',
			'Whiteladies Medical Group',
		],
		Affinity: [
			'Fallodon Way Medical Centre',
			'Greenway Community Centre',
			'Helios Medical Centre',
			'Monks Park Surgery',
			'Sea Mills Surgery',
			'Westbury on Trym Primary Care Centre',
		],
		'Northern Arc': [
			'Pioneer Medical Group',
			'Shirehampton Group Practice',
			'Southmead and Henbury Family Practice',
		],
		Phoenix: ['Gloucester Road Medical Centre', 'Horfield Health Centre'],
		'Bristol Inner City': [
			'Broadmead Medical Centre',
			'Charlotte Keel Medical Practice',
			'East Trees Medical Practice',
			'Lawrence Hill Health Centre',
			'Montpelier Health Centre',
			'The Homeless Health Service',
			'Wellspring Surgery',
		],
		FABB: [
			'Air Balloon Surgery',
			'Beechwood Medical Practice',
			'Fishponds Family Practice',
		],
		Foss: ['Old School Surgery', 'Fireclay Health'],
		'4PCN': [
			'Cadbury Heath Healthcare',
			'Close Farm Surgery',
			'Hanham Health',
			'Kingswood Health Centre',
		],
		Severnvale: [
			'Almondsbury Surgery',
			'Pilning Surgery',
			'Severn View Family Practice',
			'St Mary Street Surgery',
			'Streamside Surgery',
		],
		'Network 4': [
			'Downend Health Group',
			'Green Valleys Health',
			'Orchard Medical Centre',
			'Three Shires Medical Practice',
		],
		'Yate & Frampton': [
			'Courtside Surgery',
			'Frome Valley Medical Centre',
			'Wellington Road Family Practice',
			'West Walk Surgery',
			'Kennedy Way Surgery',
		],
		'The Stokes': [
			'Bradley Stoke Surgery',
			'Concord Medical Centre',
			'Coniston Medical Practice',
			'Stoke Gifford Medical Centre',
		],
		'Bridge View Medical': ['Bridge View Medical Center'],
		Swift: [
			'Merrywood Practice',
			'Leonard Surgery',
			'Hillview Family Practice',
			'Hartwood Healthcare',
			'Grange Road Surgery',
			'Crest Family Practice',
			'Bedminster Family Practice',
			'Armada Practice',
		],
		Connexus: [
			'Birchwood Medical Practice',
			'Nightingale Valley Practice',
			'Priory Surgery',
			'Stockwood Medical Centre',
			'Wells Road Surgery',
		],
		'Pier Health': [
			'Winscombe & Banwell Family Practice',
			'Tudor Lodge Surgery',
			'Stafford Medical Group',
			'Milton Surgery',
			'Horizon Health Centre',
			'Graham Road Surgery',
			'Cedars Surgery',
			'168 Medical Group',
		],
	}

	if (pcn in practices) {
		practices[pcn].forEach(function (practice) {
			var option = document.createElement('option')
			option.value = practice
			option.textContent = practice
			practiceDropdown.appendChild(option)
		})
	}
}

function updatePCNDropdown(locality) {
	var pcnDropdown = document.getElementById('pcn-dropdown')
	pcnDropdown.innerHTML = '<option value="">Select PCN</option>' // Reset PCN dropdown

	var pcns = {
		Woodspring: ['Tyntesfield', 'Gordano Valley', 'Mendip Vale'],
		NorthWestBristol: ['Healthwest', 'Affinity', 'Northern Arc', 'Phoenix'],
		InnerCityEastBristol: ['Bristol Inner City', 'FABB', 'Foss'],
		SouthGloucestershire: [
			'4PCN',
			'Severnvale',
			'Network 4',
			'Yate & Frampton',
			'The Stokes',
		],
		SouthBristol: ['Bridge View Medical', 'Swift', 'Connexus'],
		WestonWorleVillages: ['Pier Health'],
		// Add any additional localities and their PCNs here.
	}

	if (locality in pcns) {
		pcns[locality].forEach(function (pcn) {
			var option = document.createElement('option')
			option.value = pcn
			option.textContent = pcn
			pcnDropdown.appendChild(option)
		})
	}
}

// async function fetchNHSVideos() {
// 	const apiKey = 'c189e6929e9d47059711875820ff254b' // Replace with your API key
// 	const url = 'https://api.nhs.uk/video?api-version=1.0'

// 	axios
// 		.get(url, { headers: { 'subscription-key': apiKey } })
// 		.then((response) => {
// 			const videos = response.data.video // Access the video array
// 			const videosList = document.getElementById('nhs-videos-list')
// 			videosList.innerHTML = '' // Clear existing content

// 			videos.forEach((video) => {
// 				// Create HTML for each video
// 				const videoElement = document.createElement('div')
// 				videoElement.innerHTML = `
//                     <div class="box stack flow"><h4>${video.name}</h4>
//                     <p>${video.description}</p>
//                     <a href="${video.embedUrl}" target="_blank">Watch Video</a>
//                     <img src="${video.thumbnailUrl}" alt="${video.name}" /></div>
//                 `
// 				videosList.appendChild(videoElement)
// 			})
// 		})
// 		.catch((error) => {
// 			console.error('Error fetching NHS videos:', error)
// 			document.getElementById('nhs-videos-list').innerHTML =
// 				'<p>Error loading videos.</p>'
// 		})
// }

// fetchNHSVideos()

// document.addEventListener('DOMContentLoaded', (event) => {
// 	fetchNHSVideos()
// })

