export async function upload() {
  const element = document.createElement("input");
  let resolve, reject;
  const result = new Promise((res, rej) => {
    [resolve, reject] = [res, rej];
  });

  element.setAttribute("type", "file");
  element.setAttribute("accept", ".json");
  element.style.display = "none";
  document.body.appendChild(element);
  element.click();
  element.addEventListener("change", async (e) => {
    try {
      resolve(await e.target.files[0].text());
    } catch (e) {
      reject(e);
    }
  });
  document.body.removeChild(element);

  return result;
}
