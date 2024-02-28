/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ServiceLevelObjectiveQuery } from "./ServiceLevelObjectiveQuery";
import { SLOSliSpec } from "./SLOSliSpec";
import { SLOThreshold } from "./SLOThreshold";
import { SLOTimeframe } from "./SLOTimeframe";
import { SLOType } from "./SLOType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * A service level objective object includes a service level indicator, thresholds
 * for one or more timeframes, and metadata (`name`, `description`, `tags`, etc.).
 */
export class ServiceLevelObjectiveRequest {
  /**
   * A user-defined description of the service level objective.
   *
   * Always included in service level objective responses (but may be `null`).
   * Optional in create/update requests.
   */
  "description"?: string;
  /**
   * A list of (up to 100) monitor groups that narrow the scope of a monitor service level objective.
   *
   * Included in service level objective responses if it is not empty. Optional in
   * create/update requests for monitor service level objectives, but may only be
   * used when then length of the `monitor_ids` field is one.
   */
  "groups"?: Array<string>;
  /**
   * A list of monitor IDs that defines the scope of a monitor service level
   * objective. **Required if type is `monitor`**.
   */
  "monitorIds"?: Array<number>;
  /**
   * The name of the service level objective object.
   */
  "name": string;
  /**
   * A metric-based SLO. **Required if type is `metric`**. Note that Datadog only allows the sum by aggregator
   * to be used because this will sum up all request counts instead of averaging them, or taking the max or
   * min of all of those requests.
   */
  "query"?: ServiceLevelObjectiveQuery;
  /**
   * A generic SLI specification. This is currently used for time-slice SLOs only.
   */
  "sliSpecification"?: SLOSliSpec;
  /**
   * A list of tags associated with this service level objective.
   * Always included in service level objective responses (but may be empty).
   * Optional in create/update requests.
   */
  "tags"?: Array<string>;
  /**
   * The target threshold such that when the service level indicator is above this
   * threshold over the given timeframe, the objective is being met.
   */
  "targetThreshold"?: number;
  /**
   * The thresholds (timeframes and associated targets) for this service level
   * objective object.
   */
  "thresholds": Array<SLOThreshold>;
  /**
   * The SLO time window options.
   */
  "timeframe"?: SLOTimeframe;
  /**
   * The type of the service level objective.
   */
  "type": SLOType;
  /**
   * The optional warning threshold such that when the service level indicator is
   * below this value for the given threshold, but above the target threshold, the
   * objective appears in a "warning" state. This value must be greater than the target
   * threshold.
   */
  "warningThreshold"?: number;

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
    description: {
      baseName: "description",
      type: "string",
    },
    groups: {
      baseName: "groups",
      type: "Array<string>",
    },
    monitorIds: {
      baseName: "monitor_ids",
      type: "Array<number>",
      format: "int64",
    },
    name: {
      baseName: "name",
      type: "string",
      required: true,
    },
    query: {
      baseName: "query",
      type: "ServiceLevelObjectiveQuery",
    },
    sliSpecification: {
      baseName: "sli_specification",
      type: "SLOSliSpec",
    },
    tags: {
      baseName: "tags",
      type: "Array<string>",
    },
    targetThreshold: {
      baseName: "target_threshold",
      type: "number",
      format: "double",
    },
    thresholds: {
      baseName: "thresholds",
      type: "Array<SLOThreshold>",
      required: true,
    },
    timeframe: {
      baseName: "timeframe",
      type: "SLOTimeframe",
    },
    type: {
      baseName: "type",
      type: "SLOType",
      required: true,
    },
    warningThreshold: {
      baseName: "warning_threshold",
      type: "number",
      format: "double",
    },
    additionalProperties: {
      baseName: "additionalProperties",
      type: "any",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return ServiceLevelObjectiveRequest.attributeTypeMap;
  }

  public constructor() {}
}
