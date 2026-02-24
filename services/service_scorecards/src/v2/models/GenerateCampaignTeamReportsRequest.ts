import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { GenerateCampaignTeamReportsRequestData } from "./GenerateCampaignTeamReportsRequestData";

/**
 * Request to generate team-specific campaign reports.
 */
export class GenerateCampaignTeamReportsRequest {
  /**
   * Data for generating team campaign reports.
   */
  "data": GenerateCampaignTeamReportsRequestData;
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
      type: "GenerateCampaignTeamReportsRequestData",
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
    return GenerateCampaignTeamReportsRequest.attributeTypeMap;
  }

  public constructor() {}
}
