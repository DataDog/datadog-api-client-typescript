import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { SlackRoutingOptions } from "./SlackRoutingOptions";

/**
 * Attributes for generating a campaign report.
 */
export class GenerateCampaignReportRequestAttributes {
  /**
   * Slack routing options for report delivery.
   */
  "slack": SlackRoutingOptions;
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
    slack: {
      baseName: "slack",
      type: "SlackRoutingOptions",
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
    return GenerateCampaignReportRequestAttributes.attributeTypeMap;
  }

  public constructor() {}
}
