import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { AiGatewayProviderAttributes } from "./AiGatewayProviderAttributes";
import { AiGatewayProviderRelationships } from "./AiGatewayProviderRelationships";
import { AiGatewayProviderType } from "./AiGatewayProviderType";

/**
 * AI Gateway provider resource.
 */
export class AiGatewayProviderResource {
  /**
   * AI Gateway provider configuration and metadata.
   */
  "attributes": AiGatewayProviderAttributes;
  /**
   * Resource identifier.
   */
  "id": string;
  /**
   * Provider relationships.
   */
  "relationships"?: AiGatewayProviderRelationships;
  /**
   * AI Gateway provider resource type.
   */
  "type": AiGatewayProviderType;
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
      type: "AiGatewayProviderAttributes",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    relationships: {
      baseName: "relationships",
      type: "AiGatewayProviderRelationships",
    },
    type: {
      baseName: "type",
      type: "AiGatewayProviderType",
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
    return AiGatewayProviderResource.attributeTypeMap;
  }

  public constructor() {}
}
