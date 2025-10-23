import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { FleetDeploymentAttributes } from "./FleetDeploymentAttributes";
import { FleetDeploymentResourceType } from "./FleetDeploymentResourceType";

/**
 * A deployment that defines automated configuration changes for a fleet of hosts.
 */
export class FleetDeployment {
  /**
   * Attributes of a deployment in the response.
   */
  "attributes": FleetDeploymentAttributes;
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
      type: "FleetDeploymentAttributes",
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
    return FleetDeployment.attributeTypeMap;
  }

  public constructor() {}
}
