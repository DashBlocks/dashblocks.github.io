const jpegThumbnail = dataUrl => new Promise((resolve, reject) => {
    const image = new Image();
    image.onload = () => {
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');

        const maxDimension = 96; // 3x the maximum displayed size of 32px

        // TW: After setting canvas width/height, the canvas is automatically cleared.

        if (image.height < 1 || image.width < 1) {
            canvas.width = canvas.height = maxDimension;
            // drawImage can fail if image height/width is less than 1
            // Use blank image; the costume is too small to render anyway
        } else {
            if (image.height > image.width) {
                canvas.height = maxDimension;
                canvas.width = (maxDimension / image.height) * image.width;
            } else {
                canvas.width = maxDimension;
                canvas.height = (maxDimension / image.width) * image.height;
            }
            ctx.drawImage(image, 0, 0, canvas.width, canvas.height);
        }

        // TW: PNG allows using transparency while JPEG does not.
        // A white background looks quite ugly in dark mode.
        const dataURL = canvas.toDataURL('image/png').replace('data:image/png;base64,', '');
        resolve(dataURL);
    };
    image.onerror = err => {
        reject(err);
    };
    image.src = dataUrl;
});

export default jpegThumbnail;
