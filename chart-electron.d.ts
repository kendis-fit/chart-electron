declare interface IPoint {
    x: number;
    y: number;
    r: number;
}

declare class Plot {
    
    constructor();

    bar(labels: string[], data: number[]): void;

    horizontalBar(labels: string[], data: number[]): void;

    pie(labels: string[], data: number[]): void;

    polar(labels: string[], data: number[]): void;

    doughnut(labels: string[], data: number[]): void;

    line(labels: string[], data: number[][]): void;

    radar(labels: string[], data: number[][]): void;

    groupedBar(labels: string[], data: number[]): void;

    bubble(labels: string[], data: IPoint[][], colors:? string[]): void;

    save(path: string): void;

    show(): void;
}