import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { AiGatewayBudgetPeriodAttributes } from "./AiGatewayBudgetPeriodAttributes";
import { AiGatewayBudgetPeriodType } from "./AiGatewayBudgetPeriodType";

/**
 * Active accounting period for an AI Gateway budget.
 */
export class AiGatewayBudgetPeriodResource {
  /**
   * Accounting state enforced for an AI Gateway budget's active period.
   */
  "attributes": AiGatewayBudgetPeriodAttributes;
  /**
   * Budget identifier associated with this active period.
   */
  "id": string;
  /**
   * AI Gateway budget period resource type.
   */
  "type": AiGatewayBudgetPeriodType;
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
      type: "AiGatewayBudgetPeriodAttributes",
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
      type: "AiGatewayBudgetPeriodType",
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
    return AiGatewayBudgetPeriodResource.attributeTypeMap;
  }

  public constructor() {}
}
