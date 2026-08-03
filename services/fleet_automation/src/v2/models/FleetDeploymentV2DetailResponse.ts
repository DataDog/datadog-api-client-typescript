import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { FleetDeploymentV2Detail } from "./FleetDeploymentV2Detail";

/**
 * Response containing detailed information about a single deployment.
 */
export class FleetDeploymentV2DetailResponse {
  /**
   * Detailed information about a deployment.
   */
  "data": FleetDeploymentV2Detail;
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
      type: "FleetDeploymentV2Detail",
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
    return FleetDeploymentV2DetailResponse.attributeTypeMap;
  }

  public constructor() {}
}
