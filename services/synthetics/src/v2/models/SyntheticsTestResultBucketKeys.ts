import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Storage bucket keys for artifacts produced during a step or test.
 */
export class SyntheticsTestResultBucketKeys {
  /**
   * Key for the screenshot captured after the step (goal-based tests).
   */
  "afterStepScreenshot"?: string;
  /**
   * Key for the screenshot captured after the turn (goal-based tests).
   */
  "afterTurnScreenshot"?: string;
  /**
   * Key for miscellaneous artifacts.
   */
  "artifacts"?: string;
  /**
   * Key for the screenshot captured before the step (goal-based tests).
   */
  "beforeStepScreenshot"?: string;
  /**
   * Key for the screenshot captured before the turn (goal-based tests).
   */
  "beforeTurnScreenshot"?: string;
  /**
   * Key for a captured crash report.
   */
  "crashReport"?: string;
  /**
   * Key for captured device logs.
   */
  "deviceLogs"?: string;
  /**
   * Keys for email message payloads captured by the step.
   */
  "emailMessages"?: Array<string>;
  /**
   * Key for the captured screenshot.
   */
  "screenshot"?: string;
  /**
   * Key for the captured DOM snapshot.
   */
  "snapshot"?: string;
  /**
   * Key for the page source or element source.
   */
  "source"?: string;
  /**
   * A container for additional, undeclared properties.
   * This is a holder for any undeclared properties as specified with
   * the 'additionalProperties' keyword in the OAS document.
   */
  "additionalProperties"?: { [key: string]: any };
  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    afterStepScreenshot: {
      baseName: "after_step_screenshot",
      type: "string",
    },
    afterTurnScreenshot: {
      baseName: "after_turn_screenshot",
      type: "string",
    },
    artifacts: {
      baseName: "artifacts",
      type: "string",
    },
    beforeStepScreenshot: {
      baseName: "before_step_screenshot",
      type: "string",
    },
    beforeTurnScreenshot: {
      baseName: "before_turn_screenshot",
      type: "string",
    },
    crashReport: {
      baseName: "crash_report",
      type: "string",
    },
    deviceLogs: {
      baseName: "device_logs",
      type: "string",
    },
    emailMessages: {
      baseName: "email_messages",
      type: "Array<string>",
    },
    screenshot: {
      baseName: "screenshot",
      type: "string",
    },
    snapshot: {
      baseName: "snapshot",
      type: "string",
    },
    source: {
      baseName: "source",
      type: "string",
    },
    additionalProperties: {
      baseName: "additionalProperties",
      type: "{ [key: string]: any; }",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return SyntheticsTestResultBucketKeys.attributeTypeMap;
  }

  public constructor() {}
}
