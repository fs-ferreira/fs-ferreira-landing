export function scrollToElement(
  targetElement: HTMLElement,
  duration: number = 1000,
  scrollScale: number = 1.0
) {
  const targetPosition = targetElement.offsetTop * scrollScale;
  const startPosition = window.scrollY;
  const distance = targetPosition - startPosition;
  let startTime: number | null = null;

  const animateScroll = (timestamp: number) => {
    if (!startTime) startTime = timestamp;

    const progress = timestamp - startTime;
    const scrollY = easeInOutQuad(progress, startPosition, distance, duration);

    window.scrollTo(0, scrollY);

    if (progress < duration) {
      requestAnimationFrame(animateScroll);
    }
  };

  requestAnimationFrame(animateScroll);
}

function easeInOutQuad(
  time: number,
  from: number,
  distance: number,
  duration: number
) {
  time /= duration / 2;
  if (time < 1) return (distance / 2) * time * time + from;
  time--;
  return (-distance / 2) * (time * (time - 2) - 1) + from;
}
