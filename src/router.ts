import Vue from 'vue';
import VueRouter from 'vue-router';
import {
  RawLocation,
  Route,
  RouteConfig,
  RouterMode,
  RouterOptions,
} from 'vue-router/types/router';

// Named routes to be used when programmatically navigating
export class Routes {
  public static readonly Home: string = 'home';
  public static readonly Bio: string = 'bio';
  public static readonly Work: string = 'work';
  public static readonly PageNotFound: string = 'page-not-found';
}

/**
 * Describes vue-router configuration.
 *
 * More info: http://router.vuejs.org/en/
 */
export default class Router implements RouterOptions {

  public get instance(): VueRouter {
    return this.router;
  }

  private static async beforeEach(
    to: Route,
    from: Route,
    /* eslint-disable-next-line */
    next: (to?: RawLocation | false | ((vm: Vue) => any) | void) => void,
  ) {
    const defaultTitle = 'Ella Parsons | Designer & Photographer';
    if (to.meta.title) {
      document.title = to.meta.title + ' | ' + defaultTitle;
    } else {
      document.title = defaultTitle;
    }

    next();
  }
  public routes: RouteConfig[] = [
    {
      path: '/',
      name: Routes.Home,
      component: () => import('@/views/Home.vue'),
      meta: {
        title: 'Home',
      },
    },
    {
      path: '/bio',
      name: Routes.Bio,
      component: () => import('@/views/Bio.vue'),
      meta: {
        title: 'BIO',
      },
    },
    {
      path: '/work',
      name: Routes.Work,
      component: () => import('@/views/Work.vue'),
      meta: {
        title: 'Work',
      },
    },
    {
      path: '*',
      name: Routes.PageNotFound,
      component: () => import('@/views/PageNotFound.vue'),
      meta: {
        title: 'Page not found',
      },
    },
  ];

  public mode: RouterMode = 'history';

  private readonly router: VueRouter;

  public constructor() {
    Vue.use(VueRouter);

    this.router = new VueRouter(this);

    this.router.beforeEach(Router.beforeEach);
  }
}
