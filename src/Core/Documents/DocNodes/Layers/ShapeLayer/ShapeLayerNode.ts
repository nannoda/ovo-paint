import {DocNode, DocNodeRenderEvent} from "../../DocNode";
import {Shape} from "./Shape";
import {Vec2} from "../../../../submodules/common-ts-utils/Math/Vector";


export class ShapeLayerNode extends DocNode {
    constructor(name: string = "New Shape Layer", offset: Vec2 = [0, 0]) {
        super(name, offset);
    }

    private _shapes: Shape[] = [];

    get shapes(): Shape[] {
        return this._shapes;
    }

    addShape(shape: Shape): void {
        this._shapes.push(shape);
    }

    removeShape(shape: Shape): void {
        const index = this._shapes.indexOf(shape);
        if (index !== -1) {
            this._shapes.splice(index, 1);
        }
    }

    render(e: DocNodeRenderEvent): void {
        // let bitmaps:CanvasImageSource = []
        for (const shape of this._shapes) {
            shape.renderTo(e.ctx);
        }
        // e.ctx.drawImage(tmpCanvas, this.offset[0], this.offset[1]);
    }

    redo(): void {
    }

    undo(): void {
    }

    createSnapshot(): void {
        throw new Error("Method not implemented.");
    }
}
