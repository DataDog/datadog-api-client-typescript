import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Details of a rule.
 */
export class RuleAttributes {
  /**
   * The scorecard name to which this rule must belong.
   */
  "category"?: string;
  /**
   * Creation time of the rule outcome.
   */
  "createdAt"?: Date;
  /**
   * Defines if the rule is a custom rule.
   */
  "custom"?: boolean;
  /**
   * Explanation of the rule.
   */
  "description"?: string;
  /**
   * If enabled, the rule is calculated as part of the score.
   */
  "enabled"?: boolean;
  /**
   * Time of the last rule outcome modification.
   */
  "modifiedAt"?: Date;
  /**
   * Name of the rule.
   */
  "name"?: string;
  /**
   * Owner of the rule.
   */
  "owner"?: string;
  /**
   * The scorecard name to which this rule must belong.
   */
  "scorecardName"?: string;
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
    category: {
      baseName: "category",
      type: "string",
    },
    createdAt: {
      baseName: "created_at",
      type: "Date",
      format: "date-time",
    },
    custom: {
      baseName: "custom",
      type: "boolean",
    },
    description: {
      baseName: "description",
      type: "string",
    },
    enabled: {
      baseName: "enabled",
      type: "boolean",
    },
    modifiedAt: {
      baseName: "modified_at",
      type: "Date",
      format: "date-time",
    },
    name: {
      baseName: "name",
      type: "string",
    },
    owner: {
      baseName: "owner",
      type: "string",
    },
    scorecardName: {
      baseName: "scorecard_name",
      type: "string",
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
    return RuleAttributes.attributeTypeMap;
  }

  public constructor() {}
}
