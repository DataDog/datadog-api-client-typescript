/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ListStreamColumnWidth } from "./ListStreamColumnWidth";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Widget column.
 */
export class ListStreamColumn {
  /**
   * Widget column field.
   */
  "field": string;
  /**
   * Identifies the clustering pattern field column, usable only with logs_pattern_stream.
   */
  "isClusteringPatternFieldPath"?: boolean;
  /**
   * Widget column width.
   */
  "width": ListStreamColumnWidth;

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
    field: {
      baseName: "field",
      type: "string",
      required: true,
    },
    isClusteringPatternFieldPath: {
      baseName: "is_clustering_pattern_field_path",
      type: "boolean",
    },
    width: {
      baseName: "width",
      type: "ListStreamColumnWidth",
      required: true,
    },
    additionalProperties: {
      baseName: "additionalProperties",
      type: "any",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return ListStreamColumn.attributeTypeMap;
  }

  public constructor() {}
}
