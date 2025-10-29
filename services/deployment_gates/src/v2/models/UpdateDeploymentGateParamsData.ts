import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { DeploymentGateDataType } from "./DeploymentGateDataType";
import { UpdateDeploymentGateParamsDataAttributes } from "./UpdateDeploymentGateParamsDataAttributes";

/**
 * Parameters for updating a deployment gate.
 */
export class UpdateDeploymentGateParamsData {
  /**
   * Attributes for updating a deployment gate.
   */
  "attributes": UpdateDeploymentGateParamsDataAttributes;
  /**
   * Unique identifier of the deployment gate.
   */
  "id": string;
  /**
   * Deployment gate resource type.
   */
  "type": DeploymentGateDataType;
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
      type: "UpdateDeploymentGateParamsDataAttributes",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    type: {
      baseName: "type",
      type: "DeploymentGateDataType",
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
    return UpdateDeploymentGateParamsData.attributeTypeMap;
  }

  public constructor() {}
}
