/**
 * Utilities for formatting telephone and WhatsApp links
 */

export function cleanPhoneForTel(phone: string): string {
  if (!phone) return '';
  // Keep leading plus if present, strip spaces, dashes, brackets
  const trimmed = phone.trim();
  const hasPlus = trimmed.startsWith('+');
  const digits = trimmed.replace(/\D/g, '');
  if (!digits) return '';
  return hasPlus ? `+${digits}` : digits;
}

export function cleanPhoneForWhatsApp(phone: string): string {
  if (!phone) return '';
  // WhatsApp wa.me requires digits only (country code + subscriber number), NO plus sign, NO spaces
  let digits = phone.replace(/\D/g, '');
  
  // If Indian 10-digit number without country code, add 91
  if (digits.length === 10) {
    digits = `91${digits}`;
  }
  return digits;
}

export function getWhatsAppUrl(phone: string, message: string = ''): string {
  const digits = cleanPhoneForWhatsApp(phone);
  if (!digits) return '';
  const encodedMsg = message ? encodeURIComponent(message) : '';
  return `https://wa.me/${digits}${encodedMsg ? `?text=${encodedMsg}` : ''}`;
}

export function getTelUrl(phone: string): string {
  const cleaned = cleanPhoneForTel(phone);
  if (!cleaned) return '';
  return `tel:${cleaned}`;
}
