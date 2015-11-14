function interpreter(codeStr) {

    var mem = []
    for( var i=0; i<200; i++ ) mem[i] = 0
    var code = codeStr.split( '' )

    var pointer = 0
    var counter = 0

    var flg = 1, l, e, m

    while( counter<code.length ){
        
        m = mem[pointer]
        switch( code[counter] ){
            case '+':
                mem[pointer]++
                break
            case '-':
                mem[pointer]--
                break
            case '.':
                console.log(String.fromCharCode(m))
                break
            case ',':
                mem[pointer] = flg ? prompt('').charCodeAt() : 10
                flg = !flg
                break
            case '>':
                pointer++
                break
            case '<':
                pointer--
                break
            case '[':
                if( l=0, m==0 )
                    while( l>0 || counter++, ( e=code[counter] )!=']' ) e == '[' ? l++ : e == ']' ? l-- : 0
                break
            case ']':
                if( l=0, m!=0 )
                    while( l>0 || counter--, ( e=code[counter] )!='[' ) e == ']' ? l++ : e == '[' ? l-- : 0
                break
            /*
            case '=':
                var after = ''
                var before = ''

                var x = y = counter
                while( x-- ){
                    if( Number(code[x]) || Number(code[x]) == 0 ) before = code[x] + before
                    else break
                }

                while( y++ ){
                    if( Number(code[y]) || Number(code[x]) == 0 ) after = after + code[y]
                    else break
                }

                console.log(before)

                mem[before] = mem[after]
                console.log(mem)
                break
            */

        }
        counter++
    }

}

/*

// Min

function interpreter( e, f, a, d, g, c, b ){
    
    for( f=[], a=0; a<1024; a++ ) f[a] = 0
    e = e.split( '' )
    
    for( d=a=0, g=1, c, b; d<e.length; ){
        b = f[a]
        switch( e[d] ){
            case "+":
                f[a]++
                break
            case "-":
                f[a]--
                break
            case ".":
                console.log(String.fromCharCode(b));
                break
            case ",":
                f[a] = g ? prompt().charCodeAt() : 10;
                g = !g
                break
            case ">":
                a++
                break
            case "<":
                a--
                break
            case "[":
                if( c=0, 0==b )
                    for( ; 0<c || d++, "]"!=(b=e[d]); ) "[" == b ? c++ : "]" == b ? c-- : 0
                break
            case "]":
                if( c=0, 0!=b )
                    for( ; 0<c || d--, "["!=(b=e[d]); ) "]" == b ? c++ : "[" == b ? c-- : 0
        }
        d++
    }
    
}

*/