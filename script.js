const describeButton = document.getElementById("describeBtn");
const generateButton = document.getElementById("generateBtn");

const descriptionResult = document.getElementById("descriptionResult");
const generationResult = document.getElementById("generationResult");

const fileInput = document.getElementById("diagramFile");
const promptInput = document.getElementById("prompt");

describeButton.addEventListener("click", function () {

    if (fileInput.files.length === 0) {

        descriptionResult.innerHTML =
            "<strong>No file selected.</strong><br><br>Please upload a mathematical diagram first.";

        return;
    }

    const fileName = fileInput.files[0].name;

    descriptionResult.innerHTML =
        "<strong>Diagram Successfully Received</strong><br><br>" +
        "File Name: <b>" + fileName + "</b><br><br>" +
        "Demonstration Analysis:<br>" +
        "The uploaded image appears to contain a mathematical diagram. " +
        "In the complete AI version of Math Vision, artificial intelligence would analyse the diagram, identify its components, and produce an accessible spoken and written description for learners with visual impairment.";

});

generateButton.addEventListener("click", function () {

    const prompt = promptInput.value.trim();

    if (prompt === "") {

        generationResult.innerHTML =
            "<strong>No description entered.</strong><br><br>Please type the diagram you want to generate.";

        return;
    }

    generationResult.innerHTML =
        "<strong>Diagram Generation Demonstration</strong><br><br>" +
        "Requested Diagram:<br><b>" + prompt + "</b><br><br>" +
        "This demonstration version confirms that the request has been received. " +
        "In the complete AI-powered Math Vision system, the application would generate the requested mathematical diagram and prepare it for download or accessibility description.";

});

fileInput.addEventListener("change", function () {

    if (fileInput.files.length > 0) {

        descriptionResult.innerHTML =
            "Selected File: <b>" + fileInput.files[0].name + "</b>";

    }

});
