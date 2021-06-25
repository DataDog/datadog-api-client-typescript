/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { LogsArchiveDestination } from "./LogsArchiveDestination";
import { LogsArchiveState } from "./LogsArchiveState";
import { ObjectSerializer } from "./ObjectSerializer";

/**
 * The attributes associated with the archive.
 */

export class LogsArchiveAttributes {
  "destination": LogsArchiveDestination;
  /**
   * To store the tags in the archive, set the value \"true\". If it is set to \"false\", the tags will be deleted when the logs are sent to the archive.
   */
  "includeTags"?: boolean;
  /**
   * The archive name.
   */
  "name": string;
  /**
   * The archive query/filter. Logs matching this query are included in the archive.
   */
  "query": string;
  /**
   * An array of tags to add to rehydrated logs from an archive.
   */
  "rehydrationTags"?: Array<string>;
  "state"?: LogsArchiveState;

  static readonly discriminator: string | undefined = undefined;

  static readonly attributeTypeMap: {
    [key: string]: { baseName: string; type: string; format: string };
  } = {
    destination: {
      baseName: "destination",
      type: "LogsArchiveDestination",
      format: "",
    },
    includeTags: {
      baseName: "include_tags",
      type: "boolean",
      format: "",
    },
    name: {
      baseName: "name",
      type: "string",
      format: "",
    },
    query: {
      baseName: "query",
      type: "string",
      format: "",
    },
    rehydrationTags: {
      baseName: "rehydration_tags",
      type: "Array<string>",
      format: "",
    },
    state: {
      baseName: "state",
      type: "LogsArchiveState",
      format: "",
    },
  };

  static getAttributeTypeMap() {
    return LogsArchiveAttributes.attributeTypeMap;
  }

  static deserialize(data: { [key: string]: any }): LogsArchiveAttributes {
    const res = new LogsArchiveAttributes();

    if (data.destination === undefined) {
      throw new TypeError(
        "missing required attribute 'destination' on 'LogsArchiveAttributes' object"
      );
    }
    res.destination = ObjectSerializer.deserialize(
      data.destination,
      "LogsArchiveDestination",
      ""
    );

    res.includeTags = ObjectSerializer.deserialize(
      data.include_tags,
      "boolean",
      ""
    );

    if (data.name === undefined) {
      throw new TypeError(
        "missing required attribute 'name' on 'LogsArchiveAttributes' object"
      );
    }
    res.name = ObjectSerializer.deserialize(data.name, "string", "");

    if (data.query === undefined) {
      throw new TypeError(
        "missing required attribute 'query' on 'LogsArchiveAttributes' object"
      );
    }
    res.query = ObjectSerializer.deserialize(data.query, "string", "");

    res.rehydrationTags = ObjectSerializer.deserialize(
      data.rehydration_tags,
      "Array<string>",
      ""
    );

    if (
      [
        "UNKNOWN",
        "WORKING",
        "FAILING",
        "WORKING_AUTH_LEGACY",
        undefined,
      ].includes(data.state)
    ) {
      res.state = data.state;
    } else {
      throw TypeError(`invalid enum value ${data.state} for state`);
    }

    return res;
  }

  static serialize(data: LogsArchiveAttributes): { [key: string]: any } {
    const attributeTypes = LogsArchiveAttributes.getAttributeTypeMap();
    const res: { [index: string]: any } = {};
    for (const [key, value] of Object.entries(data)) {
      if (!(key in attributeTypes)) {
        throw new TypeError(`${key} attribute not in schema`);
      }
    }
    if (data.destination === undefined) {
      throw new TypeError(
        "missing required attribute 'destination' on 'LogsArchiveAttributes' object"
      );
    }
    res.destination = ObjectSerializer.serialize(
      data.destination,
      "LogsArchiveDestination",
      ""
    );

    res.include_tags = ObjectSerializer.serialize(
      data.includeTags,
      "boolean",
      ""
    );

    if (data.name === undefined) {
      throw new TypeError(
        "missing required attribute 'name' on 'LogsArchiveAttributes' object"
      );
    }
    res.name = ObjectSerializer.serialize(data.name, "string", "");

    if (data.query === undefined) {
      throw new TypeError(
        "missing required attribute 'query' on 'LogsArchiveAttributes' object"
      );
    }
    res.query = ObjectSerializer.serialize(data.query, "string", "");

    res.rehydration_tags = ObjectSerializer.serialize(
      data.rehydrationTags,
      "Array<string>",
      ""
    );

    if (
      [
        "UNKNOWN",
        "WORKING",
        "FAILING",
        "WORKING_AUTH_LEGACY",
        undefined,
      ].includes(data.state)
    ) {
      res.state = data.state;
    } else {
      throw TypeError(`invalid enum value ${data.state} for state`);
    }

    return res;
  }

  public constructor() {}
}
