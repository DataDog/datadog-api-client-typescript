import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * A package and its target version to additionally deploy alongside a configuration change.
 */
export class FleetDeploymentConfigureV2Package {
  /**
   * APM auto-instrumentation mode to enable for this package, if applicable.
   */
  "apmInstrumentation"?: string;
  /**
   * The name of the package to deploy.
   */
  "name": string;
  /**
   * The target version of the package to deploy.
   */
  "version": string;
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
    apmInstrumentation: {
      baseName: "apm_instrumentation",
      type: "string",
    },
    name: {
      baseName: "name",
      type: "string",
      required: true,
    },
    version: {
      baseName: "version",
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
    return FleetDeploymentConfigureV2Package.attributeTypeMap;
  }

  public constructor() {}
}
