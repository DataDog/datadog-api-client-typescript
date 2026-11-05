import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { AiGatewayProviderType } from "./AiGatewayProviderType";
import { AiGatewayProviderUpdateAttributes } from "./AiGatewayProviderUpdateAttributes";

/**
 * Data used to update an AI Gateway provider.
 */
export class AiGatewayProviderUpdateData {
  /**
   * Attributes used to update an AI Gateway provider.
   */
  "attributes": AiGatewayProviderUpdateAttributes;
  /**
   * Resource identifier.
   */
  "id": string;
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
      type: "AiGatewayProviderUpdateAttributes",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
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
    return AiGatewayProviderUpdateData.attributeTypeMap;
  }

  public constructor() {}
}
