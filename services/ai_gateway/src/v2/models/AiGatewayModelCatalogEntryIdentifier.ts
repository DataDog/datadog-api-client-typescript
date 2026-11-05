import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { AiGatewayModelCatalogEntryType } from "./AiGatewayModelCatalogEntryType";

/**
 * Model catalog entry identifier.
 */
export class AiGatewayModelCatalogEntryIdentifier {
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
    return AiGatewayModelCatalogEntryIdentifier.attributeTypeMap;
  }

  public constructor() {}
}
