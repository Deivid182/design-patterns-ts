import { AbstractConditionHandler } from "./abstract-condition-handler";
import { IUser } from "./interfaces";

export class UserPoint extends AbstractConditionHandler {
  public override handle(user: IUser): boolean {
    if (user.point < 50) {
      return false; // Condition not met, stop processing
    }
    return super.handle(user); // Condition met, pass to the next handler
  }
}

export class UserHasOpenIssue extends AbstractConditionHandler {
  public override handle(user: IUser): boolean {
    if (user.hasOpenIssue) {
      return false; // Condition not met, stop processing
    }
    return super.handle(user); // Condition met, pass to the next handler
  }
}

export class UserHasActiveDays extends AbstractConditionHandler {
  public override handle(user: IUser): boolean {
    if (user.activeDays < 100) {
      return false; // Condition not met, stop processing
    }
    return super.handle(user); // Condition met, pass to the next handler
  }
}