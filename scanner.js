const fs = require('fs').promises;
const path = require('path');

async function iterateDirectory(directoryPath, basePath = '', result = {}) {
    const files = await fs.readdir(directoryPath, { withFileTypes: true });

    for (const file of files) {
        if (file.name.startsWith('.')) continue; // Skip hidden files

        const fullPath = path.join(directoryPath, file.name);
        const relativePath = fullPath.replace(basePath + path.sep, ''); // Adjust for correct relative path

        if (file.isDirectory()) {
            await iterateDirectory(fullPath, basePath, result); // Recursive call for subdirectories
        } else {
            if (/\.(png|jpe?g|gif|bmp|tiff?|webp|svg|heif|heic)$/i.test(file.name)) {
                const folderName = path.basename(directoryPath);
                result[folderName] = result[folderName] || {};
                const fileCount = Object.keys(result[folderName]).length + 1;
                result[folderName][fileCount] = relativePath; // Using relativePath to show the structure
            }
        }
    }

    return result;
}

const startDirectory = process.argv[2];

if (!startDirectory) {
    console.log("Please provide a directory path as an argument.");
    process.exit(1);
}

(async () => {
    const result = await iterateDirectory(startDirectory, startDirectory);
    console.log(JSON.stringify(result, null, 2));
})();
