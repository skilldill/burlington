export const createArea = (width, height) => {
    const area = [];
    for (let i = 0; i < height; i++) {
        area.push([]);
        
        for (let j = 0; j < width; j++) {
            area[i].push({ x: j, y: i });
        }
    }

    return area;
}