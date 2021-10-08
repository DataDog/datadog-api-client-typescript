/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { NotebooksResponsePage } from "./NotebooksResponsePage";
import { ObjectSerializer } from "./ObjectSerializer";

/**
 * Searches metadata returned by the API.
 */

export class NotebooksResponseMeta {
  "page"?: NotebooksResponsePage;

  "unparsedObject"?: any;

  static readonly discriminator: string | undefined = undefined;

  static readonly attributeTypeMap: {
    [key: string]: { baseName: string; type: string; format: string };
  } = {
    page: {
      baseName: "page",
      type: "NotebooksResponsePage",
      format: "",
    },
  };

  static getAttributeTypeMap() {
    return NotebooksResponseMeta.attributeTypeMap;
  }

  static deserialize(data: { [key: string]: any }): NotebooksResponseMeta {
    const res = new NotebooksResponseMeta();

    res.page = ObjectSerializer.deserialize(
      data.page,
      "NotebooksResponsePage",
      ""
    );

    return res;
  }

  static serialize(data: NotebooksResponseMeta): { [key: string]: any } {
    const attributeTypes = NotebooksResponseMeta.getAttributeTypeMap();
    const res: { [index: string]: any } = {};
    for (const [key, value] of Object.entries(data)) {
      if (!(key in attributeTypes)) {
        throw new TypeError(`${key} attribute not in schema`);
      }
    }
    if (data?.unparsedObject !== undefined) {
      return data.unparsedObject;
    }
    res.page = ObjectSerializer.serialize(
      data.page,
      "NotebooksResponsePage",
      ""
    );

    return res;
  }

  public constructor() {}
}
