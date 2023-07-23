// Add an event listener to the download button
document.getElementById('download-button').addEventListener('click', e => {
    e.preventDefault();
    // Get the selected files
    const filesSelect = document.getElementById('files-select');
    const selectedFiles = Array.from(filesSelect.selectedOptions).map(option => option.value);
    // Download the selected files
    selectedFiles.forEach(file => {
        const link = document.createElement('a');
        link.href = file;
        link.download = file;
        link.click();
    });
});

//hide download
var p = document.getElementById("download-hide");

function show() {
    //alert("hey");
    p.classList.toggle('hide');
}