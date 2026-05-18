/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ListRulesResponseLinks } from "./ListRulesResponseLinks";
import { ListScorecardScoresMeta } from "./ListScorecardScoresMeta";
import { ScorecardScoreData } from "./ScorecardScoreData";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * A list of scorecard scores for a given aggregation type.
 */
export class ListScorecardScoresResponse {
  /**
   * Array of score objects.
   */
  "data"?: Array<ScorecardScoreData>;
  /**
   * Links attributes.
   */
  "links"?: ListRulesResponseLinks;
  /**
   * Pagination metadata for scores.
   */
  "meta"?: ListScorecardScoresMeta;

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
      type: "Array<ScorecardScoreData>",
    },
    links: {
      baseName: "links",
      type: "ListRulesResponseLinks",
    },
    meta: {
      baseName: "meta",
      type: "ListScorecardScoresMeta",
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
    return ListScorecardScoresResponse.attributeTypeMap;
  }

  public constructor() {}
}
