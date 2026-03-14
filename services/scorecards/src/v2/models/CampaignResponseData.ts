import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { CampaignResponseAttributes } from "./CampaignResponseAttributes";
import { CampaignType } from "./CampaignType";

/**
 * Campaign data.
 */
export class CampaignResponseData {
  /**
   * Campaign attributes.
   */
  "attributes": CampaignResponseAttributes;
  /**
   * The unique ID of the campaign.
   */
  "id": string;
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
      type: "CampaignResponseAttributes",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
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
    return CampaignResponseData.attributeTypeMap;
  }

  public constructor() {}
}
