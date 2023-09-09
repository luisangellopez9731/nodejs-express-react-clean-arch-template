interface ErrorProps {
  name: string;
  message: string;
  cause?: any;
}

export interface ErrorControlledProps extends ErrorProps {
  error_code: ERROR_CODE;
}

export enum ERROR_CODE {}

export class ServerError extends Error {
  name: string;
  message: string;
  cause: any;
  constructor({ name, message, cause }: ErrorProps) {
    super();
    this.name = name;
    this.message = message;
    this.cause = cause;
  }
}

export class ServerControlledError extends Error {
  name: string;
  message: string;
  error_code: ERROR_CODE;
  cause: any;
  constructor({ name, message, error_code, cause }: ErrorControlledProps) {
    super();
    this.name = name;
    this.message = message;
    this.error_code = error_code;
    this.cause = cause;
  }
}
