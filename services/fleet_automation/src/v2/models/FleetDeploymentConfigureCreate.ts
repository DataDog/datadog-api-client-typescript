import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { FleetDeploymentConfigureAttributes } from "./FleetDeploymentConfigureAttributes";
import { FleetDeploymentResourceType } from "./FleetDeploymentResourceType";

/**
 * Data for creating a new deployment.
 */
export class FleetDeploymentConfigureCreate {
  /**
   * Attributes for creating a new configuration deployment.
   */
  "attributes": FleetDeploymentConfigureAttributes;
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
      type: "FleetDeploymentConfigureAttributes",
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
    return FleetDeploymentConfigureCreate.attributeTypeMap;
  }

  public constructor() {}
}
