# gitbook-plugin-insert-md
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