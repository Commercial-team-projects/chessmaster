document.querySelectorAll('.skills-list-item-percent').forEach(span => {
  const value = parseInt(span.textContent) || 0;
  span.textContent = '';

  var bar = new ProgressBar.Line(span, {
    strokeWidth: 4,
    easing: 'easeInOut',
    duration: 1400,
    color: '#9f6f3c',
    trailColor: '#eee',
    trailWidth: 4,
    svgStyle: { width: '100%', height: '100%' },
    text: {
      style: {
        color: '#999',
        position: 'absolute',
        right: '0',
        top: '-30px',
        padding: 0,
        margin: 0,
        transform: null,
      },
      autoStyleContainer: false,
    },
    from: { color: '#FFEA82' },
    to: { color: '#ED6A5A' },
    step: (state, bar) => {
      bar.setText(Math.round(bar.value() * 100) + ' %');
    },
  });

  bar.animate(value / 100);
});
