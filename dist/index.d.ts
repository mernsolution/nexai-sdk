export declare class NextAiClient {
    private secretKey;
    private baseUrl;
    constructor(secretKey: string, baseUrl?: string);
    getScheduledBlogs(): Promise<any>;
}
