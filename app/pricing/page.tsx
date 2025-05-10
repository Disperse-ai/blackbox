import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Community",
    price: "Free",
    description: "Perfect for hobbyists and individual developers",
    features: [
      "Local AI model support",
      "Basic plugin system",
      "Community support",
      "Public plugin directory",
    ],
    color: "blue",
  },
  {
    name: "Pro",
    price: "$19",
    period: "per month",
    description: "For professional developers and small teams",
    features: [
      "Everything in Community",
      "Priority support",
      "Advanced plugin SDK",
      "Custom model training",
      "Team collaboration",
      "API access",
    ],
    color: "purple",
    popular: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "For organizations with advanced needs",
    features: [
      "Everything in Pro",
      "Dedicated support",
      "Custom integrations",
      "On-premise deployment",
      "SSO & advanced security",
      "SLA guarantee",
    ],
    color: "cyan",
  },
];

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,rgba(56,189,248,0.1),rgba(56,189,248,0)_50%)]"></div>
      
      <div className="container mx-auto px-4 py-24 md:py-32">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400">
              Simple, Transparent Pricing
            </h1>
            <p className="text-xl text-muted-foreground">
              Choose the plan that best fits your needs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <div
                key={index}
                className={`relative bg-card/50 border border-border/50 rounded-xl p-8 hover:border-${plan.color}-500/50 hover:shadow-[0_0_30px_rgba(56,189,248,0.2)] transition-all duration-300 ${
                  plan.popular ? "scale-105 border-purple-500/50" : ""
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-purple-600 to-blue-600 text-white text-sm font-medium px-4 py-1 rounded-full">
                    Most Popular
                  </div>
                )}
                
                <div className="mb-8">
                  <h3 className="text-2xl font-semibold mb-2">{plan.name}</h3>
                  <div className="mb-4">
                    <span className="text-4xl font-bold">{plan.price}</span>
                    {plan.period && (
                      <span className="text-muted-foreground">/{plan.period}</span>
                    )}
                  </div>
                  <p className="text-muted-foreground">{plan.description}</p>
                </div>
                
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center">
                      <Check className={`h-5 w-5 text-${plan.color}-400 mr-2 flex-shrink-0`} />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button
                  className={`w-full ${
                    plan.popular
                      ? "bg-gradient-to-r from-purple-600 to-blue-600"
                      : "bg-card hover:bg-card/80"
                  }`}
                >
                  {plan.name === "Enterprise" ? "Contact Sales" : "Get Started"}
                </Button>
              </div>
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <h2 className="text-2xl font-semibold mb-4">Frequently Asked Questions</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto text-left">
              <div>
                <h3 className="font-medium mb-2">Can I switch plans later?</h3>
                <p className="text-muted-foreground">
                  Yes, you can upgrade or downgrade your plan at any time. Changes will be reflected in your next billing cycle.
                </p>
              </div>
              <div>
                <h3 className="font-medium mb-2">What payment methods do you accept?</h3>
                <p className="text-muted-foreground">
                  We accept all major credit cards, PayPal, and wire transfers for Enterprise plans.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}