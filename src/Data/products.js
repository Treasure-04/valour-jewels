const products = [
  // Rings
  { id: 1, name: 'Gold Vintage Ring', category: 'rings', price: 15000, image: 'https://images.unsplash.com/photo-1492714485642-dd6df6baafa2?w=400&h=400&fit=crop&q=80' },
  { id: 2, name: 'Silver Band Ring', category: 'rings', price: 8500, image: 'https://images.unsplash.com/photo-1492714485642-dd6df6baafa2?w=400&h=400&fit=crop&q=80' },
  { id: 3, name: 'Diamond Cut Ring', category: 'rings', price: 22000, image: 'https://images.unsplash.com/photo-1492714485642-dd6df6baafa2?w=400&h=400&fit=crop&q=80' },

  // Earrings
  { id: 4, name: 'Pearl Drop Earrings', category: 'earrings', price: 6000, image: 'https://images.unsplash.com/photo-1671513579768-6f950fe62d5c?w=400&h=400&fit=crop&q=80' },
  { id: 5, name: 'Gold Hoop Earrings', category: 'earrings', price: 7500, image: 'https://images.unsplash.com/photo-1671513579768-6f950fe62d5c?w=400&h=400&fit=crop&q=80' },
  { id: 6, name: 'Crystal Stud Earrings', category: 'earrings', price: 5000, image: 'https://images.unsplash.com/photo-1671513579768-6f950fe62d5c?w=400&h=400&fit=crop&q=80' },

  // Necklaces
  { id: 7, name: 'Layered Gold Necklace', category: 'necklaces', price: 18000, image: 'https://images.unsplash.com/photo-1758995115682-1452a1a9e35b?w=400&h=400&fit=crop&q=80' },
  { id: 8, name: 'Pearl Pendant Necklace', category: 'necklaces', price: 12000, image: 'https://images.unsplash.com/photo-1758995115682-1452a1a9e35b?w=400&h=400&fit=crop&q=80' },
  { id: 9, name: 'Chain Link Necklace', category: 'necklaces', price: 9500, image: 'https://images.unsplash.com/photo-1758995115682-1452a1a9e35b?w=400&h=400&fit=crop&q=80' },

  // Bracelets
  { id: 10, name: 'Charm Bracelet', category: 'bracelets', price: 10000, image: 'https://images.unsplash.com/photo-1655255114527-d0a834d9a774?w=400&h=400&fit=crop&q=80' },
  { id: 11, name: 'Gold Bangle Set', category: 'bracelets', price: 16000, image: 'https://images.unsplash.com/photo-1655255114527-d0a834d9a774?w=400&h=400&fit=crop&q=80' },
  { id: 12, name: 'Beaded Bracelet', category: 'bracelets', price: 4500, image: 'https://images.unsplash.com/photo-1655255114527-d0a834d9a774?w=400&h=400&fit=crop&q=80' },

  // Watches
  { id: 13, name: 'Classic Leather Watch', category: 'watches', price: 25000, image: 'https://images.unsplash.com/photo-1631729670375-7b9bc6ba6c07?w=400&h=400&fit=crop&q=80' },
  { id: 14, name: 'Gold Chain Watch', category: 'watches', price: 30000, image: 'https://images.unsplash.com/photo-1631729670375-7b9bc6ba6c07?w=400&h=400&fit=crop&q=80' },
  { id: 15, name: 'Minimalist Watch', category: 'watches', price: 20000, image: 'https://images.unsplash.com/photo-1631729670375-7b9bc6ba6c07?w=400&h=400&fit=crop&q=80' },

  // Beads
  { id: 16, name: 'Waist Beads Set', category: 'beads', price: 5000, image: 'https://images.unsplash.com/photo-1646070107254-3713cec279c1?w=400&h=400&fit=crop&q=80' },
  { id: 17, name: 'Colorful Beaded Strand', category: 'beads', price: 3500, image: 'https://images.unsplash.com/photo-1646070107254-3713cec279c1?w=400&h=400&fit=crop&q=80' },
  { id: 18, name: 'Wooden Bead Necklace', category: 'beads', price: 4000, image: 'https://images.unsplash.com/photo-1646070107254-3713cec279c1?w=400&h=400&fit=crop&q=80' },

  // Anklets
  { id: 19, name: 'Gold Chain Anklet', category: 'anklets', price: 6000, image: 'https://images.unsplash.com/photo-1655255114527-d0a834d9a774?w=400&h=400&fit=crop&q=80' },
  { id: 20, name: 'Beaded Ankle Bracelet', category: 'anklets', price: 3000, image: 'https://images.unsplash.com/photo-1655255114527-d0a834d9a774?w=400&h=400&fit=crop&q=80' },
  { id: 21, name: 'Silver Charm Anklet', category: 'anklets', price: 5500, image: 'https://images.unsplash.com/photo-1655255114527-d0a834d9a774?w=400&h=400&fit=crop&q=80' },

  // Jewelry Sets
  { id: 22, name: 'Bridal Jewelry Set', category: 'jewelry-sets', price: 35000, image: 'https://images.unsplash.com/photo-1758995115682-1452a1a9e35b?w=400&h=400&fit=crop&q=80' },
  { id: 23, name: 'Gold Necklace & Earring Set', category: 'jewelry-sets', price: 28000, image: 'https://images.unsplash.com/photo-1758995115682-1452a1a9e35b?w=400&h=400&fit=crop&q=80' },
  { id: 24, name: 'Pearl Jewelry Set', category: 'jewelry-sets', price: 24000, image: 'https://images.unsplash.com/photo-1758995115682-1452a1a9e35b?w=400&h=400&fit=crop&q=80' },

  // Jewelry Boxes & Packaging
  { id: 25, name: 'Velvet Jewelry Box', category: 'jewelry-boxes', price: 8000, image: 'https://images.unsplash.com/photo-1631982690223-8aa4be0a2497?w=400&h=400&fit=crop&q=80' },
  { id: 26, name: 'Travel Jewelry Case', category: 'jewelry-boxes', price: 6500, image: 'https://images.unsplash.com/photo-1631982690223-8aa4be0a2497?w=400&h=400&fit=crop&q=80' },
  { id: 27, name: 'Gift Packaging Set', category: 'jewelry-boxes', price: 3000, image: 'https://images.unsplash.com/photo-1631982690223-8aa4be0a2497?w=400&h=400&fit=crop&q=80' },

  // Beanies
  { id: 28, name: 'Knit Winter Beanie', category: 'beanies', price: 4500, image: 'https://images.unsplash.com/photo-1475053181767-9b735f0b1689?w=400&h=400&fit=crop&q=80' },
  { id: 29, name: 'Slouchy Beanie', category: 'beanies', price: 4000, image: 'https://images.unsplash.com/photo-1475053181767-9b735f0b1689?w=400&h=400&fit=crop&q=80' },
  { id: 30, name: 'Pom Pom Beanie', category: 'beanies', price: 5000, image: 'https://images.unsplash.com/photo-1475053181767-9b735f0b1689?w=400&h=400&fit=crop&q=80' },
]

export default products