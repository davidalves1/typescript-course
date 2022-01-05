/**
 * 1. Create an employee object with:
 * - Array of strings for supervisors
 * - A function to verify the work time and return
 *     - <= 8, returns 'Ponto normal'
 *     - > 8, returns 'Fora do horário'
 */
type Employee = {

}

const employee: { name: string, supervisors: string[], validateWorkTime: (worktime: number) => string} = {
    name: 'David',
    supervisors: ['Fran', 'Paulo', 'Matilde'],
    validateWorkTime(worktime) {
        return worktime <= 8 ? 'Ponto normal' : 'Fora do horário';
    }
}

console.log(employee)
console.log(employee.validateWorkTime(8))
console.log(employee.validateWorkTime(10))