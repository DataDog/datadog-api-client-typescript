import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { TemporalCloudOpenMetricsIntegrationAccountBearerTokenAuthType } from "./TemporalCloudOpenMetricsIntegrationAccountBearerTokenAuthType";

/**
 * Bearer token authentication. Use the API key of a Temporal Cloud service account with the Metrics Read-Only account-level role. Only the fields provided are changed; omit `token` to keep the stored one.
 */
export class TemporalCloudOpenMetricsIntegrationAccountBearerTokenAuthUpdate {
  /**
   * The authentication method type.
   */
  "authType": TemporalCloudOpenMetricsIntegrationAccountBearerTokenAuthType;
  /**
   * Secret token used to authenticate with Temporal Cloud.
   */
  "token"?: string;
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
      type: "TemporalCloudOpenMetricsIntegrationAccountBearerTokenAuthType",
      required: true,
    },
    token: {
      baseName: "token",
      type: "string",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return TemporalCloudOpenMetricsIntegrationAccountBearerTokenAuthUpdate.attributeTypeMap;
  }

  public constructor() {}
}
