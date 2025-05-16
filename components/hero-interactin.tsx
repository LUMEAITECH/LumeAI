import Spline from '@splinetool/react-spline';

export default function HeroInteracting({className}: {className: string}) {
  return (
  <>
    <div className={`hidden lg:block ${className}`}>
      <Spline
        scene="https://prod.spline.design/KKhE5iCVfiAiyJSQ/scene.splinecode" 
      />
    </div>
    <div className={`block lg:hidden ${className}`}>
      <Spline
        scene="https://prod.spline.design/KKhE5iCVfiAiyJSQ/scene.splinecode" 
      />
    </div>
  </>
  );
}