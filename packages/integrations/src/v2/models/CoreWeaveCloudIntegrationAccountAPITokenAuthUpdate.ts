import { AttributeTypeMap } from "@datadog/datadog-api-client-core";

import { CoreWeaveCloudIntegrationAccountAPITokenAuthType } from "./CoreWeaveCloudIntegrationAccountAPITokenAuthType";

/**
 * API token authentication, the only method CoreWeave integration accounts support. Only the fields provided are changed; omit `api_token` to keep the stored one.
 */
export class CoreWeaveCloudIntegrationAccountAPITokenAuthUpdate {
  /**
   * Secret CoreWeave API access token used to authenticate with CoreWeave. It cannot be cleared; sending `null` or an empty string is rejected with a `422` response.
   */
  "apiToken"?: string;
  /**
   * The authentication method type.
   */
  "authType": CoreWeaveCloudIntegrationAccountAPITokenAuthType;
  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    apiToken: {
      baseName: "api_token",
      type: "string",
    },
    authType: {
      baseName: "auth_type",
      type: "CoreWeaveCloudIntegrationAccountAPITokenAuthType",
      required: true,
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return CoreWeaveCloudIntegrationAccountAPITokenAuthUpdate.attributeTypeMap;
  }

  public constructor() {}
}
