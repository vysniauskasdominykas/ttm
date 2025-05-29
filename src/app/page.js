"use client";
import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { InputAdornment, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const columns = [
    {
        field: "name",
        headerName: "Amino acid"
    },
    {
        field: "value30",
        headerName: "[30]"
    },
    {
        field: "value36",
        headerName: "[36]"
    },
    {
        field: "value37",
        headerName: "[37]"
    },
    {
        field: "value43",
        headerName: "[43]"
    },
    {
        field: "value45",
        headerName: "[45]"
    },
    {
        field: "value46",
        headerName: "[46]"
    }
];

const rows = [
    {
        "id": 1,
        "name": "Alanine (A)",
        "value30": "N.A.",
        "value36": "N.A.",
        "value37": "N.A.",
        "value43": "Down (p < 0.0001)",
        "value45": "N.A.",
        "value46": "N.A."
    },
    {
        "id": 2,
        "name": "Arginine (R)",
        "value30": "N.A.",
        "value36": "N.A.",
        "value37": "N.A.",
        "value43": "Down (p < 0.0001)",
        "value45": "N.A.",
        "value46": "N.A."
    },
    {
        "id": 3,
        "name": "Asparagine (N)",
        "value30": "N.A.",
        "value36": "N.A.",
        "value37": "Down (p = 0.0162)",
        "value43": "Down (p < 0.0001)",
        "value45": "N.A.",
        "value46": "N.A."
    },
    {
        "id": 4,
        "name": "Aspartic acid (D)",
        "value30": "Up (p < 0.05)",
        "value36": "N.A.",
        "value37": "N.A.",
        "value43": "N.A.",
        "value45": "N.A.",
        "value46": "N.A."
    },
    {
        "id": 5,
        "name": "Cysteine (C)",
        "value30": "N.A.",
        "value36": "N.A.",
        "value37": "N.A.",
        "value43": "N.A.",
        "value45": "N.A.",
        "value46": "N.A."
    },
    {
        "id": 6,
        "name": "Glutamine (Q)",
        "value30": "Up (p < 0.05)",
        "value36": "N.A.",
        "value37": "Down (p = 0.0072)",
        "value43": "N.A.",
        "value45": "N.A.",
        "value46": "N.A."
    },
    {
        "id": 7,
        "name": "Glutamic acid (E)",
        "value30": "Up (p < 0.05)",
        "value36": "N.A.",
        "value37": "N.A.",
        "value43": "N.A.",
        "value45": "N.A.",
        "value46": "N.A."
    },
    {
        "id": 8,
        "name": "Glycine (G)",
        "value30": "N.A.",
        "value36": "N.A.",
        "value37": "N.A.",
        "value43": "N.A.",
        "value45": "N.A.",
        "value46": "N.A."
    },
    {
        "id": 9,
        "name": "Histidine (H)",
        "value30": "N.A.",
        "value36": "N.A.",
        "value37": "Down (p < 0.0001)",
        "value43": "Down (p < 0.0001)",
        "value45": "N.A.",
        "value46": "N.A."
    },
    {
        "id": 10,
        "name": "Isoleucine (I)",
        "value30": "Up (p < 0.05)",
        "value36": "N.A.",
        "value37": "N.A.",
        "value43": "N.A.",
        "value45": "Up (p = 0.0005)",
        "value46": "Up (p < 0.05)"
    },
    {
        "id": 11,
        "name": "Leucine (L)",
        "value30": "Up (p < 0.05)",
        "value36": "N.A.",
        "value37": "N.A.",
        "value43": "Down (p < 0.01)",
        "value45": "Up (p = 0.002)",
        "value46": "N.A."
    },
    {
        "id": 12,
        "name": "Lysine (K)",
        "value30": "N.A.",
        "value36": "N.A.",
        "value37": "Down (p = 0.0005)",
        "value43": "Down (p < 0.0001)",
        "value45": "N.A.",
        "value46": "N.A."
    },
    {
        "id": 13,
        "name": "Methionine (M)",
        "value30": "N.A.",
        "value36": "N.A.",
        "value37": "Down (p = 0.0056)",
        "value43": "Down (p < 0.0001)",
        "value45": "N.A.",
        "value46": "N.A."
    },
    {
        "id": 14,
        "name": "Phenylalanine (F)",
        "value30": "Up (p < 0.05)",
        "value36": "N.A.",
        "value37": "N.A.",
        "value43": "Down (p < 0.01)",
        "value45": "N.A.",
        "value46": "N.A."
    },
    {
        "id": 15,
        "name": "Serine (S)",
        "value30": "N.A.",
        "value36": "N.A.",
        "value37": "N.A.",
        "value43": "Up (p < 0.0001)",
        "value45": "N.A.",
        "value46": "N.A."
    },
    {
        "id": 16,
        "name": "Threonine (T)",
        "value30": "N.A.",
        "value36": "Up (p < 0.01)",
        "value37": "Down (p = 0.0385)",
        "value43": "Down (p < 0.001)",
        "value45": "N.A.",
        "value46": "N.A."
    },
    {
        "id": 17,
        "name": "Tryptophan (W)",
        "value30": "Up (p < 0.05)",
        "value36": "Up (p < 0.01)",
        "value37": "N.A.",
        "value43": "Down (p < 0.0001)",
        "value45": "N.A.",
        "value46": "N.A."
    },
    {
        "id": 18,
        "name": "Tyrosine (Y)",
        "value30": "N.A.",
        "value36": "N.A.",
        "value37": "N.A.",
        "value43": "Down (p < 0.0001)",
        "value45": "N.A.",
        "value46": "N.A."
    },
    {
        "id": 19,
        "name": "Valine (V)",
        "value30": "Up (p < 0.05)",
        "value36": "N.A.",
        "value37": "Down (p = 0.0009)",
        "value43": "N.A.",
        "value45": "Up (p = 0.003)",
        "value46": "N.A."
    }
];

export default function Page() {
    const [search, setSearch] = React.useState("");

    return (
        <React.Fragment>
            <TextField
                label="Search"
                value={search}
                onChange={event => setSearch(event.target.value)}
                sx={{ width: "100%" }}
                slotProps={{
                    input: {
                        endAdornment: (
                            <InputAdornment>
                                <SearchIcon />
                            </InputAdornment>
                        )
                    }
                }} />

            <DataGrid
                columns={columns}
                rows={!search ? rows : rows.filter(x => x.name.toLowerCase().indexOf(search.toLowerCase()) > -1)}
                autosizeOnMount
                autosizeOptions={{
                    includeHeaders: true,
                    includeOutliers: true,
                    expand: true,
                    columns: columns.map(x => x.field)
                }}
                sx={{ mt: 2 }} />
        </React.Fragment>
    )
}