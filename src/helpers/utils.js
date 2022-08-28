/**
 *
 * @param {Event} event - Pass is event from event handlers
 */
export function stopPropagation(event) {
  if (event?.stopPropagation) event.stopPropagation();
}
