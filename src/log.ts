export async function POST(request: Request) {
  console.log(await request.json());

  return new Response("Received Log!");
}

export async function GET(request: Request) {
  return new Response("Hello, World!");
}
