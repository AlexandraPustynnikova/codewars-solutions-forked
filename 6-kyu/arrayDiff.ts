const arrayDiff = (a: number[], b: number[]): number[] => {
    const diff = new Set(b);

    return a.filter(item => !diff.has(item));
}
