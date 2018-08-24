export default ({
  // Breakpoints (The user should be able to use any custom key when defining a breakpoint)
  breakpoints = {
    xs: 400,
    sm: 600,
    md: 900,
    lg: 1200,
    xl: 1440
  }
  // TODO: Spacing
  // TODO: Border radius
} = {}) => ({
  // breakpoints
  base_breakpoints: Object.keys(breakpoints).sort((a, b) => {
    if (breakpoints[a] < breakpoints[b]) {
      return -1;
    }
    if (breakpoints[a] > breakpoints[b]) {
      return 1;
    }
    return 0;
  }),
  ...Object.keys(breakpoints).reduce(
    (acc, bp) => ({
      ...acc,
      [`base_breakpoint_${bp}`]: breakpoints[bp]
    }),
    {}
  )
});
