
type BlurGradientProps = {
  className?: string;
  position?: 'top' | 'bottom';
  height?: string;
};

function BlurGradient({
  className = '',
  position = 'top',
  height = 'h-32 sm:h-40 md:h-48',
}: BlurGradientProps) {
  const isTop = position === 'top';
  const direction = isTop ? 'to top' : 'to bottom';

  const blurLayers = [
    { blur: '0.078125px', z: 1, stops: [0, 12.5, 25, 37.5] },
    { blur: '0.15625px', z: 2, stops: [12.5, 25, 37.5, 50] },
    { blur: '0.3125px', z: 3, stops: [25, 37.5, 50, 62.5] },
    { blur: '0.625px', z: 4, stops: [37.5, 50, 62.5, 75] },
    { blur: '1.25px', z: 5, stops: [50, 62.5, 75, 87.5] },
    { blur: '2.5px', z: 6, stops: [62.5, 75, 87.5, 100] },
    { blur: '5px', z: 7, stops: [75, 87.5, 100, 100] },
    { blur: '10px', z: 8, stops: [87.5, 100, 100, 100] },
  ];

  const getMaskGradient = (stops: number[]) => {
    if (stops[2] === 100 && stops[3] === 100) {
      return `linear-gradient(${direction}, rgba(0, 0, 0, 0) ${stops[0]}%, rgba(0, 0, 0, 1) ${stops[1]}%, rgba(0, 0, 0, 1) 100%)`;
    }
    return `linear-gradient(${direction}, rgba(0, 0, 0, 0) ${stops[0]}%, rgba(0, 0, 0, 1) ${stops[1]}%, rgba(0, 0, 0, 1) ${stops[2]}%, rgba(0, 0, 0, 0) ${stops[3]}%)`;
  };

  return (
    <div
      className={`fixed left-0 right-0 z-40 pointer-events-none select-none ${height} ${className}`}
      style={{
        [isTop ? 'top' : 'bottom']: 0,
        position: 'fixed',
      }}
      aria-hidden='true'
      role='presentation'
    >
      {blurLayers.map((layer) => (
        <div
          key={layer.z}
          style={{
            position: 'absolute',
            inset: 0,
            zIndex: layer.z,
            backdropFilter: `blur(${layer.blur})`,
            WebkitBackdropFilter: `blur(${layer.blur})`,
            maskImage: getMaskGradient(layer.stops),
            WebkitMaskImage: getMaskGradient(layer.stops),
            pointerEvents: 'none',
          }}
        />
      ))}
    </div>
  );
}
export default BlurGradient;