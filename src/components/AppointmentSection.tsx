import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Calendar,
  Clock,
  CheckCircle2,
  Sparkles,
  MapPin,
  ShieldCheck,
  Send,
  MessageCircle,
  RotateCcw,
  User,
  Phone,
  FileText,
  Heart
} from 'lucide-react';
import { CLINIC_INFO, getWhatsAppUrl } from '../data/content';
import { AppointmentFormData } from '../types';

const PHASES = [
  { id: 'pre', label: 'Pré-operatório', desc: 'Ainda vou operar / preparando o tecido' },
  { id: 'imediato', label: 'Pós-operatório imediato', desc: '1º ao 15º dia de pós-cirúrgico' },
  { id: 'tardio', label: 'Pós-operatório tardio', desc: 'Mais de 15 dias de pós-cirúrgico' },
  { id: 'fibrose', label: 'Tratamento de fibrose', desc: 'Presença de nódulos, rigidez ou ondulações' },
  { id: 'outro', label: 'Drenagem / Avaliação', desc: 'Desejo avaliação individualizada' },
];

const PERIODS = [
  { id: 'manha', label: 'Manhã', time: '08h às 12h' },
  { id: 'tarde', label: 'Tarde', time: '14h às 18h' },
  { id: 'qualquer', label: 'Flexível', time: 'Qualquer horário' },
];

