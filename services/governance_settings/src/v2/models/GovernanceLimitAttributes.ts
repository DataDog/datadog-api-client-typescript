import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { GovernanceLimitQuery } from "./GovernanceLimitQuery";
import { GovernanceLimitQueryConfig } from "./GovernanceLimitQueryConfig";

/**
 * The attributes of a governance limit.
 */
export class GovernanceLimitAttributes {
  /**
   * A description of what the limit measures.
   */
  "description": string;
  /**
   * The human-readable name of the limit.
   */
  "displayName": string;
  /**
   * The type of limit, such as a rate limit or a usage limit.
   */
  "limitType": string;
  /**
   * The Datadog product the limit belongs to.
   */
  "product": string;
  /**
   * A metric query used to compute usage against a limit.
   */
  "query": GovernanceLimitQuery;
  /**
   * The query execution context used to visualize a limit and its usage.
   */
  "queryConfig": GovernanceLimitQueryConfig;
  /**
   * The time range over which usage against the limit is measured.
   */
  "timeRange": string;
  /**
   * The number of times usage has reached the limit within the measured time range.
   */
  "timesHitLimit": number;
  /**
   * The unit in which the limit and its usage are measured.
   */
  "unitName": string;
  /**
   * The current usage status of the limit relative to its threshold.
   */
  "usageStatus": string;
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
    limitType: {
      baseName: "limit_type",
      type: "string",
      required: true,
    },
    product: {
      baseName: "product",
      type: "string",
      required: true,
    },
    query: {
      baseName: "query",
      type: "GovernanceLimitQuery",
      required: true,
    },
    queryConfig: {
      baseName: "query_config",
      type: "GovernanceLimitQueryConfig",
      required: true,
    },
    timeRange: {
      baseName: "time_range",
      type: "string",
      required: true,
    },
    timesHitLimit: {
      baseName: "times_hit_limit",
      type: "number",
      required: true,
      format: "double",
    },
    unitName: {
      baseName: "unit_name",
      type: "string",
      required: true,
    },
    usageStatus: {
      baseName: "usage_status",
      type: "string",
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
    return GovernanceLimitAttributes.attributeTypeMap;
  }

  public constructor() {}
}
