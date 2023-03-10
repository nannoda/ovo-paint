import {DocUIState} from "../DocUIState";
import {checkShortcut} from "../../../Shortcuts/ShortcutsChecker";

export function onKeyDown(state: DocUIState, e: KeyboardEvent) {
    if (e.key === "Control") {
        state.input.ctrlDown = true;
    }
    if (e.key === "Shift") {
        state.input.shiftDown = true;
    }
    if (e.key === "Alt") {
        state.input.altDown = true;
    }
    if (checkShortcut("redo", e)) {
        state.doc.doc.activeNode.redo();
    }
    if (checkShortcut("undo", e)) {
        state.doc.doc.activeNode.undo();
    }
    if (checkShortcut("export", e)) {
        e.preventDefault();
        console.log("exports")
    }
    if (checkShortcut("saveFile", e)) {
        e.preventDefault();
        console.log("saveFile")
        state.doc.doc.save().then(r => console.log(r));
    }
    // console.log(e.key)
    e.stopPropagation();
}

export function onKeyUp(state: DocUIState, e: KeyboardEvent) {
    if (e.key === "Control") {
        state.input.ctrlDown = false;
    }
    if (e.key === "Shift") {
        state.input.shiftDown = false;
    }
    if (e.key === "Alt") {
        state.input.altDown = false;
    }
}
