function RandomColorSequence(length) {
    this.items = []
    for (let i = 0; i < length; i++) {
        let number = Math.floor(Math.random() * 4 + 1)
        let color = numberToColor(number)
        this.items.push(color)
    }

}

RandomColorSequence.numberToColor = numberToColor

function numberToColor(number) {
    if (number === 1) return 'red'
    if (number === 2) return 'green'
    if (number === 3) return 'blue'
    if (number === 4) return 'yellow'
}