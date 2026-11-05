import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { AiGatewayModelPricingRequestAttributes } from "./AiGatewayModelPricingRequestAttributes";
import { AiGatewayModelPricingType } from "./AiGatewayModelPricingType";

/**
 * Data for a model pricing request.
 */
export class AiGatewayModelPricingRequestData {
  /**
   * Attributes for a model pricing request.
   */
  "attributes": AiGatewayModelPricingRequestAttributes;
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
      type: "AiGatewayModelPricingRequestAttributes",
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
    return AiGatewayModelPricingRequestData.attributeTypeMap;
  }

  public constructor() {}
}
