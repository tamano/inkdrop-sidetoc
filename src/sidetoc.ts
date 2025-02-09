"use babel";

import { CompositeDisposable } from "event-kit";
import * as SideTocPane from "./sidetoc-pane";
import dispatcher from "./dispatcher";
import { Inkdrop, DispatchAction } from "./types";

const componentName = "SideTocPane";
const layoutName = "mde";

declare var inkdrop: Inkdrop;

class SideTocPlugin {
  subscriptions = new CompositeDisposable();

  activate() {
    const { components, commands } = inkdrop;
    components.registerClass(SideTocPane.default);
    show();

    this.subscriptions.add(
      commands.add(document.body, {
        "sidetoc:sidetoc-toggle": toggle,
        "sidetoc:jump-next": jumpToNext,
        "sidetoc:jump-prev": jumpToPrev,
        "sidetoc:width-increase": increaseWidth,
        "sidetoc:width-decrease": decreaseWidth,
        "sidetoc:width-reset": resetWidth,
        "sidetoc:wraptext-toggle": toggleTextwrap,
      })
    );
  }

  deactivate() {
    dispatcher.dispatch(<DispatchAction>{ type: "Deactivate" });

    this.subscriptions.dispose();

    const { components, layouts } = inkdrop;
    layouts.removeComponentFromLayout(layoutName, componentName);
    components.deleteClass(SideTocPane);
  }
}

const show = () => {
  inkdrop.layouts.insertComponentToLayoutAfter(layoutName, "Editor", componentName);
  dispatcher.dispatch({ type: "Activate" });
};

/* dispachers */
const toggle = () => dispatcher.dispatch(<DispatchAction>{ type: "Toggle" });
const jumpToNext = () => dispatcher.dispatch(<DispatchAction>{ type: "JumpToNext" });
const jumpToPrev = () => dispatcher.dispatch(<DispatchAction>{ type: "JumpToPrev" });
const increaseWidth = () => dispatcher.dispatch(<DispatchAction>{ type: "IncreaseWidth" });
const decreaseWidth = () => dispatcher.dispatch(<DispatchAction>{ type: "DecreaseWidth" });
const resetWidth = () => dispatcher.dispatch(<DispatchAction>{ type: "ResetWidth" });
const toggleTextwrap = () => dispatcher.dispatch(<DispatchAction>{ type: "ToggleTextwrap" });

const plugin = new SideTocPlugin();
module.exports = {
  config: {
    // #C5EAFB
    highlightBgColor: {
      title: "highlight background color (css variables | color name | #FFFFFF)",
      type: "string",
      default: "--note-list-view-item-active-background",
    },
    highlightFgColor: {
      title: "highlight foreground color (css variables | color name | #FFFFFF)",
      type: "string",
      default: "--note-list-view-item-active-color",
    },
    width: {
      title: "side pane width",
      type: "integer",
      default: 200,
    },
    increaseWidth: {
      title: "increase pane width",
      type: "integer",
      default: 10,
    },
    textwrap: {
      title: "wrap overflow text",
      type: "boolean",
      default: true,
    },
  },
  activate() {
    plugin.activate();
  },
  deactivate() {
    plugin.deactivate();
  },
};
