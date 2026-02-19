
const convert = (someInput) => {
    // heading 1
    const heading1Regex = /^#\s+/;
    // console.log(someInput.match(heading1Regex));

    const heading2Regex = /^#{2}\s+/;
    // console.log(someInput.match(heading2Regex));

    const heading3Regex = /^#{3}\s+/;
    console.log(someInput.match(heading3Regex));

}

const markdownInput = document.getElementById("markdown-input");
const htmlOutput = document.getElementById("html-output");
const htmlPreview = document.getElementById("preview");

const converterMarkdown = () => {
    const lines = markdownInput.value.split(/\r?\n/);
    const heading1Regex = /^#\s+/;
    const htmlResult = [];
    for (let line of lines) {

        // // no pattern then return a paragraph
        // let regex = /^[^#*_]/;
        // if (regex.test(line)) {
        //     htmlResult.push(`<p>${line}</p>`);
        // }

        // headings
        for (let i = 1; i < 7; i++) {
            regex = /^#{i}\s+/;
            regex = new RegExp(`^#{${i}}\\s+`)
            if (regex.test(line)) {
                htmlResult.push(`<h${i}>${line.replace(regex, "")}</h${i}>`);
            }
        }


        // bold text
        regex = /^\*{2}.+\*{2}$|^_{2}.+_{2}$/g;
        if (regex.test(line)) {
            if (line.includes("**")) {
                htmlResult.push(`<strong>${line.replaceAll("**", "")}</strong>`);
            } else {
                htmlResult.push(`<strong>${line.replaceAll("__", "")}</strong>`);
            }

        // italicized text
        regex = /^\*{1}.+\*{1}$|^_{1}.+_{1}$/g;
        if (regex.test(line)) {
            if (line.includes("**")) {
                htmlResult.push(`<strong>${line.replaceAll("**", "")}</strong>`);
            } else {
                htmlResult.push(`<strong>${line.replaceAll("__", "")}</strong>`);
            }
        }


    }

    return htmlResult.join("");

};



markdownInput.addEventListener("input", () => {
    const textOutput = converterMarkdown();
    htmlOutput.textContent = converterMarkdown();
    htmlPreview.innerHTML = converterMarkdown();
});
