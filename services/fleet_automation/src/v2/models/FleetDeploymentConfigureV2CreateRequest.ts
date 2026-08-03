import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { FleetDeploymentConfigureV2Create } from "./FleetDeploymentConfigureV2Create";

/**
 * Request payload for creating a new v2 configuration deployment.
 */
export class FleetDeploymentConfigureV2CreateRequest {
  /**
   * Data for creating a new v2 configuration deployment.
   */
  "data": FleetDeploymentConfigureV2Create;
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
      type: "FleetDeploymentConfigureV2Create",
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
    return FleetDeploymentConfigureV2CreateRequest.attributeTypeMap;
  }

  public constructor() {}
}
