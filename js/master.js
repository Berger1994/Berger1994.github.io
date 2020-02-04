(function () {
    let countField;
    let buyField;
    let payField;

    let responseBuy = document.getElementById("responseBuy");
    let responsePay = document.getElementById("responsePay");
    let responseProfit = document.getElementById("responseProfit");

    initFields();
    initListeners();


    function initFields() {
        {
            let element = document.getElementById('count');
            let maskOptions = {
                mask: Number,
                scale: 0
            };
            countField = IMask(element, maskOptions);
        }

        {
            let element = document.getElementById('buy');
            let maskOptions = {
                mask: Number,
                scale: 4,
                radix: '.',
                normalizeZeros: true,
            };
            buyField = IMask(element, maskOptions);
        }

        {
            let element = document.getElementById('pay');
            let maskOptions = {
                mask: Number,
                scale: 4,
                radix: '.',
                normalizeZeros: true,
            };
            payField = IMask(element, maskOptions);
        }
    }

    function initListeners() {
        countField.on("accept", calculate);
        buyField.on("accept", calculate);
        payField.on("accept", calculate);

        function calculate() {

            if (countField.value && buyField.value && payField.value) {
                let countValue = Number(countField.value);
                let buyValue = Number(buyField.value);
                let payValue = Number(payField.value);

                responseBuy.innerHTML = countValue * buyValue;
                responsePay.innerHTML = countValue * payValue;
                responseProfit.innerHTML = countValue * (payValue - buyValue);
            }
        }
    }
})();