/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { TemporalCloudOpenMetricsIntegrationAccountAuthenticationResponse } from "./TemporalCloudOpenMetricsIntegrationAccountAuthenticationResponse";
import { TemporalCloudOpenMetricsIntegrationAccountSettingsResponse } from "./TemporalCloudOpenMetricsIntegrationAccountSettingsResponse";
import { TemporalCloudOpenMetricsIntegrationDataflowsResponse } from "./TemporalCloudOpenMetricsIntegrationDataflowsResponse";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Attributes of a Temporal Cloud OpenMetrics integration account returned in responses.
 */
export class TemporalCloudOpenMetricsIntegrationAccountResponseAttributes {
  /**
   * Authentication configured on the Temporal Cloud OpenMetrics integration account.
   */
  "authentication"?: TemporalCloudOpenMetricsIntegrationAccountAuthenticationResponse;
  /**
   * Data Datadog collects from Temporal Cloud OpenMetrics, keyed by dataflow id.
   */
  "dataflows"?: TemporalCloudOpenMetricsIntegrationDataflowsResponse;
  /**
   * Human-readable name of the Temporal Cloud OpenMetrics integration account.
   */
  "name": string;
  /**
   * Settings configured on the Temporal Cloud OpenMetrics integration account.
   */
  "settings": TemporalCloudOpenMetricsIntegrationAccountSettingsResponse;

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
    authentication: {
      baseName: "authentication",
      type: "TemporalCloudOpenMetricsIntegrationAccountAuthenticationResponse",
    },
    dataflows: {
      baseName: "dataflows",
      type: "TemporalCloudOpenMetricsIntegrationDataflowsResponse",
    },
    name: {
      baseName: "name",
      type: "string",
      required: true,
    },
    settings: {
      baseName: "settings",
      type: "TemporalCloudOpenMetricsIntegrationAccountSettingsResponse",
      required: true,
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
    return TemporalCloudOpenMetricsIntegrationAccountResponseAttributes.attributeTypeMap;
  }

  public constructor() {}
}
