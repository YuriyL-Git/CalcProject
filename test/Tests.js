var should = chai.should()
var expect = chai.expect


describe('Random color sequence test', function () {

    it('should track its length', function () {
        let sequence = new RandomColorSequence(4)//?
        sequence.items.length.should.equal(4)
    })

    let colors = ['red', 'green', 'blue', 'yellow']
    it('should contain colors', function () {
        let sequence = new RandomColorSequence(4)

        colors.should.contain(sequence.items[0])
        colors.should.contain(sequence.items[1])
        colors.should.contain(sequence.items[2])
        colors.should.contain(sequence.items[3])
    });

    it('should return correct color for specific number', function () {
        RandomColorSequence.numberToColor(1).should.equal('red')
        RandomColorSequence.numberToColor(2).should.equal('green')
        RandomColorSequence.numberToColor(3).should.equal('blue')
        RandomColorSequence.numberToColor(4).should.equal('yellow')
    });

})
