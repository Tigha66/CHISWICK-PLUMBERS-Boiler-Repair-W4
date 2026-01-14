
========================================================================
CHISWICK PLUMBERS & BOILER REPAIR W4 - CUSTOMIZATION GUIDE
========================================================================

1. UPDATING BUSINESS INFO
--------------------------
To change phone numbers, addresses, or emails, edit the constants in:
- `constants.ts` -> BUSINESS_INFO object.
- The UI and AI assistant will update automatically based on these values.

2. CUSTOMIZING THE AI ASSISTANT
--------------------------------
The "brain" of the chatbot is located in:
- `services/geminiService.ts` -> SYSTEM_PROMPT.
You can adjust the tone, add new rules, or include specific sales pitches here.
The bot is powered by Gemini 3 Flash Preview for high speed and reasoning.

3. QUOTE MANAGER & LEAD CAPTURE
--------------------------------
- Lead data from the chatbot and the quote form is captured in:
  - `components/QuoteForm.tsx` -> handleSubmit()
  - `components/ChatAssistant.tsx` -> handleSend()
- Currently, these log to the console and show a success state. 
- To connect to Google Sheets, use a serverless function (like Netlify/Vercel) 
  to POST the data to your Google Sheets API endpoint.

4. DESIGN THEME (COSMIC GRADIENT)
----------------------------------
- Styling is strictly Tailwind CSS.
- Key cosmic styles are defined in `index.html` <style> tag.
- Colors: Deep Navy (#050614), Cosmic Purple, and Pink/Magenta gradients.

5. CONTACT DETAILS (DO NOT CHANGE WITHOUT PERMISSION)
------------------------------------------------------
Phone: 0203 519 0811
Address: Barrowgate Road, Chiswick, W4 4QS
Website: https://chiswickplumbersboilerrepairw4.co.uk/
========================================================================
