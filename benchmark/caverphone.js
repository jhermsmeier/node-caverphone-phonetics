var caverphone = require( '..' )

const A = 'Dagobert'

suite( 'phonetics', function() {
  
  bench( 'Caverphone', function() {
    caverphone( A )
  })
  
})
