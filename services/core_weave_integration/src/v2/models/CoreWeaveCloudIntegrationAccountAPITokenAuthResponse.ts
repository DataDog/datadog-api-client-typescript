import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { CoreWeaveCloudIntegrationAccountAPITokenAuthType } from "./CoreWeaveCloudIntegrationAccountAPITokenAuthType";

/**
 * The API token authentication method configured on the account.
 */
export class CoreWeaveCloudIntegrationAccountAPITokenAuthResponse {
  /**
   * The authentication method type.
   */
  "authType": CoreWeaveCloudIntegrationAccountAPITokenAuthType;
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
    authType: {
      baseName: "auth_type",
      type: "CoreWeaveCloudIntegrationAccountAPITokenAuthType",
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
    return CoreWeaveCloudIntegrationAccountAPITokenAuthResponse.attributeTypeMap;
  }

  public constructor() {}
}
