export function analyzeArray(arr) {
    if (!Array.isArray(arr) || arr.length === 0) {
        return null;
    }
    const sum = arr.reduce((acc, val) => acc + val, 0);
    const average = sum / arr.length;
    const min = Math.min(...arr);
    const max = Math.max(...arr);
    return {
        average,
        min,
        max,
        length: arr.length
    };
}