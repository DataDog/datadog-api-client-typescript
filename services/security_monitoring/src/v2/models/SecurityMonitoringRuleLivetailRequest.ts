import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { SecurityMonitoringFilter } from "./SecurityMonitoringFilter";
import { SecurityMonitoringRuleDetectionMethod } from "./SecurityMonitoringRuleDetectionMethod";
import { SecurityMonitoringRuleTypeRead } from "./SecurityMonitoringRuleTypeRead";

/**
 * Request to preview a rule query with applied filters.
 */
export class SecurityMonitoringRuleLivetailRequest {
  /**
   * Data source for the query.
   */
  "dataSource": string;
  /**
   * The detection method.
   */
  "detectionMethod": SecurityMonitoringRuleDetectionMethod;
  /**
   * Fields to apply distinct on.
   */
  "distinctFields"?: Array<string>;
  /**
   * Additional security filters to apply.
   */
  "filters"?: Array<SecurityMonitoringFilter>;
  /**
   * Fields to group by.
   */
  "groupByFields"?: Array<string>;
  /**
   * The query to preview.
   */
  "query": string;
  /**
   * Index of the query in the rule.
   */
  "queryIndex": number;
  /**
   * The rule type.
   */
  "type": SecurityMonitoringRuleTypeRead;
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
    dataSource: {
      baseName: "dataSource",
      type: "string",
      required: true,
    },
    detectionMethod: {
      baseName: "detectionMethod",
      type: "SecurityMonitoringRuleDetectionMethod",
      required: true,
    },
    distinctFields: {
      baseName: "distinctFields",
      type: "Array<string>",
    },
    filters: {
      baseName: "filters",
      type: "Array<SecurityMonitoringFilter>",
    },
    groupByFields: {
      baseName: "groupByFields",
      type: "Array<string>",
    },
    query: {
      baseName: "query",
      type: "string",
      required: true,
    },
    queryIndex: {
      baseName: "queryIndex",
      type: "number",
      required: true,
      format: "int32",
    },
    type: {
      baseName: "type",
      type: "SecurityMonitoringRuleTypeRead",
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
    return SecurityMonitoringRuleLivetailRequest.attributeTypeMap;
  }

  public constructor() {}
}
