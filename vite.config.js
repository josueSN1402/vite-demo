import { defineConfig, loadEnv } from 'vite';
import { resolve } from 'path'

export default defineConfig(({ command, mode }) => {
	console.log(command, mode)
	const env = loadEnv(mode, process.cwd())

	console.log(env)
	console.log(env.VITE_NAME)

	const port = env.VITE_PORT

	if (mode === 'development') {
		console.log('Modo desarrollo')
		return {
			server: {
				port
			}
		}
	} else {
		console.log('Modo producción')
		return {
			build: {
				rollupOptions: {
					input: {
						main: resolve(__dirname, 'index.html'),
						help: resolve(__dirname, 'help', 'help.html')
					}
				}
			}
		}
	}
})