import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { AiGatewayBudgetCreateAttributes } from "./AiGatewayBudgetCreateAttributes";
import { AiGatewayBudgetType } from "./AiGatewayBudgetType";

/**
 * Data used to create an AI Gateway budget.
 */
export class AiGatewayBudgetCreateData {
  /**
   * Attributes used to create an AI Gateway budget.
   */
  "attributes": AiGatewayBudgetCreateAttributes;
  /**
   * AI Gateway budget resource type.
   */
  "type": AiGatewayBudgetType;
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
      type: "AiGatewayBudgetCreateAttributes",
      required: true,
    },
    type: {
      baseName: "type",
      type: "AiGatewayBudgetType",
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
    return AiGatewayBudgetCreateData.attributeTypeMap;
  }

  public constructor() {}
}
