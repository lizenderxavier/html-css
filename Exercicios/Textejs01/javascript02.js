
r=document.getElementById('r')
function vrf(){
var n1=document.getElementById('Pn')
var n2=document.getElementById('la')
Pn=(n1.value)
la=(n2.value)
if (Pn==la){
    r.innerHTML=`Resultado: <p>
        Você é um residente e Cidadão Nacional de ${Pn}
    </p>`

}else{
    r.innerHTML=` Resultado:<p>
        Você é um residente em ${la}  nativo de ${Pn}
    </p> ` 
    r.innerHTML+='<p> Você é um estranjeiro</p>'
}




}