import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { FleetDeploymentPackageUpgradeV2Attributes } from "./FleetDeploymentPackageUpgradeV2Attributes";
import { FleetDeploymentResourceType } from "./FleetDeploymentResourceType";

/**
 * Data for creating a new v2 package upgrade deployment.
 */
export class FleetDeploymentPackageUpgradeV2Create {
  /**
   * Attributes for creating a new v2 package upgrade deployment.
   */
  "attributes": FleetDeploymentPackageUpgradeV2Attributes;
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
      type: "FleetDeploymentPackageUpgradeV2Attributes",
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
    return FleetDeploymentPackageUpgradeV2Create.attributeTypeMap;
  }

  public constructor() {}
}
