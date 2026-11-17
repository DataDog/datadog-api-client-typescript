/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { CoreWeaveCloudIntegrationAccountAPITokenAuthType } from "./CoreWeaveCloudIntegrationAccountAPITokenAuthType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

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
