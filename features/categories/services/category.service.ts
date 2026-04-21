export async function getCategories() {
    const user = JSON.parse(localStorage.getItem("user") || "{}");

    const res = await fetch("/api/categories", {
        headers: {
            userid: user.id,
        },
    });

    return res.json();
}

export async function createCategory(data: { name: string }) {
    const res = await fetch("/api/categories", {
        method: "POST",
        headers: {
            "Content-Type": "application/json", // 🔥 สำคัญ
        },
        body: JSON.stringify(data),
    });

    return res.json();
}

export async function updateCategory(
    id: number,
    data: { name: string }
) {
    const res = await fetch(`/api/categories/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json", // 🔥 สำคัญ
        },
        body: JSON.stringify(data),
    });

    return res.json();
}