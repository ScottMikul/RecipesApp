const PROXY_CONF = [
    {
        context: [
            "/proxyroute"
        ],
        target:"http://localhost:9001",
        secure:false
    }
]
module.exports = PROXY_CONF;