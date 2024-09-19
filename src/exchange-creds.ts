export async function POST(request: Request) {
  console.log(Array.from(request.headers.entries()), await request.json());
  return new Response("Exchanging credentials!");
}