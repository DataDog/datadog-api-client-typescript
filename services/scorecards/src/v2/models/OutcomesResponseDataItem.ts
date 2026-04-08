import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { OutcomesBatchResponseAttributes } from "./OutcomesBatchResponseAttributes";
import { OutcomeType } from "./OutcomeType";
import { RuleOutcomeRelationships } from "./RuleOutcomeRelationships";

/**
 * A single rule outcome.
 */
export class OutcomesResponseDataItem {
  /**
   * The JSON:API attributes for an outcome.
   */
  "attributes"?: OutcomesBatchResponseAttributes;
  /**
   * The unique ID for a rule outcome.
   */
  "id"?: string;
  /**
   * The JSON:API relationship to a scorecard rule.
   */
  "relationships"?: RuleOutcomeRelationships;
  /**
   * The JSON:API type for an outcome.
   */
  "type"?: OutcomeType;
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
      type: "OutcomesBatchResponseAttributes",
    },
    id: {
      baseName: "id",
      type: "string",
    },
    relationships: {
      baseName: "relationships",
      type: "RuleOutcomeRelationships",
    },
    type: {
      baseName: "type",
      type: "OutcomeType",
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
    return OutcomesResponseDataItem.attributeTypeMap;
  }

  public constructor() {}
}
