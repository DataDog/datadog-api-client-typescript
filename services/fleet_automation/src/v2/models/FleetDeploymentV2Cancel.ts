import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { FleetDeploymentResourceType } from "./FleetDeploymentResourceType";
import { FleetDeploymentV2CancelAttributes } from "./FleetDeploymentV2CancelAttributes";

/**
 * A deployment cancellation response.
 */
export class FleetDeploymentV2Cancel {
  /**
   * Attributes of a deployment cancellation response.
   */
  "attributes": FleetDeploymentV2CancelAttributes;
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
      type: "FleetDeploymentV2CancelAttributes",
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
    return FleetDeploymentV2Cancel.attributeTypeMap;
  }

  public constructor() {}
}
