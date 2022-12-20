function recursiva(max) {
    console.log(max);
    if (max >= 11290) return;
    max++;
    recursiva(max);
}

recursiva(0);
