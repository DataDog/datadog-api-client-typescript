import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { CoreWeaveCloudIntegrationAccountAPITokenAuthType } from "./CoreWeaveCloudIntegrationAccountAPITokenAuthType";

/**
 * API token authentication, the only method CoreWeave integration accounts support. Create the token in the CoreWeave Cloud console under Access Tokens; it starts with `CW-SECRET-`. The user who owns the token must have the Observability Viewer role, because tokens inherit their user's permissions.
 */
export class CoreWeaveCloudIntegrationAccountAPITokenAuthRequest {
  /**
   * Secret CoreWeave API access token used to authenticate with CoreWeave. Values that do not start with `CW-SECRET-` are rejected with a `422` response.
   */
  "apiToken": string;
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
      required: true,
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
    return CoreWeaveCloudIntegrationAccountAPITokenAuthRequest.attributeTypeMap;
  }

  public constructor() {}
}
