/**
 * Recovery Pod - Main JavaScript
 * ================================
 */

(function() {
  'use strict';

  /**
   * Form handling with validation feedback
   * Ready for future booking system integration
   */
  const signupForm = document.getElementById('signup-form');

  if (signupForm) {
    signupForm.addEventListener('submit', function(e) {
      const emailInput = this.querySelector('input[type="email"]');
      const submitBtn = this.querySelector('button[type="submit"]');

      // Basic client-side validation is handled by HTML5 required + type="email"
      // Additional validation or API calls can be added here

      // Show loading state
      if (submitBtn) {
        submitBtn.textContent = 'Joining...';
        submitBtn.disabled = true;
      }

      // For Netlify forms, the form will submit naturally
      // For custom backend, you would e.preventDefault() and use fetch()
    });
  }

  /**
   * Utility: Smooth scroll for anchor links
   * Useful when full site is built
   */
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;

      const target = document.querySelector(targetId);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });

  /**
   * Booking System Considerations:
   * ==============================
   * When implementing the booking system, consider:
   *
   * 1. Date/Time Selection
   *    - Calendar component (flatpickr, vanilla-calendar, or custom)
   *    - Time slot availability checking
   *    - Timezone handling
   *
   * 2. Service Selection
   *    - Service types (sauna, cold plunge, combo sessions)
   *    - Duration options
   *    - Pricing display
   *
   * 3. User Authentication
   *    - Guest checkout vs account creation
   *    - Session management
   *    - Profile/booking history
   *
   * 4. Payment Integration
   *    - Stripe, Square, or PayPal
   *    - Deposit vs full payment
   *    - Cancellation/refund policies
   *
   * 5. Backend Requirements
   *    - Database for bookings (PostgreSQL, MongoDB)
   *    - API endpoints (REST or GraphQL)
   *    - Email notifications (confirmation, reminders)
   *    - Admin dashboard
   *
   * 6. Third-party Options
   *    - Calendly, Acuity, Square Appointments
   *    - Can embed or use API for custom UI
   */

})();
