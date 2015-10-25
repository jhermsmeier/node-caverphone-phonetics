var assert = require( 'assert' )
var caverphone = require( '..' )

describe( 'Caverphone', function() {
  
  it( 'Stevenson', function() {
    assert.equal( caverphone( 'Stevenson' ), 'STFNSN1111' )
  })
  
  it( 'Peter', function() {
    assert.equal( caverphone( 'Peter' ), 'PTA1111111' )
  })
  
  it( 'Common CP', function() {
    [ 'add', 'aid', 'at', 'art', 'eat', 'earth', 'head', 'hit', 'hot', 'hold', 'hard', 'heart', 'it', 'out', 'old' ]
      .forEach( function( w ) {
        assert.equal( caverphone(w), 'AT11111111' )
      })
  })
  
})
