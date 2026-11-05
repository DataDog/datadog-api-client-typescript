import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { AiGatewayProviderModelsRelationship } from "./AiGatewayProviderModelsRelationship";

/**
 * Provider relationships.
 */
export class AiGatewayProviderRelationships {
  /**
   * Model catalog entries associated with a provider.
   */
  "models": AiGatewayProviderModelsRelationship;
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
    models: {
      baseName: "models",
      type: "AiGatewayProviderModelsRelationship",
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
    return AiGatewayProviderRelationships.attributeTypeMap;
  }

  public constructor() {}
}
