"use client";
import React from "react";
import { Inter } from "next/font/google";
import { ThemeProvider, CssBaseline, Container, Tabs, Tab, Typography, Collapse, Stack, IconButton, Tooltip } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { usePathname, useRouter } from "next/navigation";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const theme = createTheme({
	colorSchemes: {
		light: {
			palette: {
				primary: {
					main: "#47536B",
				},
				background: {
					default: "#FCFCFC",
					paper: "#F5F6FA"
				},
				text: {
					primary: "#161C28",
					secondary: "#47536B"
				}
			}
		}
	},
	typography: {
		fontFamily: "-apple-system, Inter",
		h1: {
			fontWeight: 700,
			color: "text.primary"
		},
		h2: {
			fontWeight: 700,
			color: "text.primary"
		},
		h3: {
			fontWeight: 700,
			color: "text.primary"
		},
		h4: {
			fontWeight: 700,
			color: "text.primary"
		},
		h5: {
			fontWeight: 700,
			color: "text.primary"
		},
		h6: {
			fontWeight: 700,
			color: "text.primary"
		},
		body1: {
			fontWeight: 400,
			color: "text.secondary"
		},
		body2: {
			fontWeight: 400,
			color: "text.secondary"
		},
		button: {
			fontWeight: 600,
			textTransform: "none"
		}
	},
	shape: {
		borderRadius: 8
	},
	components: {
		MuiButtonBase: {
			defaultProps: {
				disableRipple: true
			},
		},
		MuiButton: {
			defaultProps: {
				disableElevation: true
			}
		},
		MuiIconButton: {
			styleOverrides: {
				root: {
					borderRadius: 8
				}
			}
		},
		MuiPaper: {
			defaultProps: {
				variant: "outlined"
			}
		},
		MuiList: {
			defaultProps: {
				dense: true
			},
			styleOverrides: {
				root: {
					display: "flex",
					flexDirection: "column",
					gap: 4
				}
			}
		},
		MuiListItemButton: {
			styleOverrides: {
				root: {
					borderRadius: 8
				}
			}
		},
		MuiListItemIcon: {
			styleOverrides: {
				root: {
					minWidth: 32
				}
			}
		},
		MuiCheckbox: {
			defaultProps: {
				disableRipple: true
			}
		},
		MuiMenu: {
			styleOverrides: {
				root: {
					marginTop: 4
				}
			}
		},
		MuiMenuItem: {
			styleOverrides: {
				root: {
					marginLeft: 8,
					marginRight: 8,
					borderRadius: 8
				}
			}
		}
	}
});

const inter = Inter({
    weight: ["400", "500", "600", "700"],
    style: ["normal"],
    subsets: ["latin"],
    display: "swap"
});

export default function RootLayout({ children }) {
	const pathname = usePathname();
	const router = useRouter();
	const [showDetails, setShowDetails] = React.useState(true);

    return (
        <html lang="en">
            <body className={inter.className}>
                <ThemeProvider
                    theme={theme}
                    modeStorageKey="themeMode"
                    defaultMode="light">
                    <CssBaseline />
					<Container maxWidth="lg" sx={{ p: 2 }}>

						<Stack flexDirection="row" alignItems="center" justifyContent="space-between">
							<Typography variant="h5">Taikomųjų tyrimų metodologija</Typography>
							<Tooltip title={showDetails ? "Hide details" : "Show details"}>
								<IconButton onClick={() => setShowDetails(x => !x)}>
									{showDetails ? <ExpandLessIcon /> : <ExpandMoreIcon />}
								</IconButton>
							</Tooltip>
						</Stack>

						<Collapse in={showDetails}>
							<Typography variant="body1" sx={{ mt: 2 }}>Dominykas Vyšniauskas, PS-3/2</Typography>
							<Typography variant="body1" sx={{ mt: 1 }}>Atliktos abi užduotys, peržiūrėti galima paspaudus vieną iš mygtukų žemiau.</Typography>
						</Collapse>

						<Tabs value={pathname} onChange={(_, value) => router.push(value)} sx={{ mt: 2, mb: 2 }}>
							<Tab label="Table" value="/" />
							<Tab label="Flowchart" value="/flowchart" />
						</Tabs>

                    	{children}
					</Container>
                </ThemeProvider>
            </body>
        </html>
    )
}
