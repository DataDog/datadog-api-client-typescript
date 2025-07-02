import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { AWSIntegrationIamPermissionsResponseData } from "./AWSIntegrationIamPermissionsResponseData";

/**
 * AWS Integration IAM Permissions response body.
 */
export class AWSIntegrationIamPermissionsResponse {
  /**
   * AWS Integration IAM Permissions response data.
   */
  "data": AWSIntegrationIamPermissionsResponseData;
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
      type: "AWSIntegrationIamPermissionsResponseData",
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
    return AWSIntegrationIamPermissionsResponse.attributeTypeMap;
  }

  public constructor() {}
}
