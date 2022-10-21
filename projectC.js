fetch("http://localhost/step3/projectC.php")
  .then((res) => res.json())
  .then((response) => {
    let out = "";

    response.forEach((element) => {
      console.log(element.id);
      out += `<tr>
      <td> ${element.id} </td>
       <td> ${element.firstname} </td>
        <td> ${element.lastname} </td>
         <td> ${element.phone} </td>
          <td> ${element.email} </td>
           <td> ${element.birth_date} </td>
      </tr>`;
    });
    console.log(out);
    document.querySelector(".tbody").innerHTML = out;
  })
  .catch((err) => console.log(err));
