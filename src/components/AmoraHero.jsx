import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'

// THE IMAGE CHOREOGRAPHY - Story Sequence
const HERO_IMAGES = [
  // Act I: The Awakening
  { 
    src: '/images/hero/Gemini_Generated_Image_z3f6gz3f6gz3f6gz.png',
    alt: 'Natural organic beauty - the beginning',
    act: 'awakening'
  },
  // Act II: The Ritual (Application)
  { 
    src: '/images/hero/Gemini_Generated_Image_7t69k87t69k87t69 (1).png',
    alt: 'The sacred ritual of self-care',
    act: 'ritual'
  },
  // Act I: The Awakening (Variant)
  { 
    src: '/images/hero/Gemini_Generated_Image_z3f6gz3f6gz3f6gz (2).png',
    alt: 'Pure organic essence',
    act: 'awakening'
  },
  // Act II: The Ritual (Touch)
  { 
    src: '/images/hero/Gemini_Generated_Image_7t69k87t69k87t69.png',
    alt: 'The ceremony of application',
    act: 'ritual'
  },
  // Act IV: The Collection
  { 
    src: '/images/hero/Gemini_Generated_Image_bndrzibndrzibndr.png',
    alt: 'The complete story of mastery',
    act: 'collection'
  },
  // Act II: The Ritual (Variant)
  { 
    src: '/images/hero/Gemini_Generated_Image_7t69k87t69k87t69 (2).png',
    alt: 'Your time, your ritual',
    act: 'ritual'
  },
  // Act V: The Result
  { 
    src: '/images/hero/Gemini_Generated_Image_o3klbo3klbo3klbo.png',
    alt: 'Satisfied confidence - you, elevated',
    act: 'result'
  },
]

const CAROUSEL_DURATION = 8000 // 8 seconds - expensive things move slowly
const TRANSITION_DURATION = 1.4 // 1.4 second crossfade

