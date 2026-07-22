import { ConditionHandler, IUser } from "./interfaces";

export class AbstractConditionHandler implements ConditionHandler {

  private nextHandler: ConditionHandler | null = null;

  setNext(handler: ConditionHandler): ConditionHandler {
    this.nextHandler = handler;
    return handler;
  }

  handle(userData: IUser): boolean {
    if (this.nextHandler) {
      return this.nextHandler.handle(userData);
    }
    return true;
  }
}