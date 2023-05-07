/** @type {import('./$types').PageLoad} */
export async function load() {
	const extensions = ["mp4", "mov", "webm", "3gpp"]
	return {
		videos: await fetch("https://videos.hubchicken.tk/video-array.json")
			.then(res => res.json())
			.then(Object.values),
	}
}
