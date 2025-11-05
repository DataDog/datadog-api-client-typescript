import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { FleetDeploymentPackage } from "./FleetDeploymentPackage";

/**
 * Attributes for creating a new package upgrade deployment.
 */
export class FleetDeploymentPackageUpgradeAttributes {
  /**
   * Query used to filter and select target hosts for the deployment. Uses the Datadog query syntax.
   */
  "filterQuery"?: string;
  /**
   * List of packages and their target versions to deploy to the selected hosts.
   */
  "targetPackages": Array<FleetDeploymentPackage>;
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
    filterQuery: {
      baseName: "filter_query",
      type: "string",
    },
    targetPackages: {
      baseName: "target_packages",
      type: "Array<FleetDeploymentPackage>",
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
    return FleetDeploymentPackageUpgradeAttributes.attributeTypeMap;
  }

  public constructor() {}
}
