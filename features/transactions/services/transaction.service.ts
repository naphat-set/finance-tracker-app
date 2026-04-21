const getUserId = () => {
    const user = JSON.parse(localStorage.getItem("user") || "{}");
    return String(user.id || "");
};

// GET
export async function getTransactions() {
    const res = await fetch("/api/transactions", {
        headers: {
            userid: getUserId(),
        },
    });

    const json = await res.json();
    return json;
}

// CREATE
export async function createTransaction(data: any) {
    const res = await fetch("/api/transactions", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            userid: getUserId(),
        },
        body: JSON.stringify(data),
    });

    const json = await res.json();
    return json;
}

// UPDATE
export async function updateTransaction(id: number, data: any) {
    console.log("CALL UPDATE API:", id, data);

    const res = await fetch(`/api/transactions/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
            userid: getUserId(),
        },
        body: JSON.stringify(data),
    });

    const json = await res.json();
    console.log("UPDATE RESPONSE:", json);
    return json;
}

// DELETE
export async function deleteTransaction(id: number) {
    const res = await fetch(`/api/transactions/${id}`, {
        method: "DELETE",
        headers: {
            userid: getUserId(),
        },
    });

    const json = await res.json();
    return json;
}