export function formatDate(isoString: string, useLocalTime: boolean = false): string {
    const date: Date = new Date(isoString);

    function getOrdinal(n: number): string {
        const s: string[] = ["th", "st", "nd", "rd"];
        const v: number = n % 100;
        return s[(v - 20) % 10] || s[v] || s[0];
    }

    const day: number = useLocalTime ? date.getDate() : date.getUTCDate();
    const month: string = date.toLocaleString("default", {
        month: "long",
        timeZone: useLocalTime ? undefined : "UTC",
    });
    const year: number = useLocalTime ? date.getFullYear() : date.getUTCFullYear();

    return `${day}${getOrdinal(day)} ${month}, ${year}`;
}
