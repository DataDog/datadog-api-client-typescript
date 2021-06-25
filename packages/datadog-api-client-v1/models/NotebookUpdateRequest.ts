/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { NotebookUpdateData } from "./NotebookUpdateData";
import { ObjectSerializer } from "./ObjectSerializer";

/**
 * The description of a notebook update request.
 */

export class NotebookUpdateRequest {
  "data": NotebookUpdateData;

  static readonly discriminator: string | undefined = undefined;

  static readonly attributeTypeMap: {
    [key: string]: { baseName: string; type: string; format: string };
  } = {
    data: {
      baseName: "data",
      type: "NotebookUpdateData",
      format: "",
    },
  };

  static getAttributeTypeMap() {
    return NotebookUpdateRequest.attributeTypeMap;
  }

  static deserialize(data: { [key: string]: any }): NotebookUpdateRequest {
    const res = new NotebookUpdateRequest();

    if (data.data === undefined) {
      throw new TypeError(
        "missing required attribute 'data' on 'NotebookUpdateRequest' object"
      );
    }
    res.data = ObjectSerializer.deserialize(
      data.data,
      "NotebookUpdateData",
      ""
    );

    return res;
  }

  static serialize(data: NotebookUpdateRequest): { [key: string]: any } {
    const attributeTypes = NotebookUpdateRequest.getAttributeTypeMap();
    const res: { [index: string]: any } = {};
    for (const [key, value] of Object.entries(data)) {
      if (!(key in attributeTypes)) {
        throw new TypeError(`${key} attribute not in schema`);
      }
    }
    if (data.data === undefined) {
      throw new TypeError(
        "missing required attribute 'data' on 'NotebookUpdateRequest' object"
      );
    }
    res.data = ObjectSerializer.serialize(data.data, "NotebookUpdateData", "");

    return res;
  }

  public constructor() {}
}
