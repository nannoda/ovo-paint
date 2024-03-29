import {DocUIState} from "../DocUIState";
import {closeToolMenu, openToolMenu} from "./ToolMenu";
import {closeLayerMenu, openLayerMenu} from "./LayerMenu";
import {Vec2} from "../../../Core/submodules/common-ts-utils/Math/Vector";


let openPos: Vec2 | null = null;
let openState: DocUIState | null = null;

export function openDocContextMenu(state: DocUIState, pos: [number, number] | null = null) {
    if (pos === null) {
        // console.log(`pos is null, using pointerAbsPos: ${state.input.pointerAbsPos}`);
        pos = state.input.pointerAbsPos;
    }
    openToolMenu(state, [pos[0] + 10, pos[1]]);
    openLayerMenu(state, [pos[0] - 10, pos[1]]);
    // console.log(pos)
    openPos = pos;
    openState = state;
}

export function closeDocContextMenu() {
    closeToolMenu();
    closeLayerMenu();
    openPos = null;
    openState = null;
}

export function refreshDocContextMenu(state: DocUIState, openPos: [number, number] | null = null) {
    const tmpPos = openPos;
    closeDocContextMenu();
    openDocContextMenu(state, tmpPos);
}

export function statelessRefreshDocContextMenu() {
    if (openState) {
        refreshDocContextMenu(openState, openPos);
    }
}
