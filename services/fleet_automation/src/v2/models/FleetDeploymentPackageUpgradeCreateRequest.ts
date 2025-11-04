import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { FleetDeploymentPackageUpgradeCreate } from "./FleetDeploymentPackageUpgradeCreate";

/**
 * Request payload for creating a new package upgrade deployment.
 */
export class FleetDeploymentPackageUpgradeCreateRequest {
  /**
   * Data for creating a new package upgrade deployment.
   */
  "data": FleetDeploymentPackageUpgradeCreate;
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
      type: "FleetDeploymentPackageUpgradeCreate",
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
    return FleetDeploymentPackageUpgradeCreateRequest.attributeTypeMap;
  }

  public constructor() {}
}
