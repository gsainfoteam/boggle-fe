export default function api() {
  const response = fetch("http://13.124.212.18/post", {
    method: "POST",
    body: JSON.stringify({
        "title": "this is title",
        "content": "this is content",
        "type": "PROJECT",
        "tags": [
          "abc",
          "def"
        ],
        "authorId": "2d87779b-7632-4163-afa0-5062d83e325b",
        "maxParticipants": 5,
        "deadline": "2000-01-01"
    }),
  });
  return response;
}
