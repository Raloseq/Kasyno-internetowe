module.exports = {
    outputDir: 'templates/dist',
    assetsDir: 'static',
    devServer: {
        proxy: {
            '/api*': {
                target: 'http://localhost:8000/',
            }  
        }
    }
}