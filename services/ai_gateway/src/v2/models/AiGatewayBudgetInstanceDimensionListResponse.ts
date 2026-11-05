import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { AiGatewayBudgetInstanceDimensionResource } from "./AiGatewayBudgetInstanceDimensionResource";

/**
 * Response containing values of budget split dimensions.
 */
export class AiGatewayBudgetInstanceDimensionListResponse {
  "data": Array<AiGatewayBudgetInstanceDimensionResource>;
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
      type: "Array<AiGatewayBudgetInstanceDimensionResource>",
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
    return AiGatewayBudgetInstanceDimensionListResponse.attributeTypeMap;
  }

  public constructor() {}
}
