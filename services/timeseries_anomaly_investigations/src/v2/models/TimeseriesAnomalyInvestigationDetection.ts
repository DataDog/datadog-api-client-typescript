import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { TimeseriesAnomalyInvestigationConfigurationSource } from "./TimeseriesAnomalyInvestigationConfigurationSource";

/**
 * Anomaly detection configuration used for the result.
 */
export class TimeseriesAnomalyInvestigationDetection {
  /**
   * Source of the anomaly detection configuration.
   */
  "configurationSource": TimeseriesAnomalyInvestigationConfigurationSource;
  /**
   * Applied Watchdog Explains profile, or null when the request supplied an explicit `anomalies()` formula. The current Watchdog profile is `watchdog_explains_v1`.
   */
  "profile": string | null;
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
    configurationSource: {
      baseName: "configuration_source",
      type: "TimeseriesAnomalyInvestigationConfigurationSource",
      required: true,
    },
    profile: {
      baseName: "profile",
      type: "string",
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
    return TimeseriesAnomalyInvestigationDetection.attributeTypeMap;
  }

  public constructor() {}
}
