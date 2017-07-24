import TorrentManager from './lib/torrentManager'
// import React from 'react'
// import { renderToString } from 'react-dom/server'
// import Index from '../view/index'

// const Home = new Restivus({
// 	apiPath: '/'
// })

// Home.addRoute('', {
// 	get: function() {
// 		return renderToString(<Index />)
// 	}
// })


const Api = new Restivus({
	apiPath: '/api',
	useDefaultAuth: true,
	prettyJson: true
})

Api.addRoute('test', {
	get: () => {
		return 'Hi tester.'
	}
})

Api.addRoute('schedule/', {
	get: () => {
		return TorrentManager.getList()
	},
	post: async function() {
		return await TorrentManager.add(this.bodyParams.uri)
	}
})

Api.addRoute('schedule/:uri', {
	get: () => {
		return TorrentManager.getList()
	},
	post: () => {
		console.log(this.bodyParams)
		return ''
	}
})

console.log('route load finish')
