export async function getSummary() {
    const user = JSON.parse(localStorage.getItem("user") || "{}");

    const res = await fetch("/api/dashboard/summary", {
        headers: {
            userid: user.id,
        },
    });

    return res.json();
}

export async function getCategorySummary() {
    const user = JSON.parse(localStorage.getItem("user") || "{}");

    const res = await fetch("/api/dashboard/category", {
        headers: {
            userid: user.id,
        },
    });

    return res.json();
}