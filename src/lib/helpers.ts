export function trimText(input: string, maxLength: number = 100): string {
    if (input.length <= maxLength) return input
    return input.substring(0, maxLength - 3) + '...'
}
export function getCurrentTimeInColombia(): Date {
    // Create a date object with the current UTC time
    const now = new Date()

    // Convert the UTC time to Colombia's time
    const offsetColombia = -5 // Colombia is in America time (UTC-5)
    now.setHours(now.getUTCHours() + offsetColombia)

    return now
}

export function formatTimeForColombia(date: Date): string {
    const options: Intl.DateTimeFormatOptions = {
        hour: 'numeric',
        minute: '2-digit',
        second: '2-digit',
        hour12: false, // This will format the time in 12-hour format with AM/PM
        timeZone: 'America/Bogota',
    }

    let formattedTime = new Intl.DateTimeFormat('en-US', options).format(date)

    // Append the time zone abbreviation. You can automate this with libraries like `moment-timezone`.
    // For simplicity, here I'm just appending "COT".
    formattedTime += ' COT'

    return formattedTime
}

export function formatDate(date: Date): string {
    return date.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    })
}
