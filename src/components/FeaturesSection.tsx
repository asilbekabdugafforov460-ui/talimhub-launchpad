import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Mic, 
  Search, 
  Trophy, 
  BarChart3, 
  Play,
  Pause,
  Volume2,
  Languages
} from 'lucide-react';

const featureIcons = [Mic, Search, Trophy, BarChart3];

export function FeaturesSection() {
  const { t } = useTranslation();
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const features = t('features.items', { returnObjects: true }) as Array<{
    title: string;
    desc: string;
  }>;

  return (
    <section id="features" className="py-20 bg-muted/20">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <Badge variant="secondary" className="mb-4 px-4 py-2">
            Innovatsion texnologiyalar
          </Badge>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-foreground">
            {t('features.title')}
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ta'limHub platformasining asosiy imkoniyatlari bilan tanishing
          </p>
        </motion.div>

        {/* AI Dubbing Demo Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-3xl p-8 lg:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center">
                    <Languages className="h-6 w-6 text-white" />
                  </div>
                  <Badge variant="outline" className="bg-primary/10 border-primary/20">
                    AI Dublyaj Demo
                  </Badge>
                </div>
                
                <h3 className="text-3xl font-bold mb-4 text-foreground">
                  Ingliz tilidan O'zbekchaga AI tarjima
                </h3>
                <p className="text-lg text-muted-foreground mb-6">
                  Kurslarni real vaqtda tarjima qilish va professional ovoz berish. 
                  Sun'iy intellekt yordamida yuqori sifatli dublyaj yaratish.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-success rounded-full"></div>
                    <span className="text-sm">95% aniqlik bilan tarjima</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-success rounded-full"></div>
                    <span className="text-sm">Tabiiy ovoz sintezi</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-success rounded-full"></div>
                    <span className="text-sm">Real vaqtda ishlov berish</span>
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="bg-background rounded-2xl shadow-xl border border-border p-6">
                  <div className="aspect-video bg-gradient-to-br from-primary/20 to-secondary/20 rounded-xl flex items-center justify-center relative overflow-hidden">
                    <motion.div
                      animate={{ 
                        scale: isVideoPlaying ? [1, 1.1, 1] : 1,
                        rotate: isVideoPlaying ? [0, 180, 360] : 0
                      }}
                      transition={{ 
                        duration: 2, 
                        repeat: isVideoPlaying ? Infinity : 0,
                        ease: "easeInOut"
                      }}
                      className="w-16 h-16 bg-primary rounded-full flex items-center justify-center cursor-pointer"
                      onClick={() => setIsVideoPlaying(!isVideoPlaying)}
                    >
                      {isVideoPlaying ? (
                        <Pause className="h-8 w-8 text-white" />
                      ) : (
                        <Play className="h-8 w-8 text-white ml-1" />
                      )}
                    </motion.div>
                    
                    {isVideoPlaying && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="absolute inset-0 flex items-end p-4"
                      >
                        <div className="bg-background/90 backdrop-blur-sm rounded-lg p-3 w-full">
                          <div className="flex items-center gap-2 mb-2">
                            <Volume2 className="h-4 w-4 text-primary" />
                            <span className="text-sm font-medium">AI Dubbing ishlamoqda...</span>
                          </div>
                          <div className="flex gap-1">
                            {[1, 2, 3, 4, 5].map((i) => (
                              <motion.div
                                key={i}
                                animate={{ 
                                  height: ["4px", "20px", "4px"],
                                  backgroundColor: ["hsl(var(--primary))", "hsl(var(--secondary))", "hsl(var(--primary))"]
                                }}
                                transition={{ 
                                  duration: 1,
                                  repeat: Infinity,
                                  delay: i * 0.1
                                }}
                                className="w-1 bg-primary rounded-full"
                              />
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </div>
                  
                  <div className="mt-4 space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Original (EN)</span>
                      <span className="text-primary">Tarjima (UZ)</span>
                    </div>
                    <div className="text-xs text-muted-foreground">
                      "Welcome to our advanced mathematics course..."
                    </div>
                    <div className="text-xs text-primary">
                      "Matematik fanining ilg'or kursiga xush kelibsiz..."
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const IconComponent = featureIcons[index];
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, y: -10 }}
                className="feature-card bg-card group cursor-pointer"
              >
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:shadow-glow transition-all duration-300">
                    <IconComponent className="h-8 w-8 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {feature.title}
                  </h3>
                  
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Interactive Features Demo */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <div className="bg-gradient-to-br from-background to-muted/50 rounded-3xl p-8 lg:p-12 border border-border">
          <h3 className="text-2xl lg:text-3xl font-bold mb-6 text-foreground">
            platforma ishga tushganida birinchilardan bo'lib habardor bo'lish
          </h3>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Platforma ishga tushganda birinchilardan bo'lib habardor bo'lish uchun ro'yxatdan o'ting
            </p>
            
            <Button 
              size="lg" 
              className="btn-hero-primary group"
              onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Demo so'rash
              <Play className="ml-2 h-5 w-5 group-hover:scale-110 transition-transform" />
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}