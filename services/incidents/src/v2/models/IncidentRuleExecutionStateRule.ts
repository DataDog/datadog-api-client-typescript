import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * A rule in a batch request.
 */
export class IncidentRuleExecutionStateRule {
  /**
   * Timestamp of the last rule execution.
   */
  "lastExecutedAt"?: Date;
  /**
   * The rule identifier.
   */
  "ruleUuid": string;
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
    lastExecutedAt: {
      baseName: "last_executed_at",
      type: "Date",
      format: "date-time",
    },
    ruleUuid: {
      baseName: "rule_uuid",
      type: "string",
      required: true,
      format: "uuid",
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
    return IncidentRuleExecutionStateRule.attributeTypeMap;
  }

  public constructor() {}
}
