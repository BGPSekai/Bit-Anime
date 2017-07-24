var Api = new Restivus({
		apiPath: '/',
    useDefaultAuth: true,
    prettyJson: true
  })

Api.addRoute('test', {
	get: () => {
		return 'Hi tester.'
	}
})

console.log('route load finish')
