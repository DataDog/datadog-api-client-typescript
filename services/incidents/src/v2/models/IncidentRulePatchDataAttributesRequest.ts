import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { IncidentRuleCondition } from "./IncidentRuleCondition";
import { IncidentRuleQueryCondition } from "./IncidentRuleQueryCondition";
import { IncidentRuleTriggerType } from "./IncidentRuleTriggerType";

/**
 * Attributes for patching an incident rule. All fields are optional.
 */
export class IncidentRulePatchDataAttributesRequest {
  /**
   * A query-based condition for an incident rule.
   */
  "condition"?: IncidentRuleQueryCondition;
  /**
   * List of field-based conditions.
   */
  "conditions"?: Array<IncidentRuleCondition>;
  /**
   * Whether the rule is enabled.
   */
  "enabled"?: boolean;
  /**
   * The JSON-encoded payload for the task.
   */
  "taskPayload"?: string;
  /**
   * The trigger event for an incident rule.
   */
  "trigger"?: IncidentRuleTriggerType;
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
    condition: {
      baseName: "condition",
      type: "IncidentRuleQueryCondition",
    },
    conditions: {
      baseName: "conditions",
      type: "Array<IncidentRuleCondition>",
    },
    enabled: {
      baseName: "enabled",
      type: "boolean",
    },
    taskPayload: {
      baseName: "task_payload",
      type: "string",
    },
    trigger: {
      baseName: "trigger",
      type: "IncidentRuleTriggerType",
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
    return IncidentRulePatchDataAttributesRequest.attributeTypeMap;
  }

  public constructor() {}
}
