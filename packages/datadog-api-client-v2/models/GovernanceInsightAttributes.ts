/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { GovernanceBestPracticeDefinition } from "./GovernanceBestPracticeDefinition";
import { GovernanceInsightAuditQuery } from "./GovernanceInsightAuditQuery";
import { GovernanceInsightEventQuery } from "./GovernanceInsightEventQuery";
import { GovernanceInsightMetricQuery } from "./GovernanceInsightMetricQuery";
import { GovernanceInsightPercentageQuery } from "./GovernanceInsightPercentageQuery";
import { GovernanceInsightQueryConfig } from "./GovernanceInsightQueryConfig";
import { GovernanceInsightUsageQuery } from "./GovernanceInsightUsageQuery";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * The attributes of a governance insight.
 */
export class GovernanceInsightAttributes {
  /**
   * An audit log query used to compute an insight value.
   */
  "auditQuery": GovernanceInsightAuditQuery;
  /**
   * The best practice associated with an insight. Populated with the first active best practice
   * matched to the insight; `null` when no best practice is attached.
   */
  "bestPractice": GovernanceBestPracticeDefinition;
  /**
   * A relative link to the product surface where the insight can be acted upon.
   */
  "deepLink": string;
  /**
   * A human-readable description of what the insight measures.
   */
  "description": string;
  /**
   * Human-readable name of the insight.
   */
  "displayName": string;
  /**
   * An event query used to compute an insight value.
   */
  "eventQuery": GovernanceInsightEventQuery;
  /**
   * A metric query used to compute an insight value.
   */
  "metricQuery": GovernanceInsightMetricQuery;
  /**
   * The value of the insight over the previous comparison window. `null` when values were
   * not requested or could not be computed.
   */
  "oldValue": number | null;
  /**
   * A percentage query that computes an insight value as a ratio of two metric queries.
   */
  "percentageQuery": GovernanceInsightPercentageQuery;
  /**
   * The product the insight belongs to.
   */
  "product": string;
  /**
   * Query execution context that allows the frontend to execute insight queries directly.
   */
  "queryConfig"?: GovernanceInsightQueryConfig;
  /**
   * The relative order in which the insight should be displayed.
   */
  "sortOrder"?: number;
  /**
   * The state of the insight. A `critical` insight receives extra UI treatment to draw
   * attention to it.
   */
  "state": string;
  /**
   * The sub-product the insight belongs to, if any.
   */
  "subProduct": string;
  /**
   * The time range the insight value is computed over, if applicable.
   */
  "timeRange": string;
  /**
   * The unit that the insight's value is measured in.
   */
  "unitName": string;
  /**
   * A usage query used to compute an insight value.
   */
  "usageQuery": GovernanceInsightUsageQuery;
  /**
   * The current value of the insight. `null` when values were not requested or could not be computed.
   */
  "value": number | null;

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
    auditQuery: {
      baseName: "audit_query",
      type: "GovernanceInsightAuditQuery",
      required: true,
    },
    bestPractice: {
      baseName: "best_practice",
      type: "GovernanceBestPracticeDefinition",
      required: true,
    },
    deepLink: {
      baseName: "deep_link",
      type: "string",
      required: true,
    },
    description: {
      baseName: "description",
      type: "string",
      required: true,
    },
    displayName: {
      baseName: "display_name",
      type: "string",
      required: true,
    },
    eventQuery: {
      baseName: "event_query",
      type: "GovernanceInsightEventQuery",
      required: true,
    },
    metricQuery: {
      baseName: "metric_query",
      type: "GovernanceInsightMetricQuery",
      required: true,
    },
    oldValue: {
      baseName: "old_value",
      type: "number",
      required: true,
      format: "double",
    },
    percentageQuery: {
      baseName: "percentage_query",
      type: "GovernanceInsightPercentageQuery",
      required: true,
    },
    product: {
      baseName: "product",
      type: "string",
      required: true,
    },
    queryConfig: {
      baseName: "query_config",
      type: "GovernanceInsightQueryConfig",
    },
    sortOrder: {
      baseName: "sort_order",
      type: "number",
      format: "int64",
    },
    state: {
      baseName: "state",
      type: "string",
      required: true,
    },
    subProduct: {
      baseName: "sub_product",
      type: "string",
      required: true,
    },
    timeRange: {
      baseName: "time_range",
      type: "string",
      required: true,
    },
    unitName: {
      baseName: "unit_name",
      type: "string",
      required: true,
    },
    usageQuery: {
      baseName: "usage_query",
      type: "GovernanceInsightUsageQuery",
      required: true,
    },
    value: {
      baseName: "value",
      type: "number",
      required: true,
      format: "double",
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
    return GovernanceInsightAttributes.attributeTypeMap;
  }

  public constructor() {}
}
