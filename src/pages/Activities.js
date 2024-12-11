import React from "react";
import SelectRoomButton from "../components/SelectRoomButton";

function Activities() {
    const activityList = [
        "Crafting Tung",
        "Folding Lotus Flowers",
        "Cooking Thai popular dishes (Som Tam, Khanom Krok, Bua Loy)"
    ];

    return (
        <div class="row">
        <section className="activities text-left p-5 bg-light">
            <h2 className="mb-4">Daily Activities</h2>
            <p>Enjoy these hands-on cultural activities every afternoon:</p>
            <ul className="list-unstyled">
                {activityList.map((activity, index) => (
                    <li key={index} className="mb-2">
                        <i className="bi bi-check-circle-fill text-success me-2"></i>
                        {activity}
                    </li>
                ))}
            </ul>
        </section>
        <SelectRoomButton />
        </div>
    );
}

export default Activities;
