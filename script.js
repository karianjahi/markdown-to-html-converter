const markdownInput = document.getElementById("markdown-input");
const htmlOutput = document.getElementById("html-output");
const htmlPreview = document.getElementById("preview");

const makeTitleRegex = (level) => {
    return new RegExp(`^#{${level}}(?!#)\\s+.+`, "g"); // title strictly with {level} levels so not followed by another #
};

const makeTitleReplacementRegex = (level) => {
    return new RegExp(`^#{${level}}\\s+`, "g");
}


const convertMarkdown = () => {
    const mdInput_list = markdownInput.value.split(/\r?\n/g);
    let htmlOutputList = [];
    let regex;
    for (let item of mdInput_list) {
        // start with headers
        for (let i = 1; i < 7; i++) { // several headers can be taken care of
            regex = makeTitleRegex(i);
            if (regex.test(item)) {
                if (/# \*\*[^*]+\*\*|# \_\_[^\_]+\_\_/g.test(item)) {
                    console.log(`Haiya ${item} passes!`);
                    item = item.replaceAll(/# \*\*|\*\*$/g, "");
                    item = item.replaceAll(/# \_\_|\_\_$/g, "");
                    htmlOutputList.push(`<h1><strong>${item}</strong></h1>`)
                } else {
                    item = item.replaceAll(makeTitleReplacementRegex(i), "");
                    htmlOutputList.push(`<h${i}>${item}</h${i}>`)
                }
            }
        }

        // implement bold text
        regex = /^\*{2}(?![\*\s])[^*]+\*{2}$|^\_{2}(?![\_\s])[^_]+\_{2}$/g;
        if (regex.test(item)) {
            item = item.replaceAll("**", "");
            item = item.replaceAll("__", "");
            htmlOutputList.push(`<strong>${item}</strong>`)
        };

        // implement italicized characters
        regex = /^\*(?!\*)[^*]+\*$|^\_(?!\_)[^\_]+\_$/g;
        if (regex.test(item)) {
            console.log(`${item} matches`);
            item = item.replaceAll(/^\*|\*$|^\_|\_$/g, "");
            htmlOutputList.push(`<em>${item}</em>`)

        }

        // implement images
        // ![alt-text](image-source)	<img alt="alt-text" src="image-source">
        regex = /^\!{1}\[[^!]+\]\(.+\)/g;
        // const something = "![solvey](sekuru.com)"
        if (regex.test(item)) {
            // extract alternalte text
            const altTextRegex = /(?<=\[).+(?=\])/g;
            const altText = item.match(altTextRegex);
            // extract the image source
            const srcRegex = /(?<=\().+?(?=\))/g;
            const src = item.match(srcRegex);
            console.log(src);
            htmlOutputList.push(`<img src=${src} alt=${altText}>`)
        }

        // implement urls
        // [link text](URL)	<a href="URL">link text</a>
        regex = /^\[.+?\]\(.+?\)/g;
        if (regex.test(item)) {
            const linkText = item.match(/(?<=\[).+?(?=\])/g);
            const url = item.match(/(?<=\().+?(?=\))/g);
            htmlOutputList.push(`<a href="${url}">${linkText}</a>`)
        }

        // implement quotes
        // > quote	<blockquote>quote</blockquote>
        // > **this is a *quote***, <blockquote><strong>this is a <em>quote</em></strong></blockquote>
        // > **this is a *quote***, <blockquote><strong>this is a <em>quote</em></strong></blockquote>
        // > **this is a *quote* written by *John Cena* from WWE**
        regex = /^>\s+?/g;
        if (regex.test(item)) {
            // test for double stars
            const doubleStarRegex = /\*\*.+\*\*/g;
            if (doubleStarRegex.test(item)) {
                let itemlist = item.match(/(?<=\*\*).+?(?=\*\*$)/g)[0];
                console.log(itemlist);
                // test for single stars for text that needs italicization
                if (/\*.+\*/g.test(itemlist)) {
                    const matchItems = itemlist.match(/(?<=\*)[^\s+].+?(?=\*)/g)
                    let quotedWords = [];
                    for (let item of matchItems) {
                        quotedWords.push(`<em>${item}</em>`)
                        itemlist = itemlist.replace(item, `<em>${item}</em>`)
                    }
                    itemlist = itemlist.replaceAll(/\*/g, "");
                    itemlist = `<strong>${itemlist}</strong>`;
                    item = `<blockquote>${itemlist}</blockquote>`
                    htmlOutputList.push(item);
                }
            } else {
                // get the quote outright
                item = item.match(/(?<=\>\s+).+/g)[0];
                htmlOutputList.push(`<blockquote>${item}</blockquote>`)
            }


        }

    };
    if (htmlOutputList.length === 0) {
        for (let item of mdInput_list)
            htmlOutputList.push(`<p>${item}</p>`);
    }

    // console.log(htmlOutputList);
    return htmlOutputList.join("");
};

markdownInput.addEventListener('input', () => {
    htmlOutput.textContent = convertMarkdown();
    htmlPreview.innerHTML = convertMarkdown();
});
