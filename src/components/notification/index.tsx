"use client";

import React from "react";

import { DownloadIcon } from "lucide-react";
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { notifications } from "@/constants/notifications";

export const Notification = () => {
    const handleDownload = (href: string, filename: string) => {
        const link = document.createElement("a");
        link.href = href;
        link.download = `${filename}.xlsx`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };
    return (
        <Table className="p-2">
            <TableCaption>A list of notifications</TableCaption>
            <TableHeader>
                <TableRow>
                    <TableHead className="font-semibold">No.</TableHead>
                    <TableHead className="font-semibold">Date</TableHead>
                    <TableHead className="font-semibold">Notification</TableHead>
                    <TableHead></TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {notifications.map(({ title, href, date }, index) => (
                    <TableRow
                        key={href}
                        className="hover:text-primary-foreground hover:bg-primary cursor-pointer"
                        onClick={() => handleDownload(href, title)}
                    >
                        <TableCell>{index + 1}</TableCell>
                        <TableCell>{date}</TableCell>
                        <TableCell>{title}</TableCell>
                        <TableCell align="right">
                            <DownloadIcon className="size-4" />
                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    );
};
