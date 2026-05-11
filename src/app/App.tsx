import { useState, useCallback, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ResearchProgressView } from './components/ResearchProgressView';
import {
  Trophy, Rocket, Lightbulb, ChevronRight, ChevronLeft,
  Upload, X, Check, Zap, GripVertical,
  Mail, Image, Smartphone, Monitor, ShoppingBag,
  BarChart3, MessageSquare, Eye, Users, FileText,
  PenLine, LayoutGrid, ArrowRight, CircleCheck, Sparkles,
  Plus, Clock, Settings, RotateCcw
} from 'lucide-react';
import svgPaths from "../imports/StartANewResearch-1/svg-emgwynddh2";
import { imgContent } from "../imports/StartANewResearch-1/svg-c2tfl";

// ─── Types ──────────────────────────────────────────────────────────────────

type AppView = 'landing' | 'workflow' | 'tool' | 'success';
type UploadedFile = { name: string; type: string; size: number; preview?: string };
type Criterion = { id: string; label: string; hint: string; selected: boolean };
type CriterionDef = { id: string; label: string; hint: string };
type ExecStep = { label: string; trigger: 'Default' | 'Conditional'; condition?: string; color: string; ToolIcon: typeof MessageSquare };

// ─── Tools ──────────────────────────────────────────────────────────────────

const TOOLS = [
  {
    id: 'auto-fgd',
    title: 'Auto Focus Group Discussion',
    shortTitle: 'Auto FGD',
    methodType: 'Qualitative',
    methodColor: '#8B5CF6',
    description: 'AI-moderated group discussions that uncover rich qualitative insights at scale — no moderator required',
    Icon: MessageSquare,
    color: '#F43F5E',
    hint: 'Best for: understanding why audiences feel or react the way they do',
  },
  {
    id: 'self-fgd',
    title: 'Self-Managed Focus Group',
    shortTitle: 'Self FGD',
    methodType: 'Qualitative',
    methodColor: '#8B5CF6',
    description: 'Design and run your own moderated discussion guide with your target audience community',
    Icon: Users,
    color: '#EC4899',
    hint: 'Best for: custom exploratory sessions where you control the questions',
  },
  {
    id: 'creative-ranking',
    title: 'Creative Ranking',
    shortTitle: 'Creative Ranking',
    methodType: 'Quantitative',
    methodColor: '#4F6EF7',
    description: 'Score and rank multiple creative variants on custom evaluation criteria with statistical confidence',
    Icon: BarChart3,
    color: '#4F6EF7',
    hint: 'Best for: comparing 3 or more creative options before launch',
  },
  {
    id: 'attention-heatmap',
    title: 'Attention Heatmaps',
    shortTitle: 'Heatmaps',
    methodType: 'Visual',
    methodColor: '#F97316',
    description: 'Visualise where attention lands and map gaze patterns on your creative before it goes live',
    Icon: Eye,
    color: '#F97316',
    hint: 'Best for: validating visual hierarchy, layout, and focal point placement',
  },
];

// ─── Pastel Color Palettes ────────────────────────────────────────────────────

const TOOL_PASTELS: Record<string, { bg: string; icon: string; strip: string; methodColor: string; methodBg: string }> = {
  'auto-fgd':          { bg: '#FFF1F3', icon: '#F472B6', strip: '#FDA4AF', methodColor: '#BE185D', methodBg: '#FCE7F3' },
  'self-fgd':          { bg: '#F5F3FF', icon: '#A78BFA', strip: '#C4B5FD', methodColor: '#6D28D9', methodBg: '#EDE9FE' },
  'creative-ranking':  { bg: '#EFF6FF', icon: '#60A5FA', strip: '#93C5FD', methodColor: '#1D4ED8', methodBg: '#DBEAFE' },
  'attention-heatmap': { bg: '#FFF7ED', icon: '#FB923C', strip: '#FDBA74', methodColor: '#C2410C', methodBg: '#FFEDD5' },
};

const STEP_PASTEL_COLORS = ['#93C5FD', '#C4B5FD', '#FDA4AF', '#6EE7B7'];
const STEP_PASTEL_ACTIVE = ['#2563EB', '#7C3AED', '#E11D48', '#059669'];

const TOOL_TAG_PASTELS: Record<string, { bg: string; border: string; icon: string; text: string }> = {
  'Creative Ranking':  { bg: '#EFF6FF', border: '#BFDBFE', icon: '#60A5FA', text: '#1D4ED8' },
  'Auto Survey':       { bg: '#F0FDF4', border: '#BBF7D0', icon: '#34D399', text: '#059669' },
  'Auto FGD':          { bg: '#FFF1F3', border: '#FECDD3', icon: '#F472B6', text: '#BE185D' },
  'Heatmap':           { bg: '#FFF7ED', border: '#FED7AA', icon: '#FB923C', text: '#C2410C' },
  'Self-managed FGD':  { bg: '#F5F3FF', border: '#DDD6FE', icon: '#A78BFA', text: '#6D28D9' },
};

// ─── Workflow Use Cases ──────────────────────────────────────────────────────

const STEP_COLORS = ['#4F6EF7', '#8B5CF6', '#F43F5E', '#10B981'];
const STEP_LABELS = ['Choose Goal', 'Select Scenario', 'Upload Assets', 'Select Audience', 'Review & Submit'];

const USE_CASES = [
  {
    id: 'pick-a-winner',
    title: 'Pick a Winner',
    tagline: 'A/B · Multi-variant decision',
    description: 'Identify the strongest creative from 2 or more assets, and understand why it wins',
    tools: [
      { label: 'Creative Ranking', color: '#4F6EF7', icon: BarChart3 },
      { label: 'Auto Survey', color: '#10B981', icon: MessageSquare },
    ],
    available: true,
    Icon: Trophy,
  },
  {
    id: 'launch-readiness',
    title: 'Strategic Concept Validation',
    tagline: 'Pre-flight · Single asset',
    description: 'Evaluate a near-final creative for red flags, clarity gaps, and brand risk before go-live',
    tools: [
      { label: 'Auto FGD', color: '#F43F5E', icon: MessageSquare },
      { label: 'Heatmap', color: '#F97316', icon: Eye },
    ],
    available: true,
    Icon: Rocket,
  },
  {
    id: 'strategic-concepting',
    title: 'Strategic Concept Validation',
    tagline: 'Early-stage · Exploration',
    description: 'Explore concept directions with your audience before committing to production assets',
    tools: [
      { label: 'Auto FGD', color: '#8B5CF6', icon: MessageSquare },
      { label: 'Self-managed FGD', color: '#EC4899', icon: Users },
    ],
    available: false,
    Icon: Lightbulb,
  },
];

const CONTEXTS: Record<string, { id: string; label: string; assetType: string; Icon: typeof Mail }[]> = {
  'pick-a-winner': [
    { id: 'email-body', label: 'Email Body Creative', assetType: 'Image', Icon: Mail },
    { id: 'email-subject', label: 'Email Subject Line', assetType: 'Text', Icon: Mail },
    { id: 'paid-social', label: 'Paid Social Ad', assetType: 'Image / Video', Icon: Image },
    { id: 'social-post', label: 'Social Media Post', assetType: 'Image / Video', Icon: Smartphone },
    { id: 'landing-page', label: 'Landing Page', assetType: 'Image', Icon: Monitor },
    { id: 'weekly-ad', label: 'Weekly Ad', assetType: 'Image', Icon: ShoppingBag },
  ],
  'launch-readiness': [
    { id: 'paid-social', label: 'Paid Social Ad', assetType: 'Image / Video', Icon: Image },
    { id: 'email-body', label: 'Email Body Creative', assetType: 'Image', Icon: Mail },
    { id: 'landing-page', label: 'Landing Page', assetType: 'Image', Icon: Monitor },
    { id: 'social-post', label: 'Social Media Post', assetType: 'Image / Video', Icon: Smartphone },
    { id: 'display-banner', label: 'Display Banner', assetType: 'Image', Icon: LayoutGrid },
    { id: 'weekly-ad', label: 'Weekly Ad', assetType: 'Image', Icon: ShoppingBag },
  ],
  'strategic-concepting': [],
};

const CRITERIA_BY_CONTEXT: Record<string, CriterionDef[]> = {
  'pick-a-winner::email-body': [
    { id: 'drive-conversion', label: 'Drive Conversion (click intent)', hint: 'Does the creative create a strong and immediate desire to click and explore further?' },
    { id: 'clarity', label: 'Clarity of Message / Offer', hint: 'Can the user understand the exact offer and key message within seconds without cognitive load?' },
    { id: 'brand-fit', label: 'Brand Fit', hint: 'Does the creative align with brand tone, identity, and user expectations?' },
    { id: 'value-comm', label: 'Value Communication', hint: 'Is the benefit compelling enough for the user to care and act?' },
    { id: 'visual-hierarchy', label: 'Visual Hierarchy', hint: 'Does the design guide attention in the right order (offer → value → CTA) without confusion?' },
  ],
  'pick-a-winner::email-subject': [
    { id: 'open-intent', label: 'Drive Conversion (Open Intent)', hint: 'Does the subject line create a strong and immediate desire to open the email?' },
    { id: 'drive-engagement', label: 'Drive Engagement', hint: 'Does the subject line spark curiosity and interest to explore further?' },
    { id: 'brand-fit', label: 'Brand Fit', hint: 'Does the subject line align with brand tone, identity, and user expectations?' },
    { id: 'clarity', label: 'Clarity of Message', hint: 'Can the user understand the key message immediately without cognitive load?' },
  ],
  'pick-a-winner::paid-social': [
    { id: 'overall-appeal', label: 'Overall Appeal', hint: 'How attractive, engaging, and pleasant the ad is to look at?' },
    { id: 'drive-conversion', label: 'Drive Conversion', hint: 'How likely is this ad to make you consider exploring or purchasing the product?' },
    { id: 'clarity', label: 'Clarity of Message', hint: 'How clearly the ad explains the benefit or advantage of the product or offer?' },
    { id: 'brand-fit', label: 'Brand Fit', hint: 'Does the ad align with brand tone, identity, and user expectations?' },
    { id: 'trust', label: 'Trust & Credibility', hint: 'Is the ad believable, honest, and credible?' },
  ],
  'pick-a-winner::social-post': [
    { id: 'overall-appeal', label: 'Overall Appeal', hint: 'How attractive, engaging, and pleasant the post is to look at?' },
    { id: 'drive-engagement', label: 'Drive Engagement', hint: 'How likely are you to interact with the post (like, comment, share, or save)?' },
    { id: 'clarity', label: 'Clarity of Message', hint: 'How easy is it to understand the main message of the post?' },
    { id: 'drive-conversion', label: 'Drive Conversion', hint: 'How likely are you to take action beyond viewing the post (click or explore)?' },
    { id: 'memorability', label: 'Memorability', hint: 'How likely is the post to stand out and be remembered later?' },
  ],
  'pick-a-winner::landing-page': [
    { id: 'attention-hook', label: 'Attention Hook', hint: 'How effectively does the image capture immediate attention and spark curiosity?' },
    { id: 'brand-appeal', label: 'Brand Appeal', hint: 'How well does the image convey premium quality, trust, and reliability?' },
    { id: 'clarity', label: 'Clarity', hint: 'How clearly does the image communicate what the product is, what it offers, and why it matters?' },
    { id: 'purchase-motivation', label: 'Purchase Motivation', hint: 'How strongly does the image drive purchase intent or move the viewer toward a buying decision?' },
    { id: 'user-engagement', label: 'User Engagement', hint: 'How easily can users explore further — information hierarchy, scroll behavior, and path to conversion?' },
  ],
  'pick-a-winner::weekly-ad': [
    { id: 'overall-appeal', label: 'Overall Appeal', hint: 'How attractive, eye-catching, and engaging is the ad to look at?' },
    { id: 'clarity', label: 'Clarity of Message', hint: 'How easy is it to understand the main message, product, or offer right away?' },
    { id: 'value-comm', label: 'Value Communication', hint: 'How clearly does the ad show the deal, savings, or benefit being offered?' },
    { id: 'drive-conversion', label: 'Drive Conversion', hint: 'How likely is the ad to make you take the next step (click, explore, or shop)?' },
    { id: 'brand-fit', label: 'Brand Fit', hint: "How well does the ad align with the brand's tone, style, and overall feel?" },
  ],
  'launch-readiness::paid-social': [
    { id: 'clarity', label: 'Clarity of Message', hint: 'Is the main message immediately clear without confusion?' },
    { id: 'trust', label: 'Trust & Credibility', hint: 'Is the creative believable, honest, and credible to the audience?' },
    { id: 'confusion-risk', label: 'Confusion Risk', hint: 'Are there any elements that could mislead or confuse the target audience?' },
    { id: 'brand-safety', label: 'Brand Safety', hint: 'Does the creative meet brand safety and compliance standards?' },
    { id: 'conversion-intent', label: 'Conversion Intent', hint: 'Does the creative effectively drive the intended audience action?' },
  ],
  'launch-readiness::email-body': [
    { id: 'clarity', label: 'Clarity of Message', hint: 'Is the offer and key message immediately clear within seconds?' },
    { id: 'trust', label: 'Trust & Credibility', hint: 'Does the email feel authentic, honest, and credible?' },
    { id: 'confusion-risk', label: 'Confusion Risk', hint: 'Are there elements that could mislead or confuse the reader?' },
    { id: 'brand-safety', label: 'Brand Safety', hint: 'Does it meet brand guidelines and safety standards?' },
    { id: 'conversion-intent', label: 'Conversion Intent (click)', hint: 'Does the creative motivate the reader to click through effectively?' },
  ],
};

