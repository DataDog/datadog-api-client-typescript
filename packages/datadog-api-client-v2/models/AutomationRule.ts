/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { IssueType } from "./IssueType";
import { SecurityRuleSeverity } from "./SecurityRuleSeverity";
import { SecurityRuleTypesItems } from "./SecurityRuleTypesItems";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * The definition of an automation pipeline rule scope.
 * A rule can act on specific issue types, security rule types, security rule IDs, rule severities, or a query.
 * The query can be used to filter resources on tags and attributes.
 * The issue type and rule types fields are required.
 */
export class AutomationRule {
  /**
   * The type of issues on which the rule applies
   */
  "issueType": IssueType;
  /**
   * The query is composed of one or several key:value pairs, which can be used to filter resources on tags and attributes.
   */
  "query"?: string;
  /**
   * Security rule ids
   */
  "ruleIds"?: Array<string>;
  /**
   * Security rule types
   */
  "ruleTypes": Array<SecurityRuleTypesItems>;
  /**
   * The security rules severities to consider
   */
  "severities"?: Array<SecurityRuleSeverity>;

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
    issueType: {
      baseName: "issue_type",
      type: "IssueType",
      required: true,
    },
    query: {
      baseName: "query",
      type: "string",
    },
    ruleIds: {
      baseName: "rule_ids",
      type: "Array<string>",
    },
    ruleTypes: {
      baseName: "rule_types",
      type: "Array<SecurityRuleTypesItems>",
      required: true,
    },
    severities: {
      baseName: "severities",
      type: "Array<SecurityRuleSeverity>",
    },
    additionalProperties: {
      baseName: "additionalProperties",
      type: "any",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return AutomationRule.attributeTypeMap;
  }

  public constructor() {}
}
