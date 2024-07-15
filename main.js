$(document).ready(function () {
    var count = 0; // contador de tarefas

    // Adiciona tarefa quando o botão de adição é clicado
    $(".add").click(function () {
        var inputval = $(".form-control").val();
        if (inputval.trim() !== '') {
            count++; // Incrementa o contador de tarefas
            $(".to-do-list").append('<li><div class="left-cont"><input type="checkbox" id="check-'+count+'"><label for="check-'+count+'"></label><span>'+inputval+'</span></div><span class="remove"><i class="material-icons">delete</i></span></li>');
        }
        $(".form-control").val(''); // Limpa o formulário
    });

    // Adiciona/remova a classe 'active' quando a caixa de seleção é alterada
    $(document).on('change', 'input[type="checkbox"]', function(){
        if($(this).is(':checked')) {
            $(this).closest("li").children(".remove").addClass("active");
        } else {
            $(this).closest("li").children(".remove").removeClass("active");
        }
    });
    $(document).on('click', '.remove', function(){
        $(this).parent().remove();
    })
});
