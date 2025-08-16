import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { GraduationCap, User, Building2, Users } from 'lucide-react';

const solutionIcons = [GraduationCap, User, Building2, Users];

export function SolutionSection() {
  const { t } = useTranslation();
  const solutions = t('solution.items', { returnObjects: true }) as Array<{
    title: string;
    desc: string;
  }>;

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-foreground">
            {t('solution.title')}
          </h2>
          <div className="w-24 h-1 bg-success mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {solutions.map((solution, index) => {
            const IconComponent = solutionIcons[index];
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02, y: -5 }}
                className="feature-card bg-gradient-to-br from-card to-card/50 border-l-4 border-l-success hover:border-l-success/70 group"
              >
                <div className="flex items-start space-x-4">
                  <div className="solution-icon flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="h-6 w-6" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-foreground mb-3">
                      {solution.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {solution.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Solution Impact */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="inline-block p-8 bg-gradient-primary rounded-3xl text-white">
            <h3 className="text-2xl font-bold mb-4">
              Natija: Ta'lim samaradorligini 3x oshirish
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold mb-2">85%</div>
                <div className="text-sm opacity-90">O'quvchilar motivatsiyasi</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">70%</div>
                <div className="text-sm opacity-90">Vaqt tejash</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">95%</div>
                <div className="text-sm opacity-90">Material saqlash</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}