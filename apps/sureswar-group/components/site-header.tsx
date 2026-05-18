"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useMemo, useRef, useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import Divider from "@mui/material/Divider";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import PhoneIcon from "@mui/icons-material/Phone";
import NorthEastIcon from "@mui/icons-material/NorthEast";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

import { BrandMark } from "@/components/brand-mark";
import { contact, BRANDING } from "@/lib/site-config";
import { isBranch, mainNav, type NavBranch, type NavEntry, type NavLeaf } from "@/lib/navigation";

const COLORS = {
  coral: "#e94335",
  surface: "#0a0a0b",
  surface2: "#141416",
} as const;
const CORAL_GRADIENT = `linear-gradient(135deg, ${COLORS.coral} 0%, #c5331f 100%)`;

function topLabel(entry: NavEntry): string {
  return "headerLabel" in entry && entry.headerLabel ? entry.headerLabel : entry.label;
}

function isActiveLeaf(item: NavLeaf, pathname: string): boolean {
  if (item.external) return false;
  const base = item.href.split("#")[0];
  if (base === "/") return pathname === "/";
  return pathname === base || pathname.startsWith(base + "/");
}

function isActiveBranch(branch: NavBranch, pathname: string): boolean {
  return branch.children.some((c) => isActiveLeaf(c, pathname));
}

/** Shared sx for the animated-underline desktop nav button. */

function navButtonSx(active: boolean) {
  return {
    position: "relative",
    color: active ? BRANDING.primary : "#000",
    fontSize: 13,
    fontWeight: 600,
    letterSpacing: "0.04em",
    textTransform: "none",
    px: 1.75,
    py: 1.25,
    minWidth: 0,
    borderRadius: 1,
    transition: "color 200ms ease",
    "&:hover": { color: BRANDING.primary, backgroundColor: "transparent" },
    "&::after": {
      content: '""',
      position: "absolute",
      left: "50%",
      bottom: 6,
      height: "2px",
      width: active ? "calc(100% - 28px)" : "0%",
      background: BRANDING.gradientHeader,
      borderRadius: 2,
      transform: "translateX(-50%)",
      transition: "width 240ms cubic-bezier(.4,0,.2,1)",
    },
    "&:hover::after": { width: "calc(100% - 28px)" },
  } as const;
}

function DesktopLeaf({ item }: { item: NavLeaf }) {
  const pathname = usePathname();
  const active = isActiveLeaf(item, pathname);
  const label = item.headerLabel ?? item.label;

  if (item.external) {
    return (
      <Button
        href={item.href}
        target="_blank"
        rel="noopener noreferrer"
        sx={navButtonSx(active)}
        endIcon={<NorthEastIcon sx={{ fontSize: 13, color: "rgba(255,255,255,0.5)" }} />}
      >
        {label}
      </Button>
    );
  }

  return (
    <Button component={Link} href={item.href} sx={navButtonSx(active)}>
      {label}
    </Button>
  );
}

function DesktopDropdown({ branch }: { branch: NavBranch }) {
  const pathname = usePathname();
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  const open = Boolean(anchorEl);
  const active = isActiveBranch(branch, pathname);

  return (
    <>
      <Button
        onClick={(e) => setAnchorEl(e.currentTarget)}
        endIcon={
          <KeyboardArrowDownIcon
            sx={{
              fontSize: 16,
              transition: "transform 220ms cubic-bezier(.4,0,.2,1)",
              transform: open ? "rotate(180deg)" : "none",
            }}
          />
        }
        sx={navButtonSx(active || open)}
        aria-haspopup="true"
        aria-expanded={open}
      >
        {topLabel(branch)}
      </Button>
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={() => setAnchorEl(null)}
        anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
        transformOrigin={{ vertical: "top", horizontal: "left" }}
        slotProps={{
          paper: {
            sx: {
              mt: 1.25,
              minWidth: 260,
              bgcolor: "#fff",
              color: "#000",
              border: "1px solid rgba(0,0,0,0.08)",
              boxShadow:
                "0 10px 30px rgba(0,0,0,0.08)",
              borderRadius: 2,
              py: 0.75,
              overflow: "hidden",
              "&::before": {
                content: '""',
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                height: "2px",
                background: BRANDING.gradientHeader,
              },
            },
          },
          list: { sx: { py: 0 } },
        }}
      >
        {branch.children.map((child) => {
          const childActive = isActiveLeaf(child, pathname);
          const itemSx = {
            position: "relative",
            fontSize: 14,
            fontWeight: 500,
            py: 1.25,
            pl: 2.5,
            pr: 2,
            color: childActive ? BRANDING.primary : "rgba(0,0,0,0.88)",
            transition: "color 180ms, background-color 180ms, padding-left 220ms",
            "&::before": {
              content: '""',
              position: "absolute",
              left: 0,
              top: "20%",
              bottom: "20%",
              width: childActive ? 3 : 0,
              background: BRANDING.gradientHeader,
              borderRadius: "0 3px 3px 0",
              transition: "width 200ms ease",
            },
            "&:hover": {
              backgroundColor: BRANDING.hoverBg,
              color: BRANDING.primary,
              pl: 3,
            },
            "&:hover::before": { width: 3 },
          } as const;
          if (child.external) {
            return (
              <MenuItem
                key={child.href + child.label}
                component="a"
                href={child.href}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setAnchorEl(null)}
                sx={itemSx}
              >
                <span>{child.label}</span>
                <NorthEastIcon
                  sx={{ ml: "auto", fontSize: 14, color: "rgba(0,0,0,0.45)" }}
                />
              </MenuItem>
            );
          }
          return (
            <MenuItem
              key={child.href + child.label}
              component={Link}
              href={child.href}
              onClick={() => setAnchorEl(null)}
              sx={itemSx}
            >
              {child.label}
            </MenuItem>
          );
        })}
      </Menu>
    </>
  );
}

