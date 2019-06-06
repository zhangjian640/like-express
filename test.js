const express = require('./like-express')

const app = express()

app.use((req, res, next) => {
	console.log('请求开始 ', req.method, req.url)
	next()
})

app.use((req, res, next) =>{
	console.log('处理cookie')
	req.cookie = {
		a: 1
	}
	next()
})

app.use('/api', (req, res, next) => {
	console.log('处理/api路由')
	next()
})

app.get('/api', (req, res, next) => {
	console.log('处理 /api get请求')
	next()
})

app.get('/api/get-cookie', (req, res, next) => {
	res.json(req.cookie)
	next()
})

app.post('/api', (req, res, next) => {
	console.log('处理 /api post请求')
	next()
})

app.listen(4000, (req, res) => {
	console.log('server running at port 4000')
})
