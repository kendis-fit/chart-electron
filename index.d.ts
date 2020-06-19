declare module "chart-electron" {
    type Chart = "bar" | "horizontalBar" | "pie" | "polar" | "doughnut" | "line" | "radar" | "bubble";
    
    type ChartData = number[] //  bar, horizontalBar, pie, polar, doughnut
                    | number[][] // line, radar
                    | IPoint[][]; // bubble

    interface IPlot {
        type: Chart;
        labels: string[];
        data: ChartData;
    }

    interface IPlotOptions {
        hideButtons?: boolean;
    }

    interface IPoint {
        x: number;
        y: number;
        r: number;
    }

    interface IJson {
        toJson(): string;
    }

    interface IPlotJson extends IPlot, IJson {}

    interface IPlotOptionsJson extends IPlotOptions, IJson {}
    
    class Plot {
        /* constructors */
        constructor(plot: IPlot, options?: IPlotOptions);
        /* fields */
        plot: IPlotJson;
        options: IPlotOptionsJson;
        /* methods */
        save(path: string): void;
        show(): void;
    } 
}