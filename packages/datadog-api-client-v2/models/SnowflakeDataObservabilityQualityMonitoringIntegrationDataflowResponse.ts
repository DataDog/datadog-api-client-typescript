/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { SnowflakeDataObservabilityQualityMonitoringIntegrationDataflowSettingsResponse } from "./SnowflakeDataObservabilityQualityMonitoringIntegrationDataflowSettingsResponse";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Data Observability, which collects lineage and data quality information from your Snowflake databases so you can explore how data flows and detect and resolve quality issues.
 */
export class SnowflakeDataObservabilityQualityMonitoringIntegrationDataflowResponse {
  /**
   * Whether Datadog collects this data.
   */
  "enabled"?: boolean;
  /**
   * Settings of the Data Observability dataflow.
   */
  "settings"?: SnowflakeDataObservabilityQualityMonitoringIntegrationDataflowSettingsResponse;

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
      type: "SnowflakeDataObservabilityQualityMonitoringIntegrationDataflowSettingsResponse",
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
    return SnowflakeDataObservabilityQualityMonitoringIntegrationDataflowResponse.attributeTypeMap;
  }

  public constructor() {}
}
