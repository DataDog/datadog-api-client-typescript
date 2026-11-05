import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { SecurityAgentInvestigationRuleTuningCondition } from "./SecurityAgentInvestigationRuleTuningCondition";

/**
 * A suggestion to tune the detection rule.
 */
export class SecurityAgentInvestigationRuleTuningSuggestion {
  /**
   * Kind of change the suggestion makes to the rule.
   */
  "actionType": string;
  /**
   * The conditions the change applies to.
   */
  "conditions": Array<SecurityAgentInvestigationRuleTuningCondition>;
  /**
   * What the suggestion changes.
   */
  "description": string;
  /**
   * Estimated number of signals the change would have silenced in the window.
   */
  "estimatedSilencedCount"?: number;
  /**
   * ID of the suggestion.
   */
  "id": string;
  /**
   * How the conditions combine, such as AND or OR.
   */
  "matchLogic": string;
  /**
   * Whether the suggestion is recommended.
   */
  "recommended": boolean;
  /**
   * ID of the detection rule.
   */
  "ruleId": string;
  /**
   * Title of the suggestion.
   */
  "title": string;
  /**
   * What the change could hide. It can be empty.
   */
  "warning": string;
  /**
   * Why the suggestion is made.
   */
  "why": string;
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
    actionType: {
      baseName: "action_type",
      type: "string",
      required: true,
    },
    conditions: {
      baseName: "conditions",
      type: "Array<SecurityAgentInvestigationRuleTuningCondition>",
      required: true,
    },
    description: {
      baseName: "description",
      type: "string",
      required: true,
    },
    estimatedSilencedCount: {
      baseName: "estimated_silenced_count",
      type: "number",
      format: "int64",
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    matchLogic: {
      baseName: "match_logic",
      type: "string",
      required: true,
    },
    recommended: {
      baseName: "recommended",
      type: "boolean",
      required: true,
    },
    ruleId: {
      baseName: "rule_id",
      type: "string",
      required: true,
    },
    title: {
      baseName: "title",
      type: "string",
      required: true,
    },
    warning: {
      baseName: "warning",
      type: "string",
      required: true,
    },
    why: {
      baseName: "why",
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
    return SecurityAgentInvestigationRuleTuningSuggestion.attributeTypeMap;
  }

  public constructor() {}
}
