import { ImageResponse } from 'next/og';
// App router includes @vercel/og.
// No need to install it.
 
export const runtime = 'edge';
 
export async function GET() {
  const background = "https://basehub.earth/cdn-cgi/imagedelivery/AcMAerS13uRNdcqmxOA-IQ/273ebe35-9545-4d3b-f5c4-120b5b380d00/public"
  
  const imageData = await fetch(new URL('./image.png', import.meta.url)).then(
    (res) => res.arrayBuffer(),
  );
  
  return new ImageResponse(
    (
      <div
        style={{
          background: 'white',
          width: '100%',
          height: '100%',
          textAlign: 'center',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundImage: `url(${background})`
        }}
      >
        <img width="256" height="256" src={imageData} />
      </div>
    ),
    {
      width: 1200,
      height: 630,
    },
  );
}