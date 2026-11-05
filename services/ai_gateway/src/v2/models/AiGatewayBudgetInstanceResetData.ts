import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { AiGatewayBudgetInstanceResetAttributes } from "./AiGatewayBudgetInstanceResetAttributes";
import { AiGatewayBudgetInstanceType } from "./AiGatewayBudgetInstanceType";

/**
 * Data used to reset one budget instance's active-period spend.
 */
export class AiGatewayBudgetInstanceResetData {
  /**
   * Attributes used to reset one budget instance's active-period spend.
   */
  "attributes": AiGatewayBudgetInstanceResetAttributes;
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
      type: "AiGatewayBudgetInstanceResetAttributes",
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
    return AiGatewayBudgetInstanceResetData.attributeTypeMap;
  }

  public constructor() {}
}
