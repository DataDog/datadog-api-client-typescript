import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Create a new Cloud Workload Security Agent rule.
 */
export class CloudWorkloadSecurityAgentRuleCreateAttributes {
  /**
   * The description of the Agent rule.
   */
  "description"?: string;
  /**
   * Whether the Agent rule is enabled.
   */
  "enabled"?: boolean;
  /**
   * The SECL expression of the Agent rule.
   */
  "expression": string;
  /**
   * The platforms the Agent rule is supported on.
   */
  "filters"?: Array<string>;
  /**
   * The name of the Agent rule.
   */
  "name": string;
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
    description: {
      baseName: "description",
      type: "string",
    },
    enabled: {
      baseName: "enabled",
      type: "boolean",
    },
    expression: {
      baseName: "expression",
      type: "string",
      required: true,
    },
    filters: {
      baseName: "filters",
      type: "Array<string>",
    },
    name: {
      baseName: "name",
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
    return CloudWorkloadSecurityAgentRuleCreateAttributes.attributeTypeMap;
  }

  public constructor() {}
}
