import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { GovernanceLimitQuery } from "./GovernanceLimitQuery";
import { GovernanceLimitQueryConfig } from "./GovernanceLimitQueryConfig";

/**
 * The attributes of a governance resource limit.
 */
export class GovernanceResourceLimitAttributes {
  /**
   * The current limit configured for the resource.
   */
  "currentLimit": number;
  /**
   * The current value of the resource.
   */
  "currentValue": number;
  /**
   * A link to the Datadog page where the resource and its limit can be managed.
   */
  "deepLink": string;
  /**
   * The default current value used when the resource value cannot be computed from the query.
   */
  "defaultCurrentValue": number;
  /**
   * The default limit value used when the limit cannot be computed from the query.
   */
  "defaultLimitValue": number;
  /**
   * A description of what the resource limit measures.
   */
  "description": string;
  /**
   * The human-readable name of the resource limit.
   */
  "displayName": string;
  /**
   * A metric query used to compute usage against a limit.
   */
  "limitQuery": GovernanceLimitQuery;
  /**
   * The Datadog product the resource limit belongs to.
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
   * The time range over which the resource value is measured.
   */
  "timeRange": string;
  /**
   * The unit in which the resource value and limit are measured.
   */
  "unitName": string;
  /**
   * The current usage status of the resource relative to its limit.
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
    currentLimit: {
      baseName: "current_limit",
      type: "number",
      required: true,
      format: "double",
    },
    currentValue: {
      baseName: "current_value",
      type: "number",
      required: true,
      format: "double",
    },
    deepLink: {
      baseName: "deep_link",
      type: "string",
      required: true,
    },
    defaultCurrentValue: {
      baseName: "default_current_value",
      type: "number",
      required: true,
      format: "double",
    },
    defaultLimitValue: {
      baseName: "default_limit_value",
      type: "number",
      required: true,
      format: "double",
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
    limitQuery: {
      baseName: "limit_query",
      type: "GovernanceLimitQuery",
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
    return GovernanceResourceLimitAttributes.attributeTypeMap;
  }

  public constructor() {}
}
