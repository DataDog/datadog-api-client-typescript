/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { DatabricksIntegrationAccountPatAuthType } from "./DatabricksIntegrationAccountPatAuthType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Databricks personal access token authentication. Deprecated: accepted only on accounts that already use it, and never on creation. Use `databricks-oauth` or `private-action-runner` instead. Omit `token` to keep the stored one.
 */
export class DatabricksIntegrationAccountPatAuthUpdate {
  /**
   * The authentication method type.
   */
  "authType": DatabricksIntegrationAccountPatAuthType;
  /**
   * Secret Databricks personal access token.
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
      type: "DatabricksIntegrationAccountPatAuthType",
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
    return DatabricksIntegrationAccountPatAuthUpdate.attributeTypeMap;
  }

  public constructor() {}
}