export const AppointmentSection: React.FC = () => {
  const [formData, setFormData] = useState<AppointmentFormData>({
    fullName: '',
    phone: '',
    phase: 'Pós-operatório imediato',
    preferredDate: '',
    preferredPeriod: 'Qualquer horário',
    city: 'Imperatriz – MA',
    notes: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<{ fullName?: string; phone?: string }>({});

  const formatPhone = (val: string) => {
    const digits = val.replace(/\D/g, '').slice(0, 11);
    if (digits.length <= 2) return digits ? `(${digits}` : '';
    if (digits.length <= 6) return `(${digits.slice(0, 2)}) ${digits.slice(2)}`;
    if (digits.length <= 10) {
      return `(${digits.slice(0, 2)}) ${digits.slice(2, 6)}-${digits.slice(6)}`;
    }
    return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7, 11)}`;
  };

  const formatDateDisplay = (dateStr: string) => {
    if (!dateStr) return '';
    if (/^\d{4}-\d{2}-\d{2}$/.test(dateStr)) {
      const [year, month, day] = dateStr.split('-');
      return `${day}/${month}/${year}`;
    }
    return dateStr;
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatPhone(e.target.value);
    setFormData((prev) => ({ ...prev, phone: formatted }));
    if (errors.phone) {
      setErrors((prev) => ({ ...prev, phone: undefined }));
    }
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof typeof errors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const buildWhatsAppMessage = () => {
    const lines = [
      '🌸 *Solicitação de Agendamento – Vanessa Chaves*',
      '',
      `👤 *Nome da Paciente:* ${formData.fullName.trim()}`,
      `📱 *WhatsApp:* ${formData.phone.trim()}`,
      `⏱️ *Fase Cirúrgica:* ${formData.phase}`,
    ];

    if (formData.preferredDate) {
      lines.push(`📅 *Data prevista / de início:* ${formatDateDisplay(formData.preferredDate)}`);
    }

    lines.push(`⏰ *Período de preferência:* ${formData.preferredPeriod}`);
    lines.push(`📍 *Cidade:* ${formData.city || 'Imperatriz – MA'}`);

    if (formData.notes.trim()) {
      lines.push(`📝 *Observações / Cirurgião:* ${formData.notes.trim()}`);
    }

    lines.push('');
    lines.push('_Enviado pelo formulário oficial do site_');

    return lines.join('\n');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newErrors: { fullName?: string; phone?: string } = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Por favor, informe seu nome completo.';
    }

    const digitsOnly = formData.phone.replace(/\D/g, '');
    if (!formData.phone.trim() || digitsOnly.length < 10) {
      newErrors.phone = 'Informe um telefone com DDD válido (ex: 99 99222-0195).';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    const message = buildWhatsAppMessage();
    const url = getWhatsAppUrl(message);

    // Open WhatsApp in new tab
    window.open(url, '_blank', 'noopener,noreferrer');
    setSubmitted(true);
  };

  const handleReset = () => {
    setFormData({
      fullName: '',
      phone: '',
      phase: 'Pós-operatório imediato',
      preferredDate: '',
      preferredPeriod: 'Qualquer horário',
      city: 'Imperatriz – MA',
      notes: '',
    });
    setSubmitted(false);
    setErrors({});
  };

  return (
    <section id="agendamento" className="py-20 lg:py-28 bg-[#FAF8F5] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="mb-4">
            <span className="inline-block px-3 py-1 bg-[#E8D8CC] text-[#5B4942] text-[10px] font-bold tracking-[0.1em] rounded-sm uppercase">
              AGENDAMENTO ONLINE & WHATSAPP
            </span>
          </div>

          <h2
            id="appointment-heading"
            className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#5B4942] tracking-tight mb-4"
          >
            Solicite seu agendamento
          </h2>

          <p className="text-base sm:text-lg text-[#7A6A63] leading-relaxed">
            Preencha seus dados para organizarmos seu atendimento individualizado com Vanessa Chaves em Imperatriz – MA.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Form or Success Confirmation (7 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-7"
          >
            <div className="bg-white rounded-3xl p-6 sm:p-10 border border-[#E8D8CC] shadow-xs">
              {submitted ? (
                /* Success State */
                <div id="appointment-success-state" className="text-center py-6">
                  <div className="w-16 h-16 rounded-full bg-[#FAF8F5] border border-[#CFAFA4] text-[#5B4942] flex items-center justify-center mx-auto mb-6">
                    <CheckCircle2 className="w-9 h-9 text-[#9BA89B]" />
                  </div>

                  <span className="inline-block px-3 py-1 bg-[#E8D8CC] text-[#5B4942] text-[10px] font-bold tracking-[0.1em] rounded-sm uppercase mb-3">
                    SOLICITAÇÃO PREPARADA
                  </span>

                  <h3 className="font-serif text-2xl sm:text-3xl font-normal text-[#5B4942] mb-3">
                    Obrigada, {formData.fullName.split(' ')[0]}!
                  </h3>

                  <p className="text-sm sm:text-base text-[#7A6A63] leading-relaxed max-w-md mx-auto mb-8">
                    Seus dados foram organizados. A conversa no WhatsApp de Vanessa Chaves foi aberta para envio imediato.
                  </p>

                  {/* Summary Card */}
                  <div className="bg-[#FAF8F5] rounded-2xl p-5 border border-[#E8D8CC] text-left text-xs sm:text-sm text-[#5B4942] space-y-2 mb-8 max-w-lg mx-auto">
                    <div className="flex justify-between border-b border-[#E8D8CC] pb-2">
                      <span className="text-[#7A6A63]">Fase:</span>
                      <span className="font-semibold">{formData.phase}</span>
                    </div>
                    {formData.preferredDate && (
                      <div className="flex justify-between border-b border-[#E8D8CC] pb-2">
                        <span className="text-[#7A6A63]">Data prevista:</span>
                        <span className="font-semibold">{formatDateDisplay(formData.preferredDate)}</span>
                      </div>
                    )}
                    <div className="flex justify-between border-b border-[#E8D8CC] pb-2">
                      <span className="text-[#7A6A63]">Período preferido:</span>
                      <span className="font-semibold">{formData.preferredPeriod}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#7A6A63]">Local:</span>
                      <span className="font-semibold">{formData.city}</span>
                    </div>
                  </div>

                  {/* Action buttons */}
                  <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                    <a
                      href={getWhatsAppUrl(buildWhatsAppMessage())}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white px-8 py-3.5 rounded-full font-bold text-xs uppercase tracking-widest shadow-md transition-colors"
                    >
                      <MessageCircle className="w-4 h-4 text-white" />
                      <span>Reenviar no WhatsApp</span>
                    </a>

                    <button
                      type="button"
                      onClick={handleReset}
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white hover:bg-[#FAF8F5] text-[#5B4942] border border-[#E8D8CC] px-6 py-3.5 rounded-full font-bold text-xs uppercase tracking-widest transition-colors"
                    >
                      <RotateCcw className="w-3.5 h-3.5 text-[#7A6A63]" />
                      <span>Novo Agendamento</span>
                    </button>
                  </div>
                </div>
              ) : (
                /* Main Form */
                <form id="appointment-form" onSubmit={handleSubmit} noValidate>
                  <div className="space-y-6">
                    {/* Full Name */}
                    <div>
                      <label
                        htmlFor="fullName"
                        className="block text-xs uppercase font-bold tracking-widest text-[#5B4942] mb-2"
                      >
                        Nome Completo <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#7A6A63]">
                          <User className="w-4 h-4" />
                        </div>
                        <input
                          id="fullName"
                          name="fullName"
                          type="text"
                          required
                          value={formData.fullName}
                          onChange={handleInputChange}
                          placeholder="Ex: Maria Carolina Silva"
                          className={`w-full pl-10 pr-4 py-3.5 rounded-xl border text-sm text-[#5B4942] placeholder-[#7A6A63]/60 bg-[#FAF8F5] focus:bg-white focus:outline-none focus:ring-2 transition-all ${
                            errors.fullName
                              ? 'border-red-400 focus:ring-red-200'
                              : 'border-[#E8D8CC] focus:ring-[#CFAFA4]/50 focus:border-[#CFAFA4]'
                          }`}
                        />
                      </div>
                      {errors.fullName && (
                        <p className="mt-1.5 text-xs text-red-500 font-medium">
                          {errors.fullName}
                        </p>
                      )}
                    </div>

                    {/* Phone / WhatsApp */}
                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-xs uppercase font-bold tracking-widest text-[#5B4942] mb-2"
                      >
                        WhatsApp para Contato <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#7A6A63]">
                          <Phone className="w-4 h-4" />
                        </div>
                        <input
                          id="phone"
                          name="phone"
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={handlePhoneChange}
                          placeholder="(99) 99999-9999"
                          className={`w-full pl-10 pr-4 py-3.5 rounded-xl border text-sm text-[#5B4942] placeholder-[#7A6A63]/60 bg-[#FAF8F5] focus:bg-white focus:outline-none focus:ring-2 transition-all ${
                            errors.phone
                              ? 'border-red-400 focus:ring-red-200'
                              : 'border-[#E8D8CC] focus:ring-[#CFAFA4]/50 focus:border-[#CFAFA4]'
                          }`}
                        />
                      </div>
                      {errors.phone ? (
                        <p className="mt-1.5 text-xs text-red-500 font-medium">
                          {errors.phone}
                        </p>
                      ) : (
                        <p className="mt-1 text-[11px] text-[#7A6A63]">
                          Entraremos em contato por este número para confirmar o dia e horário.
                        </p>
                      )}
                    </div>

                    {/* Surgical Phase / Moment */}
                    <div>
                      <label className="block text-xs uppercase font-bold tracking-widest text-[#5B4942] mb-2">
                        Fase / Momento Atual <span className="text-red-500">*</span>
                      </label>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                        {PHASES.map((ph) => {
                          const isSelected = formData.phase === ph.label;
                          return (
                            <button
                              key={ph.id}
                              type="button"
                              onClick={() => setFormData((prev) => ({ ...prev, phase: ph.label }))}
                              className={`p-3 rounded-xl text-left border transition-all ${
                                isSelected
                                  ? 'border-[#5B4942] bg-[#FAF8F5] ring-1 ring-[#5B4942]'
                                  : 'border-[#E8D8CC] bg-white hover:border-[#CFAFA4]'
                              }`}
                            >
                              <div className="flex items-center justify-between mb-1">
                                <span className="font-semibold text-xs text-[#5B4942]">
                                  {ph.label}
                                </span>
                                <span
                                  className={`w-3.5 h-3.5 rounded-full border flex items-center justify-center ${
                                    isSelected
                                      ? 'border-[#5B4942] bg-[#5B4942]'
                                      : 'border-[#CFAFA4]'
                                  }`}
                                >
                                  {isSelected && <span className="w-1.5 h-1.5 rounded-full bg-white" />}
                                </span>
                              </div>
                              <p className="text-[11px] text-[#7A6A63] leading-tight">
                                {ph.desc}
                              </p>
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    {/* Date & Preferred Time Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* Estimated Date */}
                      <div>
                        <label
                          htmlFor="preferredDate"
                          className="block text-xs uppercase font-bold tracking-widest text-[#5B4942] mb-2"
                        >
                          Data da Cirurgia ou Início
                        </label>
                        <div className="relative">
                          <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#7A6A63]">
                            <Calendar className="w-4 h-4" />
                          </div>
                          <input
                            id="preferredDate"
                            name="preferredDate"
                            type="date"
                            value={formData.preferredDate}
                            onChange={handleInputChange}
                            onClick={(e) => {
                              try {
                                e.currentTarget.showPicker?.();
                              } catch {}
                            }}
                            className="w-full pl-10 pr-4 py-3.5 rounded-xl border border-[#E8D8CC] text-sm text-[#5B4942] bg-[#FAF8F5] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#CFAFA4]/50 focus:border-[#CFAFA4] transition-all cursor-pointer [&::-webkit-calendar-picker-indicator]:cursor-pointer [&::-webkit-calendar-picker-indicator]:opacity-70 hover:[&::-webkit-calendar-picker-indicator]:opacity-100"
                          />
                        </div>
                        <p className="mt-1 text-[11px] text-[#7A6A63]">
                          {formData.preferredDate ? (
                            <span>Data selecionada: <strong className="text-[#5B4942]">{formatDateDisplay(formData.preferredDate)}</strong></span>
                          ) : (
                            <span>Clique para escolher no calendário</span>
                          )}
                        </p>
                      </div>

                      {/* City */}
                      <div>
                        <label
                          htmlFor="city"
                          className="block text-xs uppercase font-bold tracking-widest text-[#5B4942] mb-2"
                        >
                          Sua Cidade
                        </label>
                        <div className="relative">
                          <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#7A6A63]">
                            <MapPin className="w-4 h-4" />
                          </div>
                          <input
                            id="city"
                            name="city"
                            type="text"
                            value={formData.city}
                            onChange={handleInputChange}
                            placeholder="Imperatriz – MA"
                            className="w-full pl-10 pr-4 py-3.5 rounded-xl border border-[#E8D8CC] text-sm text-[#5B4942] bg-[#FAF8F5] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#CFAFA4]/50 focus:border-[#CFAFA4] transition-all"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Period of Day */}
                    <div>
                      <label className="block text-xs uppercase font-bold tracking-widest text-[#5B4942] mb-2">
                        Período de Preferência
                      </label>
                      <div className="grid grid-cols-3 gap-2.5">
                        {PERIODS.map((period) => {
                          const isSelected = formData.preferredPeriod === period.label;
                          return (
                            <button
                              key={period.id}
                              type="button"
                              onClick={() =>
                                setFormData((prev) => ({ ...prev, preferredPeriod: period.label }))
                              }
                              className={`p-3 rounded-xl text-center border transition-all ${
                                isSelected
                                  ? 'border-[#5B4942] bg-[#FAF8F5] ring-1 ring-[#5B4942]'
                                  : 'border-[#E8D8CC] bg-white hover:border-[#CFAFA4]'
                              }`}
                            >
                              <Clock className="w-3.5 h-3.5 mx-auto mb-1 text-[#7A6A63]" />
                              <div className="font-semibold text-xs text-[#5B4942]">
                                {period.label}
                              </div>
                              <div className="text-[10px] text-[#7A6A63] hidden sm:block">
                                {period.time}
                              </div>
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    {/* Notes / Comments */}
                    <div>
                      <label
                        htmlFor="notes"
                        className="block text-xs uppercase font-bold tracking-widest text-[#5B4942] mb-2"
                      >
                        Observações ou Orientações do Cirurgião (Opcional)
                      </label>
                      <div className="relative">
                        <textarea
                          id="notes"
                          name="notes"
                          rows={3}
                          value={formData.notes}
                          onChange={handleInputChange}
                          placeholder="Ex: Nome do cirurgião, dúvidas específicas ou se já possui indicação de taping/cinta..."
                          className="w-full p-3.5 rounded-xl border border-[#E8D8CC] text-sm text-[#5B4942] placeholder-[#7A6A63]/60 bg-[#FAF8F5] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#CFAFA4]/50 focus:border-[#CFAFA4] transition-all resize-none"
                        />
                      </div>
                    </div>

                    {/* Submit Button */}
                    <div className="pt-2">
                      <button
                        id="btn-submit-appointment"
                        type="submit"
                        className="w-full flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#20bd5a] text-white py-4 px-8 rounded-full font-bold text-xs sm:text-sm uppercase tracking-widest transition-all shadow-[0_6px_20px_rgba(37,211,102,0.35)] active:scale-[0.99] group cursor-pointer"
                      >
                        <Send className="w-4 h-4 text-white group-hover:translate-x-0.5 transition-transform" />
                        <span>Confirmar e Enviar via WhatsApp</span>
                      </button>

                      <p className="text-center text-[11px] text-[#7A6A63] mt-3">
                        🔒 Seus dados são protegidos e enviados diretamente para o WhatsApp oficial de Vanessa Chaves.
                      </p>
                    </div>
                  </div>
                </form>
              )}
            </div>
          </motion.div>

          {/* Right Column: Support Information & Reassurance (5 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5 space-y-6"
          >
            {/* Direct Contact Card */}
            <div className="p-7 rounded-3xl bg-white border border-[#E8D8CC] shadow-xs">
              <div className="w-11 h-11 rounded-full bg-[#FAF8F5] border border-[#CFAFA4] flex items-center justify-center text-[#5B4942] mb-4">
                <MessageCircle className="w-5 h-5 text-[#5B4942]" />
              </div>

              <h3 className="font-serif text-xl font-bold text-[#5B4942] mb-2">
                Prefere falar diretamente?
              </h3>

              <p className="text-xs sm:text-sm text-[#7A6A63] leading-relaxed mb-6">
                Caso tenha pressa ou queira apenas tirar uma dúvida pontual sobre seu pós-operatório, clique abaixo para abrir uma conversa direta.
              </p>

              <div className="p-4 rounded-2xl bg-[#FAF8F5] border border-[#E8D8CC] mb-6">
                <div className="text-[10px] uppercase font-bold tracking-widest text-[#7A6A63] mb-1">
                  WhatsApp Oficial
                </div>
                <div className="font-mono text-base font-bold text-[#5B4942]">
                  {CLINIC_INFO.whatsappFormatted}
                </div>
                <div className="text-[11px] text-[#7A6A63] mt-1">
                  Imperatriz – Maranhão
                </div>
              </div>

              <a
                id="appointment-direct-whatsapp-link"
                href={CLINIC_INFO.whatsappDirectUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white py-3.5 px-6 rounded-full font-bold text-xs uppercase tracking-widest shadow-xs transition-colors"
              >
                <MessageCircle className="w-4 h-4 text-white" />
                <span>Conversar no WhatsApp</span>
              </a>
            </div>

            {/* Guarantee / How Scheduling Works */}
            <div className="p-7 rounded-3xl bg-white border border-[#E8D8CC] shadow-xs space-y-4">
              <h4 className="font-serif text-base font-bold text-[#5B4942] flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-[#CFAFA4]" />
                Como funciona o seu atendimento
              </h4>

              <div className="space-y-3.5 text-xs text-[#7A6A63]">
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#E8D8CC] text-[#5B4942] font-bold flex items-center justify-center shrink-0 text-[10px]">
                    1
                  </div>
                  <div>
                    <strong className="text-[#5B4942] block">Recepção dos dados:</strong>
                    Vanessa recebe sua solicitação e verifica a disponibilidade de horários.
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#E8D8CC] text-[#5B4942] font-bold flex items-center justify-center shrink-0 text-[10px]">
                    2
                  </div>
                  <div>
                    <strong className="text-[#5B4942] block">Alinhamento cirúrgico:</strong>
                    Avaliamos a data da cirurgia, orientações do seu cirurgião e necessidade de taping precoce.
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#E8D8CC] text-[#5B4942] font-bold flex items-center justify-center shrink-0 text-[10px]">
                    3
                  </div>
                  <div>
                    <strong className="text-[#5B4942] block">Atendimento com hora marcada:</strong>
                    Sessões individuais em ambiente acolhedor, sem pressa e com máxima privacidade.
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-[#E8D8CC] flex items-center gap-2 text-[11px] text-[#7A6A63]">
                <ShieldCheck className="w-4 h-4 text-[#9BA89B] shrink-0" />
                <span>Atendimento responsável, sem promessas irrealistas e em conformidade médica.</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
