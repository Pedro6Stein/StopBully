let perguntas = [
    {
        titulo: 'Como é chamado o Bullying virtual?',
        alternativas: ['Bullying físico','Cyberbullying','Bullying verbal','Bullying sexual'],
        correta: 1
    },
    {
        titulo: 'Qual a importância de desabafar?',
        alternativas: ['Evitar que as pessoas se sintam tristes e/ou retraídas','Para se sentir superior',
        'Para se sentir envergonhado(a)','Pois isso sempre solucionará o Bullying'],
        correta: 0
    },
    {
        titulo: 'O que não é Bullying?',
        alternativas: ['Incentivar exclusão','Humilhar pessoas','Ataques físicos','Discussões'],
        correta: 3
    },
    {
        titulo: 'Quais as consequências do Bullying?',
        alternativas: ['Bem-estar e bom humor',' Exclusão e Paciência',
        'Baixa autoestima, tristeza, desinteresse pela escola','Medo, tristeza, facilidade em fazer amigos'],
        correta: 2
    },
    {
        titulo: 'O que define a lei 13.185/2015?',
        alternativas: ['Suicídio',' Ansiedade',
        'O racismo','Tipos de Bullying'],
        correta: 3
    }
    ]
    
    let app = {
    start: function(){
    
        this.Atualpos = 0;
        this.Totalpontos = 0;
    
        let alts = document.querySelectorAll('.alternativa');
        alts.forEach((element,index)=>{
            element.addEventListener('click', ()=>{
                this.checaResposta(index);
            })
        })
        this.atualizaPontos();
        app.mostraquestao(perguntas[this.Atualpos]);
    },
    
    mostraquestao: function(q){
        this.qatual = q;
        // mostrando o titulo
        let titleDiv = document.getElementById('titulo');
        titleDiv.textContent = q.titulo;
        // mostrando as alternativas
        let alts = document.querySelectorAll('.alternativa');
        alts.forEach(function(element,index){
            element.textContent = q.alternativas[index];
        })
    
    },
    
    Proximaperg: function(){
        this.Atualpos++;
        if(this.Atualpos == perguntas.length){
            this.Atualpos = 0;
        }
    },
    
    checaResposta: function(user){
        if(this.qatual.correta == user){
            console.log("Correta")
            this.Totalpontos++;
            this.mostraresposta(true);
        }
        else{
            console.log("Errada")
            this.mostraresposta(false);
        }
        this.atualizaPontos();
        this.Proximaperg();
        this.mostraquestao(perguntas[this.Atualpos]);
    },
    
    atualizaPontos: function(){
        let scoreDiv = document.getElementById('pontos');
        scoreDiv.textContent = `Sua pontuacao: ${this.Totalpontos}`;
    },
    
    mostraresposta: function (correto) {
        let resultDiv = document.getElementById('result');
        let result = '';
        // formate a mensagem a ser exibida
        if (correto) {
          result = 'Resposta Correta!';
        }
        else {
          // obtenha a questão atual
          let pergunta = perguntas[this.Atualpos];
          // obtenha o índice da resposta correta da questão atual
          let cindice = pergunta.correta;
          // obtenha o texto da resposta correta da questão atual
          let ctexto = pergunta.alternativas[cindice];
          result = `Incorreto! Resposta Correta: ${ctexto}`;
        }
        resultDiv.textContent = result;
      }
    
    
    }
    
    app.start();