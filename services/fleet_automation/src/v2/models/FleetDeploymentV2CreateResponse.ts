import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { FleetDeploymentV2 } from "./FleetDeploymentV2";

/**
 * Response containing the newly created deployment.
 */
export class FleetDeploymentV2CreateResponse {
  /**
   * A deployment in the v2 API response.
   */
  "data": FleetDeploymentV2;
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
      type: "FleetDeploymentV2",
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
    return FleetDeploymentV2CreateResponse.attributeTypeMap;
  }

  public constructor() {}
}
