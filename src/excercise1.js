export function is_palindrome(candidate) {
    if (candidate === undefined || candidate === null) {
        return false;
    }
    const candidateStr = candidate
        .toString()
        .replace(/[^a-zA-Z]/g, '')
        .toLowerCase();
    return Array.from(candidateStr.substring(0, candidateStr.length / 2)).reduce((acc, currentValue, index) => {
        if (!acc) {
            return false;
        } else {
            return currentValue === candidateStr[candidateStr.length - index - 1];
        }
    }, true);
}
