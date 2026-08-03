import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { FleetDeploymentPackageUpgradeV2Create } from "./FleetDeploymentPackageUpgradeV2Create";

/**
 * Request payload for creating a new v2 package upgrade deployment.
 */
export class FleetDeploymentPackageUpgradeV2CreateRequest {
  /**
   * Data for creating a new v2 package upgrade deployment.
   */
  "data": FleetDeploymentPackageUpgradeV2Create;
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
    data: {
      baseName: "data",
      type: "FleetDeploymentPackageUpgradeV2Create",
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
    return FleetDeploymentPackageUpgradeV2CreateRequest.attributeTypeMap;
  }

  public constructor() {}
}
