import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { DORADeploymentPatchRequestAttributes } from "./DORADeploymentPatchRequestAttributes";
import { DORADeploymentPatchRequestDataType } from "./DORADeploymentPatchRequestDataType";

/**
 * The JSON:API data for patching a deployment.
 */
export class DORADeploymentPatchRequestData {
  /**
   * Attributes for patching a DORA deployment event.
   */
  "attributes": DORADeploymentPatchRequestAttributes;
  /**
   * The ID of the deployment to patch.
   */
  "id": string;
  /**
   * JSON:API type for DORA deployment patch request.
   */
  "type": DORADeploymentPatchRequestDataType;
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
      type: "DORADeploymentPatchRequestAttributes",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    type: {
      baseName: "type",
      type: "DORADeploymentPatchRequestDataType",
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
    return DORADeploymentPatchRequestData.attributeTypeMap;
  }

  public constructor() {}
}
