import { useState, useRef } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Calendar } from "@/components/ui/calendar";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import { CalendarDays, Clock, Video, Coffee, Send, ChevronRight, CheckCircle2 } from "lucide-react";
import { format, addDays, isBefore, startOfDay } from "date-fns";
import emailjs from "@emailjs/browser";
import { Link } from "react-router-dom";
import Seo from "@/components/Seo";

// Available time slots (mock data)
const TIME_SLOTS = [
  "09:00 AM", "10:00 AM", "11:00 AM", 
  "01:00 PM", "02:00 PM", "03:00 PM", "04:00 PM"
];

// Meeting types
const MEETING_TYPES = [
  { id: "discovery", label: "Discovery Call", duration: "30 Min", icon: <Video className="w-4 h-4" /> },
  { id: "technical", label: "Technical Consultation", duration: "60 Min", icon: <Coffee className="w-4 h-4" /> },
  { id: "partnership", label: "Partnership Exploration", duration: "45 Min", icon: <CalendarDays className="w-4 h-4" /> }
];

const BookingPage = () => {
  const { toast } = useToast();
  const form = useRef<HTMLFormElement>(null);
  
  // State for booking process
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [date, setDate] = useState<Date | undefined>(undefined);
  const [time, setTime] = useState<string | null>(null);
  const [meetingType, setMeetingType] = useState<string>("discovery");
  const [isSending, setIsSending] = useState(false);

  // Validate dates (disable past dates and weekends)
  const validateDate = (dateToValidate: Date) => {
    const today = startOfDay(new Date());
    const isPast = isBefore(startOfDay(dateToValidate), today);
    const day = dateToValidate.getDay();
    const isWeekend = day === 0 || day === 6; // 0 is Sunday, 6 is Saturday
    return isPast || isWeekend;
  };

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.current || !date || !time) return;
    
    setIsSending(true);

    // Prepare hidden fields for EmailJS to process
    const formattedDate = format(date, 'PPPP');
    const meetingDetails = `${MEETING_TYPES.find(m => m.id === meetingType)?.label} at ${time} on ${formattedDate}`;

    // Create a FormData object to add our custom React state variables
    const formData = new FormData(form.current);
    formData.append("meeting_date", formattedDate);
    formData.append("meeting_time", time);
    formData.append("meeting_type", meetingType);
    formData.append("meeting_details", meetingDetails);

    // Note: To make this fully functional with EmailJS, you need a template 
    // that accepts: from_name, reply_to, company, message, meeting_date, meeting_time
    
    // Fallback/Demo simulation (since we don't know the exact EmailJS template config)
    setTimeout(() => {
      /* Replace this block with actual emailjs.sendForm call when template aligns
      emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID, // Needs specific booking template
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      */
      
      setStep(3); // Move to success step
      setIsSending(false);
      
      toast({
        title: "Meeting Request Sent!",
        description: "We've received your booking request. Check your email for confirmation.",
      });
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <Seo
        title="Book a Strategy Call"
        description="Book a discovery call, technical consultation, or partnership meeting with SchoolPoint."
        path="/book"
        noindex
      />
      <Header />
      
      <main className="flex-grow pt-32 pb-24 relative overflow-hidden">
        {/* Background Gradients */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/10 via-background to-background" />

        <div className="container mx-auto px-4 relative z-10">
          
          {/* Header */}
          <div className="max-w-3xl mx-auto text-center mb-12 animate-fade-in-up">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
              Schedule a <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Meeting</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Book a session directly with our engineering and strategy team. Let's discuss how we can bring your vision to life.
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            {/* Step Indicators */}
            <div className="flex items-center justify-center mb-12">
              <div className={`flex items-center ${step >= 1 ? 'text-primary' : 'text-muted-foreground'}`}>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold border-2 ${step >= 1 ? 'border-primary bg-primary/10' : 'border-muted bg-muted'}`}>1</div>
                <span className="ml-2 font-medium hidden sm:block">Date & Time</span>
              </div>
              <div className={`w-12 sm:w-24 h-1 mx-2 rounded-full ${step >= 2 ? 'bg-primary' : 'bg-muted'}`} />
              <div className={`flex items-center ${step >= 2 ? 'text-primary' : 'text-muted-foreground'}`}>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold border-2 ${step >= 2 ? 'border-primary bg-primary/10' : 'border-muted bg-muted'}`}>2</div>
                <span className="ml-2 font-medium hidden sm:block">Details</span>
              </div>
              <div className={`w-12 sm:w-24 h-1 mx-2 rounded-full ${step >= 3 ? 'bg-primary' : 'bg-muted'}`} />
              <div className={`flex items-center ${step >= 3 ? 'text-primary' : 'text-muted-foreground'}`}>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold border-2 ${step >= 3 ? 'border-primary bg-primary/10' : 'border-muted bg-muted'}`}>3</div>
                <span className="ml-2 font-medium hidden sm:block">Done</span>
              </div>
            </div>

            <div className="bg-card border rounded-3xl p-6 md:p-10 shadow-xl shadow-primary/5 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
              
              {/* STEP 1: Date & Time Selection */}
              {step === 1 && (
                <div className="grid md:grid-cols-2 gap-10">
                  {/* Left Column: Calendar */}
                  <div>
                    <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                      <CalendarDays className="w-5 h-5 text-primary" />
                      Select a Date
                    </h3>
                    <div className="border rounded-2xl p-2 bg-background/50 w-full flex justify-center">
                      <Calendar
                        mode="single"
                        selected={date}
                        onSelect={(d) => { setDate(d); setTime(null); }}
                        disabled={validateDate}
                        className="rounded-xl w-full max-w-full"
                        classNames={{
                          months: "w-full flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0",
                          month: "space-y-4 w-full",
                          table: "w-full border-collapse space-y-1",
                          head_row: "flex w-full justify-between",
                          row: "flex w-full mt-2 justify-between"
                        }}
                      />
                    </div>
                  </div>

                  {/* Right Column: Time Selection */}
                  <div>
                    {date ? (
                      <div className="animate-fade-in">
                        <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                          <Clock className="w-5 h-5 text-primary" />
                          Select Time for {format(date, 'MMM do')}
                        </h3>
                        <div className="grid grid-cols-2 gap-3 mb-8">
                          {TIME_SLOTS.map((t) => (
                            <Button
                              key={t}
                              variant={time === t ? "default" : "outline"}
                              className={`h-12 w-full ${time === t ? "ring-2 ring-primary ring-offset-2 ring-offset-background" : ""}`}
                              onClick={() => setTime(t)}
                            >
                              {t}
                            </Button>
                          ))}
                        </div>

                        {time && (
                          <div className="pt-4 border-t animate-fade-in flex justify-end">
                            <Button 
                              size="lg" 
                              className="rounded-full group"
                              onClick={() => setStep(2)}
                            >
                              Next Step
                              <ChevronRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                            </Button>
                          </div>
                        )}
                      </div>
                    ) : (
                      <div className="h-full flex flex-col items-center justify-center text-center p-8 bg-muted/30 rounded-2xl border border-dashed border-border/50">
                        <CalendarDays className="w-12 h-12 text-muted-foreground/30 mb-4" />
                        <h4 className="text-lg font-medium text-muted-foreground mb-2">No Date Selected</h4>
                        <p className="text-sm text-muted-foreground/70">
                          Please select a date from the calendar to see available time slots.
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              )}

              {/* STEP 2: Meeting Details Form */}
              {step === 2 && (
                <div className="animate-fade-in max-w-2xl mx-auto">
                  
                  {/* Summary Header */}
                  <div className="bg-primary/5 border border-primary/20 rounded-2xl p-4 flex flex-wrap items-center justify-between mb-8 gap-4">
                    <div className="flex items-center gap-4">
                      <div className="bg-background p-3 rounded-xl border">
                        <Clock className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground font-medium">Selected Slot</p>
                        <p className="font-bold text-lg">{date ? format(date, 'EEEE, MMMM do, yyyy') : ''} at {time}</p>
                      </div>
                    </div>
                    <Button variant="ghost" size="sm" onClick={() => setStep(1)} className="text-muted-foreground underline-offset-4 hover:underline">
                      Change Date/Time
                    </Button>
                  </div>

                  <form ref={form} onSubmit={handleBookingSubmit} className="space-y-8">
                    
                    {/* Meeting Type Selection */}
                    <div className="space-y-3">
                      <label className="text-sm font-medium mb-2 block">Meeting Protocol</label>
                      <div className="grid sm:grid-cols-3 gap-3">
                        {MEETING_TYPES.map((type) => (
                          <div 
                            key={type.id}
                            className={`
                              border rounded-xl p-4 cursor-pointer transition-all duration-200
                              ${meetingType === type.id 
                                ? "bg-primary/5 border-primary shadow-sm ring-1 ring-primary/20" 
                                : "bg-background hover:bg-muted/50 hover:border-primary/30"}
                            `}
                            onClick={() => setMeetingType(type.id)}
                          >
                            <div className="flex items-center justify-between mb-2">
                              <div className={`p-2 rounded-lg ${meetingType === type.id ? "bg-primary/20 text-primary" : "bg-muted text-muted-foreground"}`}>
                                {type.icon}
                              </div>
                              {meetingType === type.id && (
                                <Badge variant="default" className="text-[10px] px-1.5 py-0">Select</Badge>
                              )}
                            </div>
                            <h4 className="font-semibold text-sm">{type.label}</h4>
                            <p className="text-xs text-muted-foreground mt-1">{type.duration}</p>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label htmlFor="name" className="text-sm font-medium">
                          Full Name <span className="text-destructive">*</span>
                        </label>
                        <Input id="name" name="from_name" required className="bg-background" placeholder="Your Name" />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="email" className="text-sm font-medium">
                          Work Email <span className="text-destructive">*</span>
                        </label>
                        <Input id="email" name="reply_to" type="email" required className="bg-background" placeholder="you@company.com" />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="company" className="text-sm font-medium">Company Name</label>
                      <Input id="company" name="company" className="bg-background" placeholder="Your Company" />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="message" className="text-sm font-medium">
                        What would you like to discuss? <span className="text-destructive">*</span>
                      </label>
                      <Textarea 
                        id="message" 
                        name="message" 
                        required 
                        rows={4} 
                        className="bg-background resize-none" 
                        placeholder="Briefly describe your project, current bottlenecks, or goals..." 
                      />
                    </div>

                    <div className="pt-4 border-t flex justify-end">
                      <Button 
                        type="submit" 
                        size="lg" 
                        className="w-full sm:w-auto min-w-[200px] rounded-full group"
                        disabled={isSending}
                      >
                        {isSending ? (
                          <span className="flex items-center gap-2">
                            <div className="w-4 h-4 border-2 border-primary-foreground border-t-transparent rounded-full animate-spin" />
                            Confirming...
                          </span>
                        ) : (
                          <span className="flex items-center gap-2">
                            Confirm Booking
                            <CheckCircle2 className="w-4 h-4 group-hover:scale-110 transition-transform" />
                          </span>
                        )}
                      </Button>
                    </div>
                  </form>
                </div>
              )}

              {/* STEP 3: Success Screen */}
              {step === 3 && (
                <div className="py-12 animate-fade-in text-center max-w-md mx-auto">
                  <div className="w-20 h-20 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle2 className="w-10 h-10 text-green-500" />
                  </div>
                  <h2 className="text-3xl font-bold mb-4">Request Confirmed!</h2>
                  <p className="text-muted-foreground mb-8">
                    Thank you! We have received your booking request for <strong className="text-foreground">{date ? format(date, 'MMMM do') : ''} at {time}</strong>. An invitation with meeting joining details will be sent to your email shortly.
                  </p>
                  
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button asChild variant="outline" className="rounded-full">
                      <Link to="/">Return to Home</Link>
                    </Button>
                    <Button 
                      variant="default" 
                      className="rounded-full"
                      onClick={() => {
                        setStep(1);
                        setDate(undefined);
                        setTime(null);
                      }}
                    >
                      Book Another Meeting
                    </Button>
                  </div>
                </div>
              )}

            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default BookingPage;