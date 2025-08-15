/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Object containing the attributes of the suppression rule to be created.
 */
export class SecurityMonitoringSuppressionCreateAttributes {
  /**
   * An exclusion query on the input data of the security rules, which could be logs, Agent events, or other types of data based on the security rule. Events matching this query are ignored by any detection rules referenced in the suppression rule.
   */
  "dataExclusionQuery"?: string;
  /**
   * A description for the suppression rule.
   */
  "description"?: string;
  /**
   * Whether the suppression rule is enabled.
   */
  "enabled": boolean;
  /**
   * A Unix millisecond timestamp giving an expiration date for the suppression rule. After this date, it won't suppress signals anymore.
   */
  "expirationDate"?: number;
  /**
   * The name of the suppression rule.
   */
  "name": string;
  /**
   * The rule query of the suppression rule, with the same syntax as the search bar for detection rules.
   */
  "ruleQuery": string;
  /**
   * A Unix millisecond timestamp giving the start date for the suppression rule. After this date, it starts suppressing signals.
   */
  "startDate"?: number;
  /**
   * The suppression query of the suppression rule. If a signal matches this query, it is suppressed and is not triggered. It uses the same syntax as the queries to search signals in the Signals Explorer.
   */
  "suppressionQuery"?: string;

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
    dataExclusionQuery: {
      baseName: "data_exclusion_query",
      type: "string",
    },
    description: {
      baseName: "description",
      type: "string",
    },
    enabled: {
      baseName: "enabled",
      type: "boolean",
      required: true,
    },
    expirationDate: {
      baseName: "expiration_date",
      type: "number",
      format: "int64",
    },
    name: {
      baseName: "name",
      type: "string",
      required: true,
    },
    ruleQuery: {
      baseName: "rule_query",
      type: "string",
      required: true,
    },
    startDate: {
      baseName: "start_date",
      type: "number",
      format: "int64",
    },
    suppressionQuery: {
      baseName: "suppression_query",
      type: "string",
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
    return SecurityMonitoringSuppressionCreateAttributes.attributeTypeMap;
  }

  public constructor() {}
}
