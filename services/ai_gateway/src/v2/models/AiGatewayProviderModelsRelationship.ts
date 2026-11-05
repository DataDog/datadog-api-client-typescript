import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { AiGatewayModelCatalogEntryIdentifier } from "./AiGatewayModelCatalogEntryIdentifier";

/**
 * Model catalog entries associated with a provider.
 */
export class AiGatewayProviderModelsRelationship {
  "data": Array<AiGatewayModelCatalogEntryIdentifier>;
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
      type: "Array<AiGatewayModelCatalogEntryIdentifier>",
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
    return AiGatewayProviderModelsRelationship.attributeTypeMap;
  }

  public constructor() {}
}
