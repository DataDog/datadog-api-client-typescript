import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { LogsByRetentionOrgUsage } from "./LogsByRetentionOrgUsage";

/**
 * Indexed logs usage summary for each organization for each retention period with usage.
 */
export class LogsByRetentionOrgs {
  /**
   * Indexed logs usage summary for each organization.
   */
  "usage"?: Array<LogsByRetentionOrgUsage>;
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
      type: "Array<LogsByRetentionOrgUsage>",
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
    return LogsByRetentionOrgs.attributeTypeMap;
  }

  public constructor() {}
}
