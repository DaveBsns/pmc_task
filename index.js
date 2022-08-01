$(function () {
    let table = $('#animal-table').DataTable({
        ajax: 'http://localhost:8080/',
        columns: [
            { data: "id" },
            { data: "name" },
            { data: "weight" },
            { data: "sPower" },
            { data: "eDate" },
            {
              data: null,
              className: "dt-center editor-edit",
              defaultContent: '<i class="fa fa-pencil"/>',
              orderable: false
            },
            {
              data: null,
              className: "dt-center editor-delete",
              defaultContent: '<i class="fa fa-trash"/>',
              orderable: false
            },
        ]
    });
    $('#input-form').hide('slow');
    $('#add-an-animal-btn').on("click", function(){
      $('#add-an-animal-btn').hide('slow');
      $('#input-form').show('slow');
    });


    $("#input-form").on("submit", function( event ) {
      const animal_new = $('#input-form').serializeArray();
      console.log(JSON.stringify(animal_new));
      $.ajax({
        type: 'POST',
        url: 'http://localhost:8080/addAnimal',
        data: animal_new,
        dataType: "json",     
        success: function() {
            $('#input-form').hide('slow');
            $('#add-an-animal-btn').show('slow');
            $('#input-form').trigger("reset");
            table.ajax.reload();
            alert("Successfully added an entry")
        },
        error: function() {
          alert('error')
        }
      })
      event.preventDefault();
    });


    // Delete a record
    $('#animal-table').on('click', 'td.editor-delete', function (e) {
      e.preventDefault();
      const id_del = $(this).closest('tr').children('td:first').text()
      $.ajax({
        type: 'DELETE',
        url: 'http://localhost:8080/deleteAnimal/'+id_del,    
        success: function() {
          table.ajax.reload();
        },
        error: function() {
          alert('error')
        }
      })

    });

    var id_edit;
    // Edit a record
    $('#animal-table').on('click', 'td.editor-edit', function (e) {
      e.preventDefault();
      id_edit = $(this).closest('tr').children('td:first').text()
      console.log(id_edit)
      $('#myModal').show()
      
    });
    $("#update-form").on("submit", function( event ) {
      const animal_update = $('#update-form').serializeArray();
      console.log(animal_update)
      $.ajax({
        type: 'POST',
        url: 'http://localhost:8080/updateAnimal/'+id_edit,
        data: animal_update,
        dataType: "json",    
        success: function() {
          table.ajax.reload();
          alert('Successfully updated the entry')
        },
        error: function() {
          alert('error')
        }
      })
    })
});


$('#close').on('click', function(){
  $('#myModal').hide()
})


