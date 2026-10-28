import React, { useState, useMemo, useRef, useEffect } from 'react';
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from 'framer-motion';
import {
    FaGithub,
    FaExternalLinkAlt,
    FaBolt,
    FaShoppingBag,
    FaUsers,
    FaGraduationCap,
    FaRecycle,
    FaChartBar,
    FaRobot,
    FaBookOpen,
    FaUserTie,
    FaExclamationTriangle,
} from 'react-icons/fa';
import {
    SiReact,
    SiTypescript,
    SiVite,
    SiJavascript,
    SiHtml5,
    SiCss,
    SiPython,
    SiFastapi,
    SiGooglegemini,
    SiOpencv,
    SiFlask,
    SiTensorflow,
    SiSupabase,
    SiPostgresql,
    SiNodedotjs,
    SiExpress,
    SiFirebase,
    SiNextdotjs,
    SiTailwindcss,
    SiPandas,
    SiNumpy,
    SiJupyter,
    SiScikitlearn,
    SiThreedotjs,
    SiOpenai,
} from 'react-icons/si';
import {
    MdOutlineCamera,
    MdOutlineScience,
    MdAccountBalanceWallet,
    MdLocationCity,
    MdOutlineAnalytics,
    MdOutlineSportsEsports,
} from 'react-icons/md';
import { BsCalendarCheck, BsCheckCircleFill } from 'react-icons/bs';
import {
    LuLayers,
    LuSparkles,
    LuBrain,
    LuEye,
    LuActivity,
    LuTrendingUp,
    LuSearch,
    LuWorkflow,
} from 'react-icons/lu';
import { TbBrandChrome } from 'react-icons/tb';
import CaseStudyModal from './CaseStudyModal';

