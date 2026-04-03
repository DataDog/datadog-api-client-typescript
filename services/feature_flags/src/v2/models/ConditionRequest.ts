import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ConditionOperator } from "./ConditionOperator";

/**
 * Condition request payload for targeting rules.
 */
export class ConditionRequest {
  /**
   * The user or request attribute to evaluate.
   */
  "attribute": string;
  /**
   * The operator used in a targeting condition.
   */
  "operator": ConditionOperator;
  /**
   * Values used by the selected operator.
   */
  "value": Array<string>;
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
    attribute: {
      baseName: "attribute",
      type: "string",
      required: true,
    },
    operator: {
      baseName: "operator",
      type: "ConditionOperator",
      required: true,
    },
    value: {
      baseName: "value",
      type: "Array<string>",
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
    return ConditionRequest.attributeTypeMap;
  }

  public constructor() {}
}
