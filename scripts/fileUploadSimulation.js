const EventEmitter = require('events');

class Uploader extends EventEmitter {
  uploadFile(fileName) {
    console.log(`📤 Starting upload for: ${fileName}`);

    let progress = 0;
    const interval = setInterval(() => {
      progress += 20;

      // Emit progress event
      this.emit('progress', progress);

      if (progress === 100) {
        clearInterval(interval);
        this.emit('done', fileName);
      }
    }, 500); // simulate delay
  }
}

const uploader = new Uploader();

// Listen for progress
uploader.on('progress', (percent) => {
  console.log(`⏳ Upload progress: ${percent}%`);
});

// Listen for completion
uploader.on('done', (fileName) => {
  console.log(`✅ Upload completed for: ${fileName}`);
});

// Start upload
uploader.uploadFile('profile.jpg');
