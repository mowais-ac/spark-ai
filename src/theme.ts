import { extendTheme } from '@chakra-ui/react';

const gradients = {
  primary: "linear-gradient(135deg, #4F46E5, #7C3AED)",
  secondary: "linear-gradient(135deg, #7C3AED, #C084FC)",
  accent: "linear-gradient(135deg, #C084FC, #E879F9)",
  success: "linear-gradient(135deg, #059669, #10B981)",
  warning: "linear-gradient(135deg, #D97706, #FBBF24)",
  info: "linear-gradient(135deg, #2563EB, #3B82F6)",
  subtle: "linear-gradient(135deg, #F3F4F6, #E5E7EB)",
  feature: "linear-gradient(135deg, #4F46E5, #7C3AED, #C084FC)",
  cta: "linear-gradient(135deg, #6D28D9, #7C3AED)",
  hero: "linear-gradient(135deg, rgba(79, 70, 229, 0.1), rgba(124, 58, 237, 0.1))",
  card: "linear-gradient(145deg, #ffffff, #f9fafb)",
  glow: "radial-gradient(circle at center, rgba(124, 58, 237, 0.15), transparent 70%)",
  textPrimary: "linear-gradient(135deg, #4F46E5, #7C3AED)",
  textSecondary: "linear-gradient(135deg, #8B5CF6, #C084FC)",
  textAccent: "linear-gradient(135deg, #C084FC, #F0ABFC)",
  textGold: "linear-gradient(135deg, #F59E0B, #FBBF24)",
  textSuccess: "linear-gradient(135deg, #10B981, #34D399)",
  textFeature: "linear-gradient(45deg, #4F46E5, #7C3AED, #C084FC)",
  textCta: "linear-gradient(135deg, #8B5CF6, #6D28D9)",
  textHero: "linear-gradient(135deg, #4F46E5, #7C3AED, #8B5CF6)",
  textSubtle: "linear-gradient(135deg, #6B7280, #9CA3AF)",
  textQuote: "linear-gradient(135deg, #6366F1, #A855F7)",
  textHighlight: "linear-gradient(45deg, #8B5CF6, #EC4899)",
  textEmphasis: "linear-gradient(135deg, #6D28D9, #9333EA)",
  textFaq: "linear-gradient(135deg, #7C3AED, #9333EA)",
  textStats: "linear-gradient(135deg, #4F46E5, #6366F1)",
  textTestimonial: "linear-gradient(135deg, #8B5CF6, #D946EF)",
  textRole: "linear-gradient(135deg, #6D28D9, #8B5CF6)",
  textCompany: "linear-gradient(135deg, #9333EA, #C026D3)",
  textAchievement: "linear-gradient(135deg, #4F46E5, #8B5CF6, #D946EF)",
  textDuration: "linear-gradient(135deg, #7C3AED, #8B5CF6)",
  textPremium: "linear-gradient(135deg, #4F46E5, #7C3AED, #A855F7)",
  textLuxury: "linear-gradient(135deg, #312E81, #4338CA, #6366F1)",
  textSpecial: "linear-gradient(135deg, #6D28D9, #D946EF, #EC4899)",
  textVIP: "linear-gradient(135deg, #6D28D9, #7C3AED, #8B5CF6)",
  textExclusive: "linear-gradient(-45deg, #6366F1, #A855F7, #EC4899)",
  textFeatureTitle: "linear-gradient(135deg, #4F46E5, #7C3AED, #A855F7)",
  textFeatureDesc: "linear-gradient(135deg, #6366F1, #8B5CF6, #A855F7)",
  textMetric: "linear-gradient(45deg, #4F46E5, #6D28D9, #9333EA)",
  textBenefit: "linear-gradient(135deg, #7C3AED, #8B5CF6, #A855F7)",
  textHighlightAlt: "linear-gradient(-45deg, #4F46E5, #8B5CF6, #EC4899)",
  textEmphasized: "linear-gradient(135deg, #4338CA, #6366F1, #818CF8)",
  textDecorative: "linear-gradient(135deg, #C026D3, #D946EF, #F0ABFC)"
};

