import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { FleetDeploymentConfigureCreate } from "./FleetDeploymentConfigureCreate";

/**
 * Request payload for creating a new deployment.
 */
export class FleetDeploymentConfigureCreateRequest {
  /**
   * Data for creating a new deployment.
   */
  "data": FleetDeploymentConfigureCreate;
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
      type: "FleetDeploymentConfigureCreate",
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
    return FleetDeploymentConfigureCreateRequest.attributeTypeMap;
  }

  public constructor() {}
}
