import React from "react";

interface DetailItemProps {
    separator?: string;
    label: string;
    value?: string;
}

const DetailItem: React.FC<DetailItemProps> = ({ label, value, separator = ":" }) => {
    return (
        <div className="flex gap-1">
            <h3 className="font-bold">{label}</h3>
            {separator}
            <div className="flex flex-wrap">{value}</div>
        </div>
    );
};

export default DetailItem
