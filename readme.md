# Planifolia

A serverless template engine and routing engine written in vanilla JavaScript, built to work with HTML, in 4,46 KB (2,63 KB minified).

This super small utility can render components, routes and layouts only with Vanilla Javascript, without having to configure an additional service for that.

## How it works?

**Your files are your routes!**

By defining a "views" folder, you can access your files by:

```
File location: /view/index.html
Address: https://example.com/#/

File location: /view/admin/products/remove.html
Address: https://example.com/#/admin/products/remove

File location: /view/admin/products/index.html
Address: https://example.com/#/admin/products
```

As you can see, the routing is done with the hashstring. That way, you don't need to redirect all requests to the site's index.html. Hash strings are interpreted by Planifolia and routes are called as the path is found in the serving HTTP server.

Planifolia supports query string too, so if you access:

```
Address: https://example.com/#/admin/product?id=125&action=view
```

```js
window.query = {
    id: '125', 
    action: 'view'
}
```

About internal links, no need to worry about writing `href="/#/...` at every time. Planifolia rewrites for you.

## Configuration

This repository is an example project! Go ahead and see how it works!

```html
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
        <script src="/planifolia.js"></script>
    </head>
    <body>
        <main></main>
    </body>
    <script>
        window.PlanifoliaSettings = {
            //required. sets the container where the components will be rendered.
            container: document.querySelector("main"),

            // optional. defines the prefix where Planifolia will look for components.
            basePath: "/view/",

            // optional. Delay browsing for a few milliseconds before browsing.
            delayNavigation: 0,

            // optional. Rewrites links that point inside your site so they don't get out of routing.
            autoRewriteLinks: true
        };

        // initialize the router engine
        Planifolia.initializeAutoRouter();
    </script>
</html>
```

## Rendering components

```html
<!-- ~/index.html -->
<include name="components/message" @name="Bob" @message="How are you?"></include>
```

```html
<!-- ~/view/components/message.html -->
<div>
    Hello, @arg1!
</div>
<p>
    Your message is: @message, but this @@message will not be replaced.
</p>
```

## Getting URL query parameters

```
Address: https://example.com/#/view-product?id=125&action=view
```

```js
window.query = {
    id: '125', 
    action: 'view'
}
```

## Getting current path

```
Address: https://example.com/#/view-product?id=125&action=view
```

```js
window.path = 'window.path'
window.pathAndQuery = '/view-product?id=125&action=view'
```