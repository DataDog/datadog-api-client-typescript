/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { CoreWeaveCloudIntegrationAccountAPITokenAuthType } from "./CoreWeaveCloudIntegrationAccountAPITokenAuthType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

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
