import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Package version information for a host, showing the initial version before deployment,
 * the target version to deploy, and the current version on the host.
 */
export class FleetDeploymentHostPackage {
  /**
   * The current version of the package on the host.
   */
  "currentVersion"?: string;
  /**
   * The initial version of the package on the host before the deployment started.
   */
  "initialVersion"?: string;
  /**
   * The name of the package.
   */
  "packageName"?: string;
  /**
   * The target version that the deployment is attempting to install.
   */
  "targetVersion"?: string;
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
    currentVersion: {
      baseName: "current_version",
      type: "string",
    },
    initialVersion: {
      baseName: "initial_version",
      type: "string",
    },
    packageName: {
      baseName: "package_name",
      type: "string",
    },
    targetVersion: {
      baseName: "target_version",
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
    return FleetDeploymentHostPackage.attributeTypeMap;
  }

  public constructor() {}
}
