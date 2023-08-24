export function cutLongContent(maxCharacterCount: number, text: string) {
    return text.substring(0, maxCharacterCount) + "...";
}
