export const shuffleArray = (data : any[]) => {

    [...data].sort(()=> Math.random() -0.5);
}