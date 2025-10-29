import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Attributes for updating a deployment gate.
 */
export class UpdateDeploymentGateParamsDataAttributes {
  /**
   * Whether to run in dry-run mode.
   */
  "dryRun": boolean;
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
    additionalProperties: {
      baseName: "additionalProperties",
      type: "{ [key: string]: any; }",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return UpdateDeploymentGateParamsDataAttributes.attributeTypeMap;
  }

  public constructor() {}
}
