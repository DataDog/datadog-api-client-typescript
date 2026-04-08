import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { CampaignResponseData } from "./CampaignResponseData";
import { PaginatedResponseMeta } from "./PaginatedResponseMeta";

/**
 * Response containing a list of campaigns.
 */
export class ListCampaignsResponse {
  /**
   * Array of campaigns.
   */
  "data": Array<CampaignResponseData>;
  /**
   * Metadata for scores response.
   */
  "meta": PaginatedResponseMeta;
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
      type: "Array<CampaignResponseData>",
      required: true,
    },
    meta: {
      baseName: "meta",
      type: "PaginatedResponseMeta",
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
    return ListCampaignsResponse.attributeTypeMap;
  }

  public constructor() {}
}
