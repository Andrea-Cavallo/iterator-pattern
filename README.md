# Image Directory Scanner

## Overview

The Image Directory Scanner is a Node.js script designed to recursively navigate through a specified directory (and its subdirectories), identifying and cataloging image files. It generates a structured JSON output that maps each folder to its contained image files, making it particularly useful for generating dynamic content for web pages or for inventory management purposes.

## Features

- **Recursive Directory Traversal**: Scans the specified directory and all its subdirectories for image files.
- **Supports Multiple Image Formats**: Recognizes a variety of image formats including PNG, JPEG, GIF, BMP, TIFF, WEBP, SVG, HEIF, and HEIC.
- **JSON Output**: Produces a JSON representation of the directory structure and the image files contained within, perfect for use in web applications or for further processing.
- **Command-line Interface**: Easily specify the directory to scan directly from the command line.

## Prerequisites

To use the Image Directory Scanner, ensure that you have Node.js installed on your system. The script relies on the `fs` and `path` modules available in Node.js for file system operations and path manipulations, respectively.

## Usage

1. **Save the Script**: Copy the provided script into a file, for example, `imageScanner.js`.
2. **Run the Script**: Open your terminal or command prompt, navigate to the directory where `imageScanner.js` is saved, and run the script using Node.js by specifying the target directory as a command-line argument. Here's the syntax:

```sh
node imageScanner.js "/path/to/target/directory"
