let students = [];

function save() {
  let name = document.getElementsByClassName("name")[0].value;
  let email = document.getElementsByClassName("email")[0].value;
  let phoneNumber = document.getElementsByClassName("phoneNumber")[0].value;
  let address = document.getElementsByClassName("address")[0].value;
  let gender = "";

  if (document.getElementsByClassName("male")[0].checked) {
    gender = "Nam";
  } else if (document.getElementsByClassName("female")[0].checked) {
    gender = "Nữ";
  }

  students.push({
    name: name,
    email: email,
    phoneNumber: phoneNumber,
    address: address,
    gender: gender,
  });

  displayStudents();
  return false;
}
// Xóa Sinh viên
function deleteStudent(index) {
  students.splice(index, 1);
  displayStudents();
}
// Sắp xếp theo tên
function sortStudentsByName() {
  students.sort(function (a, b) {
    let nameA = a.name.toLowerCase();
    let nameB = b.name.toLowerCase();

    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }
    return 0;
  });

  displayStudents();
}
function displayStudents() {
  let tableContent = `<tr>
    <td>STT</td>
    <td>Họ và tên</td>
    <td>Email</td>
    <td>Điện thoại</td>
    <td>Địa chỉ</td>
    <td>Giới tính</td>
    <td>Hành động</td>
  </tr>`;

  students.forEach(function (student, index) {
    let studentIndex = index + 1;
    tableContent += `<tr>
      <td>${studentIndex}</td>
      <td>${student.name}</td>
      <td>${student.email}</td>
      <td>${student.phoneNumber}</td>
      <td>${student.address}</td>
      <td>${student.gender}</td>
      <td>
        <a href="#">Edit</a> | 
        <a href="#" onclick="deleteStudent(${index})">Delete</a>
      </td>
    </tr>`;
  });

  document.getElementsByClassName("listStudent")[0].innerHTML = tableContent;
  return false;
}
