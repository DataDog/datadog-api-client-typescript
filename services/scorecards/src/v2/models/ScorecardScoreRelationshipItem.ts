import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ScorecardScoreRelationshipData } from "./ScorecardScoreRelationshipData";

/**
 * A relationship item for a score.
 */
export class ScorecardScoreRelationshipItem {
  /**
   * A relationship data object for a score.
   */
  "data"?: ScorecardScoreRelationshipData;
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
      type: "ScorecardScoreRelationshipData",
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
    return ScorecardScoreRelationshipItem.attributeTypeMap;
  }

  public constructor() {}
}
