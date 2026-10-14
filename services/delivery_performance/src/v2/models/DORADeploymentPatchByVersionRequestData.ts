import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { DORADeploymentPatchByVersionRequestAttributes } from "./DORADeploymentPatchByVersionRequestAttributes";
import { DORADeploymentPatchRequestDataType } from "./DORADeploymentPatchRequestDataType";

/**
 * The JSON:API data for patching a deployment identified by service, environment, and version.
 */
export class DORADeploymentPatchByVersionRequestData {
  /**
   * Attributes for patching a DORA deployment event identified by service, environment, and version.
   */
  "attributes": DORADeploymentPatchByVersionRequestAttributes;
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
      type: "DORADeploymentPatchByVersionRequestAttributes",
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
    return DORADeploymentPatchByVersionRequestData.attributeTypeMap;
  }

  public constructor() {}
}
