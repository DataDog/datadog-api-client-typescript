import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Parameters for creating a deployment rule.
 */
export class CreateDeploymentRuleParamsDataAttributes {
  /**
   * Whether this rule is run in dry-run mode.
   */
  "dryRun"?: boolean;
  /**
   * The name of the deployment rule.
   */
  "name": string;
  /**
   * Options for deployment rule response representing either faulty deployment detection or monitor options. The actual type is determined by the parent's 'type' field.
   */
  "options": any;
  /**
   * The type of the deployment rule (faulty_deployment_detection or monitor).
   */
  "type": string;
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
    dryRun: {
      baseName: "dry_run",
      type: "boolean",
    },
    name: {
      baseName: "name",
      type: "string",
      required: true,
    },
    options: {
      baseName: "options",
      type: "any",
      required: true,
    },
    type: {
      baseName: "type",
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
    return CreateDeploymentRuleParamsDataAttributes.attributeTypeMap;
  }

  public constructor() {}
}
