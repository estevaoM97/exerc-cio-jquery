



$(document).ready(function(){
    $('form').on('submit', function(e){
        e.preventDefault();

    const novaAtividade = $('#form-nome').val();
    const novoItem = $(`<li style="display: none"></li>`);
    
        $('.container-2').slideDown();
        $(`<input type="checkbox" id="Atividade" name="Atividade" unchecked />
        <label for="Atividade">${novaAtividade}</label>`).appendTo(novoItem);
        $(novoItem).appendTo('ul');
        $(novoItem).fadeIn();
    });
})