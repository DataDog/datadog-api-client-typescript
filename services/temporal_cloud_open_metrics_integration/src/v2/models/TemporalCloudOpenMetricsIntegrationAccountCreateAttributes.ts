import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { TemporalCloudOpenMetricsIntegrationAccountAuthenticationRequest } from "./TemporalCloudOpenMetricsIntegrationAccountAuthenticationRequest";
import { TemporalCloudOpenMetricsIntegrationAccountSettingsRequest } from "./TemporalCloudOpenMetricsIntegrationAccountSettingsRequest";

/**
 * Writable attributes used to create a Temporal Cloud OpenMetrics integration account.
 */
export class TemporalCloudOpenMetricsIntegrationAccountCreateAttributes {
  /**
   * Authentication for creating the Temporal Cloud OpenMetrics integration account. Exactly one method is set.
   */
  "authentication": TemporalCloudOpenMetricsIntegrationAccountAuthenticationRequest;
  /**
   * Human-readable name of the Temporal Cloud OpenMetrics integration account.
   */
  "name": string;
  /**
   * Settings for creating the Temporal Cloud OpenMetrics integration account.
   */
  "settings": TemporalCloudOpenMetricsIntegrationAccountSettingsRequest;
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
      type: "TemporalCloudOpenMetricsIntegrationAccountAuthenticationRequest",
      required: true,
    },
    name: {
      baseName: "name",
      type: "string",
      required: true,
    },
    settings: {
      baseName: "settings",
      type: "TemporalCloudOpenMetricsIntegrationAccountSettingsRequest",
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
    return TemporalCloudOpenMetricsIntegrationAccountCreateAttributes.attributeTypeMap;
  }

  public constructor() {}
}
