import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { AiGatewayModelCatalogEntryAttributes } from "./AiGatewayModelCatalogEntryAttributes";
import { AiGatewayModelCatalogEntryType } from "./AiGatewayModelCatalogEntryType";

/**
 * AI Gateway model catalog entry resource.
 */
export class AiGatewayModelCatalogEntryResource {
  /**
   * Model catalog entry configuration and metadata.
   */
  "attributes": AiGatewayModelCatalogEntryAttributes;
  /**
   * Resource identifier.
   */
  "id": string;
  /**
   * Model catalog entry resource type.
   */
  "type": AiGatewayModelCatalogEntryType;
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
      type: "AiGatewayModelCatalogEntryAttributes",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    type: {
      baseName: "type",
      type: "AiGatewayModelCatalogEntryType",
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
    return AiGatewayModelCatalogEntryResource.attributeTypeMap;
  }

  public constructor() {}
}
