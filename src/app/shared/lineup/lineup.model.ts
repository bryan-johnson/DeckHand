export interface MeetEvent {
    fullString: string;
    distance: number;
    stroke: string;
    relay: boolean;
}
export interface Performance {
    event: string;
    time: string;
    date?: Date;
    meet?: string;
}
export interface Swimmer {
    name: string;
    role?: string;
    topEvents?: string[];
    topPerformances?: Performance[];
    age?: number;
    year?: string;
    gender: string;
}
export interface Entry {
    event: string;
    swimmer: string[];
}
export interface Lineup {
    meetName: string;
    entries: Entry[];
    date?: Date;
    format: MeetEvent[];
    swimmers?: Swimmer[];
}