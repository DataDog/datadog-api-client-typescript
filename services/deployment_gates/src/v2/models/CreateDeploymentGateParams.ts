import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { CreateDeploymentGateParamsData } from "./CreateDeploymentGateParamsData";

/**
 * Parameters for creating a deployment gate.
 */
export class CreateDeploymentGateParams {
  /**
   * Parameters for creating a deployment gate.
   */
  "data": CreateDeploymentGateParamsData;
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
      type: "CreateDeploymentGateParamsData",
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
    return CreateDeploymentGateParams.attributeTypeMap;
  }

  public constructor() {}
}
