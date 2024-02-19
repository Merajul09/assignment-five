const allLetter = document.getElementsByClassName('add-bg');
let seat = 0;

for (const letter of allLetter) {
    letter.addEventListener('click', function (e) {
        seat += 1;
        if (seat <= 4) {
            const selectedSeat = e.target.innerText;
            const addBg = e.target;
            addBg.classList.remove('bg-[#F7F8F8]');
            addBg.classList.add('bg-[#1DD100]', 'text-white', 'pointer-events-none');
            const tableData = document.getElementById('table-data');
            const tr = document.createElement('tr');
            const tableSeat = document.createElement('td');
            const tableClass = document.createElement('td');
            const tablePrice = document.createElement('td');
            tableSeat.innerText = selectedSeat;
            tableClass.innerText = 'Economy';
            tablePrice.innerText = '550';
            tableData.appendChild(tr);
            tr.appendChild(tableSeat);
            tr.appendChild(tableClass);
            tr.appendChild(tablePrice);
            tableClass.classList.add('px-10');
            tablePrice.classList.add('pl-10');

            const availableSeat = parseInt(document.getElementById('available-seat').innerText);
            document.getElementById('available-seat').innerText = availableSeat - 1;

            const totalPrice = parseInt(document.getElementById('total-price').innerText);
            document.getElementById('total-price').innerText = totalPrice + 550;
            const grandPrice = parseInt(document.getElementById('grand-price').innerText);
            document.getElementById('grand-price').innerText = grandPrice + 550;
            setInnerText('seat-count', seat);
        }
    });
    letter.addEventListener('click', function () {
        if (seat === 4) {
            const applyBtn = document.getElementById('apply-btn');
            applyBtn.removeAttribute('disabled');
        }
    })
    document.getElementById('phone').addEventListener('keyup', function (e) {
        const text = e.target.value;
        const finalText = parseInt(text);
        if (typeof text !== 'string' || !isNaN(finalText)) {
            const nextBtn = document.getElementById('next-btn');
            nextBtn.removeAttribute('disabled');
            letter.addEventListener('click', function () {
                if (seat >= 1) {
                    const nextBtn = document.getElementById('next-btn');
                    nextBtn.removeAttribute('disabled');
                }
            })
        }
    })


};


function setInnerText(id, value) {
    document.getElementById(id).innerText = value;
};

const applyBtn = document.getElementById('apply-btn');
applyBtn.addEventListener('click', function () {
    const couponElement = document.getElementById('input-btn').value;
    const couponCode = couponElement.split(' ').join('').toUpperCase();
    if (seat === 4) {
        if (couponCode === 'NEW15') {
            const grandPrice2 = parseInt(document.getElementById('total-price').innerText);
            const grandTotalDiscount = grandPrice2 - (grandPrice2 * 0.15);
            document.getElementById('grand-price').innerText = grandTotalDiscount;
            const applyDiv = document.getElementById('apply-div');
            applyDiv.classList.add('hidden');
            const addDiscount = document.getElementById('add-discount');
            const div = document.createElement('div');
            const p = document.createElement('p');
            const p2 = document.createElement('p');
            p.innerText = 'Discounted Price';
            p2.innerText = 'BDT ' + (grandPrice2 * 0.15);
            addDiscount.appendChild(div);
            div.appendChild(p);
            div.appendChild(p2);
            div.classList.add('flex', 'justify-between', 'max-w-sm', 'mb-3', 'border-t-2');
        } else if (couponCode === 'COUPLE20') {
            const grandPrice3 = parseInt(document.getElementById('total-price').innerText);
            const grandTotalDiscount = grandPrice3 - (grandPrice3 * 0.20);
            document.getElementById('grand-price').innerText = grandTotalDiscount;
            const applyDiv = document.getElementById('apply-div');
            applyDiv.classList.add('hidden');
            const addDiscount = document.getElementById('add-discount');
            const div = document.createElement('div');
            const p = document.createElement('p');
            const p2 = document.createElement('p');
            p.innerText = 'Discounted Price';
            p2.innerText = 'BDT ' + (grandPrice3 * 0.20);
            addDiscount.appendChild(div);
            div.appendChild(p);
            div.appendChild(p2);
            div.classList.add('flex', 'justify-between', 'max-w-sm', 'mb-3', 'border-t-2');
        } else {
            alert('Invalid Coupon Code');
        }
    } else {
        alert('Please select al least 4 tickets');
    }
})