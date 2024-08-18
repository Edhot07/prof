import { NextResponse } from "next/server";
let cartCount = 0;

// export async function GET() {
//   return new Response(JSON.stringify({ cartCount }), { status: 200 });
// return NextResponse.json({cartCount})

// }

// export async function POST(request) {
//   cartCount += 1;
//   return new Response(JSON.stringify({ cartCount }), { status: 200 });
// }


export async function POST(request) {
    // cartCount+=1;
    const body = await request.json();
    
    // console.log(body);  
    return NextResponse.json(cartCount)
}