const EXEC_FLOWS: Record<string, ExecStep[]> = {
  'pick-a-winner::email-body': [
    { label: 'Auto Survey', trigger: 'Default', color: '#4F6EF7', ToolIcon: MessageSquare },
    { label: 'Heatmap & Gaze', trigger: 'Conditional', condition: 'Triggers if Visual Hierarchy or Clarity scores are within 10 pts between variants', color: '#F97316', ToolIcon: Eye },
    { label: 'Auto FGD', trigger: 'Default', color: '#F43F5E', ToolIcon: MessageSquare },
  ],
  'pick-a-winner::email-subject': [
    { label: 'Auto Survey', trigger: 'Default', color: '#4F6EF7', ToolIcon: MessageSquare },
    { label: 'Auto FGD', trigger: 'Default', color: '#F43F5E', ToolIcon: MessageSquare },
  ],
  'pick-a-winner::paid-social': [
    { label: 'Auto Survey', trigger: 'Default', color: '#4F6EF7', ToolIcon: MessageSquare },
    { label: 'Heatmap & Gaze', trigger: 'Conditional', condition: 'Triggers if Visual Hierarchy or Clarity scores are within 10 pts between variants', color: '#F97316', ToolIcon: Eye },
    { label: 'Auto FGD', trigger: 'Default', color: '#F43F5E', ToolIcon: MessageSquare },
  ],
  'pick-a-winner::social-post': [
    { label: 'Auto Survey', trigger: 'Default', color: '#4F6EF7', ToolIcon: MessageSquare },
    { label: 'Heatmap & Gaze', trigger: 'Conditional', condition: 'Triggers if Overall Appeal or Clarity scores are within 10 pts between variants', color: '#F97316', ToolIcon: Eye },
    { label: 'Auto FGD', trigger: 'Default', color: '#F43F5E', ToolIcon: MessageSquare },
  ],
  'pick-a-winner::landing-page': [
    { label: 'Auto Survey', trigger: 'Default', color: '#4F6EF7', ToolIcon: MessageSquare },
    { label: 'Heatmap & Gaze', trigger: 'Conditional', condition: 'Triggers if Attention Hook or Clarity scores are within 10 pts between variants', color: '#F97316', ToolIcon: Eye },
    { label: 'Auto FGD', trigger: 'Default', color: '#F43F5E', ToolIcon: MessageSquare },
  ],
  'pick-a-winner::weekly-ad': [
    { label: 'Auto Survey', trigger: 'Default', color: '#4F6EF7', ToolIcon: MessageSquare },
    { label: 'Heatmap & Gaze', trigger: 'Conditional', condition: 'Triggers if Overall Appeal or Clarity scores are within 10 pts between variants', color: '#F97316', ToolIcon: Eye },
    { label: 'Auto FGD', trigger: 'Default', color: '#F43F5E', ToolIcon: MessageSquare },
  ],
  'launch-readiness::paid-social': [
    { label: 'Auto FGD', trigger: 'Default', color: '#F43F5E', ToolIcon: MessageSquare },
    { label: 'Heatmap & Gaze', trigger: 'Conditional', condition: 'Triggers if Clarity is a top-ranked criterion', color: '#F97316', ToolIcon: Eye },
  ],
  'launch-readiness::email-body': [
    { label: 'Auto FGD', trigger: 'Default', color: '#F43F5E', ToolIcon: MessageSquare },
    { label: 'Heatmap & Gaze', trigger: 'Conditional', condition: 'Triggers if Clarity or Visual Hierarchy is a top-ranked criterion', color: '#F97316', ToolIcon: Eye },
  ],
};

const OBJECTIVES: Record<string, string> = {
  'pick-a-winner::email-body': 'We are testing [N] email body creatives. Determine which creative performs stronger on driving click intent, and delivers stronger message clarity, value communication, brand fit, and visual hierarchy — and understand the key reasons behind the winner to inform final creative selection.',
  'pick-a-winner::email-subject': 'We are testing [N] email subject lines. Determine which subject line drives higher open intent by assessing performance across message clarity, brand fit, and drive engagement to inform subject line selection.',
  'pick-a-winner::paid-social': 'We are testing [N] paid social ad creatives. Determine which performs stronger in driving consideration or purchase intent, and delivers stronger overall appeal, visual hierarchy, value communication, and brand alignment — and understand the key reasons behind the winner to inform final creative selection.',
  'pick-a-winner::social-post': 'We are testing [N] social media post creatives to determine which performs better in driving engagement, and delivers stronger overall appeal, clarity of message, drive conversion, and memorability — and understand the key reasons behind the winning creative to inform final creative selection.',
  'pick-a-winner::landing-page': 'To evaluate and compare [N] pages as potential landing page options by evaluating their ability to capture user attention, convey brand appeal, clearly communicate value, and drive purchase motivation. The objective is to determine which page more effectively engages users and influences their intent to explore or convert.',
  'pick-a-winner::weekly-ad': 'We are testing [N] promotional weekly ad creatives. Determine which performs stronger on driving conversion, and delivers stronger overall appeal, clarity of message, value communication, and brand fit — and understand the key reasons behind the winner to inform ongoing weekly creative optimization.',
  'launch-readiness::paid-social': 'To evaluate the uploaded Paid Social Ad creative for launch readiness, identifying any messaging risks, clarity gaps, confusion risk, or brand safety concerns before go-live.',
  'launch-readiness::email-body': 'To evaluate the uploaded Email Body Creative for launch readiness, identifying any messaging risks, clarity gaps, or brand safety concerns. The creative will be assessed against clarity, trust, brand fit, and conversion intent before campaign deployment.',
};

const AUDIENCES = [
  { id: 'general', label: 'General Population', description: 'Broad 18–65 demographic' },
  { id: 'busy-parents', label: 'Busy Parents', description: 'Parents with children under 18' },
  { id: 'target-shoppers', label: 'Target Shoppers', description: 'Regular Target store visitors' },
  { id: 'millennials', label: 'Millennials', description: 'Ages 25–40, digital-native' },
];

// ─── Helpers ────────────────────────────────────────────────────────────────

function generateObjective(useCaseId: string, contextId: string): string {
  return OBJECTIVES[`${useCaseId}::${contextId}`] ?? '';
}
function getCriteria(useCaseId: string, contextId: string): CriterionDef[] {
  return CRITERIA_BY_CONTEXT[`${useCaseId}::${contextId}`] ?? CRITERIA_BY_CONTEXT[`${useCaseId}::paid-social`] ?? [];
}
function getExecFlow(useCaseId: string, contextId: string): ExecStep[] {
  return EXEC_FLOWS[`${useCaseId}::${contextId}`] ?? [];
}

// ─── Shared UI ──────────────────────────────────────────────────────────────

function SparkleNavIcon() {
  return (
    <svg width="21" height="21" viewBox="0 0 21.3333 21.3333" fill="none">
      <path d={svgPaths.p19b98800} fill="#0A0A0A" />
    </svg>
  );
}

function Logo() {
  return (
    <div className="relative shrink-0" style={{ width: 90, height: 74 }}>
      <div className="absolute" style={{ inset: '-0.68% -17.78% -41.22% -17.78%' }}>
        <svg width="100%" height="100%" viewBox="0 0 122 105" fill="none">
          <defs>
            <filter id="logo_filter" x="0" y="-1.5" width="122" height="108" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
              <feOffset dy="2" /><feGaussianBlur stdDeviation="2" />
              <feColorMatrix type="matrix" values="0 0 0 0 0.039 0 0 0 0 0.039 0 0 0 0 0.039 0 0 0 0.04 0" />
              <feBlend in2="BackgroundImageFix" result="e1" />
              <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
              <feMorphology in="SourceAlpha" operator="erode" radius="4" result="e2" />
              <feOffset dy="8" /><feGaussianBlur stdDeviation="6" />
              <feColorMatrix type="matrix" values="0 0 0 0 0.039 0 0 0 0 0.039 0 0 0 0 0.039 0 0 0 0.03 0" />
              <feBlend in2="e1" result="e2b" />
              <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
              <feMorphology in="SourceAlpha" operator="erode" radius="8" result="e3" />
              <feOffset dy="16" /><feGaussianBlur stdDeviation="12" />
              <feColorMatrix type="matrix" values="0 0 0 0 0.039 0 0 0 0 0.039 0 0 0 0 0.039 0 0 0 0.03 0" />
              <feBlend in2="e2b" result="e3b" />
              <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
              <feMorphology in="SourceAlpha" operator="dilate" radius="0.5" result="e4" />
              <feOffset /><feColorMatrix type="matrix" values="0 0 0 0 0.039 0 0 0 0 0.039 0 0 0 0 0.039 0 0 0 0.1 0" />
              <feBlend in2="e3b" result="e4b" />
              <feBlend in="SourceGraphic" in2="e4b" result="shape" />
            </filter>
            <clipPath id="logo_clip">
              <rect fill="white" width="37.8027" height="37.8091" transform="matrix(0.837366 -0.546643 0.817739 0.575589 29.8769 31.0029)" />
            </clipPath>
          </defs>
          <g filter="url(#logo_filter)">
            <path d={svgPaths.p831c000} fill="white" />
            <path d={svgPaths.p3d24db00} fill="#F5F5F5" />
            <path d={svgPaths.p24ed5f80} stroke="#0A0A0A" strokeOpacity="0.16" strokeWidth="0.5" />
            <g clipPath="url(#logo_clip)">
              <path d={svgPaths.p25832400} fill="#0A0A0A" />
            </g>
          </g>
        </svg>
      </div>
    </div>
  );
}

