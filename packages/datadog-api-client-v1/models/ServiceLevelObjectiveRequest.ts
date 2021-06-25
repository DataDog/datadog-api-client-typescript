/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { SLOThreshold } from "./SLOThreshold";
import { SLOType } from "./SLOType";
import { ServiceLevelObjectiveQuery } from "./ServiceLevelObjectiveQuery";
import { ObjectSerializer } from "./ObjectSerializer";

/**
 * A service level objective object includes a service level indicator, thresholds for one or more timeframes, and metadata (`name`, `description`, `tags`, etc.).
 */

export class ServiceLevelObjectiveRequest {
  /**
   * A user-defined description of the service level objective.  Always included in service level objective responses (but may be `null`). Optional in create/update requests.
   */
  "description"?: string;
  /**
   * A list of (up to 20) monitor groups that narrow the scope of a monitor service level objective.  Included in service level objective responses if it is not empty. Optional in create/update requests for monitor service level objectives, but may only be used when then length of the `monitor_ids` field is one.
   */
  "groups"?: Array<string>;
  /**
   * A list of monitor ids that defines the scope of a monitor service level objective. **Required if type is `monitor`**.
   */
  "monitorIds"?: Array<number>;
  /**
   * The name of the service level objective object.
   */
  "name": string;
  "query"?: ServiceLevelObjectiveQuery;
  /**
   * A list of tags associated with this service level objective. Always included in service level objective responses (but may be empty). Optional in create/update requests.
   */
  "tags"?: Array<string>;
  /**
   * The thresholds (timeframes and associated targets) for this service level objective object.
   */
  "thresholds": Array<SLOThreshold>;
  "type": SLOType;

  static readonly discriminator: string | undefined = undefined;

  static readonly attributeTypeMap: {
    [key: string]: { baseName: string; type: string; format: string };
  } = {
    description: {
      baseName: "description",
      type: "string",
      format: "",
    },
    groups: {
      baseName: "groups",
      type: "Array<string>",
      format: "",
    },
    monitorIds: {
      baseName: "monitor_ids",
      type: "Array<number>",
      format: "int64",
    },
    name: {
      baseName: "name",
      type: "string",
      format: "",
    },
    query: {
      baseName: "query",
      type: "ServiceLevelObjectiveQuery",
      format: "",
    },
    tags: {
      baseName: "tags",
      type: "Array<string>",
      format: "",
    },
    thresholds: {
      baseName: "thresholds",
      type: "Array<SLOThreshold>",
      format: "",
    },
    type: {
      baseName: "type",
      type: "SLOType",
      format: "",
    },
  };

  static getAttributeTypeMap() {
    return ServiceLevelObjectiveRequest.attributeTypeMap;
  }

  static deserialize(data: {
    [key: string]: any;
  }): ServiceLevelObjectiveRequest {
    const res = new ServiceLevelObjectiveRequest();

    res.description = ObjectSerializer.deserialize(
      data.description,
      "string",
      ""
    );

    res.groups = ObjectSerializer.deserialize(data.groups, "Array<string>", "");

    res.monitorIds = ObjectSerializer.deserialize(
      data.monitor_ids,
      "Array<number>",
      "int64"
    );

    if (data.name === undefined) {
      throw new TypeError(
        "missing required attribute 'name' on 'ServiceLevelObjectiveRequest' object"
      );
    }
    res.name = ObjectSerializer.deserialize(data.name, "string", "");

    res.query = ObjectSerializer.deserialize(
      data.query,
      "ServiceLevelObjectiveQuery",
      ""
    );

    res.tags = ObjectSerializer.deserialize(data.tags, "Array<string>", "");

    if (data.thresholds === undefined) {
      throw new TypeError(
        "missing required attribute 'thresholds' on 'ServiceLevelObjectiveRequest' object"
      );
    }
    res.thresholds = ObjectSerializer.deserialize(
      data.thresholds,
      "Array<SLOThreshold>",
      ""
    );

    if (data.type === undefined) {
      throw new TypeError(
        "missing required attribute 'type' on 'ServiceLevelObjectiveRequest' object"
      );
    }
    if (["metric", "monitor", undefined].includes(data.type)) {
      res.type = data.type;
    } else {
      throw TypeError(`invalid enum value ${data.type} for type`);
    }

    return res;
  }

  static serialize(data: ServiceLevelObjectiveRequest): { [key: string]: any } {
    const attributeTypes = ServiceLevelObjectiveRequest.getAttributeTypeMap();
    const res: { [index: string]: any } = {};
    for (const [key, value] of Object.entries(data)) {
      if (!(key in attributeTypes)) {
        throw new TypeError(`${key} attribute not in schema`);
      }
    }
    res.description = ObjectSerializer.serialize(
      data.description,
      "string",
      ""
    );

    res.groups = ObjectSerializer.serialize(data.groups, "Array<string>", "");

    res.monitor_ids = ObjectSerializer.serialize(
      data.monitorIds,
      "Array<number>",
      "int64"
    );

    if (data.name === undefined) {
      throw new TypeError(
        "missing required attribute 'name' on 'ServiceLevelObjectiveRequest' object"
      );
    }
    res.name = ObjectSerializer.serialize(data.name, "string", "");

    res.query = ObjectSerializer.serialize(
      data.query,
      "ServiceLevelObjectiveQuery",
      ""
    );

    res.tags = ObjectSerializer.serialize(data.tags, "Array<string>", "");

    if (data.thresholds === undefined) {
      throw new TypeError(
        "missing required attribute 'thresholds' on 'ServiceLevelObjectiveRequest' object"
      );
    }
    res.thresholds = ObjectSerializer.serialize(
      data.thresholds,
      "Array<SLOThreshold>",
      ""
    );

    if (data.type === undefined) {
      throw new TypeError(
        "missing required attribute 'type' on 'ServiceLevelObjectiveRequest' object"
      );
    }
    if (["metric", "monitor", undefined].includes(data.type)) {
      res.type = data.type;
    } else {
      throw TypeError(`invalid enum value ${data.type} for type`);
    }

    return res;
  }

  public constructor() {}
}
