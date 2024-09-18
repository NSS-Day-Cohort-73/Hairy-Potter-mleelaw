export const firePottery = (object, temperature) => {
    object.fired = true;
    if (temperature > 2200) {
        object.cracked = true;
    } else {
        object.cracked = false;
    }

    return object;
};