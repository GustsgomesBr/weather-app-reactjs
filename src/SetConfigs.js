import Inverno from './estacoes/inverno.jpg'
import Outono from './estacoes/outono.jpg'
import Primavera from './estacoes/primavera.jpg'
import Verao from './estacoes/verao.jpg'

var estacoesAno = {
    Inverno: ["JULHO", "AGOSTO", "SETEMBRO"],
    Outono: ["MARÇO", "ABRIL", "MAIO", "JUNHO"],
    Primavera: ["OUTUBRO", "NOVEMBRO", "DEZEMBRO"],
    Verao: ["JANEIRO", "FEVEREIRO"]
}

function BgColor(){
    var data = new Date()
    var horario = data.getHours();  
    
    if(horario >= 0 && horario <= 4){
      document.body.style = 'background: linear-gradient(to bottom, #000217, #000428)'
    }else if(horario >= 5 && horario <= 7){
      document.body.style = 'background: linear-gradient(to bottom, #000428, #004e92)'
    }else if(horario >= 8 && horario <= 10){
      document.body.style = 'background: linear-gradient(to bottom, #00b4db, #0083b0);'
    }else if(horario >= 11 && horario <= 16){
      document.body.style = 'background: linear-gradient(to bottom, #fdc830, #f37335)'
    }else if(horario >= 17 && horario <= 19){
      document.body.style = 'background: linear-gradient(to bottom, #f12711, #f5af19)'
    }else if(horario >= 20 && horario <= 23){
      document.body.style = 'background: linear-gradient(to bottom, #0f2027, #203a43, #2c5364)'
    }
}

function SideImg(props){
    var img;
    var mes = props.id

    for (let i = 0; i < 4; i++) {
        if(mes === estacoesAno.Inverno[i]){
            img = Inverno;
        }else if(mes === estacoesAno.Outono[i]){
            img = Outono;
        }else if(mes === estacoesAno.Primavera[i]){
            img = Primavera;
        }else if(mes === estacoesAno.Verao[i]){
            img = Verao;
        }
        
    }

    return (
        <img src={img} alt=""></img>
    )
}

export {
    BgColor,
    SideImg
}