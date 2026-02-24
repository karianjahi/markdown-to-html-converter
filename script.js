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
                item = item.replaceAll(makeTitleReplacementRegex(i), "")
                htmlOutputList.push(`<h${i}>${item}</h${i}>`)
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
