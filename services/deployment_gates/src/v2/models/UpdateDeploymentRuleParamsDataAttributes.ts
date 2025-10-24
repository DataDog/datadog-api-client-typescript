import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { DeploymentRulesOptions } from "./DeploymentRulesOptions";

/**
 * Parameters for updating a deployment rule.
 */
export class UpdateDeploymentRuleParamsDataAttributes {
  /**
   * Whether to run this rule in dry-run mode.
   */
  "dryRun": boolean;
  /**
   * The name of the deployment rule.
   */
  "name": string;
  /**
   * Options for deployment rule response representing either faulty deployment detection or monitor options.
   */
  "options": DeploymentRulesOptions;
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
      required: true,
    },
    name: {
      baseName: "name",
      type: "string",
      required: true,
    },
    options: {
      baseName: "options",
      type: "DeploymentRulesOptions",
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
    return UpdateDeploymentRuleParamsDataAttributes.attributeTypeMap;
  }

  public constructor() {}
}
