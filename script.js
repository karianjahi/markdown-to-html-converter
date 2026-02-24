const markdownInput = document.getElementById("markdown-input");
const htmlOutput = document.getElementById("html-output");
const htmlPreview = document.getElementById("preview");

const convertMarkdown = () => {
    const mdInput_list = markdownInput.value.split(/\r?\n/g);
    htmlOutputList = [];

    const makeTitleRegex = (level) => {
        return new RegExp(`^#{${level}}(?!#)\\s+.+`, "g"); // title strictly with {level} levels so not followed by another #
    };

    const makeTitleReplacementRegex = (level) => {
        return new RegExp(`^#{${level}}\\s+`, "g");
    }

    console.log(makeTitleRegex(2));

    for (let item of mdInput_list) {
        for (let i = 1; i < 7; i++) { // several headers can be taken care of
            regex = makeTitleRegex(i)
            if (regex.test(item)) {
                item = item.replaceAll(makeTitleReplacementRegex(i),"")
                htmlOutputList.push(`<h${i}>${item}</h${i}>`)
            }

        }
    };
    // console.log(htmlOutputList);
    return htmlOutputList.join("");
};

markdownInput.addEventListener('input', () => {
    htmlOutput.textContent = convertMarkdown();
    htmlPreview.innerHTML = convertMarkdown();
});
