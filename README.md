# Mess Management System (React Frontend)

![Dashboard Preview](src/assets/images/dashboard-preview.jpg)  
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

- **Admin Dashboard**: User management, statistics, meal planning
- **User Dashboard**: Meal tracking, menu viewing, feedback submission
- **Reusable Components**: Animated buttons, modals, alerts
- **Responsive Design**: Works on all device sizes

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

4. **Mobile Views**:
   - `mobile-menu.jpg` (TodaysMenu.jsx on mobile)
   - `mobile-dashboard.jpg` (User.jsx on mobile)

## How to Display Screenshots

```markdown
## UI Showcase

### Admin Interface

![Admin Dashboard](src/assets/images/admin-dashboard-full.jpg)  
_Complete admin view with statistics and management tools_

### Key Components

| Component           | Preview                                             |
| ------------------- | --------------------------------------------------- |
| Statistics Overview | ![Stats](src/assets/images/statistics-overview.jpg) |
| Meal Tracker        | ![Tracker](src/assets/images/meal-tracking.jpg)     |
```
````

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
