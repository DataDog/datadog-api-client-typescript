/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { NotebookCellResourceType } from "./NotebookCellResourceType";
import { NotebookCellResponseAttributes } from "./NotebookCellResponseAttributes";
import { ObjectSerializer } from "./ObjectSerializer";

/**
 * The description of a notebook cell response.
 */

export class NotebookCellResponse {
  "attributes": NotebookCellResponseAttributes;
  /**
   * Notebook cell ID.
   */
  "id": string;
  "type": NotebookCellResourceType;

  static readonly discriminator: string | undefined = undefined;

  static readonly attributeTypeMap: {
    [key: string]: { baseName: string; type: string; format: string };
  } = {
    attributes: {
      baseName: "attributes",
      type: "NotebookCellResponseAttributes",
      format: "",
    },
    id: {
      baseName: "id",
      type: "string",
      format: "",
    },
    type: {
      baseName: "type",
      type: "NotebookCellResourceType",
      format: "",
    },
  };

  static getAttributeTypeMap() {
    return NotebookCellResponse.attributeTypeMap;
  }

  static deserialize(data: { [key: string]: any }): NotebookCellResponse {
    const res = new NotebookCellResponse();

    if (data.attributes === undefined) {
      throw new TypeError(
        "missing required attribute 'attributes' on 'NotebookCellResponse' object"
      );
    }
    res.attributes = ObjectSerializer.deserialize(
      data.attributes,
      "NotebookCellResponseAttributes",
      ""
    );

    if (data.id === undefined) {
      throw new TypeError(
        "missing required attribute 'id' on 'NotebookCellResponse' object"
      );
    }
    res.id = ObjectSerializer.deserialize(data.id, "string", "");

    if (data.type === undefined) {
      throw new TypeError(
        "missing required attribute 'type' on 'NotebookCellResponse' object"
      );
    }
    if (["notebook_cells", undefined].includes(data.type)) {
      res.type = data.type;
    } else {
      throw TypeError(`invalid enum value ${data.type} for type`);
    }

    return res;
  }

  static serialize(data: NotebookCellResponse): { [key: string]: any } {
    const attributeTypes = NotebookCellResponse.getAttributeTypeMap();
    const res: { [index: string]: any } = {};
    for (const [key, value] of Object.entries(data)) {
      if (!(key in attributeTypes)) {
        throw new TypeError(`${key} attribute not in schema`);
      }
    }
    if (data.attributes === undefined) {
      throw new TypeError(
        "missing required attribute 'attributes' on 'NotebookCellResponse' object"
      );
    }
    res.attributes = ObjectSerializer.serialize(
      data.attributes,
      "NotebookCellResponseAttributes",
      ""
    );

    if (data.id === undefined) {
      throw new TypeError(
        "missing required attribute 'id' on 'NotebookCellResponse' object"
      );
    }
    res.id = ObjectSerializer.serialize(data.id, "string", "");

    if (data.type === undefined) {
      throw new TypeError(
        "missing required attribute 'type' on 'NotebookCellResponse' object"
      );
    }
    if (["notebook_cells", undefined].includes(data.type)) {
      res.type = data.type;
    } else {
      throw TypeError(`invalid enum value ${data.type} for type`);
    }

    return res;
  }

  public constructor() {}
}
