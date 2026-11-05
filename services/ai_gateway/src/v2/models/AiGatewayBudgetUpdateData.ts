import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { AiGatewayBudgetType } from "./AiGatewayBudgetType";
import { AiGatewayBudgetUpdateAttributes } from "./AiGatewayBudgetUpdateAttributes";

/**
 * Data used to update an AI Gateway budget.
 */
export class AiGatewayBudgetUpdateData {
  /**
   * Mutable attributes of an AI Gateway budget.
   */
  "attributes": AiGatewayBudgetUpdateAttributes;
  /**
   * Resource identifier. Must match the budget ID in the path.
   */
  "id": string;
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
      type: "AiGatewayBudgetUpdateAttributes",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
      format: "uuid",
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
    return AiGatewayBudgetUpdateData.attributeTypeMap;
  }

  public constructor() {}
}
