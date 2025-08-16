import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Bot, Search, Trophy, BarChart3, Play } from 'lucide-react';

const featureIcons = [Bot, Search, Trophy, BarChart3];

export function FeaturesSection() {
  const { t } = useTranslation();
  const features = t('features.items', { returnObjects: true }) as Array<{
    title: string;
    desc: string;
  }>;

  return (
    <section id="features" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-foreground">
            {t('features.title')}
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            {t('features.subtitle')}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-16">
          {features.map((feature, index) => {
            const IconComponent = featureIcons[index];
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02, y: -5 }}
                className="feature-card bg-card border-l-4 border-l-primary hover:border-l-primary/70 group"
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="h-8 w-8 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-foreground mb-3">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {feature.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* AI Dubbing Demo */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center bg-gradient-to-br from-primary/10 to-secondary/10 rounded-3xl p-8"
        >
          <div className="flex items-center justify-center gap-4 mb-6">
            <Bot className="h-8 w-8 text-primary" />
            <h3 className="text-2xl font-bold text-foreground">AI Dublyaj Demo</h3>
          </div>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Ingliz tilidagi kurslar avtomatik ravishda o'zbek tiliga tarjima qilinadi va ovoz beriladi
          </p>
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="inline-flex items-center gap-2 bg-primary/20 px-6 py-3 rounded-2xl cursor-pointer"
          >
            <Play className="h-5 w-5 text-primary" />
            <span className="text-primary font-medium">Demo ko'rish</span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}