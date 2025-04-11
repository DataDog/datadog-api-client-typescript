import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { LogsRetentionSumUsage } from "./LogsRetentionSumUsage";

/**
 * Indexed logs usage by retention for a single organization.
 */
export class LogsByRetentionOrgUsage {
  /**
   * Indexed logs usage for each active retention for the organization.
   */
  "usage"?: Array<LogsRetentionSumUsage>;
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
    usage: {
      baseName: "usage",
      type: "Array<LogsRetentionSumUsage>",
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
    return LogsByRetentionOrgUsage.attributeTypeMap;
  }

  public constructor() {}
}