/* ─────────────────────────────────────────────────────────────
   1. FEATURED PROJECTS (Canonical 9 Primary Applications)
   Arranged in a spacious, large 2-column showcase layout
───────────────────────────────────────────────────────────── */
const featuredProjects = [
    {
        id: 'ai-video-agent',
        orderNumber: '01',
        icon: FaRobot,
        category: 'AI AUTOMATION / BROWSER AGENTS',
        categoryColor: 'text-amber-400 border-amber-500/40 bg-amber-500/10',
        status: 'Experimental / In Progress',
        statusColor: 'text-amber-400 border-amber-500/40 bg-amber-500/10',
        title: 'AI Video Agent — 5-Scene Generator',
        shortTitle: 'AI Video Agent',
        description:
            'Experimental browser-automation agent designed to coordinate ChatGPT and Google Gemini to automate the production workflow for a cinematic documentary consisting of five connected scenes titled "AI IS CHANGING EVERYTHING".',
        problemStatement:
            'Producing multi-scene documentary content requires constant manual coordination across disparate AI tools — generating script beats in ChatGPT, transferring structured video descriptions, submitting to Gemini for rendering, and tracking generation state across browser sessions.',
        features: [
            'Chrome Remote Debugging Protocol (CDP) connection to local Chromium instance on port 9222',
            'Automated prompt extraction pipeline parsing streaming ChatGPT response DOM',
            'Scene prompt staging & local caching across 5 distinct narrative scenes',
            'Automated dispatch into Google Gemini video generation interface with parameter validation',
            'DOM mutation observers monitoring video rendering completion states and file availability',
        ],
        technologies: [
            { label: 'Node.js', icon: SiNodedotjs, color: '#22c55e' },
            { label: 'JavaScript', icon: SiJavascript, color: '#facc15' },
            { label: 'Playwright', icon: LuWorkflow, color: '#2dd4bf' },
            { label: 'Chrome CDP', icon: TbBrandChrome, color: '#38bdf8' },
            { label: 'ChatGPT', icon: SiOpenai, color: '#10a37f' },
            { label: 'Google Gemini', icon: SiGooglegemini, color: '#4796e3' },
        ],
        engineeringHighlight:
            'Event-driven MutationObserver tracking ChatGPT stop-generating button states for reliable prompt extraction without arbitrary timeouts.',
        role: 'Agentic System Design & Automation Engineer',
        contribution:
            'Sole developer. Authored Chrome CDP connection over WebSocket (port 9222), ChatGPT streaming DOM response parser, and scene prompt staging pipeline.',
        github: 'https://github.com/karmjitsg09',
        live: null,
        border: 'border-amber-500/30',
        glow: 'rgba(245,158,11,0.25)',
        accent: 'from-amber-400 via-neon-cyan to-neon-purple',
        visual: {
            icon: FaRobot,
            iconColor: '#f59e0b',
            bgGradient: 'from-amber-500/20 via-black/50 to-neon-cyan/10',
            features: [
                { label: 'CDP Chrome Target', value: 'Port 9222 ✓', color: '#f59e0b' },
                { label: 'ChatGPT Prompt Extractor', value: 'DOM Parsed ✓', color: '#00ffea' },
                { label: 'Gemini Video Submitter', value: 'Integrated ✓', color: '#4796e3' },
                { label: 'Autonomous 5-Scene Run', value: 'In Progress ⏳', color: '#facc15' },
            ],
        },
        caseStudy: {
            role: 'Agentic System Design & Browser Automation Engineer',
            problem:
                'Documentary video creation requires coordinating creative text synthesis with heavy generative video models. Manual handoffs between ChatGPT (storyboarding scene prompts) and Gemini (video rendering) create friction, context loss, and high human overhead. The goal is an autonomous five-scene browser agent pipeline for "AI IS CHANGING EVERYTHING".',
            workflowTitle: 'Intended 8-Stage Autonomous Pipeline',
            workflowDisclaimer:
                'Individual browser connection, prompt extraction, and status inspection scripts have been verified in development. The uninterrupted autonomous five-scene loop and final video assembly remain under active engineering.',
            workflow: [
                {
                    title: 'Initialize Browser',
                    description: 'Connect to debugging-enabled Chromium instance over CDP WebSocket (port 9222) and identify target tabs.',
                    verified: true,
                },
                {
                    title: 'Generate Scene Prompt',
                    description: 'Submit scene requirements to ChatGPT target tab with strict pacing and cinematic framing instructions.',
                    verified: true,
                },
                {
                    title: 'Extract and Save Prompt',
                    description: 'Inspect ChatGPT response DOM, parse streaming code blocks, and cache scene prompt to disk.',
                    verified: true,
                },
                {
                    title: 'Submit to Gemini',
                    description: 'Switch to Gemini target tab, locate generative video prompt inputs, and dispatch scene prompt.',
                    verified: true,
                },
                {
                    title: 'Verify Video Result',
                    description: 'Observe DOM mutations, inspect video elements, and poll for rendering state transitions.',
                    verified: true,
                },
                {
                    title: 'Loop Next Scene',
                    description: 'Advance scene counter (Scenes 1 through 5) maintaining narrative and visual style continuity.',
                    verified: false,
                },
                {
                    title: 'Verify All 5 Scenes',
                    description: 'Execute integrity checks on all 5 rendered scene outputs, verifying frame duration and file availability.',
                    verified: false,
                },
                {
                    title: 'Assemble Documentary',
                    description: 'Programmatically stitch five scene video outputs into a cohesive final documentary cut.',
                    verified: false,
                },
            ],
            challenges: [
                {
                    title: 'Input Detection & Simulated Event Dispatch',
                    detail:
                        'Modern rich-text inputs in ChatGPT use complex event listeners. Standard keyboard simulation occasionally lost characters. Solved by synthesizing native clipboard and composition events directly into the active ProseMirror element.',
                },
                {
                    title: 'Streaming Response Extraction Timing',
                    detail:
                        'Polling the ChatGPT output element before markdown generation completes yielded truncated prompts. Replaced fixed timeouts with a MutationObserver pattern tracking the stop-generating button state.',
                },
                {
                    title: 'Gemini Video Status Detection',
                    detail:
                        'Video generation on Gemini takes variable intervals depending on cloud GPU queue depth. Implemented exponential backoff polling inspecting the video container DOM to reliably detect completion.',
                },
            ],
            implementation: {
                reasoning:
                    'To coordinate disparate stateful browser apps without fragile extension APIs, I utilized Playwright over Chrome Remote Debugging Protocol (CDP). This connects directly to a running Chromium profile on port 9222, reusing active authenticated sessions for both ChatGPT and Gemini without credential exposure.',
                codeTitle: 'Playwright CDP Browser Target Acquisition',
                codeLang: 'javascript',
                code: `// Connect to running Chromium instance via Remote Debugging Protocol
const { chromium } = require('playwright');

async function connectAgent() {
  const browser = await chromium.connectOverCDP('http://127.0.0.1:9222');
  const defaultContext = browser.contexts()[0];
  const pages = defaultContext.pages();

  const chatGptPage = pages.find(p => p.url().includes('chatgpt.com'));
  const geminiPage = pages.find(p => p.url().includes('gemini.google.com'));

  console.log(\`Targets acquired: ChatGPT=\${!!chatGptPage}, Gemini=\${!!geminiPage}\`);
  return { browser, chatGptPage, geminiPage };
}`,
            },
            statusEvaluation: {
                verified: [
                    'Connecting to debugging-enabled Chromium instance over CDP.',
                    'Target discovery for ChatGPT and Google Gemini browser tabs.',
                    'Submitting prompt-generation instructions to ChatGPT.',
                    'Extracting generated video scene prompts from ChatGPT DOM.',
                    'Staging scene prompt files to local disk.',
                    'Submitting extracted video prompts into Google Gemini.',
                    'Inspecting available video elements and observing generation states.',
                ],
                unverified: [
                    'Fully autonomous uninterrupted 5-scene run without manual intervention.',
                    'Automatic error recovery on transient Gemini rate limits or generation failures.',
                    'End-to-end multi-scene assembly into a single video file.',
                ],
            },
            learnings:
                'Automating cutting-edge web applications requires moving beyond brittle CSS selectors. Real-world browser agents require robust state machines, decoupled staging of interim artifacts, and clear operational observability so humans can inspect and intervene when necessary.',
        },
    },
    {
        id: 'kalvi-learn',
        orderNumber: '02',
        icon: FaGraduationCap,
        category: 'FULL-STACK / LEARNING PLATFORM',
        categoryColor: 'text-neon-cyan border-neon-cyan/40 bg-neon-cyan/10',
        status: 'Live / Case Study',
        statusColor: 'text-emerald-400 border-emerald-500/40 bg-emerald-500/10',
        title: 'KalviLearn — Engineering Case Study',
        shortTitle: 'KalviLearn',
        description:
            'Comprehensive student learning portal, mentorship allocation system, and challenge workspace engineered with Next.js, TypeScript, and Supabase during my Kalvium curriculum.',
        problemStatement:
            'During student cohort onboarding, concurrent mentor assignments led to race conditions that assigned multiple mentors to one student, while high-velocity chat messaging experienced desync due to schema mismatches.',
        features: [
            'Interactive course curriculum & coding challenge progression tracking',
            'Concurrency-safe student-mentor allocation with PostgreSQL partial unique indexes',
            'Supabase-backed persistent messaging & conversation channels with cascade referential integrity',
            'Activity streak calculation with timezone-aware midnight boundary logic',
            'Role-protected student, mentor, and administrator dashboards',
        ],
        technologies: [
            { label: 'Next.js', icon: SiNextdotjs, color: '#ffffff' },
            { label: 'React', icon: SiReact, color: '#61dafb' },
            { label: 'TypeScript', icon: SiTypescript, color: '#3178c6' },
            { label: 'Supabase', icon: SiSupabase, color: '#3ecf8e' },
            { label: 'PostgreSQL', icon: SiPostgresql, color: '#336791' },
            { label: 'Tailwind CSS', icon: SiTailwindcss, color: '#38bdf8' },
        ],
        engineeringHighlight:
            'Enforced invariants at the PostgreSQL storage layer using a partial unique index (WHERE status = "active"), eliminating application-level concurrency race conditions.',
        role: 'Lead Full-Stack Architect',
        contribution:
            'Sole engineer for relational database schema design, concurrency handling, and Next.js frontend implementation.',
        github: 'https://github.com/karmjitsg09',
        live: 'https://kalvilearn.vercel.app/dashboard',
        border: 'border-neon-cyan/30',
        glow: 'rgba(0,255,234,0.25)',
        accent: 'from-neon-cyan via-neon-blue to-neon-purple',
        visual: {
            icon: FaGraduationCap,
            iconColor: '#00ffea',
            bgGradient: 'from-neon-cyan/20 via-black/50 to-neon-purple/10',
            features: [
                { label: 'Mentor Allocation Index', value: 'Unique Filter ✓', color: '#00ffea' },
                { label: 'Chat Persistence', value: 'Supabase Sync ✓', color: '#00d4ff' },
                { label: 'Challenge Tracker', value: 'Live ✓', color: '#b400ff' },
                { label: 'Production Deployment', value: 'Vercel Active ✓', color: '#38bdf8' },
            ],
        },
        caseStudy: {
            role: 'Lead Full-Stack Architect',
            problem:
                'KalviLearn manages coding milestones, peer reviews, and mentor allocations for student cohorts. As active enrollment scaled, concurrent student onboarding triggers produced severe concurrency anomalies: multiple mentors were assigned to the same student in violation of business rules, and high-frequency messaging exhibited desynchronization.',
            challenges: [
                {
                    title: 'Mentor Allocation Race Condition',
                    detail:
                        'When multiple mentors or automatic triggers executed near-simultaneously, non-atomic SELECT-then-INSERT logic created duplicate active assignments, corrupting student progress views.',
                },
                {
                    title: 'Supabase Realtime Messaging Schema Desynchronization',
                    detail:
                        'A database schema divergence between conversation header identifiers and direct message foreign keys resulted in silent message drops during websocket payload delivery.',
                },
                {
                    title: 'Timezone-Sensitive Streak Persistence',
                    detail:
                        'Student coding activity streaks were resetting prematurely for users working across midnight boundary windows due to naive UTC timestamp comparisons.',
                },
            ],
            implementation: {
                reasoning:
                    'Rather than relying on client-side mutexes or error-prone application-level locks (which fail in multi-instance serverless deployments on Vercel), I enforced invariants at the PostgreSQL storage layer using a partial unique index. This guaranteed that only one assignment with status="active" can ever exist for a student, returning deterministic constraint violation errors on concurrent collisions.',
                codeTitle: 'PostgreSQL Partial Unique Index & Schema Reconciliation',
                codeLang: 'sql',
                code: `-- 1. Invariant: Prevent concurrent duplicate active mentor assignments
CREATE UNIQUE INDEX idx_single_active_mentor_per_student
ON mentor_student_allocations (student_id)
WHERE status = 'active';

-- 2. Concurrency-safe assignment procedure with upsert handling
CREATE OR REPLACE FUNCTION assign_mentor_safe(p_student_id UUID, p_mentor_id UUID)
RETURNS JSONB AS $$
BEGIN
  -- Mark any existing active allocation as archived
  UPDATE mentor_student_allocations
  SET status = 'archived', updated_at = NOW()
  WHERE student_id = p_student_id AND status = 'active';

  -- Insert new allocation guaranteed by partial index
  INSERT INTO mentor_student_allocations (student_id, mentor_id, status)
  VALUES (p_student_id, p_mentor_id, 'active');

  RETURN jsonb_build_object('success', true);
EXCEPTION
  WHEN unique_violation THEN
    RETURN jsonb_build_object('success', false, 'error', 'Concurrent allocation conflict detected');
END;
$$ LANGUAGE plpgsql;`,
            },
            statusEvaluation: {
                verified: [
                    'Partial unique index active in production PostgreSQL schema.',
                    'Concurrency test simulating simultaneous allocations verified 0 duplicate records.',
                    'Supabase realtime message schema unified with cascade referential integrity.',
                    'Production deployment verified at https://kalvilearn.vercel.app/dashboard.',
                ],
                unverified: [
                    'Full offline-first message queueing during extended network disconnects.',
                ],
            },
            learnings:
                'Application logic in serverless environments cannot be trusted for concurrency control. Database constraints are the ultimate invariant authority. Designing defensive database schemas prevents entire categories of production bugs before code even reaches runtime.',
        },
    },
    {
        id: 'lab-allotment',
        orderNumber: '03',
        icon: MdOutlineScience,
        category: 'FULL-STACK / ACADEMIC SYSTEMS',
        categoryColor: 'text-neon-purple border-neon-purple/40 bg-neon-purple/10',
        status: 'Live',
        statusColor: 'text-emerald-400 border-emerald-500/40 bg-emerald-500/10',
        title: 'Lab Allotment System',
        shortTitle: 'Lab Allotment',
        description:
            'Academic web platform engineered with Next.js and Supabase for managing university computer science laboratory allocations, batch division schedules, and student timetable search.',
        problemStatement:
            'Managing university computer science lab rooms across hundreds of students required manual allocation spreadsheets. Conflicting lab periods, double-booked equipment, and uncoordinated batch distribution (Batches A, B, C) led to constant room scheduling disputes.',
        features: [
            'Automated lab schedule & slot conflict prevention algorithms',
            'Batch configuration and division management (Batches A, B, C)',
            'Student-facing instant timetable & room lookup interface',
            'Department administrator configuration portal',
            'Mobile-optimized timetable view tailored for student lookups during class changeovers',
        ],
        technologies: [
            { label: 'Next.js', icon: SiNextdotjs, color: '#ffffff' },
            { label: 'React', icon: SiReact, color: '#61dafb' },
            { label: 'TypeScript', icon: SiTypescript, color: '#3178c6' },
            { label: 'Supabase', icon: SiSupabase, color: '#3ecf8e' },
            { label: 'PostgreSQL', icon: SiPostgresql, color: '#336791' },
            { label: 'Tailwind CSS', icon: SiTailwindcss, color: '#38bdf8' },
        ],
        engineeringHighlight:
            'Supabase PostgreSQL composite check triggers validating room and instructor slot overlaps at write time, eliminating scheduling collisions.',
        role: 'Lead Next.js & Database Developer',
        contribution:
            'Designed allocation conflict algorithms, database schema in Supabase, and responsive student timetable lookup interface.',
        github: 'https://github.com/karmjitsg09/v0-lab-allotment-final',
        live: 'https://v0-laballotmentfinal-three.vercel.app/',
        border: 'border-neon-purple/30',
        glow: 'rgba(180,0,255,0.25)',
        accent: 'from-neon-purple via-neon-blue to-neon-cyan',
        visual: {
            icon: BsCalendarCheck,
            iconColor: '#b400ff',
            bgGradient: 'from-neon-purple/20 via-black/50 to-neon-blue/10',
            features: [
                { label: 'Schedule Engine', value: 'Conflict-Free ✓', color: '#b400ff' },
                { label: 'Batch Division', value: 'Configured ✓', color: '#00d4ff' },
                { label: 'Timetable Lookup', value: 'Live ⚡', color: '#00ffea' },
                { label: 'Student Access', value: 'Verified ✓', color: '#38bdf8' },
            ],
        },
        caseStudy: {
            role: 'Lead Next.js & Database Architect',
            problem:
                'Managing university computer science lab rooms across hundreds of students required manual allocation spreadsheets. Conflicting lab periods, double-booked equipment, and uncoordinated batch distribution (Batches A, B, C) led to constant room scheduling disputes.',
            challenges: [
                {
                    title: 'Multivariable Timetable Conflict Prevention',
                    detail:
                        'Preventing scheduling collisions requires validating room capacity, instructor availability, lab course prerequisites, and student batch timetables simultaneously across overlapping time blocks.',
                },
                {
                    title: 'Sub-second Timetable Search',
                    detail:
                        'Students querying their room numbers and upcoming practicals on mobile devices during rush hours created rapid bursts of read queries against the database.',
                },
            ],
            implementation: {
                reasoning:
                    'Implemented relational schemas in Supabase with composite check constraints and index-accelerated query patterns, ensuring zero double-booked rooms at write time.',
                codeTitle: 'Supabase Schedule Slot Validation',
                codeLang: 'sql',
                code: `-- Prevent overlapping lab room bookings
CREATE OR REPLACE FUNCTION check_lab_slot_conflict()
RETURNS TRIGGER AS $$
BEGIN
  IF EXISTS (
    SELECT 1 FROM lab_allocations
    WHERE room_id = NEW.room_id
      AND day_of_week = NEW.day_of_week
      AND (NEW.start_time, NEW.end_time) OVERLAPS (start_time, end_time)
      AND id != COALESCE(NEW.id, '00000000-0000-0000-0000-000000000000'::uuid)
  ) THEN
    RAISE EXCEPTION 'Room % is already allocated for this time slot.', NEW.room_id;
  END IF;
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;`,
            },
            statusEvaluation: {
                verified: [
                    'Live timetable lookup active at https://v0-laballotmentfinal-three.vercel.app/.',
                    'Conflict detection triggers verified in Postgres.',
                    'Batch division configuration tested across CS cohorts.',
                ],
                unverified: [
                    'Biometric attendance machine integration (planned for future iteration).',
                ],
            },
            learnings:
                'Handling multi-constraint scheduling requires moving validation logic into the data layer rather than trusting client validation.',
        },
    },
    {
        id: 'smart-spend',
        orderNumber: '04',
        icon: MdAccountBalanceWallet,
        category: 'FULL-STACK / FINTECH',
        categoryColor: 'text-neon-blue border-neon-blue/40 bg-neon-blue/10',
        status: 'Live',
        statusColor: 'text-emerald-400 border-emerald-500/40 bg-emerald-500/10',
        title: 'SmartSpend — Revenue Tracker',
        shortTitle: 'SmartSpend',
        description:
            'Personal finance and cashflow tracking web application developed during Vibeathon 2025 (Replit × Polaris School of Technology), featuring real-time balance overviews and dynamic category breakdowns.',
        problemStatement:
            'Students and freelancers need an intuitive, responsive tool to track disparate revenue streams, categorize expenditures, and project monthly balances without complex spreadsheet overhead.',
        features: [
            'Real-time income and expenditure balance calculation',
            'Category distribution breakdown with responsive visual bars',
            'Transaction history filtering and balance projection',
            'Persistent storage with optimized Vercel web deployment',
            'Zero-dependency lightweight vanilla JavaScript architecture',
        ],
        technologies: [
            { label: 'JavaScript', icon: SiJavascript, color: '#facc15' },
            { label: 'HTML5', icon: SiHtml5, color: '#f97316' },
            { label: 'CSS3', icon: SiCss, color: '#38bdf8' },
            { label: 'Vercel', icon: SiVite, color: '#ffffff' },
        ],
        engineeringHighlight:
            'Pure lightweight reactive client state ledger calculating net cashflow and category distributions with zero framework overhead.',
        role: 'Full-Stack Developer (Vibeathon 2025 Sprint)',
        contribution:
            'Sole developer during 48-hour hackathon. Implemented pure JavaScript cashflow ledger with dynamic category distribution and zero dependencies.',
        github: 'https://github.com/karmjitsg09/smartspend-revenue-tracker',
        live: 'https://v0-spend-revenue-tracker.vercel.app/',
        border: 'border-neon-blue/30',
        glow: 'rgba(0,212,255,0.25)',
        accent: 'from-neon-blue via-neon-purple to-neon-cyan',
        visual: {
            icon: MdAccountBalanceWallet,
            iconColor: '#00d4ff',
            bgGradient: 'from-neon-blue/20 via-black/50 to-neon-purple/10',
            features: [
                { label: 'Hackathon Award', value: 'Vibeathon 2025 ✓', color: '#00d4ff' },
                { label: 'Revenue Tracking', value: 'Active ✓', color: '#00ffea' },
                { label: 'Balance Overview', value: 'Real-Time ✓', color: '#38bdf8' },
                { label: 'Lightweight UI', value: 'Zero Dependency ✓', color: '#a78bfa' },
            ],
        },
        caseStudy: {
            role: 'Full-Stack Developer (Vibeathon 2025 Sprint)',
            problem:
                'Personal expense trackers are often bloated with manual onboarding, slow chart libraries, and complicated multi-account workflows. Built under hackathon time constraints, SmartSpend aimed to deliver instant, zero-friction revenue and expense tracking in the browser.',
            challenges: [
                {
                    title: 'Rapid Prototyping Under Hackathon Deadlines',
                    detail:
                        'Delivering a functional, aesthetically responsive financial tool in under 48 hours without third-party framework overhead.',
                },
                {
                    title: 'Reliable Client-Side State Calculation',
                    detail:
                        'Ensuring immediate reactive re-calculation of net cash flow, percentage allocations, and transaction history filtering without lag.',
                },
            ],
            implementation: {
                reasoning:
                    'Engineered a pure lightweight JavaScript state ledger with localStorage fallback, eliminating heavy bundle overhead while preserving instant recalculation.',
                codeTitle: 'Reactive Ledger Computation',
                codeLang: 'javascript',
                code: `// Real-time ledger tallying and balance categorization
function computeCashFlow(transactions) {
  return transactions.reduce((acc, tx) => {
    const amount = Number(tx.amount) || 0;
    if (tx.type === 'income') {
      acc.totalIncome += amount;
      acc.balance += amount;
    } else {
      acc.totalExpense += amount;
      acc.balance -= amount;
      acc.byCategory[tx.category] = (acc.byCategory[tx.category] || 0) + amount;
    }
    return acc;
  }, { balance: 0, totalIncome: 0, totalExpense: 0, byCategory: {} });
}`,
            },
            statusEvaluation: {
                verified: [
                    'Developed and pitched at Vibeathon 2025 (Replit × Polaris).',
                    'Live web deployment active at https://v0-spend-revenue-tracker.vercel.app/.',
                    'Verified responsive layout and category ledger calculation.',
                ],
                unverified: [
                    'Automatic bank SMS / UPI statement ingestion.',
                ],
            },
            learnings:
                'Speed of delivery in a hackathon requires ruthlessly prioritizing the core user loop over peripheral feature scope.',
        },
    },
    {
        id: 'devmate',
        orderNumber: '05',
        icon: FaBolt,
        category: 'AI / DEVELOPER TOOLS',
        categoryColor: 'text-neon-purple border-neon-purple/40 bg-neon-purple/10',
        status: 'In Progress',
        statusColor: 'text-neon-purple border-neon-purple/40 bg-neon-purple/10',
        title: 'DevMate AI — Developer Assistant',
        shortTitle: 'DevMate AI',
        description:
            'AI-powered developer productivity assistant facilitating code explanation, algorithmic simplification, automated documentation generation, and UI-to-code synthesis using Google Gemini.',
        problemStatement:
            'Developers spend considerable time deciphering legacy codebases, authoring boilerplate API documentation, and translating interface concepts into clean component markup.',
        features: [
            'Context-aware code explanation with algorithmic complexity breakdown',
            'Automated docstring, Markdown, and JSDoc documentation synthesis',
            'FastAPI backend orchestrating Google Gemini 1.5 Pro and Flash endpoints',
            'Interactive frontend for prompt template customization',
            'Token-efficient context management with multi-file code snippet ingestion',
        ],
        technologies: [
            { label: 'React', icon: SiReact, color: '#61dafb' },
            { label: 'Python', icon: SiPython, color: '#38bdf8' },
            { label: 'FastAPI', icon: SiFastapi, color: '#009688' },
            { label: 'Google Gemini', icon: SiGooglegemini, color: '#4796e3' },
            { label: 'Vite', icon: SiVite, color: '#a78bfa' },
        ],
        engineeringHighlight:
            'Prompt engineering pipeline with structured AST reasoning for code explanation and docstring synthesis.',
        role: 'AI & Full-Stack Developer',
        contribution:
            'Authored FastAPI API gateway, Gemini prompt chains, and interactive React developer interface.',
        github: 'https://github.com/karmjitsg09',
        live: null,
        border: 'border-neon-purple/30',
        glow: 'rgba(180,0,255,0.25)',
        accent: 'from-neon-purple via-neon-blue to-neon-cyan',
        visual: {
            icon: FaBolt,
            iconColor: '#a78bfa',
            bgGradient: 'from-neon-purple/20 via-black/50 to-neon-blue/10',
            features: [
                { label: 'LLM Engine', value: 'Gemini 1.5 ✓', color: '#4796e3' },
                { label: 'API Gateway', value: 'FastAPI ✓', color: '#009688' },
                { label: 'Doc Generation', value: 'Automated ✓', color: '#a78bfa' },
                { label: 'Code Reasoning', value: 'Active ✓', color: '#00ffea' },
            ],
        },
        caseStudy: {
            role: 'AI / Full-Stack Developer',
            problem:
                'Navigating unfamiliar codebases or generating standardized API documentation requires repetitive cognitive overhead. DevMate was designed to provide automated semantic breakdown of code snippets and auto-synthesize JSDoc/Sphinx documentation.',
            challenges: [
                {
                    title: 'Token-Efficient Multi-Snippet Context',
                    detail:
                        'Sending large multi-file code snippets quickly exhausted LLM context windows. Implemented AST function extraction to isolate relevant routines.',
                },
            ],
            implementation: {
                reasoning:
                    'Built a modular FastAPI microservice integrating Google Gemini 1.5 Pro for complex reasoning and Gemini 1.5 Flash for sub-second docstring generation.',
                codeTitle: 'FastAPI Gemini Integration',
                codeLang: 'python',
                code: `# FastAPI endpoint dispatching structured code analysis to Gemini
@app.post("/api/analyze-code")
async def analyze_code(payload: CodeSnippetRequest):
    prompt = f"Analyze time complexity and summarize functionality:\\n\\n{payload.code}"
    response = model.generate_content(prompt)
    return {"analysis": response.text}`,
            },
            statusEvaluation: {
                verified: [
                    'FastAPI backend endpoint operational.',
                    'Gemini 1.5 model integration tested with Python and JavaScript snippets.',
                ],
                unverified: [
                    'VS Code IDE extension package distribution.',
                ],
            },
            learnings:
                'Decoupling the LLM orchestration layer from UI state allows rapid testing of different model weights without frontend regressions.',
        },
    },
    {
        id: 'synaptix',
        orderNumber: '06',
        icon: MdOutlineCamera,
        category: 'COMPUTER VISION / INTERACTION',
        categoryColor: 'text-neon-cyan border-neon-cyan/40 bg-neon-cyan/10',
        status: 'Experimental',
        statusColor: 'text-amber-400 border-amber-500/40 bg-amber-500/10',
        title: 'SynaptiX — Holographic Gesture UI',
        shortTitle: 'SynaptiX',
        description:
            'Touchless human-computer interface experiment combining real-time computer vision hand tracking with interactive HTML5 canvas manipulation, enabling spatial gesture control and virtual drawing.',
        problemStatement:
            'Traditional tactile interfaces require physical contact and peripherals. SynaptiX explores camera-based spatial interaction for sterile environments, digital whiteboards, and interactive presentations.',
        features: [
            '21-point hand landmark tracking and spatial coordinate estimation',
            'Fingertip motion-controlled virtual drawing and canvas manipulation',
            'Gesture state classification (drawing mode, erase mode, clear canvas)',
            'Low-latency 60 FPS browser-based rendering pipeline',
            'Touchless slide presentation control and spatial volume slider mapping',
        ],
        technologies: [
            { label: 'React', icon: SiReact, color: '#61dafb' },
            { label: 'TypeScript', icon: SiTypescript, color: '#3178c6' },
            { label: 'OpenCV', icon: SiOpencv, color: '#00d4ff' },
            { label: 'HTML5 Canvas', icon: SiHtml5, color: '#f97316' },
            { label: 'Vite', icon: SiVite, color: '#a78bfa' },
        ],
        engineeringHighlight:
            'Exponential Moving Average (EMA) smoothing over 21 landmark vectors for jitter-free finger drawing at 60 FPS.',
        role: 'Computer Vision & Spatial UI Developer',
        contribution:
            'Unified multiple gesture experiments into a single high-performance 21-point hand tracking spatial canvas in React.',
        github: 'https://github.com/karmjitsg09',
        live: null,
        border: 'border-neon-cyan/30',
        glow: 'rgba(0,255,234,0.25)',
        accent: 'from-neon-cyan via-neon-blue to-neon-purple',
        visual: {
            icon: MdOutlineCamera,
            iconColor: '#00ffea',
            bgGradient: 'from-neon-cyan/20 via-black/50 to-neon-purple/10',
            features: [
                { label: 'Landmark Tracking', value: '21 Points ✓', color: '#00ffea' },
                { label: 'Real-Time Pipeline', value: '60 FPS ✓', color: '#00d4ff' },
                { label: 'Virtual Canvas', value: 'Gesture-Driven ✓', color: '#3178c6' },
                { label: 'Spatial UI', value: 'Touchless ✓', color: '#b400ff' },
            ],
        },
        caseStudy: {
            role: 'Computer Vision & Spatial UI Developer',
            problem:
                'Touchless human-computer interaction requires reliable gesture extraction in real-world ambient lighting without specialized depth sensors or latency degradation.',
            challenges: [
                {
                    title: 'Jitter Reduction in High-Frequency Landmark Streaming',
                    detail:
                        'Raw MediaPipe hand landmark positions exhibit micro-jitter when hands hover near camera boundaries. Solved with a lightweight Exponential Moving Average (EMA) filter.',
                },
                {
                    title: 'False Positive Gesture Rejection',
                    detail:
                        'Differentiating casual finger movements from intentional gesture triggers by calculating multi-joint angle thresholds and temporal hold durations.',
                },
            ],
            implementation: {
                reasoning:
                    'Combined MediaPipe hand landmarks with OpenCV spatial vector analysis in Python and JavaScript to compute finger joint angles and Euclidean distances in real time.',
                codeTitle: 'Landmark Smoothing & Vector Metric',
                codeLang: 'python',
                code: `# Exponential Moving Average (EMA) smoothing for landmark coordinates
def smooth_landmarks(prev_pts, cur_pts, alpha=0.35):
    if prev_pts is None:
        return cur_pts
    return alpha * cur_pts + (1.0 - alpha) * prev_pts

# Euclidean distance between thumb tip and index tip for pinch gesture
def is_pinch_gesture(thumb_tip, index_tip, threshold=0.045):
    distance = np.linalg.norm(np.array(thumb_tip) - np.array(index_tip))
    return distance < threshold`,
            },
            statusEvaluation: {
                verified: [
                    'Tested real-time hand tracking and landmark extraction via standard webcam.',
                    'Verified gesture mapping for slide navigation and volume controls.',
                    'Integrated duplicate gesture experiments into single unified system.',
                ],
                unverified: [
                    'Sub-10ms latency on low-end embedded devices (e.g. Raspberry Pi).',
                ],
            },
            learnings:
                'Computer vision interfaces must account for latency and micro-jitter; mathematical smoothing transforms an erratic prototype into an intuitive tool.',
        },
    },
    {
        id: 'team-sync',
        orderNumber: '07',
        icon: FaUsers,
        category: 'FULL-STACK / PRODUCTIVITY',
        categoryColor: 'text-emerald-400 border-emerald-500/40 bg-emerald-500/10',
        status: 'Live',
        statusColor: 'text-emerald-400 border-emerald-500/40 bg-emerald-500/10',
        title: 'TeamSync — Collaborative Workspace',
        shortTitle: 'TeamSync',
        description:
            'Collaborative team workspace and project management application featuring role-based administration, task board synchronization, project milestones, and team activity monitoring.',
        problemStatement:
            'Student development teams need unified workspaces that enforce member roles, provide clear task ownership, and visualize project velocity without enterprise complexity.',
        features: [
            'Role-based access control (Admin, Member, Viewer permissions)',
            'Real-time task creation, assignment, and sprint stage tracking',
            'Supabase-backed relational database modeling and authentication',
            'Executive admin dashboard monitoring team throughput',
            'Activity audit log tracking status transitions and sprint milestone completions',
        ],
        technologies: [
            { label: 'React', icon: SiReact, color: '#61dafb' },
            { label: 'Node.js', icon: SiNodedotjs, color: '#22c55e' },
            { label: 'Supabase', icon: SiSupabase, color: '#3ecf8e' },
            { label: 'TypeScript', icon: SiTypescript, color: '#3178c6' },
            { label: 'PostgreSQL', icon: SiPostgresql, color: '#336791' },
        ],
        engineeringHighlight:
            'Row-Level Security (RLS) policies in Supabase enforcing workspace isolation and role-based sprint access.',
        role: 'Full-Stack Architect & Team Lead',
        contribution:
            'Architected team workspace permissions, task board kanban state machine, and Supabase auth flows.',
        github: 'https://github.com/karmjitsg09',
        live: 'https://teamsync-fawn.vercel.app/admin/dashboard',
        border: 'border-emerald-500/30',
        glow: 'rgba(52,211,153,0.25)',
        accent: 'from-emerald-400 via-neon-cyan to-neon-blue',
        visual: {
            icon: FaUsers,
            iconColor: '#34d399',
            bgGradient: 'from-emerald-500/20 via-black/50 to-neon-blue/10',
            features: [
                { label: 'Role-Based Access', value: 'Admin Panel ✓', color: '#34d399' },
                { label: 'Task Management', value: 'Live Kanban ✓', color: '#00d4ff' },
                { label: 'Team Workspaces', value: 'Synchronized ✓', color: '#00ffea' },
                { label: 'Database Modeling', value: 'Supabase ✓', color: '#61dafb' },
            ],
        },
        caseStudy: {
            role: 'Full-Stack Architect & Team Lead',
            problem:
                'Student engineering sprints often derail when access controls are not enforced, leading to overwritten board tasks and lost tracking history.',
            challenges: [
                {
                    title: 'Workspace Isolation via Row-Level Security',
                    detail:
                        'Securing collaborative boards without writing redundant application-layer checks on every API query.',
                },
            ],
            implementation: {
                reasoning:
                    'Configured Supabase Row Level Security (RLS) policies linking tenant organizations directly to authenticated user JWT metadata.',
                codeTitle: 'Supabase Workspace RLS Policy',
                codeLang: 'sql',
                code: `-- Enforce workspace isolation using Row-Level Security
CREATE POLICY team_workspace_isolation ON tasks
FOR ALL USING (
  workspace_id IN (
    SELECT workspace_id FROM workspace_members
    WHERE user_id = auth.uid()
  )
);`,
            },
            statusEvaluation: {
                verified: [
                    'Deployed live on Vercel at https://teamsync-fawn.vercel.app/.',
                    'Role-based dashboard verified with admin and member views.',
                ],
                unverified: [
                    'Third-party GitHub issue two-way webhook sync.',
                ],
            },
            learnings:
                'Enforcing tenant security in the database eliminates authorization leaks across multi-user web dashboards.',
        },
    },
    {
        id: 'anushka-knits',
        orderNumber: '08',
        icon: FaShoppingBag,
        category: 'FULL-STACK / E-COMMERCE',
        categoryColor: 'text-pink-400 border-pink-500/40 bg-pink-500/10',
        status: 'Completed',
        statusColor: 'text-neon-cyan border-neon-cyan/40 bg-neon-cyan/10',
        title: 'Anushka Knits World',
        shortTitle: 'Anushka Knits',
        description:
            'Boutique knitwear e-commerce storefront and product presentation catalog (developed under the Anushka Knits World / ASP Fashions project), featuring product browsing, cart inquiry management, and responsive presentation.',
        problemStatement:
            'Boutique apparel artisans require an elegant digital storefront to showcase custom knitwear lines, present seasonal collections, and streamline customer order inquiries without heavy third-party marketplace fees.',
        features: [
            'Dynamic product catalog with collection categorization and image galleries',
            'Customer cart and inquiry flow streamlining bespoke order requests',
            'Responsive shopping experience tailored for mobile and desktop shoppers',
            'Optimized client-side catalog state management',
            'Seasonal lookbook showcase highlighting handmade apparel specifications',
        ],
        technologies: [
            { label: 'HTML5', icon: SiHtml5, color: '#f97316' },
            { label: 'CSS3', icon: SiCss, color: '#38bdf8' },
            { label: 'JavaScript', icon: SiJavascript, color: '#facc15' },
            { label: 'Responsive UI', icon: FaShoppingBag, color: '#f472b6' },
        ],
        engineeringHighlight:
            'Lightweight client-side catalog state with optimized image loading and zero-dependency shopping flow.',
        role: 'Lead Frontend Developer',
        contribution:
            'Built responsive boutique apparel catalog, bespoke product inquiry cart, and consolidated ASP Fashions assets into unified storefront.',
        github: 'https://github.com/karmjitsg09/ANUSHKAA-KNITS-WORLD',
        live: null,
        border: 'border-pink-500/30',
        glow: 'rgba(244,114,182,0.25)',
        accent: 'from-pink-500 via-neon-purple to-neon-blue',
        visual: {
            icon: FaShoppingBag,
            iconColor: '#f472b6',
            bgGradient: 'from-pink-500/20 via-black/50 to-neon-purple/10',
            features: [
                { label: 'Product Catalog', value: 'Active ✓', color: '#f472b6' },
                { label: 'Customer Inquiry', value: 'Cart Flow ✓', color: '#00ffea' },
                { label: 'Responsive Design', value: 'Mobile-First ✓', color: '#a78bfa' },
                { label: 'Branding Pipeline', value: 'Unified ✓', color: '#38bdf8' },
            ],
        },
        caseStudy: {
            role: 'Lead Frontend Developer',
            problem:
                'Presenting handcrafted artisan knitwear online requires delicate imagery, responsive navigation, and intuitive cart flows without forcing customers into complicated account registrations.',
            challenges: [
                {
                    title: 'Asset Loading & Visual Fidelity',
                    detail:
                        'High-resolution garment textures were causing page jank on mobile connections. Implemented progressive image loading and responsive media queries.',
                },
            ],
            implementation: {
                reasoning:
                    'Crafted clean vanilla JavaScript cart state synchronized with browser sessionStorage, providing immediate order quotation generation.',
                codeTitle: 'Cart Inquiry State Calculation',
                codeLang: 'javascript',
                code: `// Calculate order totals and format inquiry summary
function generateInquiryPayload(cartItems) {
  return cartItems.map(item => ({
    sku: item.sku,
    title: item.title,
    quantity: item.qty,
    customMeasurements: item.measurements || 'Standard'
  }));
}`,
            },
            statusEvaluation: {
                verified: [
                    'Catalog browsing and cart selection flow tested.',
                    'Mobile layout validated across iPhone and Android viewports.',
                ],
                unverified: [
                    'Direct payment gateway integration (inquiry-based checkout implemented).',
                ],
            },
            learnings:
                'For bespoke boutique products, inquiry-driven carts often convert better than rigid payment checkouts by accommodating custom sizing requests.',
        },
    },
    {
        id: 'civic-bridge',
        orderNumber: '09',
        icon: MdLocationCity,
        category: 'FULL-STACK / CIVICTECH',
        categoryColor: 'text-neon-purple border-neon-purple/40 bg-neon-purple/10',
        status: 'Completed',
        statusColor: 'text-neon-cyan border-neon-cyan/40 bg-neon-cyan/10',
        title: 'CivicBridge — Community Reporting',
        shortTitle: 'CivicBridge',
        description:
            'Civic technology web platform engineered during a collaborative hackathon, enabling citizens to report, track, and resolve neighborhood infrastructure issues with real-time status updates.',
        problemStatement:
            'Local municipal grievances frequently go untracked due to opaque reporting mechanisms and lack of community status transparency.',
        features: [
            'Community issue reporting pipeline with location categorization',
            'Real-time status tracking pipeline (Reported, Under Review, Resolved)',
            'Express.js REST API with Google Cloud Firestore database persistence',
            'Collaborative sprint engineering with peer pull request reviews',
            'Administrative triage interface enabling municipal priority sorting',
        ],
        technologies: [
            { label: 'React', icon: SiReact, color: '#61dafb' },
            { label: 'Vite', icon: SiVite, color: '#a78bfa' },
            { label: 'Node.js', icon: SiNodedotjs, color: '#22c55e' },
            { label: 'Express', icon: SiExpress, color: '#e2e8f0' },
            { label: 'Firestore', icon: SiFirebase, color: '#ffca28' },
        ],
        engineeringHighlight:
            'Real-time issue status pipeline with geospatial tagging and indexed queries in Cloud Firestore.',
        role: 'Full-Stack Hackathon Collaborator',
        contribution:
            'Collaborative team project. Led Express REST API development, Google Cloud Firestore integration, and pull request reviews.',
        github: 'https://github.com/karmjitsg09',
        live: null,
        border: 'border-neon-purple/30',
        glow: 'rgba(180,0,255,0.25)',
        accent: 'from-neon-purple via-neon-blue to-neon-cyan',
        visual: {
            icon: MdLocationCity,
            iconColor: '#a78bfa',
            bgGradient: 'from-neon-purple/20 via-black/50 to-neon-cyan/10',
            features: [
                { label: 'Issue Reporting', value: 'Active ✓', color: '#00d4ff' },
                { label: 'Status Pipeline', value: 'Tracked ✓', color: '#00ffea' },
                { label: 'Cloud Persistence', value: 'Firestore ✓', color: '#ffca28' },
                { label: 'Team Sprint', value: 'Collaborative ✓', color: '#a78bfa' },
            ],
        },
        caseStudy: {
            role: 'Full-Stack Hackathon Collaborator',
            problem:
                'Civic infrastructure complaints are frequently lost in email inboxes without publicly verifiable resolution stages.',
            challenges: [
                {
                    title: 'Real-Time Complaint Status Pipeline',
                    detail:
                        'Designing a multi-stage status workflow accessible to both citizens and municipality operators in a hackathon sprint.',
                },
            ],
            implementation: {
                reasoning:
                    'Implemented Firestore document triggers to automatically push notification state changes as issues transition from Reported to Resolved.',
                codeTitle: 'Firestore Status Update Handler',
                codeLang: 'javascript',
                code: `// Express router handling municipal complaint status transitions
router.patch('/api/issues/:id/status', async (req, res) => {
  const { status, resolutionNotes } = req.body;
  await db.collection('issues').doc(req.params.id).update({
    status,
    resolutionNotes,
    updatedAt: new Date().toISOString()
  });
  res.json({ success: true });
});`,
            },
            statusEvaluation: {
                verified: [
                    'Verified issue creation flow with photo attachment metadata.',
                    'Tested Firestore schema and status query filtering.',
                ],
                unverified: [
                    'Integration with municipal government ticketing databases.',
                ],
            },
            learnings:
                'Fast-paced hackathons require crisp API interface contracts between teammates to prevent merge friction.',
        },
    },
];

