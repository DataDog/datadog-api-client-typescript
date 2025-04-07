import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { RuleSeverity } from "./RuleSeverity";
import { RuleTypesItems } from "./RuleTypesItems";
import { TriggerSource } from "./TriggerSource";

/**
 * Selectors are used to filter security issues for which notifications should be generated.
 * Users can specify rule severities, rule types, a query to filter security issues on tags and attributes, and the trigger source.
 * Only the trigger_source field is required.
 */
export class Selectors {
  /**
   * The query is composed of one or several key:value pairs, which can be used to filter security issues on tags and attributes.
   */
  "query"?: string;
  /**
   * Security rule types used as filters in security rules.
   */
  "ruleTypes"?: Array<RuleTypesItems>;
  /**
   * The security rules severities to consider.
   */
  "severities"?: Array<RuleSeverity>;
  /**
   * The type of security issues on which the rule applies. Notification rules based on security signals need to use the trigger source "security_signals",
   * while notification rules based on security vulnerabilities need to use the trigger source "security_findings".
   */
  "triggerSource": TriggerSource;
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
    query: {
      baseName: "query",
      type: "string",
    },
    ruleTypes: {
      baseName: "rule_types",
      type: "Array<RuleTypesItems>",
    },
    severities: {
      baseName: "severities",
      type: "Array<RuleSeverity>",
    },
    triggerSource: {
      baseName: "trigger_source",
      type: "TriggerSource",
      required: true,
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
    return Selectors.attributeTypeMap;
  }

  public constructor() {}
}
