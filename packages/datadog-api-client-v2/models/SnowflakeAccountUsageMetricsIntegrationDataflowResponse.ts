/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { SnowflakeAccountUsageMetricsIntegrationDataflowSettingsResponse } from "./SnowflakeAccountUsageMetricsIntegrationDataflowSettingsResponse";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Account-level usage metrics read from the Snowflake `ACCOUNT_USAGE` schema, covering storage usage, credit consumption, and query activity.
 */
export class SnowflakeAccountUsageMetricsIntegrationDataflowResponse {
  /**
   * Whether Datadog collects this data.
   */
  "enabled"?: boolean;
  /**
   * Settings of the account usage metrics dataflow.
   */
  "settings"?: SnowflakeAccountUsageMetricsIntegrationDataflowSettingsResponse;

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
    enabled: {
      baseName: "enabled",
      type: "boolean",
    },
    settings: {
      baseName: "settings",
      type: "SnowflakeAccountUsageMetricsIntegrationDataflowSettingsResponse",
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
    return SnowflakeAccountUsageMetricsIntegrationDataflowResponse.attributeTypeMap;
  }

  public constructor() {}
}
