function measureHeavyRandomnessResult(r, a, b, c, d) {
    if (r >= c) {
        goodReaction()
    } else if (r <= c) {
        sadReaction()
    } else if (r <= d) {
        angryReaction()
    } else if (r >= b) {
        loveReaction()
    } else if (r >= a) {
        ottReaction()
    }
}

function measureMediumRandomnessResult(r, a, b, c) {
    if (r > a) {
        goodReaction()
    } else if (r <= a) {
        sadReaction()
    } else if (r <= b) {
        angryReaction()
    } else if (r >= c) {
        loveReaction()
    }
}

function measureLowRandomnessResult(r, a) {
    if (r > a) {
        goodReaction()
    } else if (r < a) {
        sadReaction()
    } else if (r = a) {
        return
    }
}
