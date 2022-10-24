/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ServiceLevelObjectiveQuery } from "./ServiceLevelObjectiveQuery";
import { SLOThreshold } from "./SLOThreshold";
import { SLOType } from "./SLOType";

import {
  AttributeTypeMap,
  UnparsedObject,
} from "../../datadog-api-client-common/util";

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
   * A list of tags associated with this service level objective.
   * Always included in service level objective responses (but may be empty).
   * Optional in create/update requests.
   */
  "tags"?: Array<string>;
  /**
   * The thresholds (timeframes and associated targets) for this service level
   * objective object.
   */
  "thresholds": Array<SLOThreshold>;
  /**
   * The type of the service level objective.
   */
  "type": SLOType;

  /**
   * @ignore
   */
  "unparsedObject"?: UnparsedObject;

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
    tags: {
      baseName: "tags",
      type: "Array<string>",
    },
    thresholds: {
      baseName: "thresholds",
      type: "Array<SLOThreshold>",
      required: true,
    },
    type: {
      baseName: "type",
      type: "SLOType",
      required: true,
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
