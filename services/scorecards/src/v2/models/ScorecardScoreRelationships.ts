import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ScorecardScoreRelationshipItem } from "./ScorecardScoreRelationshipItem";

/**
 * Relationships for a scorecard score, depending on the aggregation type.
 */
export class ScorecardScoreRelationships {
  /**
   * A relationship item for a score.
   */
  "entity"?: ScorecardScoreRelationshipItem;
  /**
   * A relationship item for a score.
   */
  "rule"?: ScorecardScoreRelationshipItem;
  /**
   * A relationship item for a score.
   */
  "scorecard"?: ScorecardScoreRelationshipItem;
  /**
   * A relationship item for a score.
   */
  "service"?: ScorecardScoreRelationshipItem;
  /**
   * A relationship item for a score.
   */
  "team"?: ScorecardScoreRelationshipItem;
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
    entity: {
      baseName: "entity",
      type: "ScorecardScoreRelationshipItem",
    },
    rule: {
      baseName: "rule",
      type: "ScorecardScoreRelationshipItem",
    },
    scorecard: {
      baseName: "scorecard",
      type: "ScorecardScoreRelationshipItem",
    },
    service: {
      baseName: "service",
      type: "ScorecardScoreRelationshipItem",
    },
    team: {
      baseName: "team",
      type: "ScorecardScoreRelationshipItem",
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
    return ScorecardScoreRelationships.attributeTypeMap;
  }

  public constructor() {}
}
