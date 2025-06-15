import axios from "axios";

export class NextAiClient {
  private secretKey: string;
  private baseUrl: string;

  constructor(secretKey: string, baseUrl: string) {
    if (!secretKey || !baseUrl) {
      throw new Error("Secret key and base URL are required");
    }

    this.secretKey = secretKey;
    this.baseUrl = baseUrl;
  }

  async getScheduledBlogs() {
    try {
      const res = await axios.get(`${this.baseUrl}/api/blogs`, {
        headers: {
          Authorization: `Bearer ${this.secretKey}`,
        },
      });

      return res.data;
    } catch (error: any) {
      throw new Error(error.response?.data?.message || "Failed to fetch blogs");
    }
  }
}
