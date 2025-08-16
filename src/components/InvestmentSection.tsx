import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { useToast } from '@/hooks/use-toast';
import { TrendingUp, DollarSign, Users, Globe, Mail, User, Building, MessageSquare, ArrowRight, CheckCircle2 } from 'lucide-react';
export function InvestmentSection() {
  const {
    t
  } = useTranslation();
  const {
    toast
  } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    investment: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.investment) {
      toast({
        title: "Ma'lumotlar to'liq emas",
        description: "Iltimos, asosiy maydonlarni to'ldiring",
        variant: "destructive"
      });
      return;
    }

    // Save to local file
    const data = `INVESTOR INTEREST FORM
Name: ${formData.name}
Email: ${formData.email}
Company: ${formData.company || 'N/A'}
Investment Interest: ${formData.investment}
Message: ${formData.message || 'N/A'}
Date: ${new Date().toISOString()}

=====================================

`;
    const blob = new Blob([data], {
      type: 'text/plain'
    });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `talimhub-investor-${Date.now()}.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    setIsSubmitted(true);
    toast({
      title: "Muvaffaqiyatli yuborildi!",
      description: "Tez orada sizga bog'lanamiz"
    });
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        company: '',
        investment: '',
        message: ''
      });
    }, 5000);
  };
  const stats = [{
    icon: Users,
    value: "1M+",
    label: "Potentsial foydalanuvchilar",
    color: "text-primary"
  }, {
    icon: DollarSign,
    value: "$50B",
    label: "O'zbekiston ta'lim bozori",
    color: "text-success"
  }, {
    icon: TrendingUp,
    value: "300%",
    label: "Yillik o'sish prognozi",
    color: "text-warning"
  }, {
    icon: Globe,
    value: "5",
    label: "Maqsadli viloyatlar",
    color: "text-secondary"
  }];
  return <section id="investment" className="py-20 bg-gradient-to-br from-background via-primary/5 to-background">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <motion.div initial={{
        opacity: 0,
        y: 30
      }} whileInView={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.6
      }} viewport={{
        once: true
      }} className="text-center mb-16">
          <Badge variant="secondary" className="mb-4 px-4 py-2 bg-gradient-primary text-white">
            Investitsiya imkoniyati
          </Badge>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-foreground">
            {t('investment.title')}
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            {t('investment.description')}
          </p>
        </motion.div>

        {/* Stats Grid */}
        <motion.div initial={{
        opacity: 0,
        y: 30
      }} whileInView={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.6,
        delay: 0.2
      }} viewport={{
        once: true
      }} className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => {
          const IconComponent = stat.icon;
          return <motion.div key={index} initial={{
            opacity: 0,
            scale: 0.8
          }} whileInView={{
            opacity: 1,
            scale: 1
          }} transition={{
            duration: 0.6,
            delay: 0.3 + index * 0.1
          }} viewport={{
            once: true
          }} whileHover={{
            scale: 1.05,
            y: -5
          }} className="feature-card text-center group">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-3 ${stat.color.replace('text-', 'bg-')}/10`}>
                  <IconComponent className={`h-6 w-6 ${stat.color}`} />
                </div>
                <div className="text-2xl md:text-3xl font-bold text-foreground mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">
                  {stat.label}
                </div>
              </motion.div>;
        })}
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Investment Highlights */}
          <motion.div initial={{
          opacity: 0,
          x: -30
        }} whileInView={{
          opacity: 1,
          x: 0
        }} transition={{
          duration: 0.6,
          delay: 0.4
        }} viewport={{
          once: true
        }} className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6">
                Nima uchun Ta'limHub ga investitsiya qilishingiz kerak?
              </h3>
              
              <div className="space-y-4">
                {["O'zbekiston ta'lim sohasidagi birinchi kompleks yechim", "AI dublyaj texnologiyasi bilan raqobatsiz ustunlik", "50,000+ potentsial foydalanuvchi bazasi", "Government support va strategic partnerships", "Scalable business model va recurring revenue", "Experienced team va proven technology stack"].map((item, index) => <motion.div key={index} initial={{
                opacity: 0,
                x: -20
              }} whileInView={{
                opacity: 1,
                x: 0
              }} transition={{
                duration: 0.4,
                delay: 0.6 + index * 0.1
              }} viewport={{
                once: true
              }} className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-success mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">{item}</span>
                  </motion.div>)}
              </div>
            </div>

            <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl p-6">
              <h4 className="text-xl font-bold text-foreground mb-3">
                Investment Packages
              </h4>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Seed Round</span>
                  <Badge variant="outline" className="bg-primary/10">$100K - $500K</Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Series A</span>
                  <Badge variant="outline" className="bg-secondary/10">$500K - $2M</Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Strategic Partnership</span>
                  <Badge variant="outline" className="bg-success/10">Custom</Badge>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Investment Form */}
          <motion.div initial={{
          opacity: 0,
          x: 30
        }} whileInView={{
          opacity: 1,
          x: 0
        }} transition={{
          duration: 0.6,
          delay: 0.6
        }} viewport={{
          once: true
        }} className="bg-card rounded-3xl p-8 border border-border shadow-xl">
            {!isSubmitted ? <>
                <h3 className="text-2xl font-bold text-foreground mb-2">
                  Investor bo'ling
                </h3>
                <p className="text-muted-foreground mb-6">
                  Ma'lumotlaringizni qoldiring, biz sizga batafsil business plan yuboramiz
                </p>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                      <Input type="text" placeholder="Ismingiz *" value={formData.name} onChange={e => setFormData(prev => ({
                    ...prev,
                    name: e.target.value
                  }))} className="pl-10 h-12" required />
                    </div>
                    
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                      <Input type="email" placeholder="Email *" value={formData.email} onChange={e => setFormData(prev => ({
                    ...prev,
                    email: e.target.value
                  }))} className="pl-10 h-12" required />
                    </div>
                  </div>

                  <div className="relative">
                    <Building className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                    <Input type="text" placeholder="Kompaniya nomi" value={formData.company} onChange={e => setFormData(prev => ({
                  ...prev,
                  company: e.target.value
                }))} className="pl-10 h-12" />
                  </div>

                  <div className="relative">
                    <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                    <Input type="text" placeholder="Investitsiya miqdori *" value={formData.investment} onChange={e => setFormData(prev => ({
                  ...prev,
                  investment: e.target.value
                }))} className="pl-10 h-12" required />
                  </div>

                  <div className="relative">
                    <MessageSquare className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
                    <Textarea placeholder="Qo'shimcha ma'lumot..." value={formData.message} onChange={e => setFormData(prev => ({
                  ...prev,
                  message: e.target.value
                }))} className="pl-10 min-h-20" rows={3} />
                  </div>

                  <motion.div whileHover={{
                scale: 1.02
              }} whileTap={{
                scale: 0.98
              }}>
                    <Button type="submit" className="w-full h-12 btn-hero-primary group" size="lg">
                      {t('investment.cta')}
                      <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </motion.div>
                </form>
              </> : <motion.div initial={{
            opacity: 0,
            scale: 0.8
          }} animate={{
            opacity: 1,
            scale: 1
          }} transition={{
            duration: 0.5
          }} className="text-center py-8">
                <div className="w-20 h-20 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle2 className="h-10 w-10 text-success" />
                </div>
                <h3 className="text-2xl font-bold text-success mb-3">
                  So'rov yuborildi!
                </h3>
                <p className="text-muted-foreground mb-4">
                  Bizning investment team sizga 24 soat ichida bog'lanadi.
                </p>
                <div className="bg-muted/50 rounded-xl p-4">
                  <p className="text-sm text-muted-foreground">
                    Business plan va financial projections sizning emailingizga yuboriladi.
                  </p>
                </div>
              </motion.div>}
          </motion.div>
        </div>

        {/* Trust Indicators */}
        <motion.div initial={{
        opacity: 0,
        y: 30
      }} whileInView={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.6,
        delay: 0.8
      }} viewport={{
        once: true
      }} className="mt-16 text-center">
          
          <div className="flex justify-center items-center gap-8 opacity-60">
            {["IT Park", "INHA University", "Westminster", "TUIT", "Najot Ta'lim"].map((partner, index) => {})}
          </div>
        </motion.div>
      </div>
    </section>;
}