import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * A screenshot captured during a replay session.
 */
export class ReplayAnalysisScreenshot {
  /**
   * Filename or key identifier of the screenshot.
   */
  "screenshotKey": string;
  /**
   * Unique identifier of the session where the screenshot was taken.
   */
  "sessionId": string;
  /**
   * Timestamp of the screenshot in milliseconds.
   */
  "timestampMs": number;
  /**
   * Unique identifier of the view where the screenshot was taken.
   */
  "viewId": string;
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
    screenshotKey: {
      baseName: "screenshot_key",
      type: "string",
      required: true,
    },
    sessionId: {
      baseName: "session_id",
      type: "string",
      required: true,
    },
    timestampMs: {
      baseName: "timestamp_ms",
      type: "number",
      required: true,
      format: "int64",
    },
    viewId: {
      baseName: "view_id",
      type: "string",
      required: true,
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
    return ReplayAnalysisScreenshot.attributeTypeMap;
  }

  public constructor() {}
}
