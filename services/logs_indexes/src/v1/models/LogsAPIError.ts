import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Error returned by the Logs API
 */
export class LogsAPIError {
  /**
   * Code identifying the error
   */
  "code"?: string;
  /**
   * Additional error details
   */
  "details"?: Array<LogsAPIError>;
  /**
   * Error message
   */
  "message"?: string;
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
    code: {
      baseName: "code",
      type: "string",
    },
    details: {
      baseName: "details",
      type: "Array<LogsAPIError>",
    },
    message: {
      baseName: "message",
      type: "string",
    },
    additionalProperties: {
      baseName: "additionalProperties",
      type: "any",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return LogsAPIError.attributeTypeMap;
  }

  public constructor() {}
}
