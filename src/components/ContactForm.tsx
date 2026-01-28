import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Форма обратной связи:", formData);
    setFormData({ name: "", phone: "", email: "", message: "" });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section className="py-16 px-6 bg-secondary/30">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Свяжитесь с нами
        </h2>
        <p className="text-center text-muted-foreground mb-8">
          Оставьте заявку, и наш менеджер свяжется с вами для уточнения деталей
        </p>
        <form onSubmit={handleSubmit} className="space-y-6 bg-white p-8 rounded-lg shadow-md">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="contact-name">Имя *</Label>
              <Input
                id="contact-name"
                name="name"
                placeholder="Ваше имя"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="contact-phone">Телефон *</Label>
              <Input
                id="contact-phone"
                name="phone"
                type="tel"
                placeholder="+7 (___) ___-__-__"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="contact-email">Email</Label>
            <Input
              id="contact-email"
              name="email"
              type="email"
              placeholder="example@mail.ru"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="contact-message">Сообщение</Label>
            <Textarea
              id="contact-message"
              name="message"
              placeholder="Расскажите о своей задаче..."
              rows={5}
              value={formData.message}
              onChange={handleChange}
            />
          </div>
          <Button type="submit" size="lg" className="w-full">
            Отправить заявку
          </Button>
        </form>
      </div>
    </section>
  );
}
