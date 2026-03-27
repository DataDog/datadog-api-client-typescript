import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { OutcomesBatchRequestItem } from "./OutcomesBatchRequestItem";

/**
 * The JSON:API attributes for a batched set of scorecard outcomes.
 */
export class OutcomesBatchAttributes {
  /**
   * Set of scorecard outcomes to update.
   */
  "results"?: Array<OutcomesBatchRequestItem>;
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
    results: {
      baseName: "results",
      type: "Array<OutcomesBatchRequestItem>",
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
    return OutcomesBatchAttributes.attributeTypeMap;
  }

  public constructor() {}
}