function NavBar({ onBack, backLabel }: { onBack?: () => void; backLabel?: string }) {
  return (
    <div className="absolute top-0 left-0 right-0 bg-white flex items-center justify-between px-6 z-20"
      style={{ height: 56, boxShadow: '0 1px 0 0 rgba(10,10,10,0.07)' }}>
      <div className="flex items-center gap-2">
        <div className="relative flex items-center justify-center bg-white rounded-[4.8px]"
          style={{ width: 32, height: 32, boxShadow: 'inset 0px -0.4px 0px 0px rgba(0,0,0,0.12), 0px 0.8px 1.6px -0.4px rgba(0,0,0,0.08)', border: '0.667px solid rgba(10,10,10,0.16)' }}>
          <SparkleNavIcon />
        </div>
        <p style={{ fontFamily: 'Inter, sans-serif', fontWeight: 600, fontSize: 18, lineHeight: '28px', letterSpacing: '-0.18px', color: '#0a0a0a', whiteSpace: 'nowrap' }}>
          Start a New Research
        </p>
      </div>
      {onBack && (
        <button onClick={onBack} className="flex items-center gap-1.5 rounded-lg px-3 py-2 hover:bg-[rgba(10,10,10,0.05)] transition-colors">
          <ChevronLeft size={14} color="rgba(10,10,10,0.5)" />
          <span style={{ fontFamily: 'Inter,sans-serif', fontSize: 13, color: 'rgba(10,10,10,0.55)', fontWeight: 500 }}>{backLabel ?? 'Back'}</span>
        </button>
      )}
    </div>
  );
}

function BackgroundRow() {
  return (
    <div className="flex items-center w-full" style={{ height: 60, borderBottom: '0.5px solid rgba(10,10,10,0.06)' }}>
      <div className="flex items-center justify-center shrink-0" style={{ width: 60 }}>
        <div className="rounded bg-[rgba(10,10,10,0.05)]" style={{ width: 32, height: 32 }} />
      </div>
      <div className="shrink-0" style={{ width: 280, paddingLeft: 12 }}>
        <div className="rounded-sm bg-[rgba(10,10,10,0.04)]" style={{ width: 160, height: 12 }} />
        <div className="rounded-sm bg-[rgba(10,10,10,0.03)] mt-2" style={{ width: 110, height: 9 }} />
      </div>
      <div className="shrink-0" style={{ width: 180, paddingLeft: 12 }}>
        <div className="rounded-sm bg-[rgba(10,10,10,0.04)]" style={{ width: 90, height: 12 }} />
      </div>
      <div className="flex-1" style={{ paddingLeft: 12 }}>
        <div className="rounded-sm bg-[rgba(10,10,10,0.04)]" style={{ width: 55, height: 12 }} />
      </div>
      <div className="flex-1" style={{ paddingLeft: 12 }}>
        <div className="rounded-sm bg-[rgba(10,10,10,0.03)]" style={{ width: 35, height: 12 }} />
      </div>
      <div className="flex-1" style={{ paddingLeft: 12 }}>
        <div className="rounded-sm bg-[rgba(10,10,10,0.04)]" style={{ width: 70, height: 12 }} />
      </div>
    </div>
  );
}

function BackgroundPattern() {
  return (
    <div className="absolute overflow-hidden pointer-events-none" style={{
      top: 56, left: 0, right: 0, bottom: 0,
      maskImage: `url('${imgContent}')`, maskSize: 'cover', maskPosition: 'center top',
      WebkitMaskImage: `url('${imgContent}')`, WebkitMaskSize: 'cover', WebkitMaskPosition: 'center top',
    }}>
      {Array.from({ length: 14 }).map((_, i) => <BackgroundRow key={i} />)}
    </div>
  );
}

// ─── Step Progress ───────────────────────────────────────────────────────────

function StepProgress({ step }: { step: number }) {
  return (
    <div className="flex items-center w-full gap-0">
      {STEP_LABELS.map((label, i) => {
        const idx = i + 1;
        const isActive = step === idx;
        const isDone = step > idx;
        const VIOLET_ACTIVE = '#7C3AED';
        const VIOLET_PASTEL = '#EDE9FE';
        return (
          <div key={idx} className="flex items-center flex-1 last:flex-none">
            <div className="flex flex-col items-center gap-1.5">
              <div className="flex items-center justify-center rounded-full transition-all duration-300" style={{ width: 24, height: 24, background: isDone ? VIOLET_ACTIVE : isActive ? VIOLET_PASTEL : 'transparent', border: isDone || isActive ? 'none' : '1.5px solid rgba(10,10,10,0.2)' }}>
                {isDone
                  ? <Check size={13} color="white" strokeWidth={2.5} />
                  : <span style={{ fontFamily: 'Inter,sans-serif', fontWeight: 600, fontSize: 11, color: isActive ? VIOLET_ACTIVE : 'rgba(10,10,10,0.35)' }}>{idx}</span>
                }
              </div>
              <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 11, fontWeight: isActive ? 600 : 400, color: isActive ? VIOLET_ACTIVE : isDone ? 'rgba(10,10,10,0.55)' : 'rgba(10,10,10,0.3)', whiteSpace: 'nowrap', lineHeight: '16px' }}>{label}</p>
            </div>
            {i < STEP_LABELS.length - 1 && <div className="flex-1 mx-2 mt-[-18px]" style={{ height: 1.5, background: step > idx ? VIOLET_ACTIVE : 'rgba(10,10,10,0.1)', borderRadius: 2, transition: 'background 0.3s' }} />}
          </div>
        );
      })}
    </div>
  );
}

// ─── Workflow Steps ──────────────────────────────────────────────────────────

