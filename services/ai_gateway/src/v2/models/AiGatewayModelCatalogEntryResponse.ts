import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { AiGatewayModelCatalogEntryResource } from "./AiGatewayModelCatalogEntryResource";

/**
 * Response containing one model catalog entry.
 */
export class AiGatewayModelCatalogEntryResponse {
  /**
   * AI Gateway model catalog entry resource.
   */
  "data": AiGatewayModelCatalogEntryResource;
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
      type: "AiGatewayModelCatalogEntryResource",
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
    return AiGatewayModelCatalogEntryResponse.attributeTypeMap;
  }

  public constructor() {}
}
