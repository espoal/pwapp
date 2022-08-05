import critical from 'critical'

console.log({ cwd: process.cwd() })


critical.generate({
  // Inline the generated critical-path CSS
  // - true generates HTML
  // - false generates CSS
  inline: true,

  // Your base directory
  base: '/home/mamluk/Projects/pwapp/dist/public/',

  // HTML source file
  src: '/home/mamluk/Projects/pwapp/dist/public/ssr/dash/index.html',

  // Your CSS Files (optional)
  css: ['/home/mamluk/Projects/pwapp/dist/public/index.css'],

  // Viewport width
  width: 1300,

  // Viewport height
  height: 900,

  // Output results to file
  target: {
    css: 'ssr/critical/critical.css',
    html: 'ssr/critical/index.html',
    uncritical: 'uncritical.css',
  },

  penthouse: {
    forceInclude: [/^\.flatpickr-*/, /^\.form-*/]

  },

  // Extract inlined styles from referenced stylesheets
  extract: true,
});
