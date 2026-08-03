import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { FleetDeploymentResourceType } from "./FleetDeploymentResourceType";
import { FleetDeploymentV2Attributes } from "./FleetDeploymentV2Attributes";

/**
 * A deployment in the v2 API response.
 */
export class FleetDeploymentV2 {
  /**
   * Attributes of a deployment in the v2 API response.
   */
  "attributes": FleetDeploymentV2Attributes;
  /**
   * Unique identifier for the deployment.
   */
  "id": string;
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
      type: "FleetDeploymentV2Attributes",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
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
    return FleetDeploymentV2.attributeTypeMap;
  }

  public constructor() {}
}
