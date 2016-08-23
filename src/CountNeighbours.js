count_neighbours = function( area , y ,x  ){
  var result = 0 ;

  if( x-1 >= 0 ){
    result += area[x-1][y];
  }

  if( x-1 >= 0 && y+1 < area[0].length ){
    result += area[x-1][y+1];
  }

  if( y-1 >= 0 ){
    result += area[x][y-1];
  }

  if( y-1 >= 0 && x+1 < area[0].length ){
    result += area[x+1][y-1];
  }

  if( x-1 >= 0 && y-1 >= 0 ){
    result += area[x-1][y-1];
  }

  if( x+1 < area[0].length ){
    result += area[x+1][y];
  }

  if( y+1 < area.length ){
    result += area[x][y+1];
  }

  if( x+1 < area[0].length && y+1 < area.length ){
    result += area[x+1][y+1];
  }

  return result;
}

/*
neighbours = function(area , y , x){
  if(( x >= 0 && x < area[0].length && y >= 0 && y < area[0].length ))
    console.log( 'y '+y , 'x '+x , ':'+area[y][x] );
  return ( x >= 0 && x < area[0].length && y >= 0 && y < area[0].length ) ? area[y][x] : 0 ;
}
*/

/*
  x/y x x x x
  y
  y
  y
*/

module.exports = count_neighbours;
