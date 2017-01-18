# gitbook-plugin-insert-md
<p>
  <a href="https://www.npmjs.com/package/gitbook-plugin-insert-md"><img src="https://img.shields.io/npm/dt/gitbook-plugin-insert-md.svg" alt="Downloads"></a>
</p>
Plugin for gitbook for adding given md code to each page before the content

## How to use
- Add insert-md plugin to your book.json:


    "plugins": [
      "insert-md"
    ]

- Add plugin configuration specifying markdown code to be inserted:


    "pluginsConfig": {
      "insert-md": {
        "md": "#Hello world\n##Hello world again"
      }
    }