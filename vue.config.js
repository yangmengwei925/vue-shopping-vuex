module.exports = {
    devServer: {
        before: app => {
            app.get('/getList', (req, res) => {
                var data = require('./mock/data.json')
                res.send(data)
            })
        }
    }
}