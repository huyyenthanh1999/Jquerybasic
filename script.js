let data = [
    { name: "Thai", age: 25, username: "thaihoang", password: "123456" },
    { name: "Tung", age: 24, username: "tungnguyen", password: "123456" },
    { name: "Vũ", age: 25, username: "vule", password: "123456" },
    { name: "Linh", age: 25, username: "linhle", password: "123456" },
];

function render() {
    $('.data').html('');
    data.map((dataElement,index) => {
        var dataele = `
        <div class="data__element">
            <div class="element__info">
                <div class="name">
                    <span class="titleE">Name</span>
                    ${dataElement.name}
                </div>
                <div class="age">
                    <span class="titleE">Age</span>
                    ${dataElement.age}
                </div>
                <div class="username">
                    <span class="titleE">Username</span>
                    ${dataElement.username}
                </div>
                <div class="password">
                    <span class="titleE">Password</span>
                    ${dataElement.password}
                </div>
            </div>
            <div class="element__action">
                <button class="edit">Edit</button>
                <button class="delete">Delete</button>
            </div>
        </div>
        `;
        $('.data').append(dataele);
        $($('.delete')[index]).on('click', () => {
            data.splice(index, 1);
            render();
        })

        $($('.edit')[index]).on('click', () => {
            $('.input__name').val(dataElement.name);
            $('.input__age').val(dataElement.age);
            $('.input__username').val(dataElement.username);
            $('.input__password').val(dataElement.password);
            $('.update-btn').off('click');
            $('.update-btn').on('click', () => {
                var newUpdate = {
                    name:$('.input__name').val(),
                    age:$('.input__age').val(),
                    username:$('.input__username').val(),
                    password:$('.input__password').val(),
                }
                data.splice(index,1,newUpdate)
                console.log(data)
                render();
            })
        })
    })
}

render();

function add(){
    var newEle = {
        name:$('.input__name').val(),
        age:$('.input__age').val(),
        username:$('.input__username').val(),
        password:$('.input__password').val(),
    }
    data.push(newEle)
    render();
}