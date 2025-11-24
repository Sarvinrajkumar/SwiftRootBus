"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion } from "framer-motion";
import { toast } from "sonner";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";

const formSchema = z.object({
  fromCity: z.string().min(2, "Pick a departure city"),
  toCity: z.string().min(2, "Pick an arrival city"),
  travelDate: z.string().min(1, "Add a travel date"),
  seatType: z.string().min(1, "Select a seat type"),
  travellers: z
    .number({ coerce: true })
    .min(1, "At least 1 traveller")
    .max(6, "Max 6 seats per booking"),
  phone: z.string().min(10, "Phone number is required"),
  email: z.string().email("Invalid email address"),
  notes: z.string().max(200).optional(),
  alerts: z.boolean().default(false),
});

export function Appointment() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fromCity: "",
      toCity: "",
      travelDate: "",
      seatType: "",
      travellers: 1,
      phone: "",
      email: "",
      notes: "",
      alerts: true,
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);

    setTimeout(() => {
      console.log(values);
      toast.success("We saved your trip preference. A route expert will reply shortly.");
      form.reset();
      setIsSubmitting(false);
    }, 1200);
  }

  return (
    <section id="planner" className="section-padding bg-cream">
      <div className="container">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <p className="text-brand uppercase tracking-[0.3em] text-xs mb-3">
            Trip planner
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4">
            Need seats blocked for your crew?
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Share your dates once and our dispatch team books the best sleeper
            coach, adds add-ons, and sends you a single payment link.
          </p>
        </motion.div>

        <motion.div
          className="max-w-3xl mx-auto bg-white rounded-3xl shadow-xl p-8 md:p-10 border border-slate-100"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <FormField
                  control={form.control}
                  name="fromCity"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>From city</FormLabel>
                      <FormControl>
                        <Input placeholder="e.g. Bengaluru" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="toCity"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>To city</FormLabel>
                      <FormControl>
                        <Input placeholder="e.g. Hyderabad" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <FormField
                  control={form.control}
                  name="travelDate"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Travel date</FormLabel>
                      <FormControl>
                        <Input type="date" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="travellers"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Seats needed</FormLabel>
                      <FormControl>
                        <Input type="number" min={1} max={6} {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="seatType"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Seat preference</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Choose seat" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="lower-sleeper">Lower sleeper</SelectItem>
                          <SelectItem value="upper-sleeper">Upper sleeper</SelectItem>
                          <SelectItem value="recliner">Executive recliner</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <FormField
                control={form.control}
                name="notes"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Anything else we should know?</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Extra pickups, lounge passes, corporate billing..."
                        className="resize-none min-h-[110px]"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Phone</FormLabel>
                      <FormControl>
                        <Input placeholder="+91 9XXXXXXXXX" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input type="email" placeholder="name@company.com" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <FormField
                control={form.control}
                name="alerts"
                render={({ field }) => (
                  <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-2xl border border-slate-200 p-4">
                    <FormControl>
                      <Checkbox checked={field.value} onCheckedChange={field.onChange} />
                    </FormControl>
                    <div className="space-y-1 leading-tight">
                      <FormLabel className="text-slate-600">
                        Keep me posted on fare drops and boarding alerts on WhatsApp
                      </FormLabel>
                      <FormMessage />
                    </div>
                  </FormItem>
                )}
              />

              <Button
                type="submit"
                variant="brand"
                size="lg"
                className="w-full rounded-full"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Submitting..." : "Get bus options"}
              </Button>
            </form>
          </Form>
        </motion.div>
      </div>
    </section>
  );
}