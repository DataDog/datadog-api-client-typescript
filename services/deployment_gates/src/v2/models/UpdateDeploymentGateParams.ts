import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { UpdateDeploymentGateParamsData } from "./UpdateDeploymentGateParamsData";

/**
 * Parameters for updating a deployment gate.
 */
export class UpdateDeploymentGateParams {
  /**
   * Parameters for updating a deployment gate.
   */
  "data": UpdateDeploymentGateParamsData;
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
      type: "UpdateDeploymentGateParamsData",
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
    return UpdateDeploymentGateParams.attributeTypeMap;
  }

  public constructor() {}
}
