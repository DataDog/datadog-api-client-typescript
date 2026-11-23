import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Parameters for creating a deployment gate. For the same organization, service, and identifier,
 * a gate for all environments cannot coexist with gates for specific environments.
 */
export class CreateDeploymentGateParamsDataAttributes {
  /**
   * Whether this gate is run in dry-run mode.
   */
  "dryRun"?: boolean;
  /**
   * Required environment of the deployment gate. Use `*` to apply the gate to all environments.
   */
  "env": string;
  /**
   * The identifier of the deployment gate.
   */
  "identifier"?: string;
  /**
   * The service of the deployment gate.
   */
  "service": string;
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
    env: {
      baseName: "env",
      type: "string",
      required: true,
    },
    identifier: {
      baseName: "identifier",
      type: "string",
    },
    service: {
      baseName: "service",
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
    return CreateDeploymentGateParamsDataAttributes.attributeTypeMap;
  }

  public constructor() {}
}
