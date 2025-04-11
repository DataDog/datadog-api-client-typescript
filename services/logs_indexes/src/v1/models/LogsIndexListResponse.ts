import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { LogsIndex } from "./LogsIndex";

/**
 * Object with all Index configurations for a given organization.
 */
export class LogsIndexListResponse {
  /**
   * Array of Log index configurations.
   */
  "indexes"?: Array<LogsIndex>;
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
    indexes: {
      baseName: "indexes",
      type: "Array<LogsIndex>",
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
    return LogsIndexListResponse.attributeTypeMap;
  }

  public constructor() {}
}
