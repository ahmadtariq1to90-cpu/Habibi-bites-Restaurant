import { MenuItem, Order, Promotion } from './types';

export const MENU_ITEMS: MenuItem[] = [
  {
    id: 'wagyu-karahi',
    name: 'Signature Wagyu Karahi',
    description: 'Slow-cooked A5 Wagyu immersed in a rich, spiced tomato reduction, accented with toasted cumin and fresh green chilies.',
    price: 85,
    category: 'Karahi',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCx3x1q1Pht6PSuUzT5Q3ELrBtlIpfBJV3hjhKYKDrFqw_iCSxoM2NphfRge7UvBoTfneYOrOPprkjne7PaArdXdwKWaj3EHepoREiWWQx3_DgGPilpZGIfKm1-sLlVG4D6YO1izrMDj1GOXGS8NWEA7MZa8pHFfoC56tOOAOJ56sNJSlIJARGTXQoZ8X3fQMHY_zg0d_xo79GSInI4F3J7DdrEZIQ1uDlpNmwe0w-LJfJRdS-yDNpHhJSuJXMwnN7Bsq0l7p5EMt0',
    isSpecial: true,
    isAvailable: true,
    isSpicy: true,
    badges: ['Chef\'s Special']
  },
  {
    id: 'truffle-smash',
    name: 'Midnight Truffle Smash',
    description: 'Double dry-aged beef patties, imported gruyere, caramelized black garlic, and house-made truffle aioli on a brioche crown.',
    price: 32,
    category: 'Fast Food',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDg4ZJO4RI3h5V8cOJ1kveIe-7E8EfHN_W581kDejXFpxZWWwPMTTUba_6z5r0ZXzOY17_-qAKGf0v2BrP6G80Oim0dv-G5smlj6r-vYveSfwC-y6tnNyHaVF9FCNcfkZLVXX1Zht0DOqs9Ic4aMN5Lw5LeW-gzRbuWp47uDv3DaXDjSMWGdhsNPSm2xzMg1TKLG9KHqd3_MLOpzMqOPrKZimZl8DBbAkoT4p0o_ZJ6PeSdL3u3hnopZpGgZaeN-1avtQHeB-5MgDQ',
    isAvailable: true
  },
  {
    id: 'smoked-brisket',
    name: 'Oak-Smoked Brisket',
    description: '18-hour post-oak smoked prime brisket. Distinctive smoke ring, meltingly tender texture, served with our signature dark molasses glaze.',
    price: 45,
    category: 'BBQ',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDOqf7rn35c1jB80rmtYpwq97GuPwpEREY-8ZMeGI4wvxybpwY7eb3xWp3DB3eon_dxOQLMtEln4YsO_D_dqdSNYg7nfm6AdHu1dBv71Am2rBtxBJlSEWxm074wWx6E4ZN7EEVfgUl1MuTtq9T8u2lq8ANfv0Uzl0IcJocT6lZk5H15LFrIqB-bdgFv72tzCwnKE5qrN6tLEXo0rts4Wuod2U1G6biUFqFHDi0dSeWkSmkrNq9_5xuonwNFwe-be2jAiIIzgB-FyiY',
    isAvailable: false
  },
  {
    id: 'saffron-elixir',
    name: 'Golden Saffron Elixir',
    description: 'Hand-squeezed Amalfi lemons infused with premium Persian saffron threads and lightly sweetened with organic agave.',
    price: 14,
    category: 'Drinks',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBoD6n6gNhL8Z8aJHFj_kYqyTldfVlS665uJo9IPDbp8o2qj3HRZvyC9vXqtoQsTiHWP6eJSNm6vIm5KtdpWAbtmuMRy6k78fQ7KkGavlQmvDeCnNQYzHdfKAOGOhaS318HOVLLNSa6qxGGeyLf21TKQV5F6n4zqTE3RZf8ePQhCpOzKA_Lv_AVIUvuJvUZSu-Uw4XEwNSC6BrIkTdXGdL2EAxRsStQS6STsA0MMw_a3DJ6oVVBZEPycAJxyGdhm8XOQUOz5zh-ghA',
    isAvailable: true
  },
  {
    id: 'wagyu-ribeye',
    name: 'Smoked Wagyu Ribeye',
    description: 'A5 grading, cherry wood smoke, black garlic butter, charred broccolini.',
    price: 145,
    category: 'Mains',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA4VMXk97TtmmbGVCRHgPq4eOu8g5RkwRv3gHvb9LxX0YqCMW-nEJ9zJQUmuAuTn5aUgcu8fRamaWAL55kXvXbAk6gb-0QsZVYySPsHvKJVk5OW0_n33kaXBa-vvyNS4KcyfVi1aXIariNyvu1PSUuqYADfswziDuJtbgbAsNwtMXcva5hF-kzjtJoQC6eos5PqZjMlXTuXGd44pLKdQMT3am-fNhbuKcpcqHwxYMAhu6eE6J8M-CjvUL7BmEheEZQ-U8emcxsaOS0',
    isAvailable: true
  },
  {
    id: 'gold-caviar',
    name: 'Gold Leaf Caviar Bites',
    description: 'Beluga sturgeon caviar, crème fraîche, blini, edible 24k gold leaf.',
    price: 120,
    category: 'Starters',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDhHI0RWeThQ-qkTm9blCtiuU4WJPisr2MFrW8Hn_if7nSh1HgEsfXwfIJQ_O6uGO3YN7dg8s1U2dYzgHcMt4vJZLtHBB0IUJwGm4aYE_v5FAtf3di0hO_Uzlz7-YSG7m2ZLOcQ3FuLZFFiSt3lrJZFen-sSmDdH2UQPZ7eHEFd89CfcovEE28DHOpAOqbSI-tmBxqWAeVmIh85smM71fu9qrZj7w12_KH8qWdlFfPNfzx6-Qduld1xMBQ5IRCU3sfVFex-PNtXkqY',
    isAvailable: true
  }
];

