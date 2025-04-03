import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { RuleType } from "./RuleType";

/**
 * The JSON:API relationship to an outcome, which returns the related rule id.
 */
export class RelationshipToOutcomeData {
  /**
   * The unique ID for a scorecard rule.
   */
  "id"?: string;
  /**
   * The JSON:API type for scorecard rules.
   */
  "type"?: RuleType;
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
    id: {
      baseName: "id",
      type: "string",
    },
    type: {
      baseName: "type",
      type: "RuleType",
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
    return RelationshipToOutcomeData.attributeTypeMap;
  }

  public constructor() {}
}
