import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { AiGatewayModelCatalogEntryResource } from "./AiGatewayModelCatalogEntryResource";
import { AiGatewayProviderResource } from "./AiGatewayProviderResource";

/**
 * Response containing one AI Gateway provider.
 */
export class AiGatewayProviderResponse {
  /**
   * AI Gateway provider resource.
   */
  "data": AiGatewayProviderResource;
  /**
   * Model catalog entries created with the provider.
   */
  "included"?: Array<AiGatewayModelCatalogEntryResource>;
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
      type: "AiGatewayProviderResource",
      required: true,
    },
    included: {
      baseName: "included",
      type: "Array<AiGatewayModelCatalogEntryResource>",
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
    return AiGatewayProviderResponse.attributeTypeMap;
  }

  public constructor() {}
}
