import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { GenerateCampaignReportRequestAttributes } from "./GenerateCampaignReportRequestAttributes";
import { GenerateCampaignReportRequestDataType } from "./GenerateCampaignReportRequestDataType";

/**
 * Data for generating a campaign report.
 */
export class GenerateCampaignReportRequestData {
  /**
   * Attributes for generating a campaign report.
   */
  "attributes": GenerateCampaignReportRequestAttributes;
  "type": GenerateCampaignReportRequestDataType;
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
    attributes: {
      baseName: "attributes",
      type: "GenerateCampaignReportRequestAttributes",
      required: true,
    },
    type: {
      baseName: "type",
      type: "GenerateCampaignReportRequestDataType",
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
    return GenerateCampaignReportRequestData.attributeTypeMap;
  }

  public constructor() {}
}
