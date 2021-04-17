//server
const tempOverview=fs.readFileSync(`${__dirname}/templates/template-overview.html`, 'utf-8');
const tempCard=fs.readFileSync(`${__dirname}/templates/template-card.html`, 'utf-8');
const tempProduct=fs.readFileSync(`${__dirname}/templates/template-product.html`, 'utf-8');

const data=fs.readFileSync(`${__dirname}/dev-data/data.json`, 'utf-8');
const dataObj=JSON.parse(data);

const server=http.createServer((req, res)=>{
    const pathName=req.url;

//overview page    
    if(pathName==='/' || pathName==='/overview'){
        res.writeHead(200, {'Content-type':'text/html'});

        const cardsHtml=dataObj.map(el=>replaceTemplate(tempCard, el))

        res.end(tempOverview);
    }else if(pathName==='/product'){
        res.end('this is the product');
    }else if(pathName==='/api'){
        res.writeHead(200, {'Content-type':'application/json'});
        res.end(data);
    }else{
        res.writeHead(404, {
            'Content-type':'text/html',
            'my-own-header':'hello-world'
        });
        res.end('<h1>Page not found!</h1>');
    }
});
server.listen(8000)