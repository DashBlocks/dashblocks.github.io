export default async function ({ addon, global, console }) {
  // see fix-editor-comments
  const Blockly = await addon.tab.traps.getBlockly();
  const originalCommentEndDrag = Blockly.BubbleDragger.prototype.endBubbleDrag;
  Blockly.BubbleDragger.prototype.endBubbleDrag = function (e, currentDragDeltaXY) {
    if (!addon.self.disabled && this.draggingBubble_.comment) {
      const y = this.draggingBubble_.comment.iconXY_.y - Blockly.ScratchBubble.TOP_BAR_HEIGHT / 2;
      currentDragDeltaXY.y = y - this.startXY_.y;
    }
    return originalCommentEndDrag.call(this, e, currentDragDeltaXY);
  };
}
