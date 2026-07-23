# PRD: Remote Blueprint Tracker

## Overview
A web-based, actionable checklist and guide for professionals aiming to succeed on Upwork. Built to sell as a premium digital product.

## Target Audience
Skilled professionals (SaaS, Design, Dev, etc.) who are struggling to land jobs on Upwork.

## Core Features (MVP)
1. **Interactive Checklist (Tracker):**
   - 4 main phases (Profile Foundation, Bidding Strategy, Execution/Communication, Scale/Referrals).
   - Expandable lessons with short, actionable text.
   - "Mark as Done" buttons to track progress.
   - Progress bar per phase.
2. **State Persistence:**
   - Save progress in browser `localStorage`.
   - UI warning: "Progress is saved locally on this device."
3. **Template Vault:**
   - Dedicated section for the optimized "Anti-Burn Connects" cover letter and proposal framework.
4. **Access Control (MVP Monetization):**
   - Simple static password gate before accessing the tracker.

## Architecture
- **Frontend:** React (Vite) + Tailwind CSS.
- **State Management:** React state + `localStorage`.
- **Data:** Hardcoded JSON/Markdown for lesson content.
- **Hosting:** Netlify (Free tier).

## Out of Scope for MVP
- Backend/Database.
- Cross-device sync.
- Complex auth (OAuth, Magic Links).
