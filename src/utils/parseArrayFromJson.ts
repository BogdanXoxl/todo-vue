const props = ["id", "title", "completed"];

export function parseArrayFromJson(text: string) {
  const textObj = JSON.parse(text);

  if (
    !Array.isArray(textObj) ||
    !textObj?.every((item) => props.every((i) => Object.prototype.hasOwnProperty.call(item, i)))
  )
    return [];

  return textObj;
}
