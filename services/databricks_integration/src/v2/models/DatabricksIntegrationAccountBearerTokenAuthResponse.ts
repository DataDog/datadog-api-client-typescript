import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { DatabricksIntegrationAccountBearerTokenAuthType } from "./DatabricksIntegrationAccountBearerTokenAuthType";

/**
 * The bearer token authentication method configured on the account.
 */
export class DatabricksIntegrationAccountBearerTokenAuthResponse {
  /**
   * The authentication method type.
   */
  "authType": DatabricksIntegrationAccountBearerTokenAuthType;
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
      type: "DatabricksIntegrationAccountBearerTokenAuthType",
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
    return DatabricksIntegrationAccountBearerTokenAuthResponse.attributeTypeMap;
  }

  public constructor() {}
}
