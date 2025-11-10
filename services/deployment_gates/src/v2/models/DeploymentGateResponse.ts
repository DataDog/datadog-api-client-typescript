import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { DeploymentGateResponseData } from "./DeploymentGateResponseData";

/**
 * Response for a deployment gate.
 */
export class DeploymentGateResponse {
  /**
   * Data for a deployment gate.
   */
  "data"?: DeploymentGateResponseData;
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
      type: "DeploymentGateResponseData",
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
    return DeploymentGateResponse.attributeTypeMap;
  }

  public constructor() {}
}
