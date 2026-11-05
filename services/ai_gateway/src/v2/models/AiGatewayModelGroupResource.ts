import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { AiGatewayModelGroupAttributes } from "./AiGatewayModelGroupAttributes";
import { AiGatewayModelGroupType } from "./AiGatewayModelGroupType";

/**
 * AI Gateway model group resource.
 */
export class AiGatewayModelGroupResource {
  /**
   * Complete AI Gateway model group configuration.
   */
  "attributes": AiGatewayModelGroupAttributes;
  /**
   * Resource identifier.
   */
  "id": string;
  /**
   * AI Gateway model group resource type.
   */
  "type": AiGatewayModelGroupType;
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
      type: "AiGatewayModelGroupAttributes",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    type: {
      baseName: "type",
      type: "AiGatewayModelGroupType",
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
    return AiGatewayModelGroupResource.attributeTypeMap;
  }

  public constructor() {}
}
