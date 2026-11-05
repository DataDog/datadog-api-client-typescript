import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Attributes used to reset one budget instance's active-period spend.
 */
export class AiGatewayBudgetInstanceResetAttributes {
  /**
   * Counter key of the instance to reset, as returned by the list budget instances endpoint.
   */
  "instanceKey": string;
  /**
   * Optional reason recorded with the spend reset.
   */
  "reason"?: string;
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
    instanceKey: {
      baseName: "instance_key",
      type: "string",
      required: true,
    },
    reason: {
      baseName: "reason",
      type: "string",
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
    return AiGatewayBudgetInstanceResetAttributes.attributeTypeMap;
  }

  public constructor() {}
}
