# 📝 Markdown to HTML Converter

![GitHub repo
size](https://img.shields.io/github/repo-size/karianjahi/markdown-to-html-converter)
![GitHub
stars](https://img.shields.io/github/stars/karianjahi/markdown-to-html-converter?style=social)
![GitHub
forks](https://img.shields.io/github/forks/karianjahi/markdown-to-html-converter?style=social)
![GitHub last
commit](https://img.shields.io/github/last-commit/karianjahi/markdown-to-html-converter)
![GitHub
issues](https://img.shields.io/github/issues/karianjahi/markdown-to-html-converter)
![License](https://img.shields.io/github/license/karianjahi/markdown-to-html-converter)

> 🚧 **Work in Progress**\
> This project is still under active development. Only a **minimal
> subset of Markdown syntax** has been implemented.\
> The goal is to demonstrate how powerful and expressive **Regular
> Expressions (RegEx)** can be when parsing structured text.

------------------------------------------------------------------------

## 🌍 Live Demo

🔗 Try it here:\
👉 [live-demo](https://karianjahi.github.io/markdown-to-html-converter/)

------------------------------------------------------------------------

## 📖 About The Project

The **Markdown to HTML Converter** is a lightweight browser-based tool
that:

-   Accepts Markdown input ✍️\
-   Converts it into raw HTML 🧾\
-   Displays a live rendered HTML preview 👀

This project focuses on:

-   🔍 Understanding text parsing with RegEx
-   ⚙️ Implementing basic Markdown rules manually
-   🧠 Exploring how structured text can be transformed into valid HTML
-   🧪 Demonstrating incremental feature implementation

Unlike full-featured Markdown parsers, this implementation is
intentionally minimal and handcrafted to showcase the logic behind text
transformation.

------------------------------------------------------------------------

## ✨ Features Implemented (So Far)

### 🏷️ Headers

Supports:

-   `# H1`
-   `## H2`
-   `### H3`
-   `#### H4`
-   `##### H5`
-   `###### H6`

Also supports bold headers like:

    # **Bold Header**

------------------------------------------------------------------------

### 🔤 Text Formatting

-   **Bold**
    -   `**text**`
    -   `__text__`
-   *Italic*
    -   `*text*`
    -   `_text_`

------------------------------------------------------------------------

### 🖼️ Images

Markdown:

    ![alt-text](image-url)

Converted to:

``` html
<img src="image-url" alt="alt-text">
```

------------------------------------------------------------------------

### 🔗 Links

Markdown:

    [link text](URL)

Converted to:

``` html
<a href="URL">link text</a>
```

------------------------------------------------------------------------

### 💬 Blockquotes

Markdown:

    > This is a quote

Also supports nested bold + italic inside blockquotes:

    > **This is a *quote***

------------------------------------------------------------------------

## 🧠 Why This Project?

This repository is not meant to replace full Markdown engines like:

-   marked.js
-   markdown-it
-   showdown.js

Instead, it is designed to:

-   📚 Teach how Markdown parsing works internally
-   🔬 Demonstrate the power of Regular Expressions
-   🛠 Encourage incremental feature building
-   🎯 Provide a beginner-friendly parsing example

------------------------------------------------------------------------

## 🏗️ Project Structure

    markdown-to-html-converter/
    │
    ├── index.html      # Application structure
    ├── styles.css      # Basic styling
    ├── script.js       # Markdown parsing logic (RegEx-based)
    └── README.md

------------------------------------------------------------------------

## 🚀 How It Works

1.  User types Markdown into the textarea.
2.  The input is split line-by-line.
3.  Each line is tested against specific RegEx patterns.
4.  Matching Markdown patterns are replaced with corresponding HTML
    tags.
5.  The HTML is:
    -   Displayed as raw HTML
    -   Rendered live as a preview

All conversion logic is handled client-side using JavaScript.

------------------------------------------------------------------------

## ⚠️ Limitations

Since this is a minimal implementation:

-   ❌ No support for lists
-   ❌ No support for code blocks
-   ❌ No support for tables
-   ❌ No nested parsing engine
-   ❌ No full Markdown specification coverage
-   ❌ Not production ready

This is purely educational and experimental.

------------------------------------------------------------------------

## 📌 Roadmap

Future improvements may include:

-   [ ] Ordered & unordered lists
-   [ ] Inline code support
-   [ ] Code blocks
-   [ ] Tables
-   [ ] Better nested formatting handling
-   [ ] Improved RegEx efficiency
-   [ ] Performance optimizations
-   [ ] Unit tests

------------------------------------------------------------------------

## 🧪 Educational Value

This project highlights:

-   RegEx grouping
-   Lookahead and lookbehind usage
-   Dynamic pattern generation
-   Incremental parsing strategies
-   Real-time DOM updates

It demonstrates that even a small amount of RegEx logic can transform
structured text into HTML effectively.

------------------------------------------------------------------------

## 🖥️ Deployment

This project is deployed using **GitHub Pages**.

🔗 Live site:\
👉 [live-demo](https://karianjahi.github.io/markdown-to-html-converter/)

To deploy manually:

1.  Push to `main`
2.  Enable GitHub Pages in repository settings
3.  Select branch as source
4.  Done 🎉

------------------------------------------------------------------------

## 📜 License

This project is licensed under the MIT License.

------------------------------------------------------------------------

## 👤 Author

**GitHub:** https://github.com/karianjahi

------------------------------------------------------------------------

## ⭐ Support

If you found this helpful:

-   ⭐ Star the repository
-   🍴 Fork it
-   🛠 Improve it
-   📢 Share it

------------------------------------------------------------------------

## 🧩 Final Note

This is an intentionally minimal Markdown parser.\
It demonstrates that with carefully crafted Regular Expressions,\
you can build surprisingly powerful text transformation tools.

More features coming soon 🚀

------------------------------------------------------------------------

© 2026 karianjahi. All rights reserved.
