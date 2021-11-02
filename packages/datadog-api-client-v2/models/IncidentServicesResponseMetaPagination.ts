/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

export class IncidentServicesResponseMetaPagination {
  /**
   * The index of the first element in the next page of results. Equal to page size added to the current offset.
   */
  "nextOffset"?: number;
  /**
   * The index of the first element in the results.
   */
  "offset"?: number;
  /**
   * Maximum size of pages to return.
   */
  "size"?: number;

  "unparsedObject"?: any;

  static readonly discriminator: string | undefined = undefined;

  static readonly attributeTypeMap: {
    [key: string]: {
      baseName: string;
      type: string;
      required?: boolean;
      format?: string;
    };
  } = {
    nextOffset: {
      baseName: "next_offset",
      type: "number",

      format: "int64",
    },
    offset: {
      baseName: "offset",
      type: "number",

      format: "int64",
    },
    size: {
      baseName: "size",
      type: "number",

      format: "int64",
    },
  };

  static getAttributeTypeMap() {
    return IncidentServicesResponseMetaPagination.attributeTypeMap;
  }

  public constructor() {}
}
