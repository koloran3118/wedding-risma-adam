import { ImageResponse } from "next/og";
import { NextRequest } from "next/server";
import { invitations } from "@/lib/invitations";

export const runtime = "edge";

export async function GET(
  req: NextRequest,
  context: { params: Promise<{ slug: string }> }
) {
  const { slug } = await context.params;

  const data = invitations[slug as keyof typeof invitations];

  if (!data) {
    return new Response("Not found", { status: 404 });
  }

  return new ImageResponse(
    (
      <div
        style={{
          width: "1200px",
          height: "630px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          background: "black",
          color: "white",
          fontSize: 60,
          fontWeight: 600,
          textAlign: "center",
        }}
      >
        <div>
          {data.bride.name} & {data.groom.name}
        </div>

        <div
          style={{
            fontSize: 32,
            marginTop: 20,
            opacity: 0.8,
          }}
        >
          {data.dateLabel}
        </div>

        <div
          style={{
            fontSize: 22,
            marginTop: 40,
            opacity: 0.6,
          }}
        >
          Wedding Invitation
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}