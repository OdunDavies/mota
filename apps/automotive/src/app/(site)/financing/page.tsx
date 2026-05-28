'use client';

import { useState } from 'react';
import { Container, Section, PageHeader, Input, Label, Button, Badge } from '@sarkimota/ui';

function formatCurrency(amount: number): string {
  return new Intl.NumberFormat('en-NG', { style: 'currency', currency: 'NGN', minimumFractionDigits: 0 }).format(amount);
}

export default function FinancingPage() {
  const [price, setPrice] = useState(50000000);
  const [downPayment, setDownPayment] = useState(10000000);
  const [months, setMonths] = useState(60);
  const rate = 18;

  const loanAmount = price - downPayment;
  const monthlyRate = rate / 100 / 12;
  const monthlyPayment = loanAmount * (monthlyRate * Math.pow(1 + monthlyRate, months)) / (Math.pow(1 + monthlyRate, months) - 1);
  const totalPayment = monthlyPayment * months;
  const totalInterest = totalPayment - loanAmount;

  return (
    <>
      <PageHeader title="Financing Solutions" description="Flexible financing options tailored to your needs. Drive your dream vehicle today." variant="dark" />

      <Section>
        <Container>
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <Badge variant="gold" className="mb-4">Calculate Your Payment</Badge>
              <h2 className="text-2xl font-display font-bold mb-8">Finance Calculator</h2>

              <div className="space-y-6">
                <div className="space-y-2">
                  <Label>Vehicle Price (₦)</Label>
                  <Input type="number" value={price} onChange={(e) => setPrice(Number(e.target.value))} />
                </div>
                <div className="space-y-2">
                  <Label>Down Payment (₦)</Label>
                  <Input type="number" value={downPayment} onChange={(e) => setDownPayment(Number(e.target.value))} />
                </div>
                <div className="space-y-2">
                  <Label>Loan Term (months)</Label>
                  <Input type="number" value={months} onChange={(e) => setMonths(Number(e.target.value))} />
                </div>
              </div>
            </div>

            <div className="p-8 rounded-2xl border border-border/50 bg-card">
              <Badge variant="gold" className="mb-6">Your Financing Estimate</Badge>

              <div className="space-y-6">
                {[
                  ['Vehicle Price', formatCurrency(price)],
                  ['Down Payment', formatCurrency(downPayment)],
                  ['Loan Amount', formatCurrency(loanAmount)],
                  ['Interest Rate', `${rate}% APR`],
                  ['Monthly Payment', formatCurrency(Math.round(monthlyPayment))],
                  ['Total Payment', formatCurrency(Math.round(totalPayment))],
                  ['Total Interest', formatCurrency(Math.round(totalInterest))],
                ].map(([label, value]) => (
                  <div key={label} className={`flex justify-between items-center ${label === 'Monthly Payment' ? 'pt-4 border-t border-border' : ''}`}>
                    <span className="text-sm">{label}</span>
                    <span className={`font-semibold ${label === 'Monthly Payment' ? 'text-xl text-gold-500' : ''}`}>{value}</span>
                  </div>
                ))}
              </div>

              <Button variant="gold" className="w-full mt-8">Apply for Financing</Button>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
