/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { SLOHistoryMetrics } from "./SLOHistoryMetrics";
import { SLOHistoryMonitor } from "./SLOHistoryMonitor";
import { SLOHistorySLIData } from "./SLOHistorySLIData";
import { SLOThreshold } from "./SLOThreshold";
import { SLOType } from "./SLOType";
import { SLOTypeNumeric } from "./SLOTypeNumeric";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * An array of service level objective objects.
 */
export class SLOHistoryResponseData {
  /**
   * The `from` timestamp in epoch seconds.
   */
  "fromTs"?: number;
  /**
   * For `metric` based SLOs where the query includes a group-by clause, this represents the list of grouping parameters.
   *
   * This is not included in responses for `monitor` based SLOs.
   */
  "groupBy"?: Array<string>;
  /**
   * For grouped SLOs, this represents SLI data for specific groups.
   *
   * This is not included in the responses for `metric` based SLOs.
   */
  "groups"?: Array<SLOHistoryMonitor>;
  /**
   * For multi-monitor SLOs, this represents SLI data for specific monitors.
   *
   * This is not included in the responses for `metric` based SLOs.
   */
  "monitors"?: Array<SLOHistoryMonitor>;
  /**
   * An object that holds an SLI value and its associated data. It can represent an SLO's overall SLI value.
   * This can also represent the SLI value for a specific monitor in multi-monitor SLOs, or a group in grouped SLOs.
   */
  "overall"?: SLOHistorySLIData;
  /**
   * A `metric` based SLO history response.
   *
   * This is not included in responses for `monitor` based SLOs.
   */
  "series"?: SLOHistoryMetrics;
  /**
   * mapping of string timeframe to the SLO threshold.
   */
  "thresholds"?: { [key: string]: SLOThreshold };
  /**
   * The `to` timestamp in epoch seconds.
   */
  "toTs"?: number;
  /**
   * The type of the service level objective.
   */
  "type"?: SLOType;
  /**
   * A numeric representation of the type of the service level objective (`0` for
   * monitor, `1` for metric). Always included in service level objective responses.
   * Ignored in create/update requests.
   */
  "typeId"?: SLOTypeNumeric;

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
    fromTs: {
      baseName: "from_ts",
      type: "number",
      format: "int64",
    },
    groupBy: {
      baseName: "group_by",
      type: "Array<string>",
    },
    groups: {
      baseName: "groups",
      type: "Array<SLOHistoryMonitor>",
    },
    monitors: {
      baseName: "monitors",
      type: "Array<SLOHistoryMonitor>",
    },
    overall: {
      baseName: "overall",
      type: "SLOHistorySLIData",
    },
    series: {
      baseName: "series",
      type: "SLOHistoryMetrics",
    },
    thresholds: {
      baseName: "thresholds",
      type: "{ [key: string]: SLOThreshold; }",
    },
    toTs: {
      baseName: "to_ts",
      type: "number",
      format: "int64",
    },
    type: {
      baseName: "type",
      type: "SLOType",
    },
    typeId: {
      baseName: "type_id",
      type: "SLOTypeNumeric",
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
    return SLOHistoryResponseData.attributeTypeMap;
  }

  public constructor() {}
}
