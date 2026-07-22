import { describe, expect, it, vi } from "vitest";
import { WinstonLoggerAdapter, ILoggerAdapter, loggerInstance } from "@/structural/adapter";

describe("WinstonLoggerAdapter", () => {
  it("should create an instance of WinstonLoggerAdapter", () => {
    const logger: ILoggerAdapter = new WinstonLoggerAdapter("testFile");
    expect(logger).toBeInstanceOf(WinstonLoggerAdapter);
  });

  it("should log info messages", () => {
    const logger: ILoggerAdapter = new WinstonLoggerAdapter("testFile");
    const infoSpy = vi.spyOn(loggerInstance, "info");
    logger.displayInfo("This is an info message");
    // Here you would typically check the output or mock the logger to verify the message was logged
    expect(infoSpy).toHaveBeenCalledWith(`[${logger.file}] This is an info message`);
  });

  it("should log error messages", () => {
    const logger: ILoggerAdapter = new WinstonLoggerAdapter("testFile");
    const errorSpy = vi.spyOn(loggerInstance, "error");
    logger.displayError("This is an error message");
    // Here you would typically check the output or mock the logger to verify the message was logged
    expect(errorSpy).toHaveBeenCalledWith(`[${logger.file}] This is an error message`);
  });

  it("should log warning messages", () => {
    const logger: ILoggerAdapter = new WinstonLoggerAdapter("testFile");
    const warnSpy = vi.spyOn(loggerInstance, "warn");
    logger.displayWarning("This is a warning message");
    // Here you would typically check the output or mock the logger to verify the message was logged
    expect(warnSpy).toHaveBeenCalledWith(`[${logger.file}] This is a warning message`);
  });
});