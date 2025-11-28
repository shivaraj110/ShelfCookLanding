import { 
  ChefHat, 
  CalendarDays, 
  ShoppingCart, 
  ScanLine, 
  Clock, 
  Heart,
  Utensils,
  Leaf,
  Smartphone
} from 'lucide-react';
import { Feature, Testimonial, Step } from './types';

export const FEATURES: Feature[] = [
  {
    id: 'recipe-discovery',
    title: 'Smart Discovery',
    description: 'Find recipes based on what you already have in your pantry. No more waste.',
    icon: ChefHat,
  },
  {
    id: 'meal-planning',
    title: 'Weekly Planner',
    description: 'Drag and drop meals into your weekly calendar. Organize breakfast, lunch, and dinner.',
    icon: CalendarDays,
  },
  {
    id: 'shopping-list',
    title: 'Auto Shopping List',
    description: 'Automatically generate organized shopping lists from your selected meal plans.',
    icon: ShoppingCart,
  },
  {
    id: 'pantry-tracking',
    title: 'Pantry Tracker',
    description: 'Keep track of your inventory. Get notified when essentials are running low.',
    icon: Leaf,
  },
  {
    id: 'recipe-scan',
    title: 'Scan & Import',
    description: 'Snap a photo of any recipe book or paste a URL to import it instantly.',
    icon: ScanLine,
  },
  {
    id: 'cooking-mode',
    title: 'Cook Mode',
    description: 'Step-by-step cooking instructions with built-in timers and voice control.',
    icon: Clock,
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Sarah Jenkins',
    role: 'Busy Mom of 3',
    content: "ShelfCook has completely transformed our weeknight dinners. The shopping list feature alone saves me an hour every week!",
    avatar: 'https://picsum.photos/100/100?random=1',
    rating: 5,
  },
  {
    id: '2',
    name: 'Marcus Chen',
    role: 'Food Enthusiast',
    content: "I love the recipe import feature. Being able to digitize my grandmother's handwritten recipes is priceless.",
    avatar: 'https://picsum.photos/100/100?random=2',
    rating: 5,
  },
  {
    id: '3',
    name: 'Elena Rodriguez',
    role: 'Nutritionist',
    content: "As a nutritionist, I recommend this to all my clients. The meal planning is intuitive and helps maintain a balanced diet.",
    avatar: 'https://picsum.photos/100/100?random=3',
    rating: 5,
  },
];

export const HOW_IT_WORKS_STEPS: Step[] = [
  {
    id: 1,
    title: "Input your ingredients",
    description: "Tell ShelfCook what you have in your fridge and pantry, or scan your receipts.",
    image: "https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 2,
    title: "Get personalized plans",
    description: "Our AI generates a weekly meal plan tailored to your inventory and taste preferences.",
    image: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 3,
    title: "Shop & Cook",
    description: "Get an optimized shopping list for missing items and follow easy step-by-step guides.",
    image: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?q=80&w=800&auto=format&fit=crop"
  }
];