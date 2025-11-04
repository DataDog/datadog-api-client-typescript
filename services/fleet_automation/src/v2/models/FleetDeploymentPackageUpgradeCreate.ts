import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { FleetDeploymentPackageUpgradeAttributes } from "./FleetDeploymentPackageUpgradeAttributes";
import { FleetDeploymentResourceType } from "./FleetDeploymentResourceType";

/**
 * Data for creating a new package upgrade deployment.
 */
export class FleetDeploymentPackageUpgradeCreate {
  /**
   * Attributes for creating a new package upgrade deployment.
   */
  "attributes": FleetDeploymentPackageUpgradeAttributes;
  /**
   * The type of deployment resource.
   */
  "type": FleetDeploymentResourceType;
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
    attributes: {
      baseName: "attributes",
      type: "FleetDeploymentPackageUpgradeAttributes",
      required: true,
    },
    type: {
      baseName: "type",
      type: "FleetDeploymentResourceType",
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
    return FleetDeploymentPackageUpgradeCreate.attributeTypeMap;
  }

  public constructor() {}
}
