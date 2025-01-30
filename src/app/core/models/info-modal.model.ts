export interface InfoModal {
  type: InfoModalType;
  title: string;
  message: string;
}

export enum InfoModalType {
  SUCCESS = 'SUCCESS',
  ERROR = 'ERROR',
  CONFIRM = 'CONFIRM',
  INFO = 'INFO',
  WARNING = 'WARNING',
}
