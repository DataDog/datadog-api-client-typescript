/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ScorecardScoreAttributes } from "./ScorecardScoreAttributes";
import { ScorecardScoreDataType } from "./ScorecardScoreDataType";
import { ScorecardScoreRelationships } from "./ScorecardScoreRelationships";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * A scorecard score object for a single entity, rule, scorecard, service, or team.
 */
export class ScorecardScoreData {
  /**
   * Attributes of a scorecard score.
   */
  "attributes"?: ScorecardScoreAttributes;
  /**
   * The ID of the entity or resource being scored.
   */
  "id": string;
  /**
   * Relationships for a scorecard score, depending on the aggregation type.
   */
  "relationships"?: ScorecardScoreRelationships;
  /**
   * The JSON:API resource type.
   */
  "type": ScorecardScoreDataType;

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
      type: "ScorecardScoreAttributes",
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    relationships: {
      baseName: "relationships",
      type: "ScorecardScoreRelationships",
    },
    type: {
      baseName: "type",
      type: "ScorecardScoreDataType",
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
    return ScorecardScoreData.attributeTypeMap;
  }

  public constructor() {}
}
