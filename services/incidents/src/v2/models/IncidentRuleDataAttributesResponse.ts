import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { IncidentRuleCondition } from "./IncidentRuleCondition";
import { IncidentRuleQueryCondition } from "./IncidentRuleQueryCondition";

/**
 * Attributes of an incident rule in a response.
 */
export class IncidentRuleDataAttributesResponse {
  /**
   * A query-based condition for an incident rule.
   */
  "condition"?: IncidentRuleQueryCondition;
  /**
   * The condition table type.
   */
  "conditionTableType"?: number;
  /**
   * List of field-based conditions.
   */
  "conditions"?: Array<IncidentRuleCondition>;
  /**
   * Timestamp when the rule was created.
   */
  "created"?: Date;
  /**
   * UUID of the user who created the rule.
   */
  "createdByUuid"?: string;
  /**
   * Timestamp when the rule was deleted.
   */
  "deleted"?: Date;
  /**
   * Whether the rule is enabled.
   */
  "enabled"?: boolean;
  /**
   * The execution type of the rule.
   */
  "executionType"?: number;
  /**
   * The incident settings association UUID.
   */
  "incidentSettingsAssociationUuid"?: string;
  /**
   * Whether any condition should match.
   */
  "matchAnyCondition"?: boolean;
  /**
   * Timestamp when the rule was last modified.
   */
  "modified"?: Date;
  /**
   * UUID of the user who last modified the rule.
   */
  "modifiedByUuid"?: string;
  /**
   * The organization ID.
   */
  "orgId"?: number;
  /**
   * The task ID.
   */
  "taskId"?: string;
  /**
   * The JSON-encoded task payload.
   */
  "taskPayload"?: string;
  /**
   * The trigger event for the rule.
   */
  "trigger"?: string;
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
    conditionTableType: {
      baseName: "condition_table_type",
      type: "number",
    },
    conditions: {
      baseName: "conditions",
      type: "Array<IncidentRuleCondition>",
    },
    created: {
      baseName: "created",
      type: "Date",
      format: "date-time",
    },
    createdByUuid: {
      baseName: "created_by_uuid",
      type: "string",
      format: "uuid",
    },
    deleted: {
      baseName: "deleted",
      type: "Date",
      format: "date-time",
    },
    enabled: {
      baseName: "enabled",
      type: "boolean",
    },
    executionType: {
      baseName: "execution_type",
      type: "number",
    },
    incidentSettingsAssociationUuid: {
      baseName: "incident_settings_association_uuid",
      type: "string",
      format: "uuid",
    },
    matchAnyCondition: {
      baseName: "match_any_condition",
      type: "boolean",
    },
    modified: {
      baseName: "modified",
      type: "Date",
      format: "date-time",
    },
    modifiedByUuid: {
      baseName: "modified_by_uuid",
      type: "string",
      format: "uuid",
    },
    orgId: {
      baseName: "org_id",
      type: "number",
      format: "int64",
    },
    taskId: {
      baseName: "task_id",
      type: "string",
    },
    taskPayload: {
      baseName: "task_payload",
      type: "string",
    },
    trigger: {
      baseName: "trigger",
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
    return IncidentRuleDataAttributesResponse.attributeTypeMap;
  }

  public constructor() {}
}