export const LIVE_ORDERS: Order[] = [
  {
    id: '#HB-8902',
    destination: 'VIP Booth 4',
    guestName: 'A. Sterling',
    itemsCount: 5,
    total: 850.00,
    status: 'Preparing',
    type: 'Dine-In'
  },
  {
    id: '#HB-8901',
    destination: 'Table 12',
    guestName: 'Walk-in',
    itemsCount: 2,
    total: 145.00,
    status: 'Served',
    type: 'Dine-In'
  },
  {
    id: '#HB-8900',
    destination: 'Delivery',
    guestName: 'Courier arriving in 5m',
    itemsCount: 3,
    total: 210.00,
    status: 'Ready for Pickup',
    type: 'Delivery'
  }
];

export const PROMOTIONS: Promotion[] = [
  {
    id: 'caviar-pairing',
    title: 'Midnight Caviar Pairing',
    description: 'Complimentary glass of vintage Dom Pérignon with any Imperial Ossetra order after 11 PM.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD87L6O-Xp9i0GtEr6qy_5YyKZIWypnX2di9Bcm83VztdGEMkf2DvNPm6M_ZH4xGaT6tKho85wtaEIFuvJyc5BoapDaa3GfWKdGlu-wbvqoy1J4ubULQ2Zu5TN1O6Uo3wA8e4m_JP1zaTYtcR60JmXyGp_nGv0WKsgooRHHTSCrE_eADjT_KWfUQhR91Yvi_f_tUGgolITEiegHRBvSqKXJkrJGEzs6-sB6mfHA7Ep0b8BNcSAEqsc2DjQSIriq-GhQBvk-8D3FvLM',
    isActive: true,
    redemptions: '14 tonight'
  },
  {
    id: 'wine-flight',
    title: 'Sommelier\'s Flight',
    description: 'Fixed Price Add-on',
    image: '',
    isActive: false,
    isScheduled: true,
    tag: 'Scheduled'
  }
];
