export async function upload() {
  const element = document.createElement("input");
  let resolve: (value: string | PromiseLike<string>) => void;
  let reject: (reason: unknown) => void;

  const result = new Promise<string>((res, rej) => {
    [resolve, reject] = [res, rej];
  });

  element.setAttribute("type", "file");
  element.setAttribute("accept", ".json");
  element.style.display = "none";
  document.body.appendChild(element);

  element.click();
  element.addEventListener("change", async (e) => {
    try {
      const input = e.target as HTMLInputElement;

      if (!input.files?.length) {
        return;
      }

      resolve(await input.files[0].text());
    } catch (e) {
      reject(e);
    }
  });

  document.body.removeChild(element);

  return result;
}
