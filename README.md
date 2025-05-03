# Mess Management System (React Frontend)

_A modern React-based interface for hostel mess management_

## Project Structure

````markdown
src/
| App.css
| App.js
| App.test.js
| index.css
| index.js
|  
+---assets/
| +---icons/
| | meal.svg
| | settings.svg
| | stats.svg
| | user.svg
| |  
| +---images/
| | admin-avatar.png
| | meal-icon.png
| | mess-hero.png
| | mess-login.png
| | stats-icon.png
| | user-avatar.png
| +---screenshots/
| | +---admin/
| | | admin_audit_logs.jpg
| | | admin_billing.jpg
| | | admin_dash.jpg
| | | admin_dash1.jpg
| | | admin_dash2.jpg
| | | admin_mess_details.jpg
| | | admin_profile.jpg
| | | admin_profile1.jpg
| | |
| | +---home/
| | | home.jpg
| | | login.jpg
| | | signup.jpg
| | |
| | +---user/
| | | user_about_mess.jpg
| | | user_contact.jpg
| | | user_dash.jpg
| | | user_dash1.jpg
| | | user_dash2.jpg
| | | user_dropdown.jpg
| | | user_profile.jpg
| | | user_profile1.jpg
|
+---components/
| +---AdminDashboard/
| | AdminHeader.css
| | AdminHeader.jsx
| | AdminProfilePicture.jsx
| | AdminProfilePicture.module.css
| | AdminProfileView.jsx
| | AdminProfileView.module.css
| | AdminSecuritySettings.css
| | AdminSecuritySettings.jsx
| | InteractiveCharts.css
| | InteractiveCharts.jsx
| | MealPlanManagement.css
| | MealPlanManagement.jsx
| | QuickActions.jsx
| | QuickActions.module.css
| | StatisticsOverview.css
| | StatisticsOverview.jsx
| | UserManagement.css
| | UserManagement.jsx
| |  
| +---common/
| | Alert.css
| | Alert.jsx
| | AnimatedButton.css
| | AnimatedButton.jsx
| | BackToTop.css
| | BackToTop.jsx
| | LoadingSpinner.jsx
| | Modal.jsx
| |  
| +---hooks/
| | useClickOutside.jsx
| |  
| +---UserDashboard/
| AbsentComplaints.css
| AbsentComplaints.jsx
| Feedback.css
| Feedback.jsx
| MealPlanStatus.css
| MealPlanStatus.jsx
| MealTracking.css
| MealTracking.jsx
| ProfileForm.css
| ProfileForm.jsx
| ProfilePicture.css
| ProfilePicture.jsx
| ProfileView.css
| ProfileView.jsx
| SecuritySettings.css
| SecuritySettings.jsx
| TodaysMenu.css
| TodaysMenu.jsx
| UserHeader.css
| UserHeader.jsx
| UserNavbar.css
| UserNavbar.jsx
| UserQuickActions.css
| UserQuickActions.jsx
|  
+---context/
| DarkModeContext.jsx
|  
+---pages/
| +---protected/
| | About.css
| | About.jsx
| | Admin.css
| | Admin.jsx
| | AdminProfilePage.css
| | AdminProfilePage.jsx
| | AuditLogsPage.css
| | AuditLogsPage.jsx
| | BillingPage.css
| | BillingPage.jsx
| | Contact.css
| | Contact.jsx
| | MessDetailsPage.css
| | MessDetailsPage.jsx
| | Profile.css
| | Profile.jsx
| | User.css
| | User.jsx
| |  
| +---public/
| Home.css
| Home.jsx
| Login.css
| Login.jsx
| Signup.css
| SignUp.jsx
|  
+---styles/
animations.css
main.css
theme.css

## Key Features

### Admin Features

- **Interactive Dashboard**: Real-time statistics and visual data representation
- **User Management**: Create, view, update, and delete user accounts
- **Meal Plan Configuration**: Set up and modify weekly meal plans
- **Billing System**: Generate and manage invoices and payments
- **Audit Logs**: Detailed record of system activities
- **Profile Management**: Update admin profile and security settings
- **Mess Details**: Manage mess information and settings
- **Reporting**: Generate various system reports

### User Features

- **Meal Attendance**: Mark daily meal presence/absence
- **Complaint System**: Report missing or unsatisfactory meals
- **Feedback Mechanism**: Provide feedback on mess services
- **Meal Plan Status**: View current meal subscription
- **Today's Menu**: Check daily meal offerings
- **Profile Management**: Update personal information
- **Security Settings**: Change password and security preferences

## Technology Stack

- **Frontend**: React.js with functional components
- **Styling**: CSS Modules for component-specific styles
- **State Management**: React Context API
- **Routing**: React Router
- **Custom Hooks**: For reusable logic
- **Icons**: SVG vector icons
- **Build Tool**: Create React App

## Screenshot Guide

Add these to `/src/assets/images/`:

1. **Main Views**:
   - `admin-dashboard-full.jpg` (Admin.jsx with all components)
   - `user-dashboard-full.jpg` (User.jsx with components)
2. **Component Close-ups**:

   - `statistics-overview.jpg` (StatisticsOverview.jsx)
   - `meal-tracking.jpg` (MealTracking.jsx)
   - `feedback-form.jpg` (Feedback.jsx)

3. **Auth Flows**:

   - `login-screen.jpg` (Login.jsx)
   - `signup-screen.jpg` (Signup.jsx)

## Development Setup

1. Clone repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run development server:
   ```bash
   npm start
   ```

## Design Notes

- Uses CSS modules for component-specific styles
- Animation classes from `animations.css`
- Theme colors defined in `theme.css`
````
