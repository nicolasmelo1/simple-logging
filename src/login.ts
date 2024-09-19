export async function GET(request: Request) {
  console.log(Array.from(request.headers.entries()), request);

  const url = new URL(request.url);
  const callbackUrl = url.searchParams.get('success_call_back');

  return Response.redirect(callbackUrl as string, 302);
}
  