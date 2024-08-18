export interface Session {
    hostname: string;
    players: string;
    map: string;
    mode: string;
    created_at: string;
    id: string;
}

export interface ApiResponse {
    Items: Session[];
    Count: number;
    ScannedCount: number;
}

