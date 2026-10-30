/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { TemporalCloudOpenMetricsIntegrationAccountAuthenticationUpdate } from "./TemporalCloudOpenMetricsIntegrationAccountAuthenticationUpdate";
import { TemporalCloudOpenMetricsIntegrationAccountSettingsUpdate } from "./TemporalCloudOpenMetricsIntegrationAccountSettingsUpdate";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Writable attributes used to update a Temporal Cloud OpenMetrics integration account. Every field is optional; only the fields provided are changed.
 */
export class TemporalCloudOpenMetricsIntegrationAccountUpdateAttributes {
  /**
   * Authentication for updating the Temporal Cloud OpenMetrics integration account. Exactly one method is set.
   */
  "authentication"?: TemporalCloudOpenMetricsIntegrationAccountAuthenticationUpdate;
  /**
   * Human-readable name of the Temporal Cloud OpenMetrics integration account.
   */
  "name"?: string;
  /**
   * Settings for updating the Temporal Cloud OpenMetrics integration account. Only the fields provided are changed.
   */
  "settings"?: TemporalCloudOpenMetricsIntegrationAccountSettingsUpdate;

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
      type: "TemporalCloudOpenMetricsIntegrationAccountAuthenticationUpdate",
    },
    name: {
      baseName: "name",
      type: "string",
    },
    settings: {
      baseName: "settings",
      type: "TemporalCloudOpenMetricsIntegrationAccountSettingsUpdate",
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
    return TemporalCloudOpenMetricsIntegrationAccountUpdateAttributes.attributeTypeMap;
  }

  public constructor() {}
}
