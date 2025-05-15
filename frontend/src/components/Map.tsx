import React from 'react';

const Map = () => {
  return (
    <div className="w-full h-[400px] relative rounded-lg overflow-hidden flex items-center justify-center">
      {/* Static Map Image */}
      <img
        src="/map.png"
        alt="Map of Nepal"
        className="max-w-full max-h-full object-contain"
      />

      {/* Clickable Marker */}
      <span className="absolute top-[49%] left-[40%]">
        <span className="absolute inline-flex h-full w-full rounded-lg bg-red-400 opacity-75 animate-ping"></span>
        <a
        href="https://www.google.com/maps/place/Honda+Dang+-+Lalit+Enterprises/@28.0385653,82.4835212,580m/data=!3m2!1e3!4b1!4m6!3m5!1s0x3997947b21a61741:0xfd2a84665b8dd68a!8m2!3d28.0385626!4d82.4849753!16s%2Fg%2F11c0_sz37k!5m1!1e1?entry=ttu&g_ep=EgoyMDI1MDUwNy4wIKXMDSoASAFQAw%3D%3D"
          target="_blank"
          rel="noopener noreferrer"
          className="relative bg-green-900 text-white px-2 py-1 rounded-lg text-sm hover:bg-blue-700 transition"
        >
          📍 Dang
        </a>
      </span>
    </div>
  );
};

export default Map;
