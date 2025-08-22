export default function Background3D() {
  return (
    <div className="fixed inset-0 -z-10">
      <spline-viewer
        url="https://prod.spline.design/2rNU5gtSq3nF-kMF/scene.splinecode" 
        style={{
          width: "100%",
          height: "100%",
        }}
      ></spline-viewer>
    </div>
  );
}
