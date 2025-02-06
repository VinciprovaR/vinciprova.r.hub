import { ApplicationConfig, InjectionToken } from '@angular/core';

export interface Social {
  href: string;
  icon: string;
  title: string;
}
export interface SocialMap {
  [key: string]: Social;
}

const socialMap: SocialMap = {
  a_linkedin: {
    href: 'https://www.linkedin.com/in/riccardo-vinciprova-567703100/',
    icon: 'linkedin',
    title: 'LinkedIn',
  },
  b_github: {
    href: 'https://github.com/VinciprovaR',
    icon: 'github',
    title: 'GitHub',
  },
  d_movieTvBookmark: {
    href: 'https://movie-tv-bookmark.netlify.app/home',
    icon: 'a',
    title: 'Project: Movie \u0026 TV Bookmark',
  },
};

export const SOCIAL_MAP = new InjectionToken<SocialMap>('SOCIAL_MAP');
export const THEME_STORAGE_KEY = new InjectionToken<string>(
  'THEME_STORAGE_KEY'
);

export const appConfig: ApplicationConfig = {
  providers: [
    {
      provide: SOCIAL_MAP,
      useValue: socialMap,
    },
    { provide: THEME_STORAGE_KEY, useValue: 'darkTheme' },
  ],
};
