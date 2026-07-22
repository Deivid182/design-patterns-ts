/**
 * 
 * Interface that defines the contract for payment processors.
 */

export interface IPaymentProcessor {
  processPayment(amount: number): void;
}

// Concrete implementation of the IPaymentProcessor interface for PayPal.

export class PayPalService {
  sendPayment(amount: number): void {
    console.log(`Processing payment of $${amount} through PayPal.`);
  }
}

export class StripeService {
  makePayment(amount: number): void {
    console.log(`Processing payment of $${amount} through Stripe.`);
  }
}

export class MercadoPagoService {
  pay(amount: number): void {
    console.log(`Processing payment of $${amount} through MercadoPago.`);
  }
}

// Adapter classes that implement the IPaymentProcessor interface and adapt the concrete payment services.

export class PayPalAdapter implements IPaymentProcessor {
  private payPalService: PayPalService;

  constructor(payPalService: PayPalService) {
    this.payPalService = payPalService;
  }

  processPayment(amount: number): void {
    this.payPalService.sendPayment(amount);
  }
}

export class StripeAdapter implements IPaymentProcessor {
  private stripeService: StripeService;

  constructor(stripeService: StripeService) {
    this.stripeService = stripeService;
  }

  processPayment(amount: number): void {
    this.stripeService.makePayment(amount);
  }
}

export class MercadoPagoAdapter implements IPaymentProcessor {
  private mercadoPagoService: MercadoPagoService;

  constructor(mercadoPagoService: MercadoPagoService) {
    this.mercadoPagoService = mercadoPagoService;
  }

  processPayment(amount: number): void {
    this.mercadoPagoService.pay(amount);
  }
}

// Usage example

function main() {
  const payPalService = new PayPalService();
  const stripeService = new StripeService();
  const mercadoPagoService = new MercadoPagoService();

  const payPalAdapter: IPaymentProcessor = new PayPalAdapter(payPalService);
  const stripeAdapter: IPaymentProcessor = new StripeAdapter(stripeService);
  const mercadoPagoAdapter: IPaymentProcessor = new MercadoPagoAdapter(mercadoPagoService);

  console.log("Using PayPal Adapter:");
  payPalAdapter.processPayment(100);

  console.log("\nUsing Stripe Adapter:");
  stripeAdapter.processPayment(200);

  console.log("\nUsing MercadoPago Adapter:");
  mercadoPagoAdapter.processPayment(300);
}

main();