
function thueSuat(thuNhap) {
    if (thuNhap <= 60) {
        return 0.05;
    } else if (thuNhap <= 120) {
        return 0.1;
    } else if (thuNhap <= 210) {
        return 0.15;
    } else if (thuNhap <= 384) {
        return 0.2;
    } else if (thuNhap <= 624) {
        return 0.25;
    } else if (thuNhap <= 960) {
        return 0.3;
    } else {
        return 0.35;
    }
}

function tinhTienThue() {
    var tongThuThap = document.getElementById('txtThuNhap').value * 1
    var soNguoiPhuThuoc = document.getElementById('txtThuNhap').value * 1

    var phanTramChiuThue = thueSuat(tongThuThap)
    var tienThuePhaiChiu = tongThuThap - 4 - (soNguoiPhuThuoc * 1.6)

    alert(`Số thuế phải chịu là: ${tienThuePhaiChiu} triệu `)
}

// Tính tiền cáp

function select_onchange() {
    $('select').on('change', function (e) {
        var html_soKetNoiCoBan = document.getElementById('txtSoKetNoi');
        var valueSelected = this.value;
        if (valueSelected == 'Doanh nghiệp') {
            html_soKetNoiCoBan.style.display = 'block';
        } else {
            html_soKetNoiCoBan.style.display = 'none';
        }
    })
}

select_onchange()

function xuatHoaDon() {
    var maKhachHang = document.getElementById('txtMaKhachHang').value;
    var loaiKhachHang = document.getElementById('loaiKhachHang').value
    var soKetNoiCoBan = document.getElementById('txtSoKetNoi').value * 1;
    var soKetNoiCaoCap = document.getElementById('txtSoKetNoiCaoCap').value * 1;

    var result = 0;
    if ( loaiKhachHang == 'Gia đình') {
        result = 4.5 + 20.5 + (7.5 * soKetNoiCaoCap)
    } else {
        if (soKetNoiCoBan <=10) {
            result = 15 + 7.5 * soKetNoiCoBan + 50 * soKetNoiCaoCap
        } else {
            result = 15 + 75 + ((soKetNoiCoBan - 10) * 5) + 50* soKetNoiCaoCap
        }
    }

    var ele_result = document.getElementById('result');

    ele_result.style.display = 'block';
    ele_result.innerHTML = `<h4 class="alert-heading">Hóa đơn tiền cáp</h4>
    <p>Mã Khách hàng: ${maKhachHang}</p>
    <p class="mb-0">Số tiền cần thanh toán ${result} $ </p>`

}