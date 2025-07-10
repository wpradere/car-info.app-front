import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import * as jose from "jose";

export  async function middleware(request: NextRequest) {    
  const cookie = (await cookies()).get("session");
  if (!cookie) {    
    return NextResponse.redirect(new URL("/login", request.url));
  }
  const secret = jose.base64url.decode(
    'YCwYOmAVH1Km98TxdmZa+ewwjWz/8Zbp9GVX3Ro+9ks='
  );  
  const jwt = cookie.value;  
  try {
    const { payload } = await jose.jwtVerify(jwt, secret,{
        algorithms:['HS256']
    });    
    return NextResponse.next();    
  } catch (err) {
    console.error("Error in midd login:", err);
   return NextResponse.redirect(new URL("/login", request.url));

  } 
}
export const config = {
  matcher: ["/main/:path*","/car/:path*","/crud/:path*","/registro/:path*"],
};