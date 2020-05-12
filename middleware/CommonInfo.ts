export interface IWebDomain {
  url: string;
  secureUrl: string;
}

export interface IMedia {
  platform: string;
  url: string;
  icon: string;
  iconIsImage?: boolean;
}

export interface IMedias {
  designcrowd: IMedia;
  dribbble: IMedia;
  gurushots: IMedia;
  instagram: IMedia;
  pinterest: IMedia;
}

export default class CommonInfo {
  private static readonly NAME: string = 'Ella Parsons';
  private static readonly WEBSITE_DOMAIN: string = 'https://ellaparsons.design';
  private static readonly EMAIL: string = 'ella.parsons25@hotmail.com';
  private static readonly MEDIA: IMedias = {
    designcrowd: {
      platform: 'Design Crowd',
      url: 'https://designers.designcrowd.co.uk/designer.aspx?designerId=842923',
      icon: 'designcrowd.png',
      iconIsImage: true,
    },
    dribbble: {
      platform: 'Dribbble',
      url: 'https://dribbble.com/Ellaparsons',
      icon: 'dribbble',
    },
    gurushots: {
      platform: 'GuruShots',
      url: 'https://gurushots.com/ella.parsons/photos',
      icon: 'gurushots.png',
      iconIsImage: true,
    },
    instagram: {
      platform: 'Instagram',
      url: 'https://www.instagram.com/ella.photos00',
      icon: 'instagram',
    },
    pinterest: {
      platform: 'Pinterest',
      url: 'https://www.pinterest.co.uk/ellaparsons1633',
      icon: 'pinterest',
    },
  };

  public static get commonWebsiteDomain(): IWebDomain {
    return {
      url: this.WEBSITE_DOMAIN.replace('https://', ''),
      secureUrl: this.WEBSITE_DOMAIN,
    };
  }

  public static get commonName(): string {
    return this.NAME;
  }

  public static get commonMedia(): IMedias {
    return this.MEDIA;
  }

  public static get commonEmail(): string {
    return this.EMAIL;
  }
}
