export interface Line {
    visibility: string;
    class: string;
    words: Word[];
}
export interface Word {
    visibility: string;
    class: string;
    letters: Letter[];
    animateClass?: string;
}
export interface Letter {
    visibility: string;
    class: string;
    text: string;
    animateClass?: string;
}
export interface TeximateOptions {
    type?: string;
    animation?: {
        name;
        duration;
    };
    word?: {
        type;
        class?;
        delay?;
    };
    letter?: {
        type;
        class?;
        delay?;
    };
}
export declare const TeximateOrder: {
    SEQUENCE: string;
    REVERSE: string;
    SYNC: string;
    SHUFFLE: string;
};
