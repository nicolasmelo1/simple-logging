export async function POST(request: Request) {
  console.log(Array.from(request.headers.entries()), await request.json());
  return new Response("Received Log!");
}

export async function GET(request: Request) {
  console.log(Array.from(request.headers.entries()), request);
  return new Response("App is up and running!");
}
