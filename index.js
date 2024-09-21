let numberArr = [1,20,5, -19,18];
document.getElementById("pShow").innerHTML = `[${numberArr}]`


let submit = () => {
    let number = document.getElementById("number").value
    if (number.trim() === "") {
        alert("vui long nhap so")
        return
    }
    numberArr.push(number*1);
    document.getElementById("pShow").innerHTML = `[${numberArr}]`
    tinhTong()
    duongNhoNhat()
    soNhoNhat()
    soCuoiCung()
    SNT()
    soNguyen()
    soSanh()
}

let tinhTong = () => {
    let ketQua = 0;
    let dem = 0;
    numberArr.forEach((item) => {
        if (item > 0) {
            ketQua += item
            dem++
        }
    })
    document.getElementById("tinhTongSoDuong").innerHTML=`<h3 style="color:red" >Tổng số dương: [${ketQua}]</h3>`

    document.getElementById("soLuongSoDuong").innerHTML = `<h3 style="color:red" >Số lượng số dương: [${dem}]</h3>`
}

let duongNhoNhat = () => {
    let min = numberArr[0];
    numberArr.forEach((item) => {
        if (item < min && item >= 0) {
            min = item
        }
    })
    document.getElementById("soDuongNhoNhat").innerHTML= `<h3 style="color:red" >Số dương nhỏ nhất: [${min}]</h3>`
}

let soNhoNhat = () => {
    let min = numberArr[0];
    numberArr.forEach((item) => {
        if (item < min && item <= 0) {
            min = item
        }
    })
    document.getElementById("soNhoNhat").innerHTML= `<h3 style="color:red" >Số nhỏ nhất: [${min}]</h3>`
}

let soCuoiCung = () => {
    let ketQua = -1;
    numberArr.forEach ((item) => {
        if (item % 2 === 0) {
            ketQua = item
            document.getElementById("soChanCuoiCung").innerHTML= `<h3 style="color:red" >Số chẵn cuối cùng: [${ketQua}]</h3>`

        }
    })
}

let doiCho = () => {
    const viTri1 = document.getElementById("cho_1").value
    const viTri2 = document.getElementById("cho_2").value
    let temp = numberArr[viTri1]
    numberArr[viTri1] = numberArr[viTri2]
    numberArr[viTri2] = temp
    document.getElementById("pDoiCho").innerHTML = `<h3 style="color:red" >Vị trí sau khi đổi chỗ: [${numberArr}]</h3>`
}

let sapXepTang = () => {
    let so = numberArr
    so.sort((a, b) => {
        return a-b;
    })
    document.getElementById("pSapXep").innerHTML = `<h3 style="color:red" >Vị trí sau khi tăng: [${so}]</h3>`
}

let SNT = () => {
    let number = numberArr[0]
    for (let i = 0; i < numberArr.length; i++) {
        if (numberArr[i] < 2 || numberArr[i] % 2 ==0 || Number.isInteger(Math.sqrt(numberArr[i]))) {
            number = numberArr[i]
        } else {
            number = numberArr[i]
            document.getElementById("soNguyenTo").innerHTML=`<h3 style="color:red" >Số nguyên tố đầu tiên[${number}]</h3>`
        }
    }
}

let soNguyen = () => {
    let dem = 0
    let number = numberArr
    number.forEach((item) => {
        if (Number.isInteger(item)) {
            dem++
        }
    })
    document.getElementById("soNguyen").innerHTML=`<h3 style="color:red" >Số nguyên [${dem}]</h3>`
}

let soSanh = () => {
    let number = numberArr
    let soDuong = 0
    let soAm = 0
    number.forEach((item) => {
        if (item > 0){
            soDuong++;
        } else {
            soAm++;
        }
    })
    if (soDuong > soAm) {
        document.getElementById("soSanh").innerHTML=`<h3 style="color:red" >Số dương nhiều hơn số âm</h3>`
    } else if (soAm > soDuong) {
         document.getElementById("soSanh").innerHTML=`<h3 style="color:red" >Số âm nhiều hơn số duong</h3>`
    } else{
        document.getElementById("soSanh").innerHTML=`<h3 style="color:red" >Số âm và số dương đều nhau</h3>`
    }
}


