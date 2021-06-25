/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { ObjectSerializer } from "./ObjectSerializer";

/**
 * The incident team's attributes from a response.
 */

export class IncidentTeamResponseAttributes {
  /**
   * Timestamp of when the incident team was created.
   */
  "created"?: Date;
  /**
   * Timestamp of when the incident team was modified.
   */
  "modified"?: Date;
  /**
   * Name of the incident team.
   */
  "name"?: string;

  static readonly discriminator: string | undefined = undefined;

  static readonly attributeTypeMap: {
    [key: string]: { baseName: string; type: string; format: string };
  } = {
    created: {
      baseName: "created",
      type: "Date",
      format: "date-time",
    },
    modified: {
      baseName: "modified",
      type: "Date",
      format: "date-time",
    },
    name: {
      baseName: "name",
      type: "string",
      format: "",
    },
  };

  static getAttributeTypeMap() {
    return IncidentTeamResponseAttributes.attributeTypeMap;
  }

  static deserialize(data: {
    [key: string]: any;
  }): IncidentTeamResponseAttributes {
    const res = new IncidentTeamResponseAttributes();

    res.created = ObjectSerializer.deserialize(
      data.created,
      "Date",
      "date-time"
    );

    res.modified = ObjectSerializer.deserialize(
      data.modified,
      "Date",
      "date-time"
    );

    res.name = ObjectSerializer.deserialize(data.name, "string", "");

    return res;
  }

  static serialize(
    data: IncidentTeamResponseAttributes
  ): { [key: string]: any } {
    const attributeTypes = IncidentTeamResponseAttributes.getAttributeTypeMap();
    const res: { [index: string]: any } = {};
    for (const [key, value] of Object.entries(data)) {
      if (!(key in attributeTypes)) {
        throw new TypeError(`${key} attribute not in schema`);
      }
    }
    res.created = ObjectSerializer.serialize(data.created, "Date", "date-time");

    res.modified = ObjectSerializer.serialize(
      data.modified,
      "Date",
      "date-time"
    );

    res.name = ObjectSerializer.serialize(data.name, "string", "");

    return res;
  }

  public constructor() {}
}
