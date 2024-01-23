function contar(){
    var ini = document.getElementById('inc');
    var fim = document.getElementById('fim');
    var passo = document.getElementById('pass');
    var res = document.getElementById('res')

        if(ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0 ){
            window.alert('[ERRO] Verifique os campos ')
        
        }else{
            
            res.innerHTML = 'Contando... <br>'
            i = Number(ini.value)
            f = Number(fim.value)
            p = Number(passo.value)
            if(p <=0){
                window.alert('Passo invalido! Considando passo = 1')
                p =1;
            }
            res.innerHTML +=`${c} \u{1F4A8}`

            if(i < f ){
                //contagem crescente
                for(var c =i; c<=f; c+=p){
                    res.innerHTML +=`${c} \u{1FAF8}`
                  
                }
             
            }else{
                //contagem decrecente 
                for(var c =i; c>=f; c-=p){
                    res.innerHTML +=`${c} \u{1FAF8}`
                }
            }
            res.innerHTML +=`${c} \u{1F3C1}`
            

        }

   




}