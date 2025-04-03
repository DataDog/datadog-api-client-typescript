import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { OutcomesBatchAttributes } from "./OutcomesBatchAttributes";
import { OutcomesBatchType } from "./OutcomesBatchType";

/**
 * Scorecard outcomes batch request data.
 */
export class OutcomesBatchRequestData {
  /**
   * The JSON:API attributes for a batched set of scorecard outcomes.
   */
  "attributes"?: OutcomesBatchAttributes;
  /**
   * The JSON:API type for scorecard outcomes.
   */
  "type"?: OutcomesBatchType;
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
      type: "OutcomesBatchAttributes",
    },
    type: {
      baseName: "type",
      type: "OutcomesBatchType",
    },
    additionalProperties: {
      baseName: "additionalProperties",
      type: "any",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return OutcomesBatchRequestData.attributeTypeMap;
  }

  public constructor() {}
}
