$(function () {
    let table = $('#animal-table').DataTable({
        ajax: 'http://localhost:8080/',
        columns: [
            { data: "id" },
            { data: "name" },
            { data: "weight" },
            { data: "sPower" },
            { data: "eDate" },
        ]
    });
    $('#input-form').hide('slow');
    $('#add-an-animal-btn').on("click", function(){
      $('#add-an-animal-btn').hide('slow');
      $('#input-form').show('slow');
    });


    $("#input-form").on("submit", function( event ) {
      const d_arr = $('#input-form').serializeArray();
      console.log(JSON.stringify(d_arr));
      $.ajax({
        type: 'POST',
        url: 'http://localhost:8080/addAnimal',
        data: d_arr,
        dataType: "json",     
        success: function() {
            $('#input-form').hide('slow');
            $('#add-an-animal-btn').show('slow');
            $('#input-form').trigger("reset");
            table.ajax.reload();
        },
        error: function() {
          alert('error')
        }

      })
      
      event.preventDefault();
    });
});