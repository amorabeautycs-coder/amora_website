// Product, Testimonial, and FAQ data for Amora Beauty

// Product data - Edit this to add/update your products
const products = [
  {
    id: '1',
    name: 'Red Light Therapy Device',
    brand: 'Avologi',
    category: 'Devices',
    description: 'Advanced red light therapy device for skin rejuvenation and collagen production. Clinical-grade technology for professional results at home.',
    key_benefits: [
      'Stimulates collagen production',
      'Reduces fine lines and wrinkles',
      'Improves skin tone and texture',
      'Accelerates healing and recovery',
      'Non-invasive and painless'
    ],
    usage_instructions: 'Use for 10-15 minutes daily on clean skin. Position 6-8 inches from face. Safe for all skin types.',
    image_url: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?w=800&h=800&fit=crop',
    featured: true
  },
  {
    id: '2',
    name: 'Microneedling Pen Pro',
    brand: 'Avologi',
    category: 'Devices',
    description: 'Professional microneedling device with adjustable depth settings. Enhances product absorption and stimulates natural skin renewal.',
    key_benefits: [
      'Improves product penetration',
      'Minimizes pores and scars',
      'Promotes cell regeneration',
      'Safe and effective',
      'Multiple speed settings'
    ],
    usage_instructions: 'Apply serum, use device in vertical and horizontal motions. Follow with hydrating serum. Use 1-2 times per week.',
    image_url: '/images/products/Avologi Eneo Totale Kit.jpg',
    featured: true
  },
  {
    id: '3',
    name: 'Vitamin C Brightening Serum',
    brand: 'Formidabless',
    category: 'Serums',
    description: 'Powerful antioxidant serum with 20% pure vitamin C. Brightens complexion and protects against environmental damage.',
    key_benefits: [
      'Brightens and evens skin tone',
      'Powerful antioxidant protection',
      'Boosts collagen synthesis',
      'Fades dark spots and hyperpigmentation',
      'Lightweight, fast-absorbing formula'
    ],
    usage_instructions: 'Apply 3-4 drops to clean face morning and evening. Follow with moisturizer and SPF during day.',
    image_url: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=800&h=800&fit=crop',
    featured: true
  },
  {
    id: '4',
    name: 'Hyaluronic Acid Intensive Serum',
    brand: 'Formidabless',
    category: 'Serums',
    description: 'Multi-molecular hyaluronic acid serum that penetrates multiple skin layers for deep, lasting hydration.',
    key_benefits: [
      'Intense hydration at multiple levels',
      'Plumps and smooths skin',
      'Reduces appearance of fine lines',
      'Supports skin barrier function',
      'Suitable for all skin types'
    ],
    usage_instructions: 'Apply to damp skin after cleansing. Can be layered under other serums and moisturizers.',
    image_url: 'https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?w=800&h=800&fit=crop',
    featured: false
  },
  {
    id: '5',
    name: 'Retinol Night Treatment',
    brand: 'Formidabless',
    category: 'Treatments',
    description: 'Time-released retinol treatment that works overnight to reduce wrinkles and improve skin texture.',
    key_benefits: [
      'Reduces fine lines and wrinkles',
      'Improves skin texture',
      'Minimizes pore appearance',
      'Evens skin tone',
      'Gentle, sustained release formula'
    ],
    usage_instructions: 'Apply at night to clean, dry skin. Start 2-3 times per week, gradually increase. Always use SPF during day.',
    image_url: 'https://images.unsplash.com/photo-1571875257727-256c39da42af?w=800&h=800&fit=crop',
    featured: false
  },
  {
    id: '6',
    name: 'Nourishing Night Cream',
    brand: 'Formidabless',
    category: 'Creams',
    description: 'Rich, luxurious night cream that deeply nourishes and repairs skin while you sleep.',
    key_benefits: [
      'Deeply hydrates and nourishes',
      'Repairs skin overnight',
      'Strengthens skin barrier',
      'Reduces signs of aging',
      'Wakes up to soft, glowing skin'
    ],
    usage_instructions: 'Apply generously to face and neck before bed. Massage in upward circular motions.',
    image_url: 'https://images.unsplash.com/photo-1556228852-80c003a5f7c9?w=800&h=800&fit=crop',
    featured: false
  },
  {
    id: '7',
    name: 'Gentle Foaming Cleanser',
    brand: 'Formidabless',
    category: 'Cleansers',
    description: 'Gentle yet effective cleanser that removes impurities without stripping skin of natural oils.',
    key_benefits: [
      'Thoroughly cleanses without drying',
      'Maintains skin pH balance',
      'Suitable for sensitive skin',
      'Removes makeup and impurities',
      'Leaves skin soft and refreshed'
    ],
    usage_instructions: 'Apply to damp skin, massage gently in circular motions. Rinse thoroughly with lukewarm water. Use morning and evening.',
    image_url: 'https://images.unsplash.com/photo-1556228852-8a74cf86710e?w=800&h=800&fit=crop',
    featured: false
  },
  {
    id: '8',
    name: 'Balancing Toner',
    brand: 'Formidabless',
    category: 'Toners',
    description: 'Alcohol-free toner that balances skin pH and prepares skin for better product absorption.',
    key_benefits: [
      'Balances skin pH',
      'Hydrates and refreshes',
      'Minimizes pores',
      'Prepares skin for serums',
      'Alcohol-free formula'
    ],
    usage_instructions: 'Apply to cotton pad or hands and pat onto clean face. Use morning and evening after cleansing.',
    image_url: 'https://images.unsplash.com/photo-1556228995-51b525c06677?w=800&h=800&fit=crop',
    featured: false
  },
  {
    id: '9',
    name: 'LED Face Mask',
    brand: 'Avologi',
    category: 'Devices',
    description: 'Multi-color LED therapy mask targeting multiple skin concerns with professional-grade light technology.',
    key_benefits: [
      'Multiple light therapy modes',
      'Treats acne, aging, and pigmentation',
      'Hands-free treatment',
      'Clinical-grade results',
      'Safe for all skin types'
    ],
    usage_instructions: 'Wear for 10-20 minutes daily on clean skin. Choose appropriate light setting for your skin concern.',
    image_url: 'https://images.unsplash.com/photo-1596755389378-c31d21fd1273?w=800&h=800&fit=crop',
    featured: true
  }
];

