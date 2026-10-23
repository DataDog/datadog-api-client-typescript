import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { TemporalCloudOpenMetricsIntegrationAccountAuthenticationResponse } from "./TemporalCloudOpenMetricsIntegrationAccountAuthenticationResponse";
import { TemporalCloudOpenMetricsIntegrationAccountSettingsResponse } from "./TemporalCloudOpenMetricsIntegrationAccountSettingsResponse";
import { TemporalCloudOpenMetricsIntegrationDataflowsResponse } from "./TemporalCloudOpenMetricsIntegrationDataflowsResponse";

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
