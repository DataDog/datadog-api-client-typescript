import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ScorecardType } from "./ScorecardType";

/**
 * Rule relationship data.
 */
export class RelationshipToRuleDataObject {
  /**
   * The unique ID for a scorecard.
   */
  "id"?: string;
  /**
   * The JSON:API type for scorecard.
   */
  "type"?: ScorecardType;
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
      type: "ScorecardType",
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
    return RelationshipToRuleDataObject.attributeTypeMap;
  }

  public constructor() {}
}
