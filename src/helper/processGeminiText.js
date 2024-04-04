export default function processGeminiResponse(text) {
  text = text.replace(/\*\*(.*?)\*\*/g, '<b>"$1"</b>');

  text = text.replace(/\n/g, "<br>");

  return text;
}
