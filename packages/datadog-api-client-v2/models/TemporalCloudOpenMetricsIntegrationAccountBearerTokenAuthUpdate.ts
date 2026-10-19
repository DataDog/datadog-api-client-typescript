/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { TemporalCloudOpenMetricsIntegrationAccountBearerTokenAuthType } from "./TemporalCloudOpenMetricsIntegrationAccountBearerTokenAuthType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

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
