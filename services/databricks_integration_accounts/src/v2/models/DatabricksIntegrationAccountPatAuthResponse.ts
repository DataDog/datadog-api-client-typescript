import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { DatabricksIntegrationAccountPatAuthType } from "./DatabricksIntegrationAccountPatAuthType";

/**
 * The Databricks personal access token authentication method configured on the account. Deprecated: migrate these accounts to `databricks-oauth` or `private-action-runner`.
 */
export class DatabricksIntegrationAccountPatAuthResponse {
  /**
   * The authentication method type.
   */
  "authType": DatabricksIntegrationAccountPatAuthType;
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
      type: "DatabricksIntegrationAccountPatAuthType",
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
    return DatabricksIntegrationAccountPatAuthResponse.attributeTypeMap;
  }

  public constructor() {}
}
