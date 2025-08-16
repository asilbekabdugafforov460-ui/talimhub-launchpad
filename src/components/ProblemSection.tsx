import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { AlertTriangle, MessageSquare, TrendingDown, Building } from 'lucide-react';

const problemIcons = [MessageSquare, TrendingDown, AlertTriangle, Building];

export function ProblemSection() {
  const { t } = useTranslation();
  const problems = t('problems.items', { returnObjects: true }) as string[];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-foreground">
            {t('problems.title')}
          </h2>
          <div className="w-24 h-1 bg-destructive mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {problems.map((problem, index) => {
            const IconComponent = problemIcons[index];
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02, y: -5 }}
                className="feature-card bg-card border-l-4 border-l-destructive hover:border-l-destructive/70"
              >
                <div className="flex items-start space-x-4">
                  <div className="problem-icon flex-shrink-0">
                    <IconComponent className="h-6 w-6" />
                  </div>
                  <div className="flex-1">
                    <p className="text-foreground font-medium leading-relaxed">
                      {problem}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Impact Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="inline-block p-6 bg-destructive/10 rounded-2xl">
            <p className="text-destructive font-semibold text-lg mb-2">
              Bu muammolar ta'lim sifatini 40% gacha pasaytiradi
            </p>
            <p className="text-muted-foreground">
              Va o'quvchilarning 60% motivatsiyasini yo'qotadi
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}