const theme = extendTheme({
  styles: {
    global: {
      body: {
        bg: '#F9FAFB',
        color: 'gray.800',
      },
      '.gradient-text-hover': {
        transition: 'all 0.3s ease',
        _hover: {
          transform: 'translateY(-1px)',
          textShadow: '0 2px 10px rgba(124, 58, 237, 0.2)'
        }
      },
      '.gradient-text-animate': {
        backgroundSize: '200% 200%',
        animation: 'gradient 8s ease infinite',
        textShadow: '0 2px 10px rgba(124, 58, 237, 0.2)'
      }
    },
  },
  components: {
    Button: {
      baseStyle: {
        fontWeight: 'semibold',
        borderRadius: 'lg',
      },
      variants: {
        gradient: {
          bgGradient: gradients.primary,
          color: 'white',
          _hover: {
            bgGradient: gradients.secondary,
            transform: 'translateY(-2px)',
            boxShadow: 'lg',
          },
        },
        'gradient-outline': {
          bg: 'transparent',
          border: '2px solid',
          borderColor: 'purple.500',
          color: 'purple.600',
          _hover: {
            bgGradient: gradients.hero,
            transform: 'translateY(-2px)',
            boxShadow: 'lg',
          },
        },
      },
    },
    Heading: {
      variants: {
        gradient: {
          bgGradient: gradients.textHero,
          bgClip: 'text',
          fontWeight: 'bold',
        },
        'gradient-secondary': {
          bgGradient: gradients.textSecondary,
          bgClip: 'text',
          fontWeight: 'bold',
        },
        'gradient-accent': {
          bgGradient: gradients.textAccent,
          bgClip: 'text',
          fontWeight: 'bold',
        },
        'gradient-gold': {
          bgGradient: gradients.textGold,
          bgClip: 'text',
          fontWeight: 'bold',
        },
        'gradient-premium': {
          bgGradient: gradients.textPremium,
          bgClip: 'text',
          fontWeight: 'bold',
          className: 'gradient-text-animate'
        },
        'gradient-luxury': {
          bgGradient: gradients.textLuxury,
          bgClip: 'text',
          fontWeight: 'bold',
        },
        'gradient-special': {
          bgGradient: gradients.textSpecial,
          bgClip: 'text',
          fontWeight: 'bold',
          className: 'gradient-text-animate'
        },
        'gradient-exclusive': {
          bgGradient: gradients.textExclusive,
          bgClip: 'text',
          fontWeight: 'bold',
          className: 'gradient-text-animate'
        }
      },
    },
    Text: {
      variants: {
        gradient: {
          bgGradient: gradients.textPrimary,
          bgClip: 'text',
          fontWeight: 'semibold',
        },
        'gradient-secondary': {
          bgGradient: gradients.textSecondary,
          bgClip: 'text',
          fontWeight: 'semibold',
        },
        'gradient-accent': {
          bgGradient: gradients.textAccent,
          bgClip: 'text',
          fontWeight: 'semibold',
        },
        'gradient-feature': {
          bgGradient: gradients.textFeature,
          bgClip: 'text',
          fontWeight: 'semibold',
        },
        'gradient-success': {
          bgGradient: gradients.textSuccess,
          bgClip: 'text',
          fontWeight: 'semibold',
        },
        'gradient-premium': {
          bgGradient: gradients.textPremium,
          bgClip: 'text',
          fontWeight: 'bold',
          className: 'gradient-text-animate'
        },
        'gradient-luxury': {
          bgGradient: gradients.textLuxury,
          bgClip: 'text',
          fontWeight: 'bold',
        },
        'gradient-special': {
          bgGradient: gradients.textSpecial,
          bgClip: 'text',
          fontWeight: 'semibold',
          className: 'gradient-text-animate'
        },
        'gradient-vip': {
          bgGradient: gradients.textVIP,
          bgClip: 'text',
          fontWeight: 'bold',
        },
        'gradient-exclusive': {
          bgGradient: gradients.textExclusive,
          bgClip: 'text',
          fontWeight: 'semibold',
          className: 'gradient-text-animate'
        },
        'gradient-feature-title': {
          bgGradient: gradients.textFeatureTitle,
          bgClip: 'text',
          fontWeight: 'bold',
        },
        'gradient-feature-desc': {
          bgGradient: gradients.textFeatureDesc,
          bgClip: 'text',
          fontWeight: 'medium',
        },
        'gradient-metric': {
          bgGradient: gradients.textMetric,
          bgClip: 'text',
          fontWeight: 'bold',
        },
        'gradient-benefit': {
          bgGradient: gradients.textBenefit,
          bgClip: 'text',
          fontWeight: 'semibold',
        },
        'gradient-highlight-alt': {
          bgGradient: gradients.textHighlightAlt,
          bgClip: 'text',
          fontWeight: 'semibold',
          className: 'gradient-text-animate'
        },
        'gradient-emphasized': {
          bgGradient: gradients.textEmphasized,
          bgClip: 'text',
          fontWeight: 'bold',
        },
        'gradient-decorative': {
          bgGradient: gradients.textDecorative,
          bgClip: 'text',
          fontWeight: 'medium',
        }
      },
    },
    Card: {
      baseStyle: {
        container: {
          bgGradient: gradients.card,
          borderRadius: 'xl',
          overflow: 'hidden',
          transition: 'all 0.3s ease',
          _hover: {
            transform: 'translateY(-4px)',
            boxShadow: 'xl',
          },
        },
      },
    },
  },
  gradients,
  shadows: {
    glow: '0 0 20px rgba(124, 58, 237, 0.2)',
    'glow-lg': '0 0 30px rgba(124, 58, 237, 0.3)',
    'glow-xl': '0 0 40px rgba(124, 58, 237, 0.4)',
  },
});

export default theme; 