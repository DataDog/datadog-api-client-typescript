import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { CampaignType } from "./CampaignType";
import { CreateCampaignRequestAttributes } from "./CreateCampaignRequestAttributes";

/**
 * Data for creating a new campaign.
 */
export class CreateCampaignRequestData {
  /**
   * Attributes for creating a new campaign.
   */
  "attributes": CreateCampaignRequestAttributes;
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
      type: "CreateCampaignRequestAttributes",
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
    return CreateCampaignRequestData.attributeTypeMap;
  }

  public constructor() {}
}