function MobileBranchItem({
  branch,
  pathname,
  onNavigate,
}: {
  branch: NavBranch;
  pathname: string;
  onNavigate: () => void;
}) {
  const branchActive = isActiveBranch(branch, pathname);
  const [open, setOpen] = useState(branchActive);

  return (
    <>
      <ListItemButton
        onClick={() => setOpen((o) => !o)}
        sx={{
          py: 1.75,
          pl: 2.5,
          pr: 2,
          position: "relative",
          "&::before": {
            content: '""',
            position: "absolute",
            left: 0,
            top: "25%",
            bottom: "25%",
            width: branchActive ? 3 : 0,
            background: BRANDING.gradientHeader,
            borderRadius: "0 3px 3px 0",
          },
        }}
      >
        <ListItemText
          primary={topLabel(branch)}
          slotProps={{
            primary: {
              sx: {
                fontSize: 14,
                fontWeight: 700,
                letterSpacing: "0.02em",
                color: branchActive ? BRANDING.primary : "#000",
              },
            },
          }}
        />
        {open ? (
          <ExpandLessIcon sx={{ color: BRANDING.primary }} />
        ) : (
          <ExpandMoreIcon sx={{ color: "rgba(0,0,0,0.54)" }} />
        )}
      </ListItemButton>
      <Collapse in={open} timeout={250} unmountOnExit>
        <Box sx={{ bgcolor: "rgba(0,0,0,0.02)" }}>
          <List component="div" disablePadding>
            {branch.children.map((child) => {
              const active = isActiveLeaf(child, pathname);
              const itemSx = {
                pl: 4.5,
                pr: 2,
                py: 1.1,
                position: "relative" as const,
                "&::before": {
                  content: '""',
                  position: "absolute",
                  left: 28,
                  top: "50%",
                  width: 8,
                  height: 1,
                  background: active ? BRANDING.gradientHeader : "rgba(0,0,0,0.15)",
                  transform: "translateY(-50%)",
                },
              };
              const textSx = {
                fontSize: 13,
                fontWeight: 500,
                color: active ? BRANDING.primary : "rgba(0,0,0,0.7)",
              };
              if (child.external) {
                return (
                  <ListItemButton
                    key={child.href + child.label}
                    component="a"
                    href={child.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={onNavigate}
                    sx={itemSx}
                  >
                    <ListItemText primary={child.label} slotProps={{ primary: { sx: textSx } }} />
                    <NorthEastIcon sx={{ fontSize: 14, color: "rgba(0,0,0,0.45)" }} />
                  </ListItemButton>
                );
              }
              return (
                <ListItemButton
                  key={child.href + child.label}
                  component={Link}
                  href={child.href}
                  onClick={onNavigate}
                  sx={itemSx}
                >
                  <ListItemText primary={child.label} slotProps={{ primary: { sx: textSx } }} />
                  <ChevronRightIcon
                    sx={{ fontSize: 14, color: active ? BRANDING.primary : "rgba(0,0,0,0.35)" }}
                  />
                </ListItemButton>
              );
            })}
          </List>
        </Box>
      </Collapse>
      <Divider sx={{ borderColor: "rgba(0,0,0,0.06)" }} />
    </>
  );
}

function MobileLeafItem({
  item,
  pathname,
  onNavigate,
}: {
  item: NavLeaf;
  pathname: string;
  onNavigate: () => void;
}) {
  const active = isActiveLeaf(item, pathname);
  const label = item.headerLabel ?? item.label;
  const baseSx = {
    py: 1.75,
    pl: 2.5,
    pr: 2,
    position: "relative" as const,
    "&::before": {
      content: '""',
      position: "absolute",
      left: 0,
      top: "25%",
      bottom: "25%",
      width: active ? 3 : 0,
      background: BRANDING.gradientHeader,
      borderRadius: "0 3px 3px 0",
    },
  };
  const primarySx = {
    fontSize: 14,
    fontWeight: 700,
    letterSpacing: "0.02em",
    color: active ? BRANDING.primary : "#000",
  };
  if (item.external) {
    return (
      <>
        <ListItemButton
          component="a"
          href={item.href}
          target="_blank"
          rel="noopener noreferrer"
          onClick={onNavigate}
          sx={baseSx}
        >
          <ListItemText primary={label} slotProps={{ primary: { sx: primarySx } }} />
          <NorthEastIcon sx={{ fontSize: 14, color: "rgba(0,0,0,0.45)" }} />
        </ListItemButton>
        <Divider sx={{ borderColor: "rgba(0,0,0,0.06)" }} />
      </>
    );
  }
  return (
    <>
      <ListItemButton component={Link} href={item.href} onClick={onNavigate} sx={baseSx}>
        <ListItemText primary={label} slotProps={{ primary: { sx: primarySx } }} />
        <ChevronRightIcon
          sx={{ fontSize: 16, color: active ? BRANDING.primary : "rgba(0,0,0,0.35)" }}
        />
      </ListItemButton>
      <Divider sx={{ borderColor: "rgba(0,0,0,0.06)" }} />
    </>
  );
}

export function SiteHeader() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const closeMenu = useRef(() => setMenuOpen(false)).current;

  useEffect(() => {
    if (!isHome) {
      setScrolled(true);
      return;
    }
    function onScroll() {
      setScrolled(window.scrollY > 32);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [isHome]);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);
  const transparent = isHome && !scrolled;

  const appBarSx = useMemo(
    () => ({
      bgcolor: "#fff",
      color: "#000", // Black text on white background
      // Retain subtle border and shadow for depth
      borderBottom: "1px solid rgba(0,0,0,0.06)",
      boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
      transition: "background-color 300ms ease, color 300ms ease",
    }),
    [],
  );

  return (
    <>
      <AppBar position="fixed" elevation={0} sx={appBarSx}>
        {/* Decorative gold accent line */}
        <Box
          sx={{
            height: "2px",
            width: "100%",
            background: BRANDING.gradientHeader,
            opacity: transparent ? 0 : 0.85,
            transition: "opacity 300ms",
          }}
        />
        <Toolbar
          disableGutters
          sx={{
            mx: "auto",
            width: "100%",
            maxWidth: 1400,
            px: { xs: 2, sm: 3 },
            minHeight: { xs: 68, md: 76 },
            gap: 2,
          }}
        >
          <Box
            component={Link}
            href="/"
            sx={{
              display: "inline-flex",
              alignItems: "center",
              gap: 1.25,
              textDecoration: "none",
              flexShrink: 0,
              transition: "transform 200ms ease",
              "&:hover": { transform: "translateY(-1px)" },
              "&:hover .brand-mark-glow": { opacity: 1 },
            }}
          >
            <Box sx={{ position: "relative" }}>
              <Box
                className="brand-mark-glow"
                aria-hidden
                sx={{
                  position: "absolute",
                  inset: -4,
                  borderRadius: "50%",
                  background:
                    "radial-gradient(circle, rgba(212,175,55,0.45) 0%, transparent 70%)",
                  opacity: 0,
                  transition: "opacity 250ms",
                  pointerEvents: "none",
                }}
              />
              <BrandMark />
            </Box>
            <Box sx={{ display: "flex", flexDirection: "column", lineHeight: 1 }}>
              <Box sx={{ display: "flex", alignItems: "baseline" }}>
                <Typography
                  component="span"
                  sx={{
                    fontSize: { xs: 16, sm: 18 },
                    fontWeight: 800,
                    letterSpacing: "-0.01em",
                    background: CORAL_GRADIENT,
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  SURESWAR
                </Typography>
                <Typography
                  component="span"
                  sx={{
                    ml: 0.5,
                    fontSize: { xs: 16, sm: 18 },
                    fontWeight: 700,
                    letterSpacing: "-0.01em",
                    color: "#fff",
                    WebkitTextStroke: `1px ${COLORS.coral}`,
                    paintOrder: "stroke fill",
                  }}
                >
                  GROUP
                </Typography>
              </Box>
              {/*<Typography*/}
              {/*  component="span"*/}
              {/*  sx={{*/}
              {/*    display: { xs: "none", sm: "block" },*/}
              {/*    fontSize: 9,*/}
              {/*    fontWeight: 600,*/}
              {/*    letterSpacing: "0.32em",*/}
              {/*    color: COLORS.gold,*/}
              {/*    mt: 0.25,*/}
              {/*  }}*/}
              {/*>*/}
              {/*  SURESWAR GROUP*/}
              {/*</Typography>*/}
            </Box>
          </Box>

          <Box
            component="nav"
            aria-label="Main"
            sx={{
              display: { xs: "none", lg: "flex" },
              flex: 1,
              justifyContent: "center",
              alignItems: "center",
              gap: 0.25,
              minWidth: 0,
            }}
          >
            {mainNav.map((entry) =>
              isBranch(entry) ? (
                <DesktopDropdown key={entry.label} branch={entry} />
              ) : (
                <DesktopLeaf key={entry.href} item={entry} />
              ),
            )}
          </Box>

          <Stack
            direction="row"
            spacing={1.5}
            sx={{ display: { xs: "none", lg: "flex" }, alignItems: "center", flexShrink: 0 }}
          >
            <Button
              href={`tel:${contact.phoneTel}`}
              startIcon={
                <Box
                  sx={{
                    width: 28,
                    height: 28,
                    borderRadius: "50%",
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    bgcolor: "rgba(212,175,55,0.12)",
                    transition: "background-color 200ms",
                  }}
                >
                  <PhoneIcon sx={{ fontSize: 14, color: BRANDING.primary }} />
                </Box>
              }
              sx={{
                color: "rgba(255,255,255,0.9)",
                fontSize: 13,
                fontWeight: 600,
                textTransform: "none",
                px: 1,
                gap: 0.5,
                "&:hover": {
                  color: "#fff",
                  bgcolor: "transparent",
                  "& .MuiButton-startIcon > div": { bgcolor: BRANDING.hoverBorder },
                },
              }}
            >
              {contact.phoneDisplay}
            </Button>
            <Button
              component={Link}
              href="/contact"
              endIcon={<NorthEastIcon sx={{ fontSize: 16 }} />}
              sx={{
                color: "#fff",
                background: BRANDING.gradientHeader,
                borderRadius: 999,
                px: 2.75,
                py: 0.85,
                fontSize: 12,
                fontWeight: 800,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                boxShadow:
                  `0 4px 14px ${BRANDING.glow}, inset 0 1px 0 rgba(255,255,255,0.4)`,
                transition: "transform 200ms ease, box-shadow 200ms ease, filter 200ms ease",
                "&:hover": {
                  transform: "translateY(-2px)",
                  filter: "brightness(1.05)",
                  boxShadow:
                    `0 8px 22px ${BRANDING.primary}80, inset 0 1px 0 rgba(255,255,255,0.5)`,
                },
              }}
            >
              Enquire
            </Button>
          </Stack>

          <IconButton
            edge="end"
            onClick={() => setMenuOpen(true)}
            aria-label="Open menu"
            aria-controls="mobile-nav-drawer"
            aria-expanded={menuOpen}
            sx={{
              color: "#000",
              display: { xs: "inline-flex", lg: "none" },
              ml: "auto",
              border: "1px solid rgba(0,0,0,0.15)",
              borderRadius: 1.5,
              p: 1,
              transition: "all 200ms",
              "&:hover": { borderColor: BRANDING.primary, color: BRANDING.primary },
            }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      <Drawer
        id="mobile-nav-drawer"
        anchor="right"
        open={menuOpen}
        onClose={closeMenu}
        slotProps={{
          paper: {
            sx: {
              width: { xs: "88vw", sm: 380 },
              maxWidth: 420,
              bgcolor: "#fff",
              backgroundImage:
                "radial-gradient(circle at top right, rgba(212,175,55,0.04), transparent 50%)",
              color: "#000",
              borderLeft: "1px solid rgba(0,0,0,0.08)",
            },
          },
        }}
      >
        {/* Top gold accent line */}
        <Box sx={{ height: "2px", background: BRANDING.gradientHeader }} />

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            px: 2.5,
            py: 2,
            borderBottom: "1px solid rgba(0,0,0,0.08)",
          }}
        >
          <Box sx={{ display: "inline-flex", alignItems: "center", gap: 1.25 }}>
            <BrandMark />
            <Box>
              <Typography sx={{ fontSize: 14, fontWeight: 800, letterSpacing: "0.02em" }}>
                <Box component="span" sx={{ color: COLORS.coral }}>
                  SURESWAR
                </Box>{" "}
                <Box component="span" sx={{ color: "#000" }}>
                  TRAVELS
                </Box>
              </Typography>
              <Typography
                sx={{
                  fontSize: 9,
                  fontWeight: 600,
                  letterSpacing: "0.32em",
                  color: BRANDING.primary,
                  mt: 0.25,
                }}
              >
                SURESWAR GROUP
              </Typography>
            </Box>
          </Box>
          <IconButton
            onClick={closeMenu}
            aria-label="Close menu"
            sx={{
              color: "#000",
              border: "1px solid rgba(0,0,0,0.12)",
              borderRadius: 1.5,
              p: 0.75,
              "&:hover": { borderColor: BRANDING.primary, color: BRANDING.primary },
            }}
          >
            <CloseIcon fontSize="small" />
          </IconButton>
        </Box>

        <Box sx={{ px: 2.5, py: 2.5, borderBottom: "1px solid rgba(0,0,0,0.08)" }}>
          <Button
            href={`tel:${contact.phoneTel}`}
            startIcon={
              <Box
                sx={{
                  width: 32,
                  height: 32,
                  borderRadius: "50%",
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  bgcolor: BRANDING.transparentBg,
                }}
              >
                <PhoneIcon sx={{ fontSize: 16, color: BRANDING.primary }} />
              </Box>
            }
            onClick={closeMenu}
            sx={{
              width: "100%",
              color: "rgba(0,0,0,0.85)",
              textTransform: "none",
              justifyContent: "flex-start",
              fontSize: 14,
              fontWeight: 600,
              px: 1,
              py: 1,
              gap: 0.5,
            }}
          >
            <Box>
              <Box component="span" sx={{ display: "block", fontSize: 10, color: "rgba(0,0,0,0.5)", letterSpacing: "0.12em", textTransform: "uppercase" }}>
                Talk to us
              </Box>
              <Box component="span" sx={{ display: "block", fontSize: 14, color: "#000" }}>
                {contact.phoneDisplay}
              </Box>
            </Box>
          </Button>
          <Button
            component={Link}
            href="/contact"
            endIcon={<NorthEastIcon sx={{ fontSize: 16 }} />}
            onClick={closeMenu}
            fullWidth
            sx={{
              mt: 2,
              color: "#fff",
              background: BRANDING.gradientHeader,
              borderRadius: 999,
              py: 1.4,
              fontSize: 12,
              fontWeight: 800,
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              boxShadow: `0 4px 14px ${BRANDING.glow}`,
              "&:hover": { filter: "brightness(1.05)" },
            }}
          >
            Enquire Now
          </Button>
        </Box>

        <Typography
          sx={{
            px: 2.5,
            pt: 2.5,
            pb: 1,
            fontSize: 10,
            fontWeight: 700,
            letterSpacing: "0.24em",
            color: "rgba(0,0,0,0.45)",
            textTransform: "uppercase",
          }}
        >
          Navigate
        </Typography>

        <List component="nav" aria-label="Mobile" sx={{ py: 0 }}>
          <Divider sx={{ borderColor: "rgba(0,0,0,0.06)" }} />
          {mainNav.map((entry) =>
            isBranch(entry) ? (
              <MobileBranchItem
                key={entry.label}
                branch={entry}
                pathname={pathname}
                onNavigate={closeMenu}
              />
            ) : (
              <MobileLeafItem
                key={entry.href}
                item={entry}
                pathname={pathname}
                onNavigate={closeMenu}
              />
            ),
          )}
          <ListItem sx={{ py: 3 }} />
        </List>
      </Drawer>
    </>
  );
}
