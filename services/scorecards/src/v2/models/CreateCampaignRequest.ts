import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { CreateCampaignRequestData } from "./CreateCampaignRequestData";

/**
 * Request to create a new campaign.
 */
export class CreateCampaignRequest {
  /**
   * Data for creating a new campaign.
   */
  "data": CreateCampaignRequestData;
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
      type: "CreateCampaignRequestData",
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
    return CreateCampaignRequest.attributeTypeMap;
  }

  public constructor() {}
}
