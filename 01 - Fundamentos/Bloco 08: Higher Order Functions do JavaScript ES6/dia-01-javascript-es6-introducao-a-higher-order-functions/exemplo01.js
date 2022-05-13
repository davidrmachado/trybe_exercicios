const up = () => 'Acordado!!';

const hungry = () => 'Bora tomar café!!';

const sleepy = () => {
    return 'Partiu dormir!!';
}
const doingThings = (thing) => {
    const result = thing();
    console.log(result);
}

doingThings (sleepy);