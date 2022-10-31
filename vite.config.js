import { defineConfig, loadEnv } from 'vite';

export default defineConfig(({ command, mode }) => {
	console.log(command, mode)
	const env = loadEnv(mode, process.cwd())

	console.log(env)
	console.log(env.VITE_NAME)

	const port = env.VITE_PORT

	if (mode === 'development') {
		console.log('Modo desarrollo')
	} else {
		console.log('Modo producción')
	}

	return {
		server: {
			port
		}
	}
})