/* ─────────────────────────────────────────────────────────────
   2. ADDITIONAL PROJECTS & EXPERIMENTS (11 Technical Entries)
   Presented with the same large, detailed showcase card format
───────────────────────────────────────────────────────────── */
const additionalProjects = [
    {
        id: 'dayflow-hrms',
        orderNumber: '10',
        title: 'Dayflow HRMS',
        shortTitle: 'Dayflow HRMS',
        category: 'FULL-STACK / HRMS / PRODUCTIVITY',
        filterCategory: 'Full-Stack',
        categoryColor: 'text-emerald-400 border-emerald-500/40 bg-emerald-500/10',
        status: 'Completed',
        statusColor: 'text-emerald-400 border-emerald-500/40 bg-emerald-500/10',
        description:
            'Led development of Dayflow HRMS during the Odoo × NMIT Bangalore Hackathon 2026, focusing on automated employee attendance tracking, leave requests, and administrative approval workflows.',
        problemStatement:
            'Small organizations struggle with complex enterprise HRMS platforms for basic daily check-ins, leave balance deductions, and manager authorizations.',
        features: [
            'Automated employee daily attendance check-in and working-hour tracking',
            'Leave application workflow with automatic balance calculation and manager approvals',
            'Administrative department directory with role-based member lookup',
            'Built under 24-hour hackathon constraints leading a 3-engineer sprint',
        ],
        technologies: [
            { label: 'React', icon: SiReact, color: '#61dafb' },
            { label: 'Python', icon: SiPython, color: '#38bdf8' },
            { label: 'HRMS Workflow', icon: FaUserTie, color: '#34d399' },
            { label: 'Team Lead', icon: FaUsers, color: '#00ffea' },
        ],
        engineeringHighlight:
            'State machine logic enforcing strict multi-level leave approvals and working hour validations.',
        role: 'Team Lead & Full-Stack Developer',
        contribution:
            'Led 3-member development team (Henrita Gladys S.J., Stacey Angel A.) at Odoo × NMIT Hackathon 2026. Architected attendance workflows and approval logic.',
        github: 'https://github.com/karmjitsg09',
        live: null,
        border: 'border-emerald-500/30',
        glow: 'rgba(52,211,153,0.25)',
        accent: 'from-emerald-400 via-neon-cyan to-neon-blue',
        visual: {
            icon: FaUserTie,
            iconColor: '#34d399',
            bgGradient: 'from-emerald-500/20 via-black/50 to-neon-cyan/10',
            features: [
                { label: 'Hackathon Role', value: 'Team Lead ✓', color: '#34d399' },
                { label: 'Attendance Logic', value: 'Automated ✓', color: '#00d4ff' },
                { label: 'Sprint Context', value: 'Odoo × NMIT ✓', color: '#00ffea' },
            ],
        },
        caseStudy: {
            role: 'Team Lead & Full-Stack Developer',
            problem: 'Developing a reliable HRMS prototype under 24-hour hackathon constraints.',
            challenges: [{ title: 'Leave State Transitions', detail: 'Ensuring concurrency safety when multiple managers approve overlapping leaves.' }],
            statusEvaluation: { verified: ['Core attendance and leave request flow functional.'], unverified: ['Biometric scanner hardware sync.'] },
            learnings: 'Leading a hackathon team requires clear task division and constant alignment on MVP scope.'
        }
    },
    {
        id: 'ai-waste',
        orderNumber: '11',
        title: 'AI Waste Management System',
        shortTitle: 'AI Waste Sorter',
        category: 'AI / COMPUTER VISION / SUSTAINABILITY',
        filterCategory: 'AI / ML',
        categoryColor: 'text-neon-blue border-neon-blue/40 bg-neon-blue/10',
        status: 'Completed',
        statusColor: 'text-emerald-400 border-emerald-500/40 bg-emerald-500/10',
        description:
            'Computer vision and deep learning classification system utilizing MobileNetV2 and TensorFlow to identify and categorize recyclable versus non-recyclable materials from video stream inputs.',
        problemStatement:
            'Manual waste segregation in recycling facilities is hazardous, error-prone, and inefficient, leading to high contamination rates in recyclable processing streams.',
        features: [
            'Real-time material classification (Plastic, Glass, Paper, Metal, Organic, Trash)',
            'Transfer-learning model fine-tuned on curated waste datasets',
            'OpenCV frame preprocessing and thresholded confidence scoring',
            'Lightweight Flask REST inference service returning sub-100ms classifications',
        ],
        technologies: [
            { label: 'Python', icon: SiPython, color: '#38bdf8' },
            { label: 'TensorFlow', icon: SiTensorflow, color: '#ff6f00' },
            { label: 'OpenCV', icon: SiOpencv, color: '#00ffea' },
            { label: 'Flask', icon: SiFlask, color: '#ffffff' },
        ],
        engineeringHighlight:
            'Quantized MobileNetV2 weights to ensure low-latency inference on standard CPU webcam hardware.',
        role: 'Computer Vision / ML Developer',
        contribution:
            'Trained transfer-learning CNN model with MobileNetV2 in TensorFlow, implemented OpenCV video capture pipeline, and built Flask inference API.',
        github: 'https://github.com/karmjitsg09',
        live: null,
        border: 'border-neon-blue/30',
        glow: 'rgba(0,212,255,0.25)',
        accent: 'from-neon-blue via-emerald-400 to-neon-cyan',
        visual: {
            icon: FaRecycle,
            iconColor: '#38bdf8',
            bgGradient: 'from-neon-blue/20 via-black/50 to-emerald-500/10',
            features: [
                { label: 'Model Backbone', value: 'MobileNetV2 ✓', color: '#38bdf8' },
                { label: 'Vision Stream', value: 'OpenCV ✓', color: '#00ffea' },
                { label: 'Inference Latency', value: '<100ms ✓', color: '#34d399' },
            ],
        },
        caseStudy: {
            role: 'Computer Vision / ML Developer',
            problem: 'Accurately categorizing waste streams from variable ambient camera angles.',
            challenges: [{ title: 'Lighting & Occlusion Variance', detail: 'Addressed by extensive data augmentation including rotation and contrast normalization.' }],
            statusEvaluation: { verified: ['Trained CNN model with OpenCV video classification pipeline.'], unverified: ['Robotic sorting arm actuator integration.'] },
            learnings: 'Model quantization enables deep learning models to run fluidly on low-cost edge devices.'
        }
    },
    {
        id: 'posestrike',
        orderNumber: '12',
        title: 'PoseStrike — Motion-Controlled Fighter',
        shortTitle: 'PoseStrike',
        category: 'COMPUTER VISION / INTERACTIVE GAMES',
        filterCategory: 'Computer Vision',
        categoryColor: 'text-neon-cyan border-neon-cyan/40 bg-neon-cyan/10',
        status: 'Experimental',
        statusColor: 'text-amber-400 border-amber-500/40 bg-amber-500/10',
        description:
            'Motion-controlled 2D fighting game prototype translating real-time webcam body pose landmark vectors into in-game player movement, striking, and blocking actions.',
        problemStatement:
            'Exergaming and body-controlled games typically demand proprietary hardware (Kinect, VR sensors). PoseStrike explores zero-hardware web gaming via commodity cameras.',
        features: [
            'Real-time upper-body skeletal tracking (wrists, elbows, shoulders)',
            'Strike velocity calculation triggering punch impact animations and hitboxes',
            'Guard stance detection calculating wrist-to-head proximity',
            '60 FPS HTML5 Canvas sprite animation and dynamic particle impacts',
        ],
        technologies: [
            { label: 'Python', icon: SiPython, color: '#38bdf8' },
            { label: 'OpenCV', icon: SiOpencv, color: '#00ffea' },
            { label: 'JavaScript', icon: SiJavascript, color: '#facc15' },
            { label: 'HTML5 Canvas', icon: SiHtml5, color: '#f97316' },
        ],
        engineeringHighlight:
            'Kinematic velocity thresholding on wrist landmark vectors to distinguish intentional jabs from ambient posture adjustments.',
        role: 'Computer Vision & Game Developer',
        contribution:
            'Sole developer. Integrated webcam body pose estimation with HTML5 canvas physics, collision detection, and punch/block velocity thresholds.',
        github: 'https://github.com/karmjitsg09',
        live: null,
        border: 'border-neon-cyan/30',
        glow: 'rgba(0,255,234,0.25)',
        accent: 'from-neon-cyan via-amber-400 to-neon-purple',
        visual: {
            icon: MdOutlineSportsEsports,
            iconColor: '#00ffea',
            bgGradient: 'from-neon-cyan/20 via-black/50 to-amber-500/10',
            features: [
                { label: 'Pose Engine', value: 'Body Landmarks ✓', color: '#00ffea' },
                { label: 'Strike Velocity', value: 'Tracked ✓', color: '#facc15' },
                { label: 'Physics Loop', value: '60 FPS Canvas ✓', color: '#38bdf8' },
            ],
        },
        caseStudy: {
            role: 'Computer Vision & Game Developer',
            problem: 'Translating body landmarks into low-latency in-game hitboxes without specialized gaming sensors.',
            challenges: [{ title: 'Hitbox Synchronization', detail: 'Calibrated virtual punch impact frames with real-world arm extensions.' }],
            statusEvaluation: { verified: ['Prototype body tracking and punch collision logic working.'], unverified: ['Multiplayer web socket matchmaking.'] },
            learnings: 'Real-time interactive gaming requires decoupling visual rendering from landmark extraction worker threads.'
        }
    },
    {
        id: 'object-detection',
        orderNumber: '13',
        title: 'AI Object Detection Pipeline',
        shortTitle: 'Object Detection',
        category: 'COMPUTER VISION / DEEP LEARNING',
        filterCategory: 'Computer Vision',
        categoryColor: 'text-neon-blue border-neon-blue/40 bg-neon-blue/10',
        status: 'Completed',
        statusColor: 'text-emerald-400 border-emerald-500/40 bg-emerald-500/10',
        description:
            'Computer vision pipeline for detecting, bounding, and classifying multiple simultaneous objects from live video input streams with latency tracking.',
        problemStatement:
            'Real-time multi-target detection in crowded visual scenes suffers from duplicate overlapping bounding boxes and latency spikes on resource-constrained devices.',
        features: [
            'Multi-class real-time object classification across 80 common object classes',
            'Custom Non-Maximum Suppression (NMS) to eliminate redundant bounding boxes',
            'Confidence threshold tuning with visual color-coded detection tags',
            'Frame-by-frame latency and FPS instrumentation HUD',
        ],
        technologies: [
            { label: 'Python', icon: SiPython, color: '#38bdf8' },
            { label: 'OpenCV', icon: SiOpencv, color: '#00ffea' },
            { label: 'TensorFlow', icon: SiTensorflow, color: '#ff6f00' },
        ],
        engineeringHighlight:
            'Optimized tensor batch slicing and OpenCV image preprocessing to maintain steady 30+ FPS throughput.',
        role: 'Computer Vision Developer',
        contribution:
            'Built video stream ingestion, bounding box annotation engine, non-maximum suppression (NMS) filtering, and frame latency benchmarking.',
        github: 'https://github.com/karmjitsg09',
        live: null,
        border: 'border-neon-blue/30',
        glow: 'rgba(0,212,255,0.25)',
        accent: 'from-neon-blue via-neon-cyan to-indigo-500',
        visual: {
            icon: LuEye,
            iconColor: '#00d4ff',
            bgGradient: 'from-neon-blue/20 via-black/50 to-indigo-500/10',
            features: [
                { label: 'Classes Detected', value: '80 Classes ✓', color: '#00d4ff' },
                { label: 'Suppression', value: 'NMS Filtered ✓', color: '#00ffea' },
                { label: 'Throughput', value: '30+ FPS ✓', color: '#34d399' },
            ],
        },
        caseStudy: {
            role: 'Computer Vision Developer',
            problem: 'Maintaining consistent real-time frame rates during multi-target video stream parsing.',
            challenges: [{ title: 'Bounding Box Overlap', detail: 'Tuned IoU thresholds in Non-Maximum Suppression to balance precision and recall.' }],
            statusEvaluation: { verified: ['Tested multi-class video stream object detection.'], unverified: ['Edge deployment on NVIDIA Jetson.'] },
            learnings: 'Pre-allocating OpenCV frame buffers significantly reduces garbage collection pauses during live inference.'
        }
    },
    {
        id: 'emergex-healthcare',
        orderNumber: '14',
        title: 'EmergeX Healthcare / Triage Prototype',
        shortTitle: 'EmergeX Healthcare',
        category: 'AI / HEALTHCARE',
        filterCategory: 'AI / ML',
        categoryColor: 'text-pink-400 border-pink-500/40 bg-pink-500/10',
        status: 'Hackathon Prototype',
        statusColor: 'text-pink-400 border-pink-500/40 bg-pink-500/10',
        description:
            'Healthcare AI prototype developed during the National Science Day 2026 AI for Healthcare Hackathon, exploring preliminary triage categorization and emergency resource routing.',
        problemStatement:
            'Emergency medical waiting rooms face severe staffing constraints, causing delays in identifying critically deteriorating patients from non-urgent cases.',
        features: [
            'Structured patient symptom intake flow with pain scale and duration metrics',
            'Rule-assisted severity classification (Emergency, Urgent, Non-Urgent)',
            'FastAPI backend integrating Google Gemini API for medical term normalization',
            'Emergency department resource dashboard prototype',
        ],
        technologies: [
            { label: 'React', icon: SiReact, color: '#61dafb' },
            { label: 'Python', icon: SiPython, color: '#38bdf8' },
            { label: 'FastAPI', icon: SiFastapi, color: '#009688' },
            { label: 'Gemini API', icon: SiGooglegemini, color: '#4796e3' },
        ],
        engineeringHighlight:
            'Strict schema validation enforcing that AI outputs only normalize descriptive terms without attempting autonomous medical diagnoses.',
        role: 'Healthcare AI Developer',
        contribution:
            'National Science Day 2026 Hackathon project. Engineered clinical triage intake questionnaire, FastAPI endpoint, and Gemini symptom analysis prototype.',
        github: 'https://github.com/karmjitsg09',
        live: null,
        border: 'border-pink-500/30',
        glow: 'rgba(244,63,94,0.25)',
        accent: 'from-pink-500 via-rose-500 to-neon-purple',
        visual: {
            icon: LuActivity,
            iconColor: '#f43f5e',
            bgGradient: 'from-pink-500/20 via-black/50 to-neon-purple/10',
            features: [
                { label: 'Hackathon Context', value: 'National Science Day ✓', color: '#f43f5e' },
                { label: 'API Backend', value: 'FastAPI ✓', color: '#00ffea' },
                { label: 'AI Assistance', value: 'Gemini Triage ✓', color: '#a78bfa' },
            ],
        },
        caseStudy: {
            role: 'Healthcare AI Developer',
            problem: 'Structuring natural language symptom complaints into standardized triage severity tags.',
            challenges: [{ title: 'Deterministic Fallbacks', detail: 'Created rule-based clinical checklists that override AI suggestions for red-flag symptoms.' }],
            statusEvaluation: { verified: ['Intake prototype and symptom normalization functional.'], unverified: ['Hospital EHR system integration.'] },
            learnings: 'Healthcare AI requires strict defensive guardrails: AI assists triage prioritization, but never replaces clinical staff.'
        }
    },
    {
        id: 'early-warning-system',
        orderNumber: '15',
        title: 'Early Warning System for At-Risk Students',
        shortTitle: 'At-Risk Student ML',
        category: 'MACHINE LEARNING / ACADEMIC RESEARCH',
        filterCategory: 'Research',
        categoryColor: 'text-neon-purple border-neon-purple/40 bg-neon-purple/10',
        status: 'Research in Progress',
        statusColor: 'text-neon-purple border-neon-purple/40 bg-neon-purple/10',
        description:
            'Machine learning research investigating early identification of higher-education students at risk of academic distress by modeling attendance patterns, assessment scores, and LMS engagement signals.',
        problemStatement:
            'Higher education institutions notice student academic distress too late (after midterms or final dropouts), preventing timely mentorship and remedial academic intervention.',
        features: [
            'Multi-model benchmarking framework (Logistic Regression, Decision Trees, Random Forest, SVM, XGBoost)',
            'Feature engineering analyzing rolling attendance deltas, quiz timelines, and lab submissions',
            'Synthetic data pipeline handling severe class imbalance via SMOTE',
            'Interpretability analysis ranking early warning indicators for faculty advisors',
        ],
        technologies: [
            { label: 'Python', icon: SiPython, color: '#38bdf8' },
            { label: 'Scikit-Learn', icon: SiScikitlearn, color: '#f89939' },
            { label: 'Pandas', icon: SiPandas, color: '#150458' },
            { label: 'NumPy', icon: SiNumpy, color: '#4d77cf' },
        ],
        engineeringHighlight:
            'Benchmarking ROC-AUC and Recall on imbalanced cohorts to minimize false negatives (failing to identify a genuinely struggling student).',
        role: 'Undergraduate ML Researcher',
        contribution:
            'Authoring research framework at Yenepoya University. Curating academic features, implementing Scikit-Learn pipelines, and evaluating cross-validated models.',
        github: 'https://github.com/karmjitsg09',
        live: null,
        border: 'border-neon-purple/30',
        glow: 'rgba(180,0,255,0.25)',
        accent: 'from-neon-purple via-indigo-500 to-neon-cyan',
        visual: {
            icon: LuBrain,
            iconColor: '#a78bfa',
            bgGradient: 'from-neon-purple/20 via-black/50 to-neon-cyan/10',
            features: [
                { label: 'Research Scope', value: 'Undergrad ML ✓', color: '#a78bfa' },
                { label: 'Model Benchmarking', value: '5 Algorithms ✓', color: '#00ffea' },
                { label: 'Metric Focus', value: 'Recall / ROC-AUC ✓', color: '#38bdf8' },
            ],
        },
        caseStudy: {
            role: 'Undergraduate ML Researcher',
            problem: 'Developing transparent machine learning models to detect student drop-out risks before exam failures.',
            challenges: [{ title: 'Class Imbalance', detail: 'Used stratified k-fold splits and SMOTE oversampling to ensure accurate recall for minority at-risk classes.' }],
            statusEvaluation: { verified: ['Implemented Scikit-learn baseline pipelines and feature extraction.'], unverified: ['Production institutional SIS deployment.'] },
            learnings: 'In predictive education models, maximizing recall is far more critical than raw accuracy to avoid leaving struggling students behind.'
        }
    },
    {
        id: 'interactive-portfolio',
        orderNumber: '16',
        title: 'Interactive 3D Developer Portfolio',
        shortTitle: '3D Portfolio',
        category: 'WEB / 3D GRAPHICS & ANIMATION',
        filterCategory: 'Full-Stack',
        categoryColor: 'text-neon-cyan border-neon-cyan/40 bg-neon-cyan/10',
        status: 'Live',
        statusColor: 'text-emerald-400 border-emerald-500/40 bg-emerald-500/10',
        description:
            'This personal portfolio website exploring React 19, Three.js shaders via React Three Fiber, physical 3D tilt hover physics, and responsive recruiter-oriented case studies.',
        problemStatement:
            'Standard portfolio templates feel static and uninspiring, failing to demonstrate a developer\'s real capabilities in modern web animation, 3D graphics, and responsive UI architecture.',
        features: [
            'Interactive Three.js 3D canvas with MeshDistortMaterial and dynamic mouse orbit controls',
            'Dual-layer custom HTML5 canvas particle background with organic 2D wandering physics',
            'Physical 3D card tilt tracking normalized mouse coordinates with Framer Motion springs',
            'Comprehensive case study modal with 8-stage browser agent pipeline visualization',
            'Zero-dependency accessible design with prefers-reduced-motion support',
        ],
        technologies: [
            { label: 'React 19', icon: SiReact, color: '#61dafb' },
            { label: 'Three.js', icon: SiThreedotjs, color: '#ffffff' },
            { label: 'Tailwind CSS', icon: SiTailwindcss, color: '#38bdf8' },
            { label: 'Framer Motion', icon: SiVite, color: '#a78bfa' },
        ],
        engineeringHighlight:
            'Spring-damped mouse tracking combined with Canvas 2D frame scheduling optimized for zero drop in 60 FPS frame rates.',
        role: 'Creative Frontend Engineer',
        contribution:
            'Sole designer & developer. Built React Three Fiber 3D sphere/torus scenes, Framer Motion spring physics, custom 2D canvas particle engine, and recruiter case studies.',
        github: 'https://github.com/karmjitsg09/MyPortfolio',
        live: 'https://karmjit.me/',
        border: 'border-neon-cyan/30',
        glow: 'rgba(0,255,234,0.25)',
        accent: 'from-neon-cyan via-neon-blue to-neon-purple',
        visual: {
            icon: LuSparkles,
            iconColor: '#00d4ff',
            bgGradient: 'from-neon-cyan/20 via-black/50 to-neon-purple/10',
            features: [
                { label: '3D Engine', value: 'Three.js / R3F ✓', color: '#00d4ff' },
                { label: 'Physics', value: 'Framer Motion ✓', color: '#00ffea' },
                { label: 'Production Build', value: 'Vite 7 ✓', color: '#38bdf8' },
            ],
        },
        caseStudy: {
            role: 'Creative Frontend Engineer',
            problem: 'Creating a high-performance 3D visual portfolio that remains responsive on mobile phones and low-power laptops.',
            challenges: [{ title: 'GPU & CPU Overhead', detail: 'Throttled canvas animation loops on tab blur and disabled 3D tilt computations on touch devices.' }],
            statusEvaluation: { verified: ['Production deployment active on custom domain https://karmjit.me/.'], unverified: [] },
            learnings: 'Rich aesthetics must be paired with disciplined performance budgets so visual polish never compromises usability.'
        }
    },
    {
        id: 'job-analytics',
        orderNumber: '17',
        title: 'Job Market Analytics',
        shortTitle: 'Job Market Data',
        category: 'DATA & ANALYTICS',
        filterCategory: 'Data & Analytics',
        categoryColor: 'text-neon-blue border-neon-blue/40 bg-neon-blue/10',
        status: 'Completed',
        statusColor: 'text-emerald-400 border-emerald-500/40 bg-emerald-500/10',
        description:
            'Exploratory data analysis investigating software engineering job market listings, in-demand framework combinations, and regional compensation patterns.',
        problemStatement:
            'Computer science students lack empirical, data-driven visibility into which technology stack pairings actually correlate with higher entry-level hiring demand.',
        features: [
            'Automated cleaning and text normalization across 5,000+ unstructured job descriptions',
            'Technology co-occurrence analysis (e.g. React + Node vs Python + FastAPI)',
            'Salary percentile distributions mapped against required experience levels',
            'Jupyter notebook documentation with reproducible data visualization pipelines',
        ],
        technologies: [
            { label: 'Python', icon: SiPython, color: '#38bdf8' },
            { label: 'Pandas', icon: SiPandas, color: '#150458' },
            { label: 'NumPy', icon: SiNumpy, color: '#4d77cf' },
            { label: 'Jupyter', icon: SiJupyter, color: '#f37626' },
        ],
        engineeringHighlight:
            'Regex-based token extraction isolating framework mentions while eliminating false positive tech keywords.',
        role: 'Data Analyst',
        contribution:
            'Extracted and cleaned 5,000+ developer job listings, engineered skill co-occurrence matrices, and generated distribution charts with Pandas/Matplotlib.',
        github: 'https://github.com/karmjitsg09',
        live: null,
        border: 'border-neon-blue/30',
        glow: 'rgba(0,212,255,0.25)',
        accent: 'from-neon-blue via-neon-cyan to-indigo-500',
        visual: {
            icon: MdOutlineAnalytics,
            iconColor: '#38bdf8',
            bgGradient: 'from-neon-blue/20 via-black/50 to-indigo-500/10',
            features: [
                { label: 'Data Scale', value: '5,000+ Records ✓', color: '#38bdf8' },
                { label: 'Analysis Tool', value: 'Pandas / NumPy ✓', color: '#00ffea' },
                { label: 'Key Metric', value: 'Skill Co-occurrence ✓', color: '#34d399' },
            ],
        },
        caseStudy: {
            role: 'Data Analyst',
            problem: 'Cleaning inconsistent salary strings and unstructured requirement tags across thousands of tech postings.',
            challenges: [{ title: 'Salary Normalization', detail: 'Parsed varying hourly, monthly, and annual compensation formats into standardized annual USD brackets.' }],
            statusEvaluation: { verified: ['Jupyter analysis notebooks and Seaborn visualizations completed.'], unverified: ['Automated daily cron scraper.'] },
            learnings: 'Real-world data cleaning consumes 80% of data science effort; robust regex parsers are indispensable.'
        }
    },
    {
        id: 'snapdeal-analytics',
        orderNumber: '18',
        title: 'Snapdeal E-Commerce Analytics',
        shortTitle: 'Snapdeal Analytics',
        category: 'DATA & ANALYTICS',
        filterCategory: 'Data & Analytics',
        categoryColor: 'text-neon-cyan border-neon-cyan/40 bg-neon-cyan/10',
        status: 'Completed',
        statusColor: 'text-emerald-400 border-emerald-500/40 bg-emerald-500/10',
        description:
            'Exploratory data analysis analyzing 28,000+ e-commerce product listings, evaluating price variance against customer ratings, category depth, and discount structures.',
        problemStatement:
            'E-commerce merchants struggle to understand how aggressive discounting influences review conversion rates across disparate product categories.',
        features: [
            'Data preprocessing and imputation on 28,000+ product records',
            'Discount depth correlation analysis vs rating count distributions',
            'Category-level pricing boxplots identifying margin distributions',
            'Automated reporting detailing retail pricing patterns',
        ],
        technologies: [
            { label: 'Python', icon: SiPython, color: '#38bdf8' },
            { label: 'Pandas', icon: SiPandas, color: '#150458' },
            { label: 'Jupyter', icon: SiJupyter, color: '#f37626' },
        ],
        engineeringHighlight:
            'Interquartile range (IQR) outlier filtering to eliminate skewed pricing records before correlation modeling.',
        role: 'E-Commerce Data Analyst',
        contribution:
            'Processed 28,000+ product catalog records, performed outlier price detection, and mapped discount percentages to review volumes.',
        github: 'https://github.com/karmjitsg09',
        live: null,
        border: 'border-neon-cyan/30',
        glow: 'rgba(0,255,234,0.25)',
        accent: 'from-neon-cyan via-amber-400 to-neon-purple',
        visual: {
            icon: LuTrendingUp,
            iconColor: '#00ffea',
            bgGradient: 'from-neon-cyan/20 via-black/50 to-amber-500/10',
            features: [
                { label: 'Catalog Size', value: '28,000+ Products ✓', color: '#00ffea' },
                { label: 'Statistical Filter', value: 'IQR Outlier Filter ✓', color: '#facc15' },
                { label: 'Analysis Tool', value: 'Python / Pandas ✓', color: '#38bdf8' },
            ],
        },
        caseStudy: {
            role: 'E-Commerce Data Analyst',
            problem: 'Identifying pricing thresholds where customer purchase friction increases despite discounts.',
            challenges: [{ title: 'Missing Value Imputation', detail: 'Handled sparse category tags using nearest-neighbor imputation on product descriptions.' }],
            statusEvaluation: { verified: ['Completed correlation matrices and distribution charts.'], unverified: [] },
            learnings: 'High discounts do not linearly correlate with positive ratings; product category quality reputation dominates customer satisfaction.'
        }
    },
    {
        id: 'playstore-analytics',
        orderNumber: '19',
        title: 'Google Play Store Analytics',
        shortTitle: 'Play Store Analytics',
        category: 'DATA & ANALYTICS',
        filterCategory: 'Data & Analytics',
        categoryColor: 'text-emerald-400 border-emerald-500/40 bg-emerald-500/10',
        status: 'Completed',
        statusColor: 'text-emerald-400 border-emerald-500/40 bg-emerald-500/10',
        description:
            'Data exploration analyzing 10,000+ Android application listings to identify category market share, review volume distributions, and size-to-rating correlations.',
        problemStatement:
            'Mobile app developers require clear benchmarks on optimal download size, rating thresholds, and monetization models within their target app category.',
        features: [
            'Cleaning and conversion of ambiguous string sizes ("M", "k") into numeric megabytes',
            'Paid vs Free app satisfaction comparison across categories',
            'Content rating distribution breakdown (Everyone, Teen, Mature 17+)',
            'Install volume heatmaps identifying saturated vs emerging app categories',
        ],
        technologies: [
            { label: 'Python', icon: SiPython, color: '#38bdf8' },
            { label: 'Pandas', icon: SiPandas, color: '#150458' },
            { label: 'NumPy', icon: SiNumpy, color: '#4d77cf' },
        ],
        engineeringHighlight:
            'Custom vectorized string transformation pipeline converting non-standard download counts ("1,000,000+") into numeric representations.',
        role: 'Data Analyst',
        contribution:
            'Parsed and categorized 10,000+ Google Play Store listings, analyzing app install counts, download sizes, and monetization models.',
        github: 'https://github.com/karmjitsg09',
        live: null,
        border: 'border-emerald-500/30',
        glow: 'rgba(52,211,153,0.25)',
        accent: 'from-emerald-400 via-neon-cyan to-neon-blue',
        visual: {
            icon: FaChartBar,
            iconColor: '#34d399',
            bgGradient: 'from-emerald-500/20 via-black/50 to-neon-blue/10',
            features: [
                { label: 'App Records', value: '10,000+ Apps ✓', color: '#34d399' },
                { label: 'Feature Metric', value: 'Size vs Rating ✓', color: '#00ffea' },
                { label: 'Pipeline', value: 'Vectorized Clean ✓', color: '#38bdf8' },
            ],
        },
        caseStudy: {
            role: 'Data Analyst',
            problem: 'Uncovering the relationship between mobile package size (APK megabytes) and user review attrition.',
            challenges: [{ title: 'String-to-Numeric Parsing', detail: 'Standardized varying unit formats (bytes, KB, MB) using vectorized pandas string extractors.' }],
            statusEvaluation: { verified: ['Analyzed 10,000+ Play Store entries with Seaborn distribution plots.'], unverified: [] },
            learnings: 'Apps exceeding 100MB download thresholds suffer higher initial bounce rates in emerging network regions.'
        }
    },
    {
        id: 'crypto-analytics',
        orderNumber: '20',
        title: 'Crypto Market Analytics',
        shortTitle: 'Crypto Market Data',
        category: 'DATA & ANALYTICS',
        filterCategory: 'Data & Analytics',
        categoryColor: 'text-amber-400 border-amber-500/40 bg-amber-500/10',
        status: 'Completed',
        statusColor: 'text-amber-400 border-amber-500/40 bg-amber-500/10',
        description:
            'Time-series quantitative analysis and visualization exploring historical cryptocurrency market volatility, moving averages, and 24-hour trading volume distributions.',
        problemStatement:
            'Cryptocurrency markets exhibit rapid intraday volatility that makes simple point-in-time price observations misleading without rolling average trend analysis.',
        features: [
            'Time-series date indexing and missing-interval forward filling',
            'Simple (SMA) and Exponential (EMA) Moving Average computation',
            'Daily return volatility calculations and distribution histograms',
            'Volume-weighted average price (VWAP) trend visualizations',
        ],
        technologies: [
            { label: 'Python', icon: SiPython, color: '#38bdf8' },
            { label: 'Pandas', icon: SiPandas, color: '#150458' },
            { label: 'Jupyter', icon: SiJupyter, color: '#f37626' },
        ],
        engineeringHighlight:
            'Time-series rolling window transformations computed in NumPy/Pandas to analyze multi-month momentum shifts.',
        role: 'Quantitative Data Analyst',
        contribution:
            'Constructed time-series financial analysis pipelines computing rolling moving averages (SMA 20/50), volatility metrics, and trading volumes.',
        github: 'https://github.com/karmjitsg09',
        live: null,
        border: 'border-amber-500/30',
        glow: 'rgba(245,158,11,0.25)',
        accent: 'from-amber-400 via-neon-purple to-neon-cyan',
        visual: {
            icon: LuActivity,
            iconColor: '#facc15',
            bgGradient: 'from-amber-500/20 via-black/50 to-neon-cyan/10',
            features: [
                { label: 'Analysis Type', value: 'Time-Series ✓', color: '#facc15' },
                { label: 'Indicators', value: 'SMA / Volatility ✓', color: '#00ffea' },
                { label: 'Data Source', value: 'Historical Feed ✓', color: '#a78bfa' },
            ],
        },
        caseStudy: {
            role: 'Quantitative Data Analyst',
            problem: 'Accurately estimating asset volatility during flash crash liquidity events.',
            challenges: [{ title: 'Rolling Window Alignment', detail: 'Handled 24/7 non-stop crypto trading schedules without standard market closing bells.' }],
            statusEvaluation: { verified: ['Computed SMA 20/50, EMA, and volatility distributions.'], unverified: [] },
            learnings: 'Continuous financial markets require forward-filled datetime indexes to prevent missing timestamp distortions.'
        }
    },
];

