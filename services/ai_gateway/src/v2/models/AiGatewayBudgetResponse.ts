import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { AiGatewayBudgetResource } from "./AiGatewayBudgetResource";

/**
 * Response containing one AI Gateway budget.
 */
export class AiGatewayBudgetResponse {
  /**
   * AI Gateway budget resource.
   */
  "data": AiGatewayBudgetResource;
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
    data: {
      baseName: "data",
      type: "AiGatewayBudgetResource",
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
    return AiGatewayBudgetResponse.attributeTypeMap;
  }

  public constructor() {}
}
