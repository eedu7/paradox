import React from "react";
import { EventKeyEnum, getEventByKey } from "@/modules/events/constants";

export const EventsSection = () => {
    const data = getEventByKey(EventKeyEnum.KashmirDay);

    return (
        <div className="max-w-96">
            <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
    );
};
