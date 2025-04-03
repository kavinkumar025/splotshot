import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class DataBagService {

  constructor(
    public router: Router
  ) { }

  public isUserLoggedIn = false;
  public isDisplayHeader = true;
  public contachUsTopics: string[] = [
    'Content Grievances in India',
    'Reset password',
    'Update email',
    'Get help signing in',
    'Update payment method',
    'Request TV shows or movies',
    'Issues with uploading photos/videos',
    'Post visibility issues',
    'Report a hacked account',
    'Privacy concerns and account security',
    'Problems with two-factor authentication',
    'Report inappropriate content or abuse',
    'Ad account and promotion issues',
    'Monetization and earnings issues',
    'Copyright and trademark violations',
    'Shadowbanning or restricted content',
    'Live streaming issues',
    'Messaging and chat problems',
    'Verification badge requests',
    'Page or profile suspension appeals',
    'Comments or reactions not showing',
    'Followers disappearing or engagement drop',
    'Issues with linking external accounts',
    'Push notifications not working',
    'Community guideline violation appeals',
    'Hashtag or search issues',
    'Blocked or restricted content access',
    'Issues with payment for ads or subscriptions',
    'Subscription cancellations and refunds',
    'Billing errors and disputes',
    'Marketplace buying/selling issues'
  ];

  public isLoggedIn(): boolean {
    return this.isUserLoggedIn || localStorage.getItem('loggedIn') === 'true';
  }

  public navigateTo(path: string): void {
    this.router.navigate([path]);
  }
}