import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { RuleBasedViewComplianceFramework } from "./RuleBasedViewComplianceFramework";
import { RuleBasedViewRuleCategory } from "./RuleBasedViewRuleCategory";
import { RuleBasedViewRuleStats } from "./RuleBasedViewRuleStats";

/**
 * A compliance rule along with its evaluation statistics and framework mappings.
 */
export class RuleBasedViewRule {
  /**
   * List of compliance framework mappings associated with the rule.
   */
  "complianceFrameworks": Array<RuleBasedViewComplianceFramework>;
  /**
   * Whether the rule is enabled.
   */
  "enabled": boolean;
  /**
   * Unique identifier of the rule.
   */
  "id": string;
  /**
   * Human-readable name of the rule.
   */
  "name": string;
  /**
   * List of resource attribute names exposed by the rule.
   */
  "resourceAttributes": Array<string>;
  /**
   * Resource category targeted by the rule.
   */
  "resourceCategory": string;
  /**
   * Resource type targeted by the rule.
   */
  "resourceType": string;
  /**
   * Counts of findings for the rule, grouped by their evaluation status.
   */
  "stats": RuleBasedViewRuleStats;
  /**
   * Severity associated with the rule (for example, `info`, `low`, `medium`, `high`, or `critical`).
   */
  "status": string;
  /**
   * List of tags attached to the rule.
   */
  "tags": Array<string>;
  /**
   * The category of the security rule.
   */
  "type": RuleBasedViewRuleCategory;
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
    complianceFrameworks: {
      baseName: "compliance_frameworks",
      type: "Array<RuleBasedViewComplianceFramework>",
      required: true,
    },
    enabled: {
      baseName: "enabled",
      type: "boolean",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    name: {
      baseName: "name",
      type: "string",
      required: true,
    },
    resourceAttributes: {
      baseName: "resourceAttributes",
      type: "Array<string>",
      required: true,
    },
    resourceCategory: {
      baseName: "resourceCategory",
      type: "string",
      required: true,
    },
    resourceType: {
      baseName: "resourceType",
      type: "string",
      required: true,
    },
    stats: {
      baseName: "stats",
      type: "RuleBasedViewRuleStats",
      required: true,
    },
    status: {
      baseName: "status",
      type: "string",
      required: true,
    },
    tags: {
      baseName: "tags",
      type: "Array<string>",
      required: true,
    },
    type: {
      baseName: "type",
      type: "RuleBasedViewRuleCategory",
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
    return RuleBasedViewRule.attributeTypeMap;
  }

  public constructor() {}
}
