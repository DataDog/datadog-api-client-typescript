import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { FleetDeploymentV2Cancel } from "./FleetDeploymentV2Cancel";

/**
 * Response containing the result of a deployment cancellation request.
 */
export class FleetDeploymentV2CancelResponse {
  /**
   * A deployment cancellation response.
   */
  "data": FleetDeploymentV2Cancel;
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
      type: "FleetDeploymentV2Cancel",
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
    return FleetDeploymentV2CancelResponse.attributeTypeMap;
  }

  public constructor() {}
}
