import {
    AppShell,
    Card,
    DEFAULT_THEME,
    List,
    MantineThemeOverride,
    Modal,
    Paper,
    Text,
    createTheme,
    mergeMantineTheme,
} from "@mantine/core";

const themeOverride: MantineThemeOverride = createTheme({
    cursorType: "pointer",
    //fontFamily: "Open Sans, sans-serif",
    headings: { fontFamily: 'Greycliff CF, sans-serif' },
    primaryColor: "haiti",
    colors: {
        'haiti':["#f1effa","#dedbef","#bab3e2","#9588d5","#7564c9","#614dc4","#5742c1","#4734ab","#3f2e99","#352787"]
      },
    other: {
        iconSize: 21,
        chainIconSize: 24,
    },
    components: {
        Text: Text.extend({
            defaultProps: {
                style: { lineBreak: "anywhere" },
            },
        }),
        Modal: Modal.extend({
            defaultProps: {
                size: "lg",
                centered: true,
                overlayProps: {
                    backgroundOpacity: 0.55,
                    blur: 3,
                },
            },
        }),
        AppShell: AppShell.extend({
            defaultProps: {
                header: { height: 60 },
                navbar: {
                    width: 300,
                    breakpoint: "sm",
                },
                aside: {
                    width: 0,
                    breakpoint: "sm",
                },
            },
        }),
        List: List.extend({
            defaultProps: {
                center: true,
                spacing: "0.5rem",
            },
        }),
        Card: Card.extend({
            defaultProps: {
                shadow: "sm",
                withBorder: true,
            },
        }),
        Paper: Paper.extend({
            defaultProps: {
                shadow: "xs",
            },
        }),
    },
});

export const theme = mergeMantineTheme(DEFAULT_THEME, themeOverride);
