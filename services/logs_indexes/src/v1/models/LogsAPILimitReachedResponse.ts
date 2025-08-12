import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { LogsAPIError } from "./LogsAPIError";

/**
 * Response returned by the Logs API when the max limit has been reached.
 */
export class LogsAPILimitReachedResponse {
  /**
   * Error returned by the Logs API
   */
  "error"?: LogsAPIError;
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
    error: {
      baseName: "error",
      type: "LogsAPIError",
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
    return LogsAPILimitReachedResponse.attributeTypeMap;
  }

  public constructor() {}
}
