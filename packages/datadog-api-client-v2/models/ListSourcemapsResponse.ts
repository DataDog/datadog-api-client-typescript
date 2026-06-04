/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { SourcemapItem } from "./SourcemapItem";
import { SourcemapsListMeta } from "./SourcemapsListMeta";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Response containing a paginated list of source maps.
 */
export class ListSourcemapsResponse {
  /**
   * List of source map data objects.
   */
  "data": Array<SourcemapItem>;
  /**
   * Pagination metadata for the source maps list response.
   */
  "meta"?: SourcemapsListMeta;

  /**
   * A container for additional, undeclared properties.
   * This is a holder for any undeclared properties as specified with
   * the 'additionalProperties' keyword in the OAS document.
   */
  "additionalProperties"?: { [key: string]: any };

  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    data: {
      baseName: "data",
      type: "Array<SourcemapItem>",
      required: true,
    },
    meta: {
      baseName: "meta",
      type: "SourcemapsListMeta",
    },
    additionalProperties: {
      baseName: "additionalProperties",
      type: "{ [key: string]: any; }",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return ListSourcemapsResponse.attributeTypeMap;
  }

  public constructor() {}
}
