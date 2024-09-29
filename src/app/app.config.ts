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
  linkedin: {
    href: 'https://www.linkedin.com/in/riccardo-vinciprova-567703100/',
    icon: 'linkedin',
    title: 'LinkedIn',
  },
  github: {
    href: 'https://github.com/VinciprovaR',
    icon: 'github',
    title: 'GitHub',
  },
  instagram: {
    href: 'https://www.instagram.com/rick_uroboros/',
    icon: 'instagram',
    title: 'Instagram',
  },
};

export const SOCIAL_MAP = new InjectionToken<SocialMap>('SOCIAL_MAP');

export const appConfig: ApplicationConfig = {
  providers: [
    {
      provide: SOCIAL_MAP,
      useValue: socialMap,
    },
  ],
};
