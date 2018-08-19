# Web API
- [Guide](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Client-side_web_APIs/Fetching_data)
- [XMLHttpRequest](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest)
- [Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)

## Asynchronous
- static web pages
 - Needed to reload entire page for every request
 - scales poorly with complexity and size

### Ajax
- Asynchronous Javascript and XML
- Request resources when needed
- Surrounding elements (e.g. header), won't need to be reloaded
- Format data before display
- Can also store assets/data on client's local computer to load on subsequent visits
 - reload/update when outdated
- use XMLHttpRequest or Fetch API
 - Retrieves JSON as well
- [Web API proxy](https://mdn.mozillademos.org/files/6477/moderne-web-site-architechture@2x.png)

## Testing
- Chrome will not load local files
- [Setting up local web server](https://developer.mozilla.org/en-US/docs/Learn/Common_questions/What_is_a_web_server)
### Local Web server
- Python
 - `python -m http.server [port-number]`

## Webservers
- Static
 - as is
- Dynamic
 - processing -> HTML

## Terminology
- Search Engine
- Webserver
 - Website (s)
  - Web page(s)
- Domain Name
 - Top-Level Domain
  - github.william.`org`
  - github.william.`org`.`us`
  - .org, .net, .com
 - labels
  - `github`.`william`.org
