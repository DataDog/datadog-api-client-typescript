/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { AttributeTypeMap, Int64 } from "../../datadog-api-client-common/util";

/**
 * Members of the previewed segment.
 */
export class SegmentPreviewResponseAttributes {
  /**
   * Rows of the preview, each as a map of column names to values.
   */
  "hits": Array<{ [key: string]: any }>;
  /**
   * Total number of entities in the segment.
   */
  "totalRows": Int64;

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
    hits: {
      baseName: "hits",
      type: "Array<{ [key: string]: any; }>",
      required: true,
    },
    totalRows: {
      baseName: "total_rows",
      type: "number",
      required: true,
      format: "int64",
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
    return SegmentPreviewResponseAttributes.attributeTypeMap;
  }

  public constructor() {}
}
