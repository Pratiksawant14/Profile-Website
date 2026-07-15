export type RoutePath = 
  | '/'
  | '/engineering-systems'
  | '/process'
  | '/open-source'
  | '/resume'
  | '/contact';

export interface NavItem {
  id: string;
  label: string;
  path: RoutePath;
  badge?: string;
  external?: boolean;
}
