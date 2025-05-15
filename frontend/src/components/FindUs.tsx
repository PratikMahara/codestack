import React, { useEffect, useRef, useState } from 'react';
import Map from "@/components/Map";
// Define Google Maps types
interface GoogleMapTypes {
  maps: {
    Map: new (element: HTMLElement, options: any) => any;
    Marker: new (options: any) => any;
    SymbolPath: {
      CIRCLE: number;
    };
  };
}

declare global {
  interface Window {
    google: GoogleMapTypes;
    initMap: () => void;
  }
}

const FindUs = () => {
  const [mapApiKey, setMapApiKey] = useState('');
  const [isApiKeyEntered, setIsApiKeyEntered] = useState(false);
  const [isMapLoaded, setIsMapLoaded] = useState(false);
  const mapContainerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (isApiKeyEntered && mapApiKey && mapContainerRef.current) {
      // Create a script element to load the Google Maps API
      const script = document.createElement('script');
      script.src = `https://maps.googleapis.com/maps/api/js?key=${mapApiKey}&callback=initMap`;
      script.async = true;
      script.defer = true;
      
      // Define the callback function
      window.initMap = () => {
        // Dang, Nepal coordinates (approximate)
        const dangNepal = { lat: 28.1461, lng: 82.2830 };
        
        const map = new window.google.maps.Map(mapContainerRef.current!, {
          zoom: 15,
          center: dangNepal,
          styles: [
            { elementType: "geometry", stylers: [{ color: "#242f3e" }] },
            { elementType: "labels.text.stroke", stylers: [{ color: "#242f3e" }] },
            { elementType: "labels.text.fill", stylers: [{ color: "#746855" }] },
            {
              featureType: "administrative.locality",
              elementType: "labels.text.fill",
              stylers: [{ color: "#d59563" }],
            },
            {
              featureType: "poi",
              elementType: "labels.text.fill",
              stylers: [{ color: "#d59563" }],
            },
            {
              featureType: "poi.park",
              elementType: "geometry",
              stylers: [{ color: "#263c3f" }],
            },
            {
              featureType: "poi.park",
              elementType: "labels.text.fill",
              stylers: [{ color: "#6b9a76" }],
            },
            {
              featureType: "road",
              elementType: "geometry",
              stylers: [{ color: "#38414e" }],
            },
            {
              featureType: "road",
              elementType: "geometry.stroke",
              stylers: [{ color: "#212835" }],
            },
            {
              featureType: "road",
              elementType: "labels.text.fill",
              stylers: [{ color: "#9ca5b3" }],
            },
            {
              featureType: "road.highway",
              elementType: "geometry",
              stylers: [{ color: "#746855" }],
            },
            {
              featureType: "road.highway",
              elementType: "geometry.stroke",
              stylers: [{ color: "#1f2835" }],
            },
            {
              featureType: "road.highway",
              elementType: "labels.text.fill",
              stylers: [{ color: "#f3d19c" }],
            },
            {
              featureType: "transit",
              elementType: "geometry",
              stylers: [{ color: "#2f3948" }],
            },
            {
              featureType: "transit.station",
              elementType: "labels.text.fill",
              stylers: [{ color: "#d59563" }],
            },
            {
              featureType: "water",
              elementType: "geometry",
              stylers: [{ color: "#17263c" }],
            },
            {
              featureType: "water",
              elementType: "labels.text.fill",
              stylers: [{ color: "#515c6d" }],
            },
            {
              featureType: "water",
              elementType: "labels.text.stroke",
              stylers: [{ color: "#17263c" }],
            },
          ],
        });

        // Add marker for Codestack location
        new window.google.maps.Marker({
          position: dangNepal,
          map: map,
          title: "Codestack",
          icon: {
            path: window.google.maps.SymbolPath.CIRCLE,
            fillColor: "#e60000",
            fillOpacity: 1,
            strokeWeight: 0,
            scale: 10
          }
        });
        
        setIsMapLoaded(true);
      };
      
      document.head.appendChild(script);
      
      return () => {
        // Clean up
        document.head.removeChild(script);
        if (window.google && window.google.maps) {
          delete window.google.maps;
        }
        delete window.initMap;
      };
    }
  }, [isApiKeyEntered, mapApiKey]);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsApiKeyEntered(true);
  };

  return (
    <section id="find-us" className="py-20 bg-codestack-gray-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="gradient-text">Find Us</span>
          </h2>
          <p className="text-lg text-codestack-gray max-w-2xl mx-auto">
            Visit our office in Dang, Nepal. We'd love to meet you in person to discuss your project.
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          {!isApiKeyEntered && (
            <div className="p-10 flex flex-col items-center justify-center min-h-[400px]">
            
              <Map />
             
            </div>
          )}
          
          <div 
            ref={mapContainerRef} 
            className={`w-full h-[500px] ${!isApiKeyEntered ? 'hidden' : ''}`}
          >
            {isApiKeyEntered && !isMapLoaded && (
              <div className="w-full h-full flex items-center justify-center bg-codestack-gray-light">
                <div className="animate-pulse">
                  <svg className="w-12 h-12 text-codestack-red" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  <p className="mt-4 text-codestack-gray">Loading map...</p>
                </div>
              </div>
            )}
          </div>
          
          <div className="p-6 bg-white">
            <h3 className="text-xl font-semibold mb-2">Codestack</h3>
            <p className="text-codestack-gray">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 inline-block mr-2 text-codestack-red" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              Dang, Nepal - 22400
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FindUs;
