import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { GovernanceInsightAuditQuery } from "./GovernanceInsightAuditQuery";
import { GovernanceInsightEventQuery } from "./GovernanceInsightEventQuery";
import { GovernanceInsightMetricQuery } from "./GovernanceInsightMetricQuery";
import { GovernanceInsightPercentageQuery } from "./GovernanceInsightPercentageQuery";
import { GovernanceInsightQueryConfig } from "./GovernanceInsightQueryConfig";
import { GovernanceInsightUsageQuery } from "./GovernanceInsightUsageQuery";

/**
 * The attributes of a governance insight. Exactly one of `metric_query`, `event_query`,
 * `usage_query`, `audit_query`, or `percentage_query` is populated, depending on the data
 * source the insight is computed from; the rest are `null`.
 */
export class GovernanceInsightAttributes {
  /**
   * An audit log query used to compute an insight value.
   */
  "auditQuery"?: GovernanceInsightAuditQuery;
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
  "eventQuery"?: GovernanceInsightEventQuery;
  /**
   * A metric query used to compute an insight value.
   */
  "metricQuery"?: GovernanceInsightMetricQuery;
  /**
   * A percentage query that computes an insight value as a ratio of two metric queries.
   */
  "percentageQuery"?: GovernanceInsightPercentageQuery;
  /**
   * The product the insight belongs to.
   */
  "product": string;
  /**
   * Query execution context for running insight queries directly.
   */
  "queryConfig"?: GovernanceInsightQueryConfig;
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
  "usageQuery"?: GovernanceInsightUsageQuery;
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
    },
    metricQuery: {
      baseName: "metric_query",
      type: "GovernanceInsightMetricQuery",
    },
    percentageQuery: {
      baseName: "percentage_query",
      type: "GovernanceInsightPercentageQuery",
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