export function AmoraHero() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isLoaded, setIsLoaded] = useState(false)
  const [allImagesLoaded, setAllImagesLoaded] = useState(false)
  const [loadedImages, setLoadedImages] = useState(new Set())

  // Preload ALL images before starting anything
  useEffect(() => {
    let mounted = true
    let loadedCount = 0

    const preloadImage = (src) => {
      return new Promise((resolve, reject) => {
        const img = new Image()
        img.src = src
        img.onload = () => {
          if (mounted) {
            loadedCount++
            setLoadedImages(prev => new Set([...prev, src]))
            console.log(`Loaded image ${loadedCount}/${HERO_IMAGES.length}:`, src)
          }
          resolve()
        }
        img.onerror = () => {
          console.error('Failed to load image:', src)
          reject(new Error(`Failed to load ${src}`))
        }
      })
    }

    const loadAllImages = async () => {
      try {
        await Promise.all(HERO_IMAGES.map(image => preloadImage(image.src)))
        if (mounted) {
          console.log('All images loaded successfully!')
          setAllImagesLoaded(true)
          setTimeout(() => setIsLoaded(true), 200)
        }
      } catch (error) {
        console.error('Error loading images:', error)
        // Even if some fail, show the page
        if (mounted) {
          setAllImagesLoaded(true)
          setIsLoaded(true)
        }
      }
    }

    loadAllImages()

    // Fallback: If images take more than 5 seconds, show anyway
    const fallbackTimer = setTimeout(() => {
      if (mounted && !allImagesLoaded) {
        console.warn('Image loading timeout - showing page anyway')
        setAllImagesLoaded(true)
        setIsLoaded(true)
      }
    }, 5000)

    return () => {
      mounted = false
      clearTimeout(fallbackTimer)
    }
  }, [])

  // Start carousel ONLY after all images are loaded
  useEffect(() => {
    if (!allImagesLoaded) return

    const interval = setInterval(() => {
      setCurrentIndex((prev) => {
        const next = (prev + 1) % HERO_IMAGES.length
        console.log('Transitioning to image:', next)
        return next
      })
    }, CAROUSEL_DURATION)
    
    return () => clearInterval(interval)
  }, [allImagesLoaded])

  // Smooth scroll to next section
  const handleScrollIndicatorClick = useCallback(() => {
    const nextSection = document.querySelector('#featured-collection')
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }, [])

  // Manual navigation with carousel reset
  const handleDotClick = useCallback((index) => {
    console.log('Manual navigation to image:', index)
    setCurrentIndex(index)
  }, [])

  return (
    <section 
      className="relative h-screen w-full overflow-hidden bg-ivory"
      aria-labelledby="hero-heading"
    >
      {/* THE IMAGE CAROUSEL - Still Life in Motion */}
      <div className="absolute inset-0">
        {/* Show loading state if images aren't ready */}
        {!allImagesLoaded && (
          <div className="absolute inset-0 bg-ivory flex flex-col items-center justify-center gap-4">
            <motion.div
              animate={{ opacity: [0.3, 0.7, 0.3] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="text-gold text-sm tracking-[0.25em] uppercase"
            >
              Loading Experience...
            </motion.div>
            <div className="text-navy/40 text-xs tracking-wider">
              {loadedImages.size} / {HERO_IMAGES.length} images
            </div>
          </div>
        )}

        {/* Image Carousel - Show when loaded OR after 3 seconds (fallback) */}
        <AnimatePresence mode="sync">
          {HERO_IMAGES.map((image, index) => (
            index === currentIndex && (
              <motion.div
                key={`${image.src}-${index}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: allImagesLoaded ? 1 : 0 }}
                exit={{ opacity: 0 }}
                transition={{ 
                  duration: TRANSITION_DURATION, 
                  ease: [0.23, 1, 0.32, 1] // Luxury easing
                }}
                className="absolute inset-0"
              >
                <img 
                  src={image.src}
                  alt={image.alt}
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  loading="eager"
                  style={{ willChange: 'opacity' }}
                  onLoad={() => console.log(`Image ${index} rendered:`, image.src)}
                  onError={(e) => console.error(`Failed to render image ${index}:`, image.src, e)}
                />
              </motion.div>
            )
          ))}
        </AnimatePresence>
        
        {/* Subtle Overlay - Like Expensive Vellum */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={allImagesLoaded ? { opacity: 0.12 } : { opacity: 0 }}
          transition={{ duration: 1.8, ease: [0.23, 1, 0.32, 1] }}
          className="absolute inset-0 bg-ivory pointer-events-none"
          aria-hidden="true"
        />
      </div>
      
      {/* CONTENT - The Sacred Center */}
      <div className="relative z-10 flex h-full items-center justify-center px-6 md:px-12 lg:px-24">
        <div className="text-center max-w-5xl">
          
          {/* Label - The Whisper */}
          <motion.p
            initial={{ opacity: 0, y: -20 }}
            animate={isLoaded ? { opacity: 0.9, y: 0 } : {}}
            transition={{ 
              duration: 0.9, 
              delay: 0.3,
              ease: [0.23, 1, 0.32, 1] 
            }}
            className="text-xs md:text-sm uppercase tracking-[0.25em] text-gold font-semibold mb-8 md:mb-12"
            style={{ 
              textShadow: '0 2px 8px rgba(197, 162, 93, 0.1)',
              fontWeight: 600 
            }}
          >
            Award-Winning Luxury Skincare
          </motion.p>
          
          {/* HEADLINE - The Statement */}
          <motion.h1
            id="hero-heading"
            initial={{ opacity: 0, y: 30 }}
            animate={isLoaded ? { opacity: 1, y: 0 } : {}}
            transition={{ 
              duration: 1.2, 
              delay: 0.6,
              ease: [0.23, 1, 0.32, 1] 
            }}
            className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl text-navy tracking-tight leading-[1.1] mb-8 md:mb-12"
            style={{ 
              fontFamily: "'Cormorant Garamond', serif",
              fontWeight: 300,
              letterSpacing: '-0.02em',
              textShadow: '0 2px 12px rgba(30, 42, 57, 0.08)'
            }}
          >
            <span className="block">Timeless Beauty,</span>
            <span 
              className="block italic" 
              style={{ 
                fontWeight: 300,
                opacity: 0.95,
                fontSize: '0.92em' // The tension
              }}
            >
              Modern Science
            </span>
          </motion.h1>
          
          {/* Subheading - The Invitation */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={isLoaded ? { opacity: 0.75 } : {}}
            transition={{ 
              duration: 1, 
              delay: 1.2,
              ease: [0.23, 1, 0.32, 1] 
            }}
            className="text-base md:text-lg lg:text-xl text-navy max-w-2xl mx-auto leading-[1.8] mb-12 md:mb-16 px-4"
            style={{ fontWeight: 300 }}
          >
            Experience the perfect fusion of nature and innovation with Amora's luxury cosmetics collection
          </motion.p>
          
          {/* CTA BUTTONS - The Choice */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isLoaded ? { opacity: 1 } : {}}
            transition={{
              duration: 0.8,
              delay: 1.6,
              ease: [0.23, 1, 0.32, 1]
            }}
            className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8"
          >
            {/* Primary CTA */}
            <Link to="/products">
              <button className="btn-luxury-primary">
                Explore Collection
              </button>
            </Link>

            {/* Secondary CTA */}
            <Link to="/about">
              <button className="btn-luxury-secondary">
                Our Story
              </button>
            </Link>
          </motion.div>
        </div>
      </div>
      
      {/* SCROLL INDICATOR - The Invitation Down */}
      <motion.button
        initial={{ opacity: 0, y: -10 }}
        animate={isLoaded ? { 
          opacity: 0.4, 
          y: 0 
        } : {}}
        transition={{ 
          duration: 1, 
          delay: 2,
          repeat: Infinity, 
          repeatType: 'reverse',
          repeatDelay: 0.5
        }}
        onClick={handleScrollIndicatorClick}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 cursor-pointer hover:opacity-70 transition-opacity"
        aria-label="Scroll to featured collection"
      >
        <svg 
          width="24" 
          height="24" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          className="text-navy"
          strokeWidth="1.5"
          strokeLinecap="round" 
          strokeLinejoin="round"
        >
          <path d="M12 5v14M19 12l-7 7-7-7" />
        </svg>
      </motion.button>
      
      {/* Progress Indicators - Subtle Elegance */}
      {allImagesLoaded && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 0.8 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-20"
        >
          {HERO_IMAGES.map((_, index) => (
            <motion.button
              key={index}
              onClick={() => handleDotClick(index)}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              className={`h-1 rounded-full transition-all duration-500 ${
                index === currentIndex 
                  ? 'w-8 bg-gold' 
                  : 'w-1 bg-navy/20 hover:bg-navy/40'
              }`}
              aria-label={`View image ${index + 1}`}
              aria-current={index === currentIndex}
            />
          ))}
        </motion.div>
      )}
    
    </section>
  )
}

export default AmoraHero
