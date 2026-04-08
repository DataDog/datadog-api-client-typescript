import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { CampaignType } from "./CampaignType";
import { UpdateCampaignRequestAttributes } from "./UpdateCampaignRequestAttributes";

/**
 * Data for updating a campaign.
 */
export class UpdateCampaignRequestData {
  /**
   * Attributes for updating a campaign.
   */
  "attributes": UpdateCampaignRequestAttributes;
  /**
   * The JSON:API type for campaigns.
   */
  "type": CampaignType;
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
      type: "UpdateCampaignRequestAttributes",
      required: true,
    },
    type: {
      baseName: "type",
      type: "CampaignType",
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
    return UpdateCampaignRequestData.attributeTypeMap;
  }

  public constructor() {}
}
