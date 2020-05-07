declare interface IPoint {
    x: number;
    y: number;
    r: number;
}

declare class Plot {
    
    constructor();

    bar(labels: string[], data: number[], colors?: string[]): void;

    horizontalBar(labels: string[], data: number[], colors?: string[]): void;

    pie(labels: string[], data: number[], colors?: string[]): void;

    polar(labels: string[], data: number[], colors?: string[]): void;

    doughnut(labels: string[], data: number[], colors?: string[]): void;

    line(labels: string[], data: number[][], colors?: string[]): void;

    radar(labels: string[], data: number[][], colors?: string[]): void;

    groupedBar(labels: string[], data: number[], colors?: string[]): void;

    bubble(labels: string[], data: IPoint[][], colors:? string[]): void;

    save(path: string): void;

    show(): void;
}