import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { GenerateCampaignReportRequestData } from "./GenerateCampaignReportRequestData";

/**
 * Request to generate a campaign report.
 */
export class GenerateCampaignReportRequest {
  /**
   * Data for generating a campaign report.
   */
  "data": GenerateCampaignReportRequestData;
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
    data: {
      baseName: "data",
      type: "GenerateCampaignReportRequestData",
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
    return GenerateCampaignReportRequest.attributeTypeMap;
  }

  public constructor() {}
}
