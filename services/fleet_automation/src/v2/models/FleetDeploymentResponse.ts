import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { FleetDeployment } from "./FleetDeployment";

/**
 * Response containing a single deployment.
 */
export class FleetDeploymentResponse {
  /**
   * A deployment that defines automated configuration changes for a fleet of hosts.
   */
  "data"?: FleetDeployment;
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
      type: "FleetDeployment",
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
    return FleetDeploymentResponse.attributeTypeMap;
  }

  public constructor() {}
}
