import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { TimeseriesAnomalyInvestigationAnomalyType } from "./TimeseriesAnomalyInvestigationAnomalyType";
import { TimeseriesAnomalyInvestigationDetection } from "./TimeseriesAnomalyInvestigationDetection";
import { TimeseriesAnomalyInvestigationFinding } from "./TimeseriesAnomalyInvestigationFinding";
import { TimeseriesAnomalyInvestigationInterval } from "./TimeseriesAnomalyInvestigationInterval";
import { TimeseriesAnomalyInvestigationMaximumDeviation } from "./TimeseriesAnomalyInvestigationMaximumDeviation";
import { TimeseriesAnomalyInvestigationSeries } from "./TimeseriesAnomalyInvestigationSeries";
import { TimeseriesAnomalyInvestigationTagAnalysis } from "./TimeseriesAnomalyInvestigationTagAnalysis";

/**
 * Most significant anomaly detected in the request.
 */
export class TimeseriesAnomalyInvestigationAnomaly {
  /**
   * Anomaly detection configuration used for the result.
   */
  "anomalyDetection": TimeseriesAnomalyInvestigationDetection;
  /**
   * Half-open time interval in milliseconds since the Unix epoch.
   */
  "detectedInterval": TimeseriesAnomalyInvestigationInterval;
  /**
   * Half-open time interval in milliseconds since the Unix epoch.
   */
  "displayInterval": TimeseriesAnomalyInvestigationInterval;
  /**
   * Deterministic explanations for the anomaly, ordered by importance.
   */
  "findings": Array<TimeseriesAnomalyInvestigationFinding>;
  /**
   * Most anomalous point within the detected interval.
   */
  "maximumDeviation": TimeseriesAnomalyInvestigationMaximumDeviation;
  /**
   * Logical series on which the anomaly was detected.
   */
  "series": TimeseriesAnomalyInvestigationSeries;
  /**
   * Summary of optional influential-tag enrichment. Count and key fields are present only when analysis completes; enrichment availability does not affect completion of the investigation result.
   */
  "tagAnalysis": TimeseriesAnomalyInvestigationTagAnalysis;
  /**
   * Direction of an anomaly relative to its expected range.
   */
  "type": TimeseriesAnomalyInvestigationAnomalyType;
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
    anomalyDetection: {
      baseName: "anomaly_detection",
      type: "TimeseriesAnomalyInvestigationDetection",
      required: true,
    },
    detectedInterval: {
      baseName: "detected_interval",
      type: "TimeseriesAnomalyInvestigationInterval",
      required: true,
    },
    displayInterval: {
      baseName: "display_interval",
      type: "TimeseriesAnomalyInvestigationInterval",
      required: true,
    },
    findings: {
      baseName: "findings",
      type: "Array<TimeseriesAnomalyInvestigationFinding>",
      required: true,
    },
    maximumDeviation: {
      baseName: "maximum_deviation",
      type: "TimeseriesAnomalyInvestigationMaximumDeviation",
      required: true,
    },
    series: {
      baseName: "series",
      type: "TimeseriesAnomalyInvestigationSeries",
      required: true,
    },
    tagAnalysis: {
      baseName: "tag_analysis",
      type: "TimeseriesAnomalyInvestigationTagAnalysis",
      required: true,
    },
    type: {
      baseName: "type",
      type: "TimeseriesAnomalyInvestigationAnomalyType",
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
    return TimeseriesAnomalyInvestigationAnomaly.attributeTypeMap;
  }

  public constructor() {}
}
