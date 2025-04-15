// netlify/functions/key.js

export async function handler(event, context) {
    // 必要ならアクセス制限（ヘッダやRefererチェック）をここで入れる
  
    return {
      statusCode: 200,
      headers: {
        "Content-Type": "application/json",
        // CORSつけておく（必要なら）
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({ key: process.env.TAILSCALE_KEY }),
    };
  }
  