const { createWorker } = require('tesseract.js');

const worker = createWorker();

export const imageToText = async (imageUrl) => {
  await worker.load();
  await worker.loadLanguage('eng');
  await worker.initialize('eng');
  const { data: { text } } = await worker.recognize(imageUrl);
  console.log(text);
  await worker.terminate();
}