/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { ListStreamColumn } from "./ListStreamColumn";
import { ListStreamQuery } from "./ListStreamQuery";
import { ListStreamResponseFormat } from "./ListStreamResponseFormat";

export class ListStreamWidgetRequest {
  /**
   * Widget columns.
   */
  "columns": Array<ListStreamColumn>;
  "query": ListStreamQuery;
  "responseFormat": ListStreamResponseFormat;

  "unparsedObject"?: any;

  static readonly attributeTypeMap: {
    [key: string]: {
      baseName: string;
      type: string;
      required?: boolean;
      format?: string;
    };
  } = {
    columns: {
      baseName: "columns",
      type: "Array<ListStreamColumn>",
      required: true,
    },
    query: {
      baseName: "query",
      type: "ListStreamQuery",
      required: true,
    },
    responseFormat: {
      baseName: "response_format",
      type: "ListStreamResponseFormat",
      required: true,
    },
  };

  static getAttributeTypeMap() {
    return ListStreamWidgetRequest.attributeTypeMap;
  }

  public constructor() {}
}
