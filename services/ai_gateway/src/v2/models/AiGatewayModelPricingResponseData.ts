import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { AiGatewayModelPricingAttributes } from "./AiGatewayModelPricingAttributes";
import { AiGatewayModelPricingType } from "./AiGatewayModelPricingType";

/**
 * Data for a model pricing response.
 */
export class AiGatewayModelPricingResponseData {
  /**
   * Attributes of a model pricing resource.
   */
  "attributes": AiGatewayModelPricingAttributes;
  /**
   * Resource identifier.
   */
  "id": string;
  /**
   * Model pricing resource type.
   */
  "type": AiGatewayModelPricingType;
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
      type: "AiGatewayModelPricingAttributes",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    type: {
      baseName: "type",
      type: "AiGatewayModelPricingType",
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
    return AiGatewayModelPricingResponseData.attributeTypeMap;
  }

  public constructor() {}
}
