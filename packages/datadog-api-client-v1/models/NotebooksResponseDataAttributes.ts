/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { NotebookAuthor } from "./NotebookAuthor";
import { NotebookCellResponse } from "./NotebookCellResponse";
import { NotebookGlobalTime } from "./NotebookGlobalTime";
import { NotebookMetadata } from "./NotebookMetadata";
import { NotebookStatus } from "./NotebookStatus";
import { ObjectSerializer } from "./ObjectSerializer";

/**
 * The attributes of a notebook in get all response.
 */

export class NotebooksResponseDataAttributes {
  "author"?: NotebookAuthor;
  /**
   * List of cells to display in the notebook.
   */
  "cells"?: Array<NotebookCellResponse>;
  /**
   * UTC time stamp for when the notebook was created.
   */
  "created"?: Date;
  "metadata"?: NotebookMetadata;
  /**
   * UTC time stamp for when the notebook was last modified.
   */
  "modified"?: Date;
  /**
   * The name of the notebook.
   */
  "name": string;
  "status"?: NotebookStatus;
  "time"?: NotebookGlobalTime;

  "unparsedObject"?: any;

  static readonly discriminator: string | undefined = undefined;

  static readonly attributeTypeMap: {
    [key: string]: { baseName: string; type: string; format: string };
  } = {
    author: {
      baseName: "author",
      type: "NotebookAuthor",
      format: "",
    },
    cells: {
      baseName: "cells",
      type: "Array<NotebookCellResponse>",
      format: "",
    },
    created: {
      baseName: "created",
      type: "Date",
      format: "date-time",
    },
    metadata: {
      baseName: "metadata",
      type: "NotebookMetadata",
      format: "",
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
    status: {
      baseName: "status",
      type: "NotebookStatus",
      format: "",
    },
    time: {
      baseName: "time",
      type: "NotebookGlobalTime",
      format: "",
    },
  };

  static getAttributeTypeMap() {
    return NotebooksResponseDataAttributes.attributeTypeMap;
  }

  static deserialize(data: {
    [key: string]: any;
  }): NotebooksResponseDataAttributes {
    const res = new NotebooksResponseDataAttributes();

    res.author = ObjectSerializer.deserialize(
      data.author,
      "NotebookAuthor",
      ""
    );

    res.cells = ObjectSerializer.deserialize(
      data.cells,
      "Array<NotebookCellResponse>",
      ""
    );

    res.created = ObjectSerializer.deserialize(
      data.created,
      "Date",
      "date-time"
    );

    res.metadata = ObjectSerializer.deserialize(
      data.metadata,
      "NotebookMetadata",
      ""
    );

    res.modified = ObjectSerializer.deserialize(
      data.modified,
      "Date",
      "date-time"
    );

    if (data.name === undefined) {
      throw new TypeError(
        "missing required attribute 'name' on 'NotebooksResponseDataAttributes' object"
      );
    }
    res.name = ObjectSerializer.deserialize(data.name, "string", "");

    if (["published", undefined].includes(data.status)) {
      res.status = data.status;
    } else {
      const raw = new NotebooksResponseDataAttributes();
      raw.unparsedObject = data;
      return raw;
    }

    res.time = ObjectSerializer.deserialize(
      data.time,
      "NotebookGlobalTime",
      ""
    );

    return res;
  }

  static serialize(data: NotebooksResponseDataAttributes): {
    [key: string]: any;
  } {
    const attributeTypes =
      NotebooksResponseDataAttributes.getAttributeTypeMap();
    const res: { [index: string]: any } = {};
    for (const [key, value] of Object.entries(data)) {
      if (!(key in attributeTypes)) {
        throw new TypeError(`${key} attribute not in schema`);
      }
    }
    if (data?.unparsedObject !== undefined) {
      return data.unparsedObject;
    }
    res.author = ObjectSerializer.serialize(data.author, "NotebookAuthor", "");

    res.cells = ObjectSerializer.serialize(
      data.cells,
      "Array<NotebookCellResponse>",
      ""
    );

    res.created = ObjectSerializer.serialize(data.created, "Date", "date-time");

    res.metadata = ObjectSerializer.serialize(
      data.metadata,
      "NotebookMetadata",
      ""
    );

    res.modified = ObjectSerializer.serialize(
      data.modified,
      "Date",
      "date-time"
    );

    if (data.name === undefined) {
      throw new TypeError(
        "missing required attribute 'name' on 'NotebooksResponseDataAttributes' object"
      );
    }
    res.name = ObjectSerializer.serialize(data.name, "string", "");

    if (["published", undefined].includes(data.status)) {
      res.status = data.status;
    } else {
      throw TypeError(`invalid enum value ${data.status} for status`);
    }

    res.time = ObjectSerializer.serialize(data.time, "NotebookGlobalTime", "");

    return res;
  }

  public constructor() {}
}
