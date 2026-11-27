declare namespace Cloudflare {
  interface Env {
    DB?: D1Database;
    BUCKET?: R2Bucket;
    GOOGLE_MAPS_API_KEY?: string;
    GOOGLE_MAPS_HOURLY_LIMIT?: string;
  }
}
