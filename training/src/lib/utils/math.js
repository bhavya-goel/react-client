const getRandomNumber = (maxNum) => {
    let num = Math.random()
    num = Math.round((num * 10) % maxNum)
    return num
}

const getNextRoundRobin = (total, current) => {
    const next = (current+1) % total
    return next
}

export { getRandomNumber, getNextRoundRobin }