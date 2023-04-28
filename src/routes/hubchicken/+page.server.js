/** @type {import('./$types').PageServerLoad} */
export async function load() {
	const extensions = ["mp4", "mov", "webm", "3gpp"]
	return {
		videos: (
			await fetch("https://api.github.com/repos/Exruw/hubvideos/git/trees/HEAD").then(res =>
				res.json()
			)
		).tree
			.filter(
				file =>
					file?.type !== "tree" &&
					file?.path &&
					extensions.includes(file.path.split(".").pop())
			)
			.map(file => `https://videos.hubchicken.tk/${encodeURIComponent(file.path)}`),
	}
}
