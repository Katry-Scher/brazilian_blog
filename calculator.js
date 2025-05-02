document.addEventListener("DOMContentLoaded", function(){
    const salaryInput = document.getElementById("salary")
    const calculateBtn = document.getElementById("calculate")
    const resultDiv = document.getElementById("result")

    const incomeTaxBands = [
        {limit: 12570, rate: 0},
        {limit:50270, rate: 0.2},
        {limit: 125140, rate: 0.4},
        {limit: Infinity, rate: 0.45}
    ]
    const nationalInsuranceRate = 0.12;

    function calculateSalaryNet (salary) {
        let tax = 0
        let remainingSalary = salary

        for (const band of incomeTaxBands) {
            if (remainingSalary > band.limit) {
                tax += (band.limit * band.rate)
                remainingSalary -= band.limit
            } else {
                tax += (remainingSalary * band.rate)
                break
            }
        }
        const ni = salary * nationalInsuranceRate
        return salary - tax - ni
    }

    calculateBtn.addEventListener("click", function () {
        const salary = parseFloat(salaryInput.value) || 0
        const salaryNet = calculateSalaryNet(salary)

        resultDiv.innerHTML = `
        <p><strong> Salario liquido:</strong> £${salaryNet.toFixed(2)}</p>
        `
    })
})