const testimonials = [
  {
    id: '1',
    name: 'Sarah Mitchell',
    role: 'Verified Customer',
    content: 'The Red Light Therapy Device has transformed my skin! I\'ve noticed a significant reduction in fine lines after just 6 weeks.',
    rating: 5
  },
  {
    id: '2',
    name: 'Jennifer Lee',
    role: 'Skincare Enthusiast',
    content: 'Formidabless serums are incredible. The Vitamin C serum gave me the glow I\'ve been searching for years!',
    rating: 5
  },
  {
    id: '3',
    name: 'Amanda Rodriguez',
    role: 'Beauty Professional',
    content: 'As an esthetician, I recommend Avologi devices to all my clients. Professional results at home!',
    rating: 5
  }
];

const faqs = [
  {
    id: '1',
    question: 'How often should I use the red light therapy device?',
    answer: 'For best results, use the device daily for 10-15 minutes. Consistency is key to seeing improvements in skin texture and tone.',
    order: 1
  },
  {
    id: '2',
    question: 'Are Formidabless products suitable for sensitive skin?',
    answer: 'Yes! Our Formidabless line is formulated to be gentle yet effective. However, we always recommend patch testing new products.',
    order: 2
  },
  {
    id: '3',
    question: 'Can I use multiple serums together?',
    answer: 'Absolutely! Layer serums from thinnest to thickest consistency. Start with hydrating serums, then active ingredients.',
    order: 3
  },
  {
    id: '4',
    question: 'How long until I see results?',
    answer: 'Most customers notice improvements within 4-6 weeks of consistent use. Device-based treatments may show results sooner.',
    order: 4
  },
  {
    id: '5',
    question: 'Do you ship internationally?',
    answer: 'Yes! We ship to most countries worldwide. Shipping times and costs vary by location.',
    order: 5
  }
];

// Data client to simulate API calls
class DataClient {
  constructor() {
    this.entities = {
      Product: {
        list: async () => {
          // Simulate API delay
          await new Promise(resolve => setTimeout(resolve, 300));
          return products;
        },
        filter: async (params) => {
          // Simulate API delay
          await new Promise(resolve => setTimeout(resolve, 300));
          if (params.featured !== undefined) {
            return products.filter(p => p.featured === params.featured);
          }
          return products;
        },
      },
      Testimonial: {
        list: async () => {
          // Simulate API delay
          await new Promise(resolve => setTimeout(resolve, 300));
          return testimonials;
        },
      },
      FAQ: {
        list: async (orderBy) => {
          // Simulate API delay
          await new Promise(resolve => setTimeout(resolve, 300));
          return faqs.sort((a, b) => a.order - b.order);
        },
      },
    };

    this.integrations = {
      Core: {
        SendEmail: async (params) => {
          // Simulate API delay
          await new Promise(resolve => setTimeout(resolve, 500));
          console.log('Sending email:', params);
          return { success: true, message: 'Email sent successfully' };
        },
      },
    };
  }
}

export const dataClient = new DataClient();
