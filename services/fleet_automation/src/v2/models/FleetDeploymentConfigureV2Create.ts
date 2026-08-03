import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { FleetDeploymentConfigureV2Attributes } from "./FleetDeploymentConfigureV2Attributes";
import { FleetDeploymentResourceType } from "./FleetDeploymentResourceType";

/**
 * Data for creating a new v2 configuration deployment.
 */
export class FleetDeploymentConfigureV2Create {
  /**
   * Attributes for creating a new v2 configuration deployment.
   */
  "attributes": FleetDeploymentConfigureV2Attributes;
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
      type: "FleetDeploymentConfigureV2Attributes",
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
    return FleetDeploymentConfigureV2Create.attributeTypeMap;
  }

  public constructor() {}
}
