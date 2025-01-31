import daisyui from "daisyui";

export default {
  plugins: [daisyui],
  daisyui: { themes: [], logs: false },
  content: ["./**/*.tsx"],
  theme: {
    container: { center: true },
    extend: {
      height: {
        '1500': '1500px',
        'full-header': 'calc(100% - 56px)',
        'full+header': 'calc(100vh + 56px)'
      },
      transform: {
        'header-hidden': 'translateY(-100%)',
      },
      aspectRatio: {
        '2/3': '2 / 3',
      },
      width: {
        'half': 'calc(50% - 16px)',
      }
    }
  },
};
