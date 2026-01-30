import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { DORADeploymentPatchRequestData } from "./DORADeploymentPatchRequestData";

/**
 * Request to patch a DORA deployment event.
 */
export class DORADeploymentPatchRequest {
  /**
   * The JSON:API data for patching a deployment.
   */
  "data": DORADeploymentPatchRequestData;
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
      type: "DORADeploymentPatchRequestData",
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
    return DORADeploymentPatchRequest.attributeTypeMap;
  }

  public constructor() {}
}
