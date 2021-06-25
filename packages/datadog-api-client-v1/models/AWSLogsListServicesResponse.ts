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
 * The list of current AWS services for which Datadog offers automatic log collection.
 */

export class AWSLogsListServicesResponse {
  /**
   * Key value in returned object.
   */
  "id"?: string;
  /**
   * Name of service available for configuration with Datadog logs.
   */
  "label"?: string;

  static readonly discriminator: string | undefined = undefined;

  static readonly attributeTypeMap: {
    [key: string]: { baseName: string; type: string; format: string };
  } = {
    id: {
      baseName: "id",
      type: "string",
      format: "",
    },
    label: {
      baseName: "label",
      type: "string",
      format: "",
    },
  };

  static getAttributeTypeMap() {
    return AWSLogsListServicesResponse.attributeTypeMap;
  }

  static deserialize(data: {
    [key: string]: any;
  }): AWSLogsListServicesResponse {
    const res = new AWSLogsListServicesResponse();

    res.id = ObjectSerializer.deserialize(data.id, "string", "");

    res.label = ObjectSerializer.deserialize(data.label, "string", "");

    return res;
  }

  static serialize(data: AWSLogsListServicesResponse): { [key: string]: any } {
    const attributeTypes = AWSLogsListServicesResponse.getAttributeTypeMap();
    const res: { [index: string]: any } = {};
    for (const [key, value] of Object.entries(data)) {
      if (!(key in attributeTypes)) {
        throw new TypeError(`${key} attribute not in schema`);
      }
    }
    res.id = ObjectSerializer.serialize(data.id, "string", "");

    res.label = ObjectSerializer.serialize(data.label, "string", "");

    return res;
  }

  public constructor() {}
}
