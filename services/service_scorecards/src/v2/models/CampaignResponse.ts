import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { CampaignResponseData } from "./CampaignResponseData";

/**
 * Response containing campaign data.
 */
export class CampaignResponse {
  /**
   * Campaign data.
   */
  "data": CampaignResponseData;
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
      type: "CampaignResponseData",
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
    return CampaignResponse.attributeTypeMap;
  }

  public constructor() {}
}
