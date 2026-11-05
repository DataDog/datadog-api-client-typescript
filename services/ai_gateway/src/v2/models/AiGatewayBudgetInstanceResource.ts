import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { AiGatewayBudgetInstanceAttributes } from "./AiGatewayBudgetInstanceAttributes";
import { AiGatewayBudgetInstanceType } from "./AiGatewayBudgetInstanceType";

/**
 * One budget instance counter.
 */
export class AiGatewayBudgetInstanceResource {
  /**
   * One budget instance counter.
   */
  "attributes": AiGatewayBudgetInstanceAttributes;
  /**
   * Resource identifier.
   */
  "id": string;
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
      type: "AiGatewayBudgetInstanceAttributes",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
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
    return AiGatewayBudgetInstanceResource.attributeTypeMap;
  }

  public constructor() {}
}
