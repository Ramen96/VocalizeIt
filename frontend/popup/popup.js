// Get url
// async function getActiveTabUrl () {
//   return new Promise((resolve, reject) => {
//     chrome.tabs.query({ active: true, currentWindow: true }, (array) => {
//       array && array.length > 0 ?
//       resolve(array[0].url) :
//       reject(new Error("No active tab found"));
//     })
//   })
// }

// (async () => {
//   try {
//     const myVar = await getActiveTabUrl();
//     console.log(myVar);
//   } catch (error) {
//     console.error(error);
//   }
// })();
