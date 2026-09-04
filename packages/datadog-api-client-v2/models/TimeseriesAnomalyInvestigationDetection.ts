/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { TimeseriesAnomalyInvestigationConfigurationSource } from "./TimeseriesAnomalyInvestigationConfigurationSource";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

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
