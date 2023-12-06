// Q4. Write a JavaScript function called calculateTax that takes an income as an argument and returns the amount of tax to be paid. Use a closure to handle different tax rates based on income ranges. Test the function with various incomes.

function calculateTax() {

    const taxBrackets = [
      { minIncome: 0, maxIncome: 10000, taxRate: 0.1 },
      { minIncome: 10001, maxIncome: 30000, taxRate: 0.15 },
      { minIncome: 30001, maxIncome: 70000, taxRate: 0.2 },
      { minIncome: 70001, maxIncome: Infinity, taxRate: 0.25 }
    ];
  
    return function calculateTaxForIncome(income) {
        
      const applicableTax = taxBrackets.find(bracket => income >= bracket.minIncome && income <= bracket.maxIncome);
  
      if (applicableTax) {
        const taxAmount = income * applicableTax.taxRate;
        return taxAmount;
      } else {
        console.log("Invalid income.");
        return 0;
      }
    };
  }
  
  const taxCalculator = calculateTax();
  
  console.log(`₹${taxCalculator (25000)} tax to be paid`); 
  
  