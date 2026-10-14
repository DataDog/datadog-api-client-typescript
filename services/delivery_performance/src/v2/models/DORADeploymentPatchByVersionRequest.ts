import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { DORADeploymentPatchByVersionRequestData } from "./DORADeploymentPatchByVersionRequestData";

/**
 * Request to patch a DORA deployment event identified by service, environment, and version.
 */
export class DORADeploymentPatchByVersionRequest {
  /**
   * The JSON:API data for patching a deployment identified by service, environment, and version.
   */
  "data": DORADeploymentPatchByVersionRequestData;
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
      type: "DORADeploymentPatchByVersionRequestData",
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
    return DORADeploymentPatchByVersionRequest.attributeTypeMap;
  }

  public constructor() {}
}
