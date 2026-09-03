/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { DatabricksDataJobMonitoringIntegrationDataflowSettingsRequest } from "./DatabricksDataJobMonitoringIntegrationDataflowSettingsRequest";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * The Databricks Data Jobs Monitoring dataflow.
 */
export class DatabricksDataJobMonitoringIntegrationDataflowRequest {
  /**
   * Whether the Databricks dataflow is enabled.
   */
  "enabled"?: boolean;
  /**
   * Settings of the Databricks Data Jobs Monitoring dataflow. Only the fields provided are changed.
   */
  "settings"?: DatabricksDataJobMonitoringIntegrationDataflowSettingsRequest;

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
      type: "DatabricksDataJobMonitoringIntegrationDataflowSettingsRequest",
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
    return DatabricksDataJobMonitoringIntegrationDataflowRequest.attributeTypeMap;
  }

  public constructor() {}
}
