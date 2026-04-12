// Generates 30 days of mock consumption history with boolean tags
const generateMockHistory = () => {
    const history = [];
    let currentDate = new Date();
    
    for (let i = 0; i < 30; i++) {
        // Randomly assign whether they ate that meal (e.g. 90% chance of breakfast, 95% lunch, etc.)
        history.push({
            date: currentDate.toISOString().split('T')[0],
            breakfast: Math.random() > 0.1,
            lunch: Math.random() > 0.05,
            snacks: Math.random() > 0.3,
            dinner: Math.random() > 0.1,
        });
        currentDate.setDate(currentDate.getDate() - 1); // go back one day
    }
    return history;
};

// Fixed pricing logic requirements
export const MEAL_PRICING = {
    breakfast: 60,
    lunch: 60,
    snacks: 10,
    dinner: 60
};

export const studentConsumptionHistory = generateMockHistory();

// Sunday Sweet Poll Mock Data
export const sweetPollData = [
    { name: 'Gulab Jamun', votes: 145 },
    { name: 'Rasgulla', votes: 98 },
    { name: 'Jalebi', votes: 120 },
    { name: 'Kheer', votes: 75 }
];
