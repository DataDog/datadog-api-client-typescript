import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { AiGatewayBudgetInstanceDimensionAttributes } from "./AiGatewayBudgetInstanceDimensionAttributes";
import { AiGatewayBudgetInstanceDimensionType } from "./AiGatewayBudgetInstanceDimensionType";

/**
 * Values of one budget split dimension.
 */
export class AiGatewayBudgetInstanceDimensionResource {
  /**
   * Values of one budget split dimension.
   */
  "attributes": AiGatewayBudgetInstanceDimensionAttributes;
  /**
   * Resource identifier.
   */
  "id": string;
  /**
   * Budget split dimension values resource type.
   */
  "type": AiGatewayBudgetInstanceDimensionType;
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
      type: "AiGatewayBudgetInstanceDimensionAttributes",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    type: {
      baseName: "type",
      type: "AiGatewayBudgetInstanceDimensionType",
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
    return AiGatewayBudgetInstanceDimensionResource.attributeTypeMap;
  }

  public constructor() {}
}
