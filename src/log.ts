export async function POST(request: Request) {
  console.log(await request.json());
  return new Response("Received Log!");
}

export async function GET(request: Request) {
  console.log(request);
  return new Response("App is up and running!");
}
