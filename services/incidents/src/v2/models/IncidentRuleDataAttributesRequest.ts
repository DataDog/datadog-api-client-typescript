import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { IncidentRuleCondition } from "./IncidentRuleCondition";
import { IncidentRuleExecutionType } from "./IncidentRuleExecutionType";
import { IncidentRuleQueryCondition } from "./IncidentRuleQueryCondition";
import { IncidentRuleTaskIDType } from "./IncidentRuleTaskIDType";
import { IncidentRuleTriggerType } from "./IncidentRuleTriggerType";

/**
 * Attributes for creating an incident rule.
 */
export class IncidentRuleDataAttributesRequest {
  /**
   * A query-based condition for an incident rule.
   */
  "condition": IncidentRuleQueryCondition;
  /**
   * The condition table type. 1 = raw query.
   */
  "conditionTableType": number;
  /**
   * List of field-based conditions.
   */
  "conditions"?: Array<IncidentRuleCondition>;
  /**
   * Whether the rule is enabled.
   */
  "enabled": boolean;
  /**
   * The execution type of an incident rule.
   */
  "executionType": IncidentRuleExecutionType;
  /**
   * The UUID of the incident type this rule applies to.
   */
  "incidentTypeUuid"?: string;
  /**
   * Whether any condition (OR logic) should match instead of all (AND logic).
   */
  "matchAnyCondition"?: boolean;
  /**
   * The task ID for an incident rule.
   */
  "taskId": IncidentRuleTaskIDType;
  /**
   * The JSON-encoded payload for the task.
   */
  "taskPayload": string;
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
      required: true,
    },
    conditionTableType: {
      baseName: "condition_table_type",
      type: "number",
      required: true,
    },
    conditions: {
      baseName: "conditions",
      type: "Array<IncidentRuleCondition>",
    },
    enabled: {
      baseName: "enabled",
      type: "boolean",
      required: true,
    },
    executionType: {
      baseName: "execution_type",
      type: "IncidentRuleExecutionType",
      required: true,
      format: "int64",
    },
    incidentTypeUuid: {
      baseName: "incident_type_uuid",
      type: "string",
      format: "uuid",
    },
    matchAnyCondition: {
      baseName: "match_any_condition",
      type: "boolean",
    },
    taskId: {
      baseName: "task_id",
      type: "IncidentRuleTaskIDType",
      required: true,
    },
    taskPayload: {
      baseName: "task_payload",
      type: "string",
      required: true,
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
    return IncidentRuleDataAttributesRequest.attributeTypeMap;
  }

  public constructor() {}
}
