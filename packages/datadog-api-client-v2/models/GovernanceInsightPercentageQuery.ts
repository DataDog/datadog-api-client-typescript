/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { GovernanceInsightMetricQuery } from "./GovernanceInsightMetricQuery";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * A percentage query that computes an insight value as a ratio of two metric queries.
 */
export class GovernanceInsightPercentageQuery {
  /**
   * A metric query used to compute an insight value.
   */
  "denominatorQuery": GovernanceInsightMetricQuery;
  /**
   * A metric query used to compute an insight value.
   */
  "numeratorQuery": GovernanceInsightMetricQuery;

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
    denominatorQuery: {
      baseName: "denominator_query",
      type: "GovernanceInsightMetricQuery",
      required: true,
    },
    numeratorQuery: {
      baseName: "numerator_query",
      type: "GovernanceInsightMetricQuery",
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
    return GovernanceInsightPercentageQuery.attributeTypeMap;
  }

  public constructor() {}
}