function Step2({ useCaseId, selected, onSelect, briefFile, onBriefFileChange }: { useCaseId: string; selected: string | null; onSelect: (id: string) => void; briefFile: string | null; onBriefFileChange: (name: string | null) => void }) {
  const uc = USE_CASES.find(u => u.id === useCaseId)!;
  const contexts = CONTEXTS[useCaseId] ?? [];
  const setBriefFile = onBriefFileChange;
  return (
    <div className="flex flex-col gap-4">
      <div>
        <div className="flex items-center gap-2 mb-1">
          <div className="flex items-center justify-center rounded-md" style={{ width: 24, height: 24, background: 'rgba(10,10,10,0.06)' }}>
            <uc.Icon size={13} color="#0a0a0a" />
          </div>
          <p style={{ fontFamily: 'Inter,sans-serif', fontSize: 12, fontWeight: 600, color: 'rgba(10,10,10,0.4)', letterSpacing: '0.5px', textTransform: 'uppercase' }}>{uc.title}</p>
        </div>
        <p style={{ fontFamily: 'Inter,sans-serif', fontWeight: 500, fontSize: 22, lineHeight: '30px', letterSpacing: '-0.44px', color: '#0a0a0a' }}>Set the context for your study</p>
        <p style={{ fontFamily: 'Inter,sans-serif', fontSize: 14, color: 'rgba(10,10,10,0.55)', marginTop: 4, lineHeight: '22px' }}>Selecting a context lets the system pre-configure criteria and methodology automatically</p>
      </div>
      <div className="grid grid-cols-2 gap-2.5">
        {contexts.map(ctx => {
          const isSelected = selected === ctx.id;
          return (
            <button key={ctx.id} onClick={() => onSelect(ctx.id)}
              className="flex flex-col gap-2 text-left rounded-xl transition-all duration-150"
              style={{ padding: '12px 14px', background: isSelected ? '#F5F3FF' : 'white', border: isSelected ? '1.5px solid #A78BFA' : '1px solid rgba(10,10,10,0.1)', boxShadow: isSelected ? '0px 2px 12px rgba(139,92,246,0.18)' : '0px 1px 3px rgba(10,10,10,0.04)' }}>
              <div className="flex items-center gap-2">
                <div className="flex items-center justify-center rounded-md shrink-0" style={{ width: 28, height: 28, background: isSelected ? '#EDE9FE' : 'rgba(10,10,10,0.05)' }}>
                  <ctx.Icon size={14} color={isSelected ? '#7C3AED' : '#0a0a0a'} />
                </div>
                <p style={{ fontFamily: 'Inter,sans-serif', fontSize: 13, fontWeight: 500, color: isSelected ? '#4C1D95' : '#0a0a0a', lineHeight: '18px' }}>{ctx.label}</p>
              </div>
              <span className="rounded-md px-1.5 py-0.5 self-start" style={{ fontFamily: 'Inter,sans-serif', fontSize: 10, fontWeight: 600, color: isSelected ? '#6D28D9' : 'rgba(10,10,10,0.4)', background: isSelected ? 'rgba(139,92,246,0.1)' : 'rgba(10,10,10,0.05)', letterSpacing: '0.2px' }}>{ctx.assetType}</span>
            </button>
          );
        })}
      </div>
      <div className="rounded-xl p-4 mt-1" style={{ background: 'rgba(10,10,10,0.025)', border: '1px dashed rgba(10,10,10,0.15)' }}>
        <div className="flex items-center justify-between">
          <div>
            <p style={{ fontFamily: 'Inter,sans-serif', fontWeight: 500, fontSize: 13, color: '#0a0a0a' }}>Context Brief <span style={{ fontWeight: 400, color: 'rgba(10,10,10,0.45)' }}>(Optional)</span></p>
            <p style={{ fontFamily: 'Inter,sans-serif', fontSize: 12, color: 'rgba(10,10,10,0.45)', marginTop: 2 }}>Upload a PDF or DOCX. Ensure it aligns with your chosen use case.</p>
          </div>
          {briefFile
            ? <div className="flex items-center gap-2">
                <div className="flex items-center gap-1.5 rounded-lg px-3 py-1.5" style={{ background: 'white', border: '1px solid rgba(10,10,10,0.1)' }}>
                  <FileText size={13} color="#4F6EF7" />
                  <span style={{ fontFamily: 'Inter,sans-serif', fontSize: 12, color: '#0a0a0a', maxWidth: 100, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{briefFile}</span>
                </div>
                <button onClick={() => setBriefFile(null)} className="p-1 rounded hover:bg-[rgba(10,10,10,0.05)]"><X size={13} color="rgba(10,10,10,0.4)" /></button>
              </div>
            : <label className="flex items-center gap-1.5 cursor-pointer rounded-lg px-3 py-2 hover:bg-[rgba(10,10,10,0.05)] transition-colors" style={{ border: '1px solid rgba(10,10,10,0.15)' }}>
                <FileText size={14} color="rgba(10,10,10,0.45)" />
                <span style={{ fontFamily: 'Inter,sans-serif', fontSize: 12, fontWeight: 500, color: 'rgba(10,10,10,0.55)', whiteSpace: 'nowrap' }}>Upload Brief</span>
                <input type="file" accept=".pdf,.docx" className="hidden" onChange={e => { if (e.target.files?.[0]) setBriefFile(e.target.files[0].name); }} />
              </label>
          }
        </div>
        <div className="flex items-start gap-2 mt-3 rounded-lg px-3 py-2.5" style={{ background: 'rgba(79,110,247,0.06)', border: '1px solid rgba(79,110,247,0.15)' }}>
          <svg width="13" height="13" viewBox="0 0 16 16" fill="none" style={{ marginTop: 1, flexShrink: 0 }}><circle cx="8" cy="8" r="7.5" stroke="#4F6EF7" strokeOpacity="0.6"/><path d="M8 7v5" stroke="#4F6EF7" strokeWidth="1.5" strokeLinecap="round"/><circle cx="8" cy="4.5" r="0.75" fill="#4F6EF7"/></svg>
          <p style={{ fontFamily: 'Inter,sans-serif', fontSize: 11.5, color: 'rgba(79,110,247,0.85)', lineHeight: '16px' }}>
            Please ensure your context brief aligns with both your <span style={{ fontWeight: 600 }}>selected use case</span> and <span style={{ fontWeight: 600 }}>scenario</span>. Mismatched briefs may affect the quality of your research output.
          </p>
        </div>
      </div>
    </div>
  );
}

function Step3({ useCaseId, files, onFilesChange }: { useCaseId: string; files: UploadedFile[]; onFilesChange: (f: UploadedFile[]) => void; }) {
  const uc = USE_CASES.find(u => u.id === useCaseId)!;
  const [dragging, setDragging] = useState(false);
  const processFiles = useCallback((fileList: FileList) => {
    const newFiles: UploadedFile[] = Array.from(fileList).map(f => ({
      name: f.name,
      type: f.type,
      size: f.size,
      preview: f.type.startsWith('image/') ? URL.createObjectURL(f) : undefined,
    }));
    onFilesChange([...files, ...newFiles]);
  }, [files, onFilesChange]);
  const getFileIcon = (type: string) => {
    if (type.startsWith('image/')) return <Image size={14} color="#4F6EF7" />;
    if (type.startsWith('video/')) return <Smartphone size={14} color="#F43F5E" />;
    return <FileText size={14} color="#F97316" />;
  };
  const formatSize = (bytes: number) => bytes < 1024 * 1024 ? `${(bytes / 1024).toFixed(0)} KB` : `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
  return (
    <div className="flex flex-col gap-5">
      <div>
        <div className="flex items-center gap-2 mb-1">
          <div className="flex items-center justify-center rounded-md" style={{ width: 24, height: 24, background: 'rgba(10,10,10,0.06)' }}><uc.Icon size={13} color="#0a0a0a" /></div>
          <p style={{ fontFamily: 'Inter,sans-serif', fontSize: 12, fontWeight: 600, color: 'rgba(10,10,10,0.4)', letterSpacing: '0.5px', textTransform: 'uppercase' }}>{uc.title}</p>
        </div>
        <p style={{ fontFamily: 'Inter,sans-serif', fontWeight: 500, fontSize: 22, lineHeight: '30px', letterSpacing: '-0.44px', color: '#0a0a0a' }}>Upload your creatives</p>
        <p style={{ fontFamily: 'Inter,sans-serif', fontSize: 14, color: 'rgba(10,10,10,0.55)', marginTop: 4, lineHeight: '22px' }}>Upload the assets you want to evaluate. Asset type and count are detected automatically.</p>
      </div>
      <div onDragOver={e => { e.preventDefault(); setDragging(true); }} onDragLeave={() => setDragging(false)}
        onDrop={e => { e.preventDefault(); setDragging(false); processFiles(e.dataTransfer.files); }}
        className="relative rounded-xl transition-all duration-200"
        style={{ border: `1.5px dashed ${dragging ? '#4F6EF7' : 'rgba(10,10,10,0.15)'}`, background: dragging ? 'rgba(79,110,247,0.03)' : 'rgba(10,10,10,0.02)', padding: '28px 24px' }}>
        <label className="flex flex-col items-center gap-3 cursor-pointer">
          <div className="flex items-center justify-center rounded-xl" style={{ width: 48, height: 48, background: dragging ? 'rgba(79,110,247,0.1)' : 'rgba(10,10,10,0.06)' }}>
            <Upload size={22} color={dragging ? '#4F6EF7' : '#0a0a0a'} />
          </div>
          <div className="text-center">
            <p style={{ fontFamily: 'Inter,sans-serif', fontWeight: 500, fontSize: 14, color: '#0a0a0a' }}>Drop files here or <span style={{ color: '#4F6EF7', textDecoration: 'underline' }}>browse</span></p>
            <p style={{ fontFamily: 'Inter,sans-serif', fontSize: 12, color: 'rgba(10,10,10,0.45)', marginTop: 3 }}>Images (PNG, JPG), Videos (MP4), Documents (PDF, DOCX)</p>
          </div>
          <input type="file" multiple accept="image/*,video/*,.pdf,.docx" className="hidden" onChange={e => { if (e.target.files) processFiles(e.target.files); }} />
        </label>
      </div>
      {files.length > 0 && (
        <div className="flex flex-col gap-2">
          <p style={{ fontFamily: 'Inter,sans-serif', fontSize: 12, fontWeight: 600, color: 'rgba(10,10,10,0.4)', letterSpacing: '0.4px', textTransform: 'uppercase' }}>{files.length} Asset{files.length > 1 ? 's' : ''} uploaded</p>
          {files.map((f, i) => (
            <div key={i} className="flex items-center justify-between rounded-lg px-3 py-2.5" style={{ background: 'white', border: '1px solid rgba(10,10,10,0.1)' }}>
              <div className="flex items-center gap-2.5">
                {f.preview
                ? <img src={f.preview} alt={f.name} className="rounded-lg object-cover shrink-0" style={{ width: 56, height: 56, border: '1px solid rgba(10,10,10,0.1)', background: 'rgba(10,10,10,0.04)' }} />
                : <div className="flex items-center justify-center rounded-lg shrink-0" style={{ width: 56, height: 56, background: 'rgba(10,10,10,0.05)' }}>{getFileIcon(f.type)}</div>
              }
                <div>
                  <p style={{ fontFamily: 'Inter,sans-serif', fontSize: 13, fontWeight: 500, color: '#0a0a0a', maxWidth: 260, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{f.name}</p>
                  <p style={{ fontFamily: 'Inter,sans-serif', fontSize: 11, color: 'rgba(10,10,10,0.4)' }}>{formatSize(f.size)}</p>
                </div>
              </div>
              <button onClick={() => onFilesChange(files.filter((_, j) => j !== i))} className="p-1 rounded hover:bg-[rgba(10,10,10,0.06)] transition-colors"><X size={13} color="rgba(10,10,10,0.35)" /></button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

function Step3Audience({ useCaseId, audience, onAudienceChange }: { useCaseId: string; audience: string | null; onAudienceChange: (id: string) => void; }) {
  const uc = USE_CASES.find(u => u.id === useCaseId)!;
  return (
    <div className="flex flex-col gap-5">
      <div>
        <div className="flex items-center gap-2 mb-1">
          <div className="flex items-center justify-center rounded-md" style={{ width: 24, height: 24, background: 'rgba(10,10,10,0.06)' }}><uc.Icon size={13} color="#0a0a0a" /></div>
          <p style={{ fontFamily: 'Inter,sans-serif', fontSize: 12, fontWeight: 600, color: 'rgba(10,10,10,0.4)', letterSpacing: '0.5px', textTransform: 'uppercase' }}>{uc.title}</p>
        </div>
        <p style={{ fontFamily: 'Inter,sans-serif', fontWeight: 500, fontSize: 22, lineHeight: '30px', letterSpacing: '-0.44px', color: '#0a0a0a' }}>Select your target audience</p>
        <p style={{ fontFamily: 'Inter,sans-serif', fontSize: 14, color: 'rgba(10,10,10,0.55)', marginTop: 4, lineHeight: '22px' }}>Choose the audience segment that best matches who you want to evaluate this creative with.</p>
      </div>
      <div className="flex flex-col gap-2">
        {AUDIENCES.map(a => {
          const isSelected = audience === a.id;
          return (
            <button key={a.id} onClick={() => onAudienceChange(a.id)}
              className="flex items-center gap-3 rounded-xl text-left transition-all duration-150"
              style={{ padding: '11px 14px', background: isSelected ? '#F5F3FF' : 'white', border: isSelected ? '1.5px solid #A78BFA' : '1px solid rgba(10,10,10,0.1)' }}>
              <div className="flex items-center justify-center rounded-full shrink-0" style={{ width: 32, height: 32, background: isSelected ? '#EDE9FE' : 'rgba(10,10,10,0.05)' }}>
                <Users size={15} color={isSelected ? '#7C3AED' : '#0a0a0a'} />
              </div>
              <div>
                <p style={{ fontFamily: 'Inter,sans-serif', fontWeight: 600, fontSize: 13, color: isSelected ? '#4C1D95' : '#0a0a0a' }}>{a.label}</p>
                <p style={{ fontFamily: 'Inter,sans-serif', fontSize: 12, color: isSelected ? 'rgba(76,29,149,0.6)' : 'rgba(10,10,10,0.45)' }}>{a.description}</p>
              </div>
              {isSelected && <Check size={14} color="#7C3AED" className="ml-auto" />}
            </button>
          );
        })}
      </div>
    </div>
  );
}

function Step4({ useCaseId, contextId, criteria, setCriteria, objective, setObjective, onSubmit, onBack }: {
  useCaseId: string; contextId: string;
  criteria: Criterion[]; setCriteria: (c: Criterion[]) => void;
  objective: string; setObjective: (o: string) => void; onSubmit: () => void; onBack: () => void;
}) {
  const uc = USE_CASES.find(u => u.id === useCaseId)!;
  const selectedCount = criteria.filter(c => c.selected).length;
  const ordinals = ['1st', '2nd', '3rd', '4th', '5th'];
  const selectedCriteria = criteria.filter(c => c.selected);

  // Drag-and-drop state
  const [dragIndex, setDragIndex] = useState<number | null>(null);
  const [dragOverIndex, setDragOverIndex] = useState<number | null>(null);

  // Custom weights: maps criterion id → pinned % value (absent = auto)
  const [customWeights, setCustomWeights] = useState<Record<string, number>>({});
  const [editingWeight, setEditingWeight] = useState<string | null>(null);
  const [editWeightValue, setEditWeightValue] = useState('');

  // Reset weights when context changes
  useEffect(() => { setCustomWeights({}); setEditingWeight(null); }, [useCaseId, contextId]);

  const toggle = (id: string) => {
    setCriteria(criteria.map(c => c.id === id ? { ...c, selected: !c.selected } : c));
    setCustomWeights(prev => { const n = { ...prev }; delete n[id]; return n; });
  };

  const handleDrop = (dropIdx: number) => {
    if (dragIndex === null || dragIndex === dropIdx) return;
    const next = [...criteria];
    const [removed] = next.splice(dragIndex, 1);
    next.splice(dropIdx > dragIndex ? dropIdx - 1 : dropIdx, 0, removed);
    setCriteria(next);
  };

  // Weight calculation — pinned criteria keep their value; remainder split equally among the rest
  const pinnedTotal = selectedCriteria.reduce((s, c) => s + (customWeights[c.id] ?? 0), 0);
  const unpinnedCount = selectedCriteria.filter(c => customWeights[c.id] == null).length;
  const unpinnedShare = unpinnedCount > 0 ? Math.max(0, 100 - pinnedTotal) / unpinnedCount : 0;

  const getWeight = (id: string): number => customWeights[id] ?? unpinnedShare;

  const formatWeight = (w: number): string => {
    const r = parseFloat(w.toFixed(1));
    return r % 1 === 0 ? `${Math.round(r)}%` : `${r}%`;
  };

  const startEditWeight = (id: string) => {
    setEditingWeight(id);
    setEditWeightValue(String(Math.round(getWeight(id))));
  };

  const commitWeightEdit = (id: string) => {
    const val = parseFloat(editWeightValue);
    const newWeights = { ...customWeights };
    if (isNaN(val) || val <= 0 || editWeightValue.trim() === '') {
      delete newWeights[id];
    } else {
      newWeights[id] = Math.min(Math.round(val), 99);
    }
    setCustomWeights(newWeights);
    setEditingWeight(null);

    // Re-sort: selected criteria ordered by weight descending (highest = 1st priority), unselected at bottom
    const newPinnedTotal = criteria.filter(c => c.selected).reduce((s, c) => s + (newWeights[c.id] ?? 0), 0);
    const newUnpinnedCount = criteria.filter(c => c.selected && newWeights[c.id] == null).length;
    const newUnpinnedShare = newUnpinnedCount > 0 ? Math.max(0, 100 - newPinnedTotal) / newUnpinnedCount : 0;
    const weightOf = (cId: string) => newWeights[cId] ?? newUnpinnedShare;
    setCriteria([
      ...criteria.filter(c => c.selected).sort((a, b) => weightOf(b.id) - weightOf(a.id)),
      ...criteria.filter(c => !c.selected),
    ]);
  };

  return (
    <div className="flex flex-col gap-5">
      <div>
        <div className="flex items-center gap-2 mb-1">
          <div className="flex items-center justify-center rounded-md" style={{ width: 24, height: 24, background: 'rgba(10,10,10,0.06)' }}><uc.Icon size={13} color="#0a0a0a" /></div>
          <p style={{ fontFamily: 'Inter,sans-serif', fontSize: 12, fontWeight: 600, color: 'rgba(10,10,10,0.4)', letterSpacing: '0.5px', textTransform: 'uppercase' }}>{uc.title}</p>
        </div>
        <p style={{ fontFamily: 'Inter,sans-serif', fontWeight: 500, fontSize: 22, lineHeight: '30px', letterSpacing: '-0.44px', color: '#0a0a0a' }}>Review your research plan</p>
        <p style={{ fontFamily: 'Inter,sans-serif', fontSize: 14, color: 'rgba(10,10,10,0.55)', marginTop: 4, lineHeight: '22px' }}>Confirm the auto-configured setup — criteria, objective, and study plan are all editable</p>
      </div>

      {/* Research Objective */}
      <div className="rounded-xl overflow-hidden" style={{ border: '1px solid rgba(10,10,10,0.1)' }}>
        <div className="flex items-center gap-2 px-4 py-3 border-b border-[rgba(10,10,10,0.07)]" style={{ background: 'rgba(10,10,10,0.02)' }}>
          <PenLine size={13} color="rgba(10,10,10,0.45)" />
          <p style={{ fontFamily: 'Inter,sans-serif', fontWeight: 600, fontSize: 12, color: 'rgba(10,10,10,0.5)', letterSpacing: '0.4px', textTransform: 'uppercase' }}>Research Objective</p>
          <span className="ml-auto rounded-full px-2 py-0.5" style={{ background: 'rgba(124,58,237,0.1)', fontFamily: 'Inter,sans-serif', fontSize: 10, fontWeight: 600, color: '#7C3AED' }}>Auto-generated · Editable</span>
        </div>
        <textarea value={objective} onChange={e => setObjective(e.target.value)} className="w-full resize-none outline-none bg-white px-4 py-3" rows={3} style={{ fontFamily: 'Inter,sans-serif', fontSize: 13, color: '#0a0a0a', lineHeight: '21px' }} />
      </div>

      {/* Priority Labeling */}
      <div className="rounded-xl overflow-hidden" style={{ border: '1px solid rgba(10,10,10,0.1)' }}>
        <div className="px-4 py-3 border-b border-[rgba(10,10,10,0.07)]" style={{ background: 'rgba(10,10,10,0.02)' }}>
          <div className="flex items-center gap-2">
            <BarChart3 size={13} color="rgba(10,10,10,0.45)" />
            <p style={{ fontFamily: 'Inter,sans-serif', fontWeight: 600, fontSize: 12, color: 'rgba(10,10,10,0.5)', letterSpacing: '0.4px', textTransform: 'uppercase' }}>Priority Labeling</p>
            <span className="ml-auto" style={{ fontFamily: 'Inter,sans-serif', fontSize: 12, color: 'rgba(10,10,10,0.35)' }}>{selectedCount} selected</span>
          </div>
          <div className="flex items-center gap-2 mt-2">
            <span className="rounded-full px-2 py-0.5" style={{ background: 'rgba(10,10,10,0.05)', fontFamily: 'Inter,sans-serif', fontSize: 10, color: 'rgba(10,10,10,0.45)' }}>
              Drag to reorder priority
            </span>
            <span className="rounded-full px-2 py-0.5" style={{ background: 'rgba(10,10,10,0.05)', fontFamily: 'Inter,sans-serif', fontSize: 10, color: 'rgba(10,10,10,0.45)' }}>
              Tap to set weight
            </span>
            <button onClick={() => {
              const defs = getCriteria(useCaseId, contextId);
              setCriteria(defs.map((d, i) => ({ id: d.id, label: d.label, hint: d.hint, selected: i < 3 })));
              setCustomWeights({});
              setEditingWeight(null);
            }} className="ml-auto flex items-center gap-1 rounded-full px-2 py-0.5 transition-all hover:bg-[rgba(124,58,237,0.08)]"
              style={{ background: 'rgba(124,58,237,0.06)', border: '1px solid rgba(124,58,237,0.18)' }}
              title="Reset to system-suggested percentages">
              <RotateCcw size={10} color="#7C3AED" />
              <span style={{ fontFamily: 'Inter,sans-serif', fontSize: 10, fontWeight: 600, color: '#7C3AED' }}>Reset weight</span>
            </button>
          </div>
        </div>
        <div className="bg-white divide-y divide-[rgba(10,10,10,0.06)]">
          {criteria.map((c, idx) => {
            const rankIdx = selectedCriteria.findIndex(s => s.id === c.id);
            const rank = c.selected && rankIdx !== -1 ? ordinals[rankIdx] : null;
            const isPinned = customWeights[c.id] != null;
            const isDragging = dragIndex === idx;
            const isDropTarget = dragOverIndex === idx && dragIndex !== idx;
            return (
              <motion.div
                key={c.id}
                layout
                layoutId={c.id}
                draggable={c.selected}
                onDragStart={c.selected ? () => setDragIndex(idx) : undefined}
                onDragOver={c.selected ? e => { e.preventDefault(); setDragOverIndex(idx); } : undefined}
                onDrop={c.selected ? () => handleDrop(idx) : undefined}
                onDragEnd={c.selected ? () => { setDragIndex(null); setDragOverIndex(null); } : undefined}
                animate={{
                  scale: (isDragging || isDropTarget) ? 1.015 : 1,
                  backgroundColor: (isDragging || isDropTarget)
                    ? 'rgba(245,243,255,0.85)'
                    : 'rgba(255,255,255,0)',
                  boxShadow: (isDragging || isDropTarget)
                    ? '0 4px 16px rgba(124,58,237,0.1)'
                    : '0 0px 0px rgba(0,0,0,0)',
                  zIndex: isDragging ? 10 : isDropTarget ? 5 : 1,
                }}
                transition={{ type: 'spring', stiffness: 380, damping: 28 }}
                className="relative flex items-start gap-2 px-4 py-3"
                style={{
                  cursor: c.selected ? (isDragging ? 'grabbing' : 'grab') : 'default',
                  borderRadius: (isDragging || isDropTarget) ? 10 : 0,
                  outline: (isDragging || isDropTarget)
                    ? '1.5px dashed rgba(124,58,237,0.4)'
                    : '1.5px solid transparent',
                  outlineOffset: -1.5,
                  opacity: 1,
                  position: 'relative',
                }}
              >
                {/* Drag handle — only for selected (priority-ranked) criteria */}
                <div className="flex items-center shrink-0" style={{ height: 20, width: 14 }}>
                  {c.selected && <GripVertical size={14} color={isDragging || isDropTarget ? '#7C3AED' : 'rgba(10,10,10,0.2)'} />}
                </div>
                {/* Rank badge */}
                <div className="flex items-center shrink-0" style={{ width: 28, height: 20 }}>
                  {rank && <span className="rounded-md px-1.5 py-0.5" style={{ background: '#10B98115', fontFamily: 'Inter,sans-serif', fontSize: 10, fontWeight: 700, color: '#10B981', display: 'inline-block', lineHeight: '14px' }}>{rank}</span>}
                </div>
                <div className="flex-1 min-w-0">
                  <p style={{ fontFamily: 'Inter,sans-serif', fontSize: 13, fontWeight: c.selected ? 600 : 400, color: c.selected ? '#0a0a0a' : 'rgba(10,10,10,0.4)', lineHeight: '20px' }}>{c.label}</p>
                  <p style={{ fontFamily: 'Inter,sans-serif', fontSize: 11, color: 'rgba(10,10,10,0.4)', lineHeight: '16px', marginTop: 2 }}>{c.hint}</p>
                </div>
                <div className="flex items-center gap-1 shrink-0" style={{ height: 20 }}>
                  {c.selected && selectedCount > 0 && (
                    editingWeight === c.id ? (
                      <div className="flex items-center gap-0.5 mr-1">
                        <input
                          autoFocus
                          type="text"
                          inputMode="numeric"
                          pattern="[0-9]*"
                          value={editWeightValue}
                          onChange={e => setEditWeightValue(e.target.value.replace(/[^0-9]/g, ''))}
                          onKeyDown={e => { if (e.key === 'Enter') commitWeightEdit(c.id); if (e.key === 'Escape') setEditingWeight(null); }}
                          onBlur={() => commitWeightEdit(c.id)}
                          style={{ width: 38, fontFamily: 'Inter,sans-serif', fontSize: 10, fontWeight: 700, color: '#5B21B6', background: '#EDE9FE', border: '1.5px solid #A78BFA', borderRadius: 6, padding: '2px 4px', outline: 'none', textAlign: 'center' }}
                        />
                        <span style={{ fontFamily: 'Inter,sans-serif', fontSize: 10, fontWeight: 700, color: '#7C3AED' }}>%</span>
                      </div>
                    ) : (
                      <button
                        onClick={() => startEditWeight(c.id)}
                        title={isPinned ? 'Pinned weight — click to edit, clear to reset to auto' : 'Auto weight — click to pin a custom value'}
                        className="rounded-md px-1.5 py-0.5 mr-1 transition-all hover:opacity-80"
                        style={{ background: isPinned ? '#DDD6FE' : '#EDE9FE', fontFamily: 'Inter,sans-serif', fontSize: 10, fontWeight: 700, color: isPinned ? '#5B21B6' : '#7C3AED', display: 'inline-flex', alignItems: 'center', gap: 2, minWidth: 34, justifyContent: 'center', border: isPinned ? '1px solid rgba(139,92,246,0.35)' : 'none', cursor: 'pointer' }}
                      >
                        {formatWeight(getWeight(c.id))}
                      </button>
                    )
                  )}
                  <button onClick={() => toggle(c.id)} className="flex items-center justify-center rounded-md ml-1 transition-all" style={{ width: 20, height: 20, background: c.selected ? '#7C3AED' : 'transparent', border: c.selected ? 'none' : '1.5px solid rgba(10,10,10,0.2)' }}>
                    {c.selected && <Check size={11} color="white" strokeWidth={2.5} />}
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      <div className="flex items-center justify-between mt-3">
        <button onClick={onBack} className="flex items-center gap-1.5 rounded-xl px-4 py-2.5 transition-all" style={{ border: '1px solid rgba(10,10,10,0.12)', background: 'white' }}>
          <ChevronLeft size={15} color="#0a0a0a" />
          <span style={{ fontFamily: 'Inter,sans-serif', fontSize: 13, fontWeight: 500, color: '#0a0a0a' }}>Back</span>
        </button>
        <button onClick={onSubmit} className="flex items-center gap-1.5 rounded-xl px-5 py-2.5 transition-all hover:opacity-90 active:scale-[0.99]" style={{ background: '#0a0a0a' }}>
          <Sparkles size={14} color="white" />
          <span style={{ fontFamily: 'Inter,sans-serif', fontWeight: 600, fontSize: 13, color: 'white' }}>Start Research</span>
          <ArrowRight size={15} color="white" />
        </button>
      </div>
    </div>
  );
}

// ─── Success State ────────────────────────────────────────────────────────────

function SuccessState() {
  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}
      className="flex flex-col items-center gap-5 py-8 text-center">
      <div className="flex items-center justify-center rounded-2xl" style={{ width: 64, height: 64, background: '#10B98115', border: '1.5px solid #10B98130' }}>
        <CircleCheck size={32} color="#10B981" />
      </div>
      <div>
        <p style={{ fontFamily: 'Inter,sans-serif', fontWeight: 600, fontSize: 20, color: '#0a0a0a', letterSpacing: '-0.4px' }}>Research is underway</p>
        <p style={{ fontFamily: 'Inter,sans-serif', fontSize: 14, color: 'rgba(10,10,10,0.55)', marginTop: 6, lineHeight: '22px', maxWidth: 360 }}>Your study has been configured and launched. You'll receive an insights report once data is collected.</p>
      </div>
      <div className="flex flex-col gap-2 w-full mt-2">
        {[{ label: 'Study configuration saved', done: true }, { label: 'Audience panel notified', done: true }, { label: 'Analysis in progress…', done: false }].map(item => (
          <div key={item.label} className="flex items-center gap-3 rounded-xl px-4 py-3" style={{ background: 'white', border: '1px solid rgba(10,10,10,0.08)' }}>
            <div className="flex items-center justify-center rounded-full" style={{ width: 20, height: 20, background: item.done ? '#10B981' : 'rgba(10,10,10,0.08)' }}>
              {item.done ? <Check size={11} color="white" strokeWidth={2.5} /> : <div style={{ width: 6, height: 6, borderRadius: '50%', background: 'rgba(10,10,10,0.25)' }} />}
            </div>
            <p style={{ fontFamily: 'Inter,sans-serif', fontSize: 13, color: item.done ? '#0a0a0a' : 'rgba(10,10,10,0.45)', fontWeight: item.done ? 500 : 400 }}>{item.label}</p>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

// ─── Landing: Tool Detail Setup ──────────────────────────────────────────────

function ToolSetupView({ toolId, onBack, onLaunch }: { toolId: string; onBack: () => void; onLaunch: () => void }) {
  const tool = TOOLS.find(t => t.id === toolId)!;
  const [audience, setAudience] = useState<string | null>(null);
  const [title, setTitle] = useState('');
  const [brief, setBrief] = useState('');
  const [questions, setQuestions] = useState<string[]>(['']);
  const [criteria, setCriteria] = useState<string[]>(['']);
  const [files, setFiles] = useState<UploadedFile[]>([]);
  const [taskInstruction, setTaskInstruction] = useState('');
  const [duration, setDuration] = useState<string>('10');

  const processFiles = useCallback((fileList: FileList) => {
    setFiles(prev => [...prev, ...Array.from(fileList).map(f => ({ name: f.name, type: f.type, size: f.size }))]);
  }, []);
  const formatSize = (bytes: number) => bytes < 1024 * 1024 ? `${(bytes / 1024).toFixed(0)} KB` : `${(bytes / (1024 * 1024)).toFixed(1)} MB`;

  const canLaunch = audience !== null && title.trim().length > 0;

  const sectionLabel = (text: string) => (
    <p style={{ fontFamily: 'Inter,sans-serif', fontWeight: 600, fontSize: 11, color: 'rgba(10,10,10,0.4)', letterSpacing: '0.5px', textTransform: 'uppercase', marginBottom: 8 }}>{text}</p>
  );

  return (
    <div className="flex flex-col gap-5">
      {/* Tool header */}
      <div className="rounded-2xl p-4 flex items-start gap-4" style={{ background: `${tool.color}08`, border: `1px solid ${tool.color}20` }}>
        <div className="flex items-center justify-center rounded-xl shrink-0" style={{ width: 44, height: 44, background: `${tool.color}18` }}>
          <tool.Icon size={22} color={tool.color} />
        </div>
        <div>
          <div className="flex items-center gap-2 mb-0.5">
            <p style={{ fontFamily: 'Inter,sans-serif', fontWeight: 700, fontSize: 16, color: '#0a0a0a', letterSpacing: '-0.2px' }}>{tool.title}</p>
            <span className="rounded-full px-2 py-0.5" style={{ background: `${tool.methodColor}15`, fontFamily: 'Inter,sans-serif', fontSize: 10, fontWeight: 700, color: tool.methodColor, letterSpacing: '0.3px' }}>{tool.methodType.toUpperCase()}</span>
          </div>
          <p style={{ fontFamily: 'Inter,sans-serif', fontSize: 12, color: 'rgba(10,10,10,0.55)', lineHeight: '18px' }}>{tool.hint}</p>
        </div>
      </div>

      {/* Research title */}
      <div>
        {sectionLabel('Research Title')}
        <input value={title} onChange={e => setTitle(e.target.value)} placeholder={`e.g. Q3 ${tool.shortTitle} Study — Email Campaign`}
          className="w-full rounded-xl px-4 py-3 outline-none transition-all"
          style={{ fontFamily: 'Inter,sans-serif', fontSize: 13, color: '#0a0a0a', border: '1px solid rgba(10,10,10,0.15)', background: 'white' }} />
      </div>

      {/* Tool-specific inputs */}
      {toolId === 'auto-fgd' && (
        <div>
          {sectionLabel('Discussion Brief')}
          <textarea value={brief} onChange={e => setBrief(e.target.value)} placeholder="Describe what you want participants to discuss, react to, or evaluate. Include any relevant context about the brand, campaign, or audience."
            rows={4} className="w-full rounded-xl px-4 py-3 outline-none resize-none"
            style={{ fontFamily: 'Inter,sans-serif', fontSize: 13, color: '#0a0a0a', border: '1px solid rgba(10,10,10,0.15)', background: 'white', lineHeight: '21px' }} />
        </div>
      )}

      {toolId === 'self-fgd' && (
        <div>
          {sectionLabel('Moderator Guide — Discussion Questions')}
          <div className="flex flex-col gap-2">
            {questions.map((q, i) => (
              <div key={i} className="flex items-center gap-2">
                <span style={{ fontFamily: 'Inter,sans-serif', fontSize: 12, fontWeight: 600, color: 'rgba(10,10,10,0.35)', width: 20, textAlign: 'right', flexShrink: 0 }}>Q{i + 1}</span>
                <input value={q} onChange={e => { const n = [...questions]; n[i] = e.target.value; setQuestions(n); }}
                  placeholder={`Question ${i + 1}…`}
                  className="flex-1 rounded-xl px-3 py-2.5 outline-none"
                  style={{ fontFamily: 'Inter,sans-serif', fontSize: 13, color: '#0a0a0a', border: '1px solid rgba(10,10,10,0.12)', background: 'white' }} />
                {questions.length > 1 && <button onClick={() => setQuestions(questions.filter((_, j) => j !== i))} className="p-1 rounded hover:bg-[rgba(10,10,10,0.06)]"><X size={13} color="rgba(10,10,10,0.35)" /></button>}
              </div>
            ))}
            {questions.length < 6 && (
              <button onClick={() => setQuestions([...questions, ''])} className="flex items-center gap-1.5 px-3 py-2 rounded-lg self-start hover:bg-[rgba(10,10,10,0.05)] transition-colors" style={{ border: '1px dashed rgba(10,10,10,0.2)' }}>
                <Plus size={13} color="rgba(10,10,10,0.45)" />
                <span style={{ fontFamily: 'Inter,sans-serif', fontSize: 12, color: 'rgba(10,10,10,0.5)', fontWeight: 500 }}>Add question</span>
              </button>
            )}
          </div>
        </div>
      )}

      {toolId === 'creative-ranking' && (
        <>
          <div>
            {sectionLabel('Upload Creative Variants (2–10 assets)')}
            <label className="flex flex-col items-center gap-2.5 rounded-xl cursor-pointer transition-all"
              style={{ border: '1.5px dashed rgba(10,10,10,0.15)', background: 'rgba(10,10,10,0.02)', padding: '20px 24px' }}>
              <Upload size={20} color="#0a0a0a" />
              <p style={{ fontFamily: 'Inter,sans-serif', fontSize: 13, color: '#0a0a0a' }}>Drop files or <span style={{ color: '#4F6EF7', textDecoration: 'underline' }}>browse</span></p>
              <input type="file" multiple accept="image/*,video/*" className="hidden" onChange={e => { if (e.target.files) processFiles(e.target.files); }} />
            </label>
            {files.length > 0 && (
              <div className="flex flex-col gap-1.5 mt-2">
                {files.map((f, i) => (
                  <div key={i} className="flex items-center justify-between rounded-lg px-3 py-2" style={{ background: 'white', border: '1px solid rgba(10,10,10,0.1)' }}>
                    <div className="flex items-center gap-2">
                      <Image size={13} color="#4F6EF7" />
                      <p style={{ fontFamily: 'Inter,sans-serif', fontSize: 12, color: '#0a0a0a', maxWidth: 250, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{f.name}</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <span style={{ fontFamily: 'Inter,sans-serif', fontSize: 11, color: 'rgba(10,10,10,0.4)' }}>{formatSize(f.size)}</span>
                      <button onClick={() => setFiles(files.filter((_, j) => j !== i))} className="p-0.5 rounded hover:bg-[rgba(10,10,10,0.06)]"><X size={12} color="rgba(10,10,10,0.35)" /></button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
          <div>
            {sectionLabel('Evaluation Criteria')}
            <div className="flex flex-col gap-2">
              {criteria.map((c, i) => (
                <div key={i} className="flex items-center gap-2">
                  <span style={{ fontFamily: 'Inter,sans-serif', fontSize: 12, fontWeight: 600, color: 'rgba(10,10,10,0.35)', width: 20, textAlign: 'right', flexShrink: 0 }}>{i + 1}.</span>
                  <input value={c} onChange={e => { const n = [...criteria]; n[i] = e.target.value; setCriteria(n); }}
                    placeholder={`Criterion ${i + 1}…`}
                    className="flex-1 rounded-xl px-3 py-2.5 outline-none"
                    style={{ fontFamily: 'Inter,sans-serif', fontSize: 13, color: '#0a0a0a', border: '1px solid rgba(10,10,10,0.12)', background: 'white' }} />
                  {criteria.length > 1 && <button onClick={() => setCriteria(criteria.filter((_, j) => j !== i))} className="p-1 rounded hover:bg-[rgba(10,10,10,0.06)]"><X size={13} color="rgba(10,10,10,0.35)" /></button>}
                </div>
              ))}
              {criteria.length < 5 && (
                <button onClick={() => setCriteria([...criteria, ''])} className="flex items-center gap-1.5 px-3 py-2 rounded-lg self-start hover:bg-[rgba(10,10,10,0.05)] transition-colors" style={{ border: '1px dashed rgba(10,10,10,0.2)' }}>
                  <Plus size={13} color="rgba(10,10,10,0.45)" />
                  <span style={{ fontFamily: 'Inter,sans-serif', fontSize: 12, color: 'rgba(10,10,10,0.5)', fontWeight: 500 }}>Add criterion</span>
                </button>
              )}
            </div>
          </div>
        </>
      )}

      {toolId === 'attention-heatmap' && (
        <>
          <div>
            {sectionLabel('Upload Creative')}
            <label className="flex flex-col items-center gap-2.5 rounded-xl cursor-pointer transition-all"
              style={{ border: files.length > 0 ? '1px solid rgba(10,10,10,0.1)' : '1.5px dashed rgba(10,10,10,0.15)', background: 'rgba(10,10,10,0.02)', padding: '20px 24px' }}>
              {files.length > 0
                ? <div className="flex items-center justify-between w-full">
                    <div className="flex items-center gap-2"><Image size={14} color="#4F6EF7" /><p style={{ fontFamily: 'Inter,sans-serif', fontSize: 13, color: '#0a0a0a' }}>{files[0].name}</p></div>
                    <button onClick={e => { e.preventDefault(); setFiles([]); }} className="p-1 rounded hover:bg-[rgba(10,10,10,0.06)]"><X size={13} color="rgba(10,10,10,0.35)" /></button>
                  </div>
                : <><Eye size={20} color="#0a0a0a" /><p style={{ fontFamily: 'Inter,sans-serif', fontSize: 13, color: '#0a0a0a' }}>Upload a single image <span style={{ color: '#4F6EF7', textDecoration: 'underline' }}>or browse</span></p></>
              }
              <input type="file" accept="image/*" className="hidden" onChange={e => { if (e.target.files?.[0]) { const f = e.target.files[0]; setFiles([{ name: f.name, type: f.type, size: f.size }]); } }} />
            </label>
          </div>
          <div>
            {sectionLabel('Task Instruction for Respondents')}
            <input value={taskInstruction} onChange={e => setTaskInstruction(e.target.value)} placeholder="e.g. Look at this ad as if you just saw it on your Instagram feed"
              className="w-full rounded-xl px-4 py-3 outline-none"
              style={{ fontFamily: 'Inter,sans-serif', fontSize: 13, color: '#0a0a0a', border: '1px solid rgba(10,10,10,0.15)', background: 'white' }} />
          </div>
          <div>
            {sectionLabel('Viewing Duration')}
            <div className="flex gap-2">
              {['5', '10', '15', '30'].map(d => (
                <button key={d} onClick={() => setDuration(d)} className="flex items-center gap-1.5 rounded-xl px-4 py-2.5 transition-all" style={{ background: duration === d ? '#F5F3FF' : 'white', border: duration === d ? '1.5px solid #A78BFA' : '1px solid rgba(10,10,10,0.15)' }}>
                  <Clock size={13} color={duration === d ? '#7C3AED' : 'rgba(10,10,10,0.5)'} />
                  <span style={{ fontFamily: 'Inter,sans-serif', fontSize: 13, fontWeight: 500, color: duration === d ? '#4C1D95' : '#0a0a0a' }}>{d}s</span>
                </button>
              ))}
            </div>
          </div>
        </>
      )}

      {/* Audience */}
      <div>
        {sectionLabel('Target Audience')}
        <div className="grid grid-cols-2 gap-2">
          {AUDIENCES.map(a => {
            const isSelected = audience === a.id;
            return (
              <button key={a.id} onClick={() => setAudience(a.id)} className="flex items-start gap-2.5 text-left rounded-xl p-3 transition-all" style={{ background: isSelected ? '#F5F3FF' : 'white', border: isSelected ? '1.5px solid #A78BFA' : '1px solid rgba(10,10,10,0.1)' }}>
                <div className="flex items-center justify-center rounded-full shrink-0 mt-0.5" style={{ width: 22, height: 22, background: isSelected ? '#EDE9FE' : 'rgba(10,10,10,0.06)' }}>
                  <Users size={12} color={isSelected ? '#7C3AED' : '#0a0a0a'} />
                </div>
                <div>
                  <p style={{ fontFamily: 'Inter,sans-serif', fontWeight: 600, fontSize: 12, color: isSelected ? '#4C1D95' : '#0a0a0a' }}>{a.label}</p>
                  <p style={{ fontFamily: 'Inter,sans-serif', fontSize: 11, color: isSelected ? 'rgba(76,29,149,0.55)' : 'rgba(10,10,10,0.4)', lineHeight: '16px', marginTop: 1 }}>{a.description}</p>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Launch */}
      <button onClick={canLaunch ? onLaunch : undefined}
        className="flex items-center justify-center gap-2 rounded-xl w-full transition-all duration-200"
        style={{ height: 48, background: canLaunch ? `linear-gradient(135deg, ${tool.color} 0%, ${tool.color}cc 100%)` : 'rgba(10,10,10,0.08)', cursor: canLaunch ? 'pointer' : 'not-allowed' }}>
        <tool.Icon size={16} color={canLaunch ? 'white' : 'rgba(10,10,10,0.3)'} />
        <span style={{ fontFamily: 'Inter,sans-serif', fontWeight: 600, fontSize: 15, color: canLaunch ? 'white' : 'rgba(10,10,10,0.3)' }}>
          {toolId === 'auto-fgd' ? 'Start Auto FGD' : toolId === 'self-fgd' ? 'Create Discussion Room' : toolId === 'creative-ranking' ? 'Start Creative Ranking' : 'Launch Heatmap Study'}
        </span>
        <ArrowRight size={15} color={canLaunch ? 'white' : 'rgba(10,10,10,0.3)'} />
      </button>
    </div>
  );
}

// ─── Landing: Split View ─────────────────────────────────────────────────────

function AnnouncementStrip({ open, expanded, onToggleExpand, onDismiss, onTry }: {
  open: boolean; expanded: boolean; onToggleExpand: () => void; onDismiss: () => void; onTry: () => void;
}) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: 'auto', opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.22 }}
          className="w-full overflow-hidden"
          style={{
            background: 'linear-gradient(90deg, #EEF2FF 0%, #F5F3FF 60%, #FFF1F3 100%)',
            boxShadow: '0 1px 0 0 rgba(99,102,241,0.18)',
          }}
        >
          <div className="flex items-center gap-2.5 px-6 py-2">
            <span
              className="flex items-center gap-1 rounded-full pl-1.5 pr-2 py-0.5 shrink-0"
              style={{ background: 'white', boxShadow: '0 0 0 1px rgba(99,102,241,0.25)' }}
            >
              <Sparkles size={10} color="#6366F1" />
              <span style={{ fontFamily: 'Inter,sans-serif', fontSize: 9, fontWeight: 700, color: '#4338CA', letterSpacing: '0.5px' }}>NEW</span>
            </span>

            <p className="flex-1 min-w-0 truncate" style={{ fontFamily: 'Inter,sans-serif', fontSize: 12.5, color: '#0a0a0a' }}><span style={{ fontWeight: 600 }}>Intent based Workflows</span><span style={{ color: 'rgba(10,10,10,0.55)' }}> · Describe what you want to achieve. We'll pick the tools for you.</span></p>

            <button
              onClick={onToggleExpand}
              className="flex items-center gap-1 rounded-full px-2 py-1 transition-colors hover:bg-white/70 shrink-0"
              aria-expanded={expanded}
              style={{ fontFamily: 'Inter,sans-serif', fontSize: 11, fontWeight: 500, color: 'rgba(10,10,10,0.6)' }}
            >
              {expanded ? 'Less' : 'Learn more'}
              <motion.span animate={{ rotate: expanded ? 180 : 0 }} transition={{ duration: 0.2 }} style={{ display: 'inline-flex' }}>
                <ChevronRight size={11} color="rgba(10,10,10,0.5)" style={{ transform: 'rotate(90deg)' }} />
              </motion.span>
            </button>

            <button
              onClick={onTry}
              className="flex items-center gap-1 rounded-full px-2.5 py-1 transition-all hover:opacity-90 active:scale-[0.98] shrink-0"
              style={{ background: '#0a0a0a' }}
            >
              <span style={{ fontFamily: 'Inter,sans-serif', fontWeight: 600, fontSize: 11, color: 'white' }}>Try it</span>
              <ArrowRight size={10} color="white" />
            </button>

            <button
              onClick={onDismiss}
              aria-label="Dismiss"
              className="flex items-center justify-center rounded-full transition-colors hover:bg-white/70 shrink-0"
              style={{ width: 22, height: 22 }}
            >
              <X size={11} color="rgba(10,10,10,0.45)" />
            </button>
          </div>

          <AnimatePresence initial={false}>
            {expanded && (
              <motion.div
                key="details"
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="overflow-hidden"
              >
                <div className="px-6 pb-3" style={{ boxShadow: 'inset 0 1px 0 0 rgba(99,102,241,0.18)' }}>
                  <p style={{ fontFamily: 'Inter,sans-serif', fontSize: 12.5, color: 'rgba(10,10,10,0.65)', lineHeight: '18px', paddingTop: 10, maxWidth: 880 }}>
                    Instead of choosing a tool first, tell us your research goal — like "pick a winning creative" or "understand audience reaction" — and we'll auto-configure the right mix of FGDs, surveys, and heatmaps. Launch from your dashboard or anywhere you start a new research.
                  </p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function LandingView({ onSelectTool, onSelectUseCase, highlightSignal }: { onSelectTool: (id: string) => void; onSelectUseCase: (id: string) => void; highlightSignal: number }) {
  const [selectedUC, setSelectedUC] = useState<string | null>(null);
  const [highlightWorkflow, setHighlightWorkflow] = useState(false);
  const workflowRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (highlightSignal === 0) return;
    setHighlightWorkflow(true);
    workflowRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
    const t = setTimeout(() => setHighlightWorkflow(false), 2400);
    return () => clearTimeout(t);
  }, [highlightSignal]);

  return (
    <div className="flex flex-col items-center w-full" style={{ maxWidth: 900 }}>
      {/* Logo + headline */}
      <div className="flex flex-col items-center mx-[0px] mt-[0px] mb-[48px]">
        <Logo />
        <p style={{ fontFamily: 'Inter,sans-serif', fontWeight: 500, fontSize: 22, letterSpacing: '-0.44px', color: '#0a0a0a', marginTop: 20, textAlign: 'center' }}>How would you like to start?</p>
        <p style={{ fontFamily: 'Inter,sans-serif', fontSize: 14, color: 'rgba(10,10,10,0.5)', marginTop: 4, textAlign: 'center' }}>Choose a direct tool or follow a guided goal-based workflow</p>
      </div>

      {/* Two-column split */}
      <div className="w-full" style={{ display: 'grid', gridTemplateColumns: '1fr auto 1fr' }}>

        {/* ── LEFT: Tools ── */}
        <div className="flex flex-col min-w-0">
          <div className="mb-4">
            <div className="flex items-center gap-2 mb-1.5">
              <span className="rounded-md px-2 py-0.5" style={{ background: 'linear-gradient(to right, #eef2ff, #ede9fe)', fontFamily: 'Inter,sans-serif', fontSize: 10, fontWeight: 700, color: '#7c3aed', letterSpacing: '0.5px' }}>DIRECT ACCESS</span>
            </div>
            <p style={{ fontFamily: 'Inter,sans-serif', fontWeight: 600, fontSize: 17, color: '#0a0a0a', letterSpacing: '-0.2px' }}>Start with a Tool</p>
            <p style={{ fontFamily: 'Inter,sans-serif', fontSize: 13, color: 'rgba(10,10,10,0.5)', marginTop: 3, lineHeight: '20px' }}>For teams who know exactly which research method they need</p>
          </div>

          <div className="flex flex-col gap-2.5">
            {TOOLS.map(tool => {
              const p = { bg: '#f0f0f0', icon: 'rgba(10,10,10,0.65)', strip: '#C4B5FD' };
              return (
              <button key={tool.id} onClick={() => {}}
                className="flex items-start gap-3 text-left rounded-xl relative overflow-hidden focus:outline-none cursor-default w-full"
                style={{ padding: '13px 14px', background: 'white', border: '1px solid rgba(10,10,10,0.08)', boxShadow: '0px 1px 3px rgba(10,10,10,0.04)', WebkitTapHighlightColor: 'transparent' }}>
                {/* Violet accent strip */}
                
                <div className="flex items-center justify-center rounded-xl shrink-0 ml-1" style={{ width: 36, height: 36, background: p.bg }}>
                  <tool.Icon size={17} color={p.icon} />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-0.5">
                    <p style={{ fontFamily: 'Inter,sans-serif', fontWeight: 600, fontSize: 13, color: '#0a0a0a', lineHeight: '20px' }}>{tool.title}</p>
                  </div>
                  <p style={{ fontFamily: 'Inter,sans-serif', fontSize: 12, color: 'rgba(10,10,10,0.55)', lineHeight: '18px' }}>{tool.description}</p>
                </div>
                
              </button>
              );
            })}
          </div>
        </div>

        {/* ── DIVIDER ── */}
        <div className="flex flex-col items-center" style={{ marginLeft: 40, marginRight: 40, paddingTop: 56 }}>
          <div className="flex-1" style={{ width: 1, background: 'rgba(10,10,10,0.1)' }} />
          <div className="flex items-center justify-center rounded-full my-3" style={{ width: 28, height: 28, background: 'white', border: '1px solid rgba(10,10,10,0.12)', flexShrink: 0 }}>
            <span style={{ fontFamily: 'Inter,sans-serif', fontSize: 10, fontWeight: 600, color: 'rgba(10,10,10,0.4)' }}>OR</span>
          </div>
          <div className="flex-1" style={{ width: 1, background: 'rgba(10,10,10,0.1)' }} />
        </div>

        {/* ── RIGHT: Workflow ── */}
        <div
          ref={workflowRef}
          className="flex flex-col min-w-0 rounded-2xl transition-all duration-500"
          style={{
            padding: highlightWorkflow ? 12 : 0,
            margin: highlightWorkflow ? -12 : 0,
            background: highlightWorkflow ? 'linear-gradient(135deg, #EEF2FF 0%, #F5F3FF 100%)' : 'transparent',
            boxShadow: highlightWorkflow ? '0 0 0 2px rgba(99,102,241,0.35), 0 8px 28px rgba(99,102,241,0.18)' : 'none',
          }}
        >
          <div className="mb-4">
            <div className="flex items-center gap-2 mb-1.5">
              <span className="rounded-md px-2 py-0.5" style={{ background: 'linear-gradient(to right, #eef2ff, #ede9fe)', fontFamily: 'Inter,sans-serif', fontSize: 10, fontWeight: 700, color: '#7c3aed', letterSpacing: '0.5px' }}>GUIDED WORKFLOW</span>
            </div>
            <p style={{ fontFamily: 'Inter,sans-serif', fontWeight: 600, fontSize: 17, color: '#0a0a0a', letterSpacing: '-0.2px' }}>Start with a Goal</p>
            <p style={{ fontFamily: 'Inter,sans-serif', fontSize: 13, color: 'rgba(10,10,10,0.5)', marginTop: 3, lineHeight: '20px' }}>Tell us what you're trying to accomplish</p>
          </div>

          {/* Use case cards */}
          <div className="flex flex-col gap-2.5">
            {USE_CASES.map(uc => {
              const isSelected = selectedUC === uc.id;
              return (
                <button key={uc.id} disabled={!uc.available}
                  onClick={() => uc.available && setSelectedUC(uc.id)}
                  className="text-left rounded-xl transition-all duration-150 relative"
                  style={{ padding: '13px 14px', background: isSelected ? '#F5F3FF' : 'white', border: isSelected ? '1.5px solid #A78BFA' : '1px solid rgba(10,10,10,0.1)', boxShadow: isSelected ? '0px 3px 14px rgba(139,92,246,0.18)' : '0px 1px 3px rgba(10,10,10,0.04)', opacity: uc.available ? 1 : 0.5, cursor: uc.available ? 'pointer' : 'not-allowed' }}>
                  {!uc.available && <span className="absolute top-2.5 right-2.5 rounded-full px-2 py-0.5" style={{ background: 'rgba(10,10,10,0.07)', fontFamily: 'Inter,sans-serif', fontSize: 9, fontWeight: 700, color: 'rgba(10,10,10,0.4)', letterSpacing: '0.3px' }}>SOON</span>}
                  {isSelected && <div className="absolute top-2.5 right-2.5 flex items-center justify-center rounded-full" style={{ width: 18, height: 18, background: '#7C3AED' }}><Check size={10} color="white" strokeWidth={2.5} /></div>}
                  <div className="flex items-start gap-3">
                    <div className="flex items-center justify-center rounded-lg shrink-0" style={{ width: 32, height: 32, background: isSelected ? '#EDE9FE' : 'rgba(10,10,10,0.06)' }}>
                      <uc.Icon size={16} color={isSelected ? '#7C3AED' : '#0a0a0a'} />
                    </div>
                    <div className="flex-1 min-w-0 pr-6">
                      <div className="flex items-center gap-2 mb-0.5">
                        <p style={{ fontFamily: 'Inter,sans-serif', fontWeight: 600, fontSize: 13, color: isSelected ? '#4C1D95' : '#0a0a0a' }}>{uc.title}</p>
                        <span style={{ fontFamily: 'Inter,sans-serif', fontSize: 11, color: isSelected ? 'rgba(76,29,149,0.5)' : 'rgba(10,10,10,0.35)' }}>{uc.tagline}</span>
                      </div>
                      <p style={{ fontFamily: 'Inter,sans-serif', fontSize: 12, color: isSelected ? 'rgba(76,29,149,0.65)' : 'rgba(10,10,10,0.55)', lineHeight: '18px', marginBottom: 8 }}>{uc.description}</p>
                      <div className="flex items-center gap-1.5 flex-wrap">
                        {uc.tools.map(t => {
                          const tp = TOOL_TAG_PASTELS[t.label];
                          return (
                          <span key={t.label} className="flex items-center gap-1 rounded-full px-2 py-0.5" style={{ background: '#ede9fe', border: '1px solid rgba(124,58,237,0.22)' }}>
                            <t.icon size={9} color="#7c3aed" />
                            <span style={{ fontFamily: 'Inter,sans-serif', fontSize: 10, fontWeight: 500, color: '#7c3aed' }}>{t.label}</span>
                          </span>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Continue button — appears when a use case is selected */}
          <AnimatePresence>
            {selectedUC && (
              <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 8 }} transition={{ duration: 0.18 }} className="mt-4">
                <button onClick={() => onSelectUseCase(selectedUC)}
                  className="flex items-center justify-center gap-2 w-full rounded-xl transition-all hover:opacity-90 active:scale-[0.99]"
                  style={{ height: 44, background: '#0a0a0a' }}>
                  <span style={{ fontFamily: 'Inter,sans-serif', fontWeight: 600, fontSize: 14, color: 'white' }}>Continue to Setup</span>
                  <ChevronRight size={15} color="white" />
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}

// ─── Main App ─────────────────────────────────────────────────────────────────

export default function App() {
  const [view, setView] = useState<AppView>('landing');
  const [direction, setDirection] = useState(1);

  // Workflow state
  const [step, setStep] = useState(2);
  const [selectedUseCase, setSelectedUseCase] = useState<string | null>(null);
  const [selectedContext, setSelectedContext] = useState<string | null>(null);
  const [uploadedFiles, setUploadedFiles] = useState<UploadedFile[]>([]);
  const [selectedAudience, setSelectedAudience] = useState<string | null>(null);
  const [criteria, setCriteria] = useState<Criterion[]>([]);
  const [objective, setObjective] = useState('');
  const [briefFile, setBriefFile] = useState<string | null>(null);

  // Tool state
  const [selectedTool, setSelectedTool] = useState<string | null>(null);

  // Announcement banner state
  const [bannerOpen, setBannerOpen] = useState(true);
  const [bannerExpanded, setBannerExpanded] = useState(false);
  const [highlightSignal, setHighlightSignal] = useState(0);
  const handleTryWorkflow = () => setHighlightSignal(s => s + 1);

  // Auto-init criteria when use case + context are selected
  useEffect(() => {
    if (selectedUseCase && selectedContext) {
      const defs = getCriteria(selectedUseCase, selectedContext);
      setCriteria(defs.map((d, i) => ({ id: d.id, label: d.label, hint: d.hint, selected: i < 3 })));
    }
  }, [selectedUseCase, selectedContext]);

  // Generate research objective only after a context brief is uploaded in Step 2.
  // Clear it if the brief is removed so the objective reflects current input state.
  useEffect(() => {
    if (selectedUseCase && selectedContext && briefFile) {
      setObjective(generateObjective(selectedUseCase, selectedContext));
    } else {
      setObjective('');
    }
  }, [selectedUseCase, selectedContext, briefFile]);

  const handleSelectTool = (id: string) => {
    setSelectedTool(id);
    setDirection(1);
    setView('tool');
  };

  const handleSelectUseCase = (id: string) => {
    setSelectedUseCase(id);
    setSelectedContext(null);
    setBriefFile(null);
    setStep(2);
    setDirection(1);
    setView('workflow');
  };

  const goBack = () => {
    setDirection(-1);
    if (view === 'workflow') {
      if (step > 2) { setStep(s => s - 1); }
      else { setView('landing'); }
    } else if (view === 'tool') {
      setView('landing');
    }
  };

  const goForward = () => {
    if (!canContinue()) return;
    setDirection(1);
    setStep(s => Math.min(s + 1, 5));
  };

  const canContinue = () => {
    if (step === 2) return selectedContext !== null;
    if (step === 3) return uploadedFiles.length > 0;
    if (step === 4) return selectedAudience !== null;
    if (step === 5) return criteria.filter(c => c.selected).length > 0;
    return false;
  };

  const slideVariants = {
    enter: (dir: number) => ({ x: dir > 0 ? 40 : -40, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (dir: number) => ({ x: dir > 0 ? -40 : 40, opacity: 0 }),
  };

  const showBack = view !== 'landing' && view !== 'success';
  const backLabel = view === 'workflow' && step === 2 ? 'All Options' : view === 'tool' ? 'All Options' : 'Back';

  return (
    <div className="relative w-full bg-white overflow-hidden" style={{ minHeight: '100vh' }}>
      {/* <NavBar onBack={showBack ? goBack : undefined} backLabel={backLabel} /> */}

      <div className="absolute inset-0 overflow-y-auto" style={{ paddingTop: 0 }}>
        {view === 'landing' && (
          <AnnouncementStrip
            open={bannerOpen}
            expanded={bannerExpanded}
            onToggleExpand={() => setBannerExpanded(v => !v)}
            onDismiss={() => setBannerOpen(false)}
            onTry={handleTryWorkflow}
          />
        )}
        <div className="flex flex-col items-center py-10 px-6 min-h-full">
          <AnimatePresence mode="wait" custom={direction}>
            {view === 'landing' && (
              <motion.div key="landing" custom={direction} variants={slideVariants} initial="enter" animate="center" exit="exit" transition={{ duration: 0.22, ease: [0.25, 0.1, 0.25, 1] }} className="w-full flex justify-center">
                <LandingView onSelectTool={handleSelectTool} onSelectUseCase={handleSelectUseCase} highlightSignal={highlightSignal} />
              </motion.div>
            )}

            {view === 'workflow' && selectedUseCase && view !== 'success' && (
              <motion.div key={`workflow-${step}`} custom={direction} variants={slideVariants} initial="enter" animate="center" exit="exit" transition={{ duration: 0.22, ease: [0.25, 0.1, 0.25, 1] }} style={{ width: '100%', maxWidth: 540 }}>
                <div className="mb-8"><StepProgress step={step} /></div>
                {step === 2 && <Step2 useCaseId={selectedUseCase} selected={selectedContext} onSelect={setSelectedContext} briefFile={briefFile} onBriefFileChange={setBriefFile} />}
                {step === 3 && <Step3 useCaseId={selectedUseCase} files={uploadedFiles} onFilesChange={setUploadedFiles} />}
                {step === 4 && <Step3Audience useCaseId={selectedUseCase} audience={selectedAudience} onAudienceChange={setSelectedAudience} />}
                {step === 5 && selectedContext && <Step4 useCaseId={selectedUseCase} contextId={selectedContext} criteria={criteria} setCriteria={setCriteria} objective={objective} setObjective={setObjective} onSubmit={() => setView('success')} onBack={goBack} />}
                {step < 5 && (
                  <div className="flex items-center justify-between mt-7">
                    <button onClick={goBack} className="flex items-center gap-1.5 rounded-xl px-4 py-2.5 transition-all" style={{ border: '1px solid rgba(10,10,10,0.12)', background: 'white' }}>
                      <ChevronLeft size={15} color="#0a0a0a" />
                      <span style={{ fontFamily: 'Inter,sans-serif', fontSize: 13, fontWeight: 500, color: '#0a0a0a' }}>Back</span>
                    </button>
                    <button onClick={goForward} className="flex items-center gap-1.5 rounded-xl px-5 py-2.5 transition-all" style={{ background: canContinue() ? '#0a0a0a' : 'rgba(10,10,10,0.1)', cursor: canContinue() ? 'pointer' : 'not-allowed' }}>
                      <span style={{ fontFamily: 'Inter,sans-serif', fontSize: 13, fontWeight: 600, color: canContinue() ? 'white' : 'rgba(10,10,10,0.3)' }}>Continue</span>
                      <ChevronRight size={15} color={canContinue() ? 'white' : 'rgba(10,10,10,0.3)'} />
                    </button>
                  </div>
                )}
              </motion.div>
            )}

            {view === 'tool' && selectedTool && (
              <motion.div key={`tool-${selectedTool}`} custom={direction} variants={slideVariants} initial="enter" animate="center" exit="exit" transition={{ duration: 0.22, ease: [0.25, 0.1, 0.25, 1] }} style={{ width: '100%', maxWidth: 540 }}>
                <ToolSetupView toolId={selectedTool} onBack={goBack} onLaunch={() => setView('success')} />
              </motion.div>
            )}

            {view === 'success' && (
              <motion.div key="success" custom={direction} variants={slideVariants} initial="enter" animate="center" exit="exit" transition={{ duration: 0.22, ease: [0.25, 0.1, 0.25, 1] }} style={{ width: '100%', maxWidth: 540 }}>
                <ResearchProgressView />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
