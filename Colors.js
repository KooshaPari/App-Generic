const lightColors = {
    primary: '#F6F5F5',
    secondary: '#353A40',
    accent: '#7EBAB5',
    primaryText: '#0f1012',
    secondaryText: '#7ebab5',

};

const darkColors = {
    primary: '#1f2022',
    secondary: '#353A40',
    accent: '#7EBAB5',
    primaryText: '#7ebab5',
    secondaryText: '#f6f5d5',

};

export default function getColors(isDarkMode) {
    return isDarkMode ? darkColors : lightColors;
}