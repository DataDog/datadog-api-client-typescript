import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { UpdateCampaignRequestData } from "./UpdateCampaignRequestData";

/**
 * Request to update a campaign.
 */
export class UpdateCampaignRequest {
  /**
   * Data for updating a campaign.
   */
  "data": UpdateCampaignRequestData;
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
      type: "UpdateCampaignRequestData",
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
    return UpdateCampaignRequest.attributeTypeMap;
  }

  public constructor() {}
}