/* ─────────────────────────────────────────────────────────────
    TECH BADGE
───────────────────────────────────────────────────────────── */
function TechBadge({ tech, compact = false }) {
    const Icon = tech.icon;
    return (
        <span
            className={`flex items-center gap-1.5 rounded-xl font-medium text-slate-300 bg-white/5 border border-white/10 hover:border-white/20 transition-colors ${
                compact ? 'px-2.5 py-1 text-[11px]' : 'px-3 py-1.5 text-xs'
            }`}
        >
            {Icon && (
                <Icon style={{ color: tech.color }} className={compact ? 'text-xs flex-shrink-0' : 'text-sm flex-shrink-0'} />
            )}
            {tech.label}
        </span>
    );
}

/* ─────────────────────────────────────────────────────────────
   PROJECT VISUAL PREVIEW BANNER (Simulated IDE & Telemetry HUD)
   Large, high-impact top visual showcase for every project card
───────────────────────────────────────────────────────────── */
function ProjectVisualPreview({ project }) {
    const IconComponent = project.icon || project.visual?.icon || FaBolt;

    return (
        <div className="relative rounded-2xl overflow-hidden border border-white/10 group-hover:border-neon-cyan/40 transition-all duration-500 mb-6 bg-gradient-to-br from-black/90 to-slate-950/90 shadow-2xl">
            {/* Top Simulated IDE / Browser Window Titlebar */}
            <div className="flex items-center justify-between px-4 py-2.5 bg-white/5 border-b border-white/10 backdrop-blur-md">
                <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-500/80 inline-block shadow-sm" />
                    <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80 inline-block shadow-sm" />
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80 inline-block shadow-sm" />
                    <span className="text-[11px] font-mono text-slate-400 ml-2 font-medium hidden sm:inline-block">
                        karmjit.me/projects/{project.id}
                    </span>
                </div>
                <div className="flex items-center gap-2">
                    <span className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded-md border ${project.statusColor || 'text-neon-cyan border-neon-cyan/30 bg-neon-cyan/10'}`}>
                        ● {project.status || 'Active'}
                    </span>
                </div>
            </div>

            {/* Inner Visual Body with Blueprint Grid & Telemetry HUD */}
            <div
                className={`relative p-6 sm:p-7 min-h-[175px] sm:min-h-[190px] flex flex-col justify-between overflow-hidden bg-gradient-to-br ${
                    project.visual?.bgGradient || 'from-neon-blue/15 via-black/50 to-neon-purple/10'
                }`}
            >
                {/* Tech Blueprint Grid */}
                <div
                    className="absolute inset-0 opacity-[0.05] pointer-events-none"
                    style={{
                        backgroundImage: 'linear-gradient(to right, #00d4ff 1px, transparent 1px), linear-gradient(to bottom, #00d4ff 1px, transparent 1px)',
                        backgroundSize: '24px 24px',
                    }}
                />

                {/* Corner Cyber Brackets */}
                <div className="absolute top-2 left-2 w-3 h-3 border-t-2 border-l-2 border-neon-cyan/40 pointer-events-none" />
                <div className="absolute top-2 right-2 w-3 h-3 border-t-2 border-r-2 border-neon-cyan/40 pointer-events-none" />
                <div className="absolute bottom-2 left-2 w-3 h-3 border-b-2 border-l-2 border-neon-cyan/40 pointer-events-none" />
                <div className="absolute bottom-2 right-2 w-3 h-3 border-b-2 border-r-2 border-neon-cyan/40 pointer-events-none" />

                {/* Center Floating Icon & Title */}
                <div className="relative z-10 flex items-center justify-between gap-4">
                    <div className="flex items-center gap-3.5">
                        <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-white/10 border border-white/20 backdrop-blur-md flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform duration-300">
                            <IconComponent
                                className="text-3xl sm:text-4xl"
                                style={{ color: project.visual?.iconColor || project.iconColor || '#00d4ff' }}
                            />
                        </div>
                        <div>
                            <span className="text-[10px] font-mono tracking-widest uppercase text-neon-cyan block font-semibold mb-0.5">
                                SYSTEM OVERVIEW
                            </span>
                            <h4 className="text-xl sm:text-2xl font-black text-white leading-tight">
                                {project.shortTitle || project.title}
                            </h4>
                        </div>
                    </div>

                    {/* Order Number Watermark */}
                    {project.orderNumber && (
                        <span className="text-3xl sm:text-4xl font-mono font-black text-white/15 tracking-tighter select-none">
                            #{project.orderNumber}
                        </span>
                    )}
                </div>

                {/* Live Telemetry Feature Chips */}
                {project.visual?.features && (
                    <div className="relative z-10 flex flex-wrap gap-2 mt-4 pt-3 border-t border-white/10">
                        {project.visual.features.map((feat) => (
                            <span
                                key={feat.label}
                                className="text-[11px] font-mono px-2.5 py-1 rounded-lg bg-black/55 border border-white/15 text-slate-200 flex items-center gap-1.5 shadow-sm"
                            >
                                <span className="text-slate-400">{feat.label}:</span>
                                <span style={{ color: feat.color }} className="font-bold">
                                    {feat.value}
                                </span>
                            </span>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}

/* ─────────────────────────────────────────────────────────────
   LARGE, DETAILED PROJECT SHOWCASE CARD (Interactive 3D Card)
   Generous width, natural height, detailed problem & contribution
───────────────────────────────────────────────────────────── */
function ProjectShowcaseCard({ project, _index, onOpenCaseStudy }) {
    const cardRef = useRef(null);

    // Continuous normalized cursor position (-0.5 to +0.5)
    const normX = useMotionValue(0);
    const normY = useMotionValue(0);

    const springX = useSpring(normX, { stiffness: 220, damping: 25 });
    const springY = useSpring(normY, { stiffness: 220, damping: 25 });

    // 3D tilt
    const rotateX = useTransform(springY, [-0.5, 0.5], ['4deg', '-4deg']);
    const rotateY = useTransform(springX, [-0.5, 0.5], ['-4deg', '4deg']);

    const dirX = useTransform(springX, [-0.5, 0.5], [-5, 5]);
    const dirY = useTransform(springY, [-0.5, 0.5], [-6, -2]);

    const handleMouseMove = (e) => {
        if (!cardRef.current) return;
        const rect = cardRef.current.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;

        cardRef.current.style.setProperty('--mouse-x', `${mouseX}px`);
        cardRef.current.style.setProperty('--mouse-y', `${mouseY}px`);

        normX.set(mouseX / width - 0.5);
        normY.set(mouseY / height - 0.5);
    };

    const handleMouseLeave = () => {
        normX.set(0);
        normY.set(0);
    };

    return (
        <motion.div
            ref={cardRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
                x: dirX,
                y: dirY,
                rotateX,
                rotateY,
                transformStyle: 'preserve-3d',
                boxShadow: `0 18px 45px -12px ${project.glow || 'rgba(0, 212, 255, 0.2)'}`,
            }}
            transition={{ duration: 0.3 }}
            className={`group relative glass rounded-3xl border ${project.border || 'border-white/10'} overflow-hidden transition-all duration-300 flex flex-col justify-between p-6 sm:p-8 lg:p-9`}
        >
            {/* Top Accent Strip */}
            <div className={`absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r ${project.accent || 'from-neon-blue via-neon-cyan to-neon-purple'} z-20`} />

            {/* Dynamic Spotlight */}
            <div
                className="pointer-events-none absolute -inset-px opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"
                style={{
                    background: 'radial-gradient(420px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(0, 212, 255, 0.12), transparent 80%)',
                }}
            />

            <div className="relative z-20 flex flex-col h-full">
                {/* 1. Large Project Visual Preview Window */}
                <ProjectVisualPreview project={project} />

                {/* 2. Identity Badges: Category + Status + Order Number */}
                <div className="flex flex-wrap items-center justify-between gap-2.5 mb-3.5">
                    <span
                        className={`text-[11px] font-mono font-bold tracking-wider px-3 py-1 rounded-full border ${
                            project.categoryColor || project.badgeColor || 'text-neon-cyan border-neon-cyan/40 bg-neon-cyan/10'
                        }`}
                    >
                        {project.category}
                    </span>
                    <div className="flex items-center gap-2">
                        <span className={`text-[11px] font-mono font-bold px-2.5 py-1 rounded-md border ${project.statusColor || 'text-emerald-400 border-emerald-500/40 bg-emerald-500/10'}`}>
                            {project.status || 'Completed'}
                        </span>
                        {project.orderNumber && (
                            <span className="text-xs font-mono text-slate-400 font-bold">
                                #{project.orderNumber}
                            </span>
                        )}
                    </div>
                </div>

                {/* 3. Project Title & Tagline */}
                <div className="mb-4">
                    <h3 className="text-2xl sm:text-3xl font-black text-white leading-tight group-hover:text-neon-cyan transition-colors tracking-tight">
                        {project.title}
                    </h3>
                </div>

                {/* 4. Problem & Purpose Statement */}
                {project.problemStatement && (
                    <div className="p-4 rounded-2xl bg-amber-500/5 border border-amber-500/25 text-slate-300 text-xs sm:text-sm leading-relaxed mb-4">
                        <span className="text-amber-400 font-mono font-bold uppercase tracking-wider text-[11px] flex items-center gap-1.5 mb-1.5">
                            <FaExclamationTriangle className="text-xs text-amber-400" /> The Problem &amp; Core Challenge:
                        </span>
                        <p className="text-slate-300 leading-relaxed italic">
                            "{project.problemStatement}"
                        </p>
                    </div>
                )}

                {/* Full Project Description (No line-clamp) */}
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
                    {project.description}
                </p>

                {/* 5. Key Features & Capabilities */}
                {project.features && project.features.length > 0 && (
                    <div className="mb-6 space-y-2">
                        <h4 className="text-xs font-mono uppercase tracking-wider text-slate-300 font-bold flex items-center gap-2 mb-2.5">
                            <LuLayers className="text-neon-cyan text-sm" /> Key Features &amp; Capabilities:
                        </h4>
                        <div className="space-y-2">
                            {project.features.map((feat) => (
                                <div key={feat} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                                    <BsCheckCircleFill className="text-neon-cyan text-sm mt-0.5 flex-shrink-0" />
                                    <span className="leading-snug">{feat}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {/* 6. Technical Decision & Architecture Highlight */}
                {project.engineeringHighlight && (
                    <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10 text-xs sm:text-sm text-slate-300 mb-6">
                        <span className="text-neon-cyan font-mono font-bold uppercase text-[11px] flex items-center gap-1.5 mb-1">
                            <LuWorkflow className="text-xs text-neon-cyan" /> Technical Implementation &amp; Architecture:
                        </span>
                        <p className="font-mono text-xs text-slate-300 leading-relaxed">
                            {project.engineeringHighlight}
                        </p>
                    </div>
                )}

                {/* Tech Stack Chips */}
                <div className="mb-6 pt-4 border-t border-white/10">
                    <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400 block mb-2.5 font-semibold">
                        Technology Stack:
                    </span>
                    <div className="flex flex-wrap gap-2">
                        {project.technologies.map((t) => (
                            <TechBadge key={t.label} tech={t} />
                        ))}
                    </div>
                </div>

                {/* 7. My Role & Contribution */}
                {project.role && (
                    <div className="p-4 rounded-2xl bg-gradient-to-r from-neon-blue/10 via-neon-purple/5 to-transparent border border-neon-blue/20 mb-6">
                        <span className="text-xs font-mono font-bold text-neon-blue uppercase flex items-center gap-1.5 mb-1">
                            <FaUserTie className="text-xs text-neon-blue" /> My Role &amp; Contribution:
                        </span>
                        <p className="text-xs sm:text-sm text-white font-semibold">
                            {project.role}
                        </p>
                        {project.contribution && (
                            <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                                {project.contribution}
                            </p>
                        )}
                    </div>
                )}

                {/* 8. Action Buttons Bar */}
                <div className="flex flex-wrap items-center gap-3 pt-5 border-t border-white/10 mt-auto">
                    <button
                        onClick={() => onOpenCaseStudy(project)}
                        className="flex-1 min-w-[140px] flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-gradient-to-r from-neon-blue/20 to-neon-purple/20 border border-neon-cyan/50 text-white hover:border-neon-cyan hover:bg-neon-cyan/20 transition-all text-xs sm:text-sm font-mono font-bold cursor-pointer shadow-lg shadow-neon-cyan/10"
                    >
                        <FaBookOpen className="text-xs text-neon-cyan" /> Case Study &amp; Architecture ↗
                    </button>

                    {project.live && (
                        <a
                            href={project.live}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 px-4 py-3 rounded-xl bg-gradient-to-r from-neon-blue to-neon-purple text-dark font-bold text-xs sm:text-sm hover:brightness-110 shadow-md shadow-neon-blue/20 transition-all cursor-pointer"
                        >
                            <FaExternalLinkAlt className="text-xs" /> Live Demo
                        </a>
                    )}

                    {project.github && (
                        <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-3 rounded-xl bg-white/5 border border-white/15 text-slate-200 hover:text-white hover:border-white/30 hover:bg-white/10 transition-all text-sm cursor-pointer"
                            aria-label="GitHub Repository"
                            title="View Source Code"
                        >
                            <FaGithub className="text-base" />
                        </a>
                    )}
                </div>
            </div>
        </motion.div>
    );
}

/* ─────────────────────────────────────────────────────────────
   MAIN PROJECTS SECTION (Filters, 2-Column Grid, Search, Modal)
───────────────────────────────────────────────────────────── */
const FILTER_CATEGORIES = [
    'All',
    'Full-Stack',
    'AI / ML',
    'Computer Vision',
    'Developer Tools',
    'Data & Analytics',
    'Research',
];

export default function Projects() {
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [searchQuery, setSearchQuery] = useState('');
    const [activeModalProject, setActiveModalProject] = useState(null);

    // Deep-link hash listener: supports direct links like #case-study-ai-video-agent or #ai-video-agent
    useEffect(() => {
        const handleHash = () => {
            const hash = window.location.hash.replace('#', '');
            if (!hash) return;
            const allProjectsList = [...featuredProjects, ...additionalProjects];
            const targetProj = allProjectsList.find(
                (p) => p.id === hash || `case-study-${p.id}` === hash
            );
            if (targetProj) {
                setActiveModalProject(targetProj);
            }
        };
        handleHash();
        window.addEventListener('hashchange', handleHash);
        return () => window.removeEventListener('hashchange', handleHash);
    }, []);

    const handleOpenCaseStudy = (proj) => {
        setActiveModalProject(proj);
        if (window.history && window.history.replaceState) {
            window.history.replaceState(null, '', `#case-study-${proj.id}`);
        }
    };

    const handleCloseCaseStudy = () => {
        setActiveModalProject(null);
        if (window.history && window.history.replaceState) {
            window.history.replaceState(null, '', '#projects');
        }
    };

    // Filter logic for additional projects
    const filteredAdditionalProjects = useMemo(() => {
        return additionalProjects.filter((project) => {
            const matchesCategory =
                selectedCategory === 'All' ||
                project.filterCategory === selectedCategory ||
                project.category.toLowerCase().includes(selectedCategory.toLowerCase());

            const query = searchQuery.trim().toLowerCase();
            const matchesSearch =
                !query ||
                project.title.toLowerCase().includes(query) ||
                project.description.toLowerCase().includes(query) ||
                project.category.toLowerCase().includes(query) ||
                project.technologies.some((t) => t.label.toLowerCase().includes(query));

            return matchesCategory && matchesSearch;
        });
    }, [selectedCategory, searchQuery]);

    const totalProjectCount = featuredProjects.length + additionalProjects.length;

    return (
        <section id="projects" className="py-28 relative overflow-hidden">
            {/* Background Glow Accents */}
            <div className="absolute top-1/4 left-0 w-96 h-96 rounded-full bg-neon-purple/5 blur-3xl pointer-events-none" />
            <div className="absolute top-2/3 right-0 w-96 h-96 rounded-full bg-neon-blue/5 blur-3xl pointer-events-none" />
            <div className="absolute bottom-1/4 left-1/3 w-80 h-80 rounded-full bg-neon-cyan/5 blur-3xl pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6">
                {/* ══════════════════════════════════════════
                    1. FEATURED PROJECTS (Two-Column Grid)
                ══════════════════════════════════════════ */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <div className="flex items-center justify-center gap-3 mb-4">
                        <div className="h-px w-12 bg-gradient-to-r from-transparent to-neon-blue" />
                        <span className="text-neon-blue text-sm font-mono tracking-widest uppercase">
                            Major Systems &amp; Case Studies
                        </span>
                        <div className="h-px w-12 bg-gradient-to-l from-transparent to-neon-blue" />
                    </div>
                    <h2 className="section-title gradient-text">Featured Projects</h2>
                    <p className="text-slate-300 mt-4 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
                        Spacious, deep-dive showcases of my primary full-stack applications, agentic browser experiments, and deployed software solutions.
                    </p>
                    <div className="mt-4 flex items-center justify-center gap-2">
                        <span className="text-xs font-mono text-neon-cyan px-3.5 py-1 rounded-full bg-neon-cyan/10 border border-neon-cyan/30 shadow-sm">
                            {featuredProjects.length} Primary Systems · {totalProjectCount} Total Projects
                        </span>
                    </div>
                </motion.div>

                {/* TWO-COLUMN FEATURED SHOWCASE GRID */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 mb-28">
                    {featuredProjects.map((project, index) => (
                        <ProjectShowcaseCard
                            key={project.id}
                            project={project}
                            index={index}
                            onOpenCaseStudy={handleOpenCaseStudy}
                        />
                    ))}
                </div>

                {/* ══════════════════════════════════════════
                    2. MORE PROJECTS & EXPERIMENTS
                ══════════════════════════════════════════ */}
                <div className="pt-16 border-t border-white/10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="text-center mb-10"
                    >
                        <div className="flex items-center justify-center gap-3 mb-4">
                            <div className="h-px w-12 bg-gradient-to-r from-transparent to-neon-purple" />
                            <span className="text-neon-purple text-sm font-mono tracking-widest uppercase">
                                Technical Explorations
                            </span>
                            <div className="h-px w-12 bg-gradient-to-l from-transparent to-neon-purple" />
                        </div>
                        <h3 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                            More Projects &amp; Experiments
                        </h3>
                        <p className="text-slate-300 mt-3 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
                            Additional applications, data analytics studies, computer vision prototypes, and academic explorations built while testing different architectural paradigms.
                        </p>
                        <div className="mt-4 flex items-center justify-center gap-2">
                            <span className="text-xs font-mono text-neon-purple px-3.5 py-1 rounded-full bg-neon-purple/10 border border-neon-purple/30 shadow-sm">
                                {additionalProjects.length} Verified Prototypes &amp; Studies
                            </span>
                        </div>
                    </motion.div>

                    {/* Filter Pills & Search Bar */}
                    <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-8">
                        {/* Categories */}
                        <div className="flex flex-wrap items-center justify-center md:justify-start gap-2 w-full md:w-auto">
                            {FILTER_CATEGORIES.map((cat) => {
                                const isSelected = selectedCategory === cat;
                                return (
                                    <button
                                        key={cat}
                                        onClick={() => setSelectedCategory(cat)}
                                        className={`px-3.5 py-1.5 rounded-xl text-xs font-mono font-medium transition-all duration-300 cursor-pointer ${
                                            isSelected
                                                ? 'bg-neon-cyan text-dark font-bold shadow-lg shadow-neon-cyan/25 scale-105'
                                                : 'glass text-slate-300 hover:text-white hover:border-neon-cyan/40 hover:bg-white/5'
                                        }`}
                                    >
                                        {cat}
                                    </button>
                                );
                            })}
                        </div>

                        {/* Search Input */}
                        <div className="relative w-full md:w-72">
                            <LuSearch className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 text-sm" />
                            <input
                                type="text"
                                placeholder="Search projects or tech..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full pl-9 pr-4 py-2 rounded-xl glass border border-white/10 text-xs font-mono text-white placeholder-slate-400 focus:outline-none focus:border-neon-cyan/50 focus:ring-1 focus:ring-neon-cyan/30 transition-all"
                            />
                        </div>
                    </div>

                    {/* TWO-COLUMN EXPLORATORY PROJECTS GRID */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        <AnimatePresence>
                            {filteredAdditionalProjects.map((project, index) => (
                                <ProjectShowcaseCard
                                    key={project.id}
                                    project={project}
                                    index={index}
                                    onOpenCaseStudy={handleOpenCaseStudy}
                                />
                            ))}
                        </AnimatePresence>
                    </div>

                    {filteredAdditionalProjects.length === 0 && (
                        <div className="text-center py-16 text-slate-500 font-mono text-xs">
                            No projects found matching the filter criteria.
                        </div>
                    )}
                </div>
            </div>

            {/* Deep-Dive Case Study Modal */}
            <CaseStudyModal
                project={activeModalProject}
                isOpen={!!activeModalProject}
                onClose={handleCloseCaseStudy}
            />
        </section>
    );
}
