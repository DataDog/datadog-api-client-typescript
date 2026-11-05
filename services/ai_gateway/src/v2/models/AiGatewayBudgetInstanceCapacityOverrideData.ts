import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { AiGatewayBudgetInstanceCapacityOverrideAttributes } from "./AiGatewayBudgetInstanceCapacityOverrideAttributes";
import { AiGatewayBudgetInstanceType } from "./AiGatewayBudgetInstanceType";

/**
 * Data used to override one budget instance's active-period capacity.
 */
export class AiGatewayBudgetInstanceCapacityOverrideData {
  /**
   * Attributes used to override one budget instance's active-period capacity.
   */
  "attributes": AiGatewayBudgetInstanceCapacityOverrideAttributes;
  /**
   * Budget instance counter resource type.
   */
  "type": AiGatewayBudgetInstanceType;
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
      type: "AiGatewayBudgetInstanceCapacityOverrideAttributes",
      required: true,
    },
    type: {
      baseName: "type",
      type: "AiGatewayBudgetInstanceType",
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
    return AiGatewayBudgetInstanceCapacityOverrideData.attributeTypeMap;
  }

  public constructor() {}
}
