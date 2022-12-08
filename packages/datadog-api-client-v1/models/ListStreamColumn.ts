/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ListStreamColumnWidth } from "./ListStreamColumnWidth";

import {
  AttributeTypeMap,
  UnparsedObject,
} from "../../datadog-api-client-common/util";

/**
 * Widget column.
 */
export class ListStreamColumn {
  /**
   * Widget column field.
   */
  "field": string;
  /**
   * Widget column width.
   */
  "width": ListStreamColumnWidth | UnparsedObject;

  /**
   * @ignore
   */
  "unparsedObject"?: UnparsedObject;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    field: {
      baseName: "field",
      type: "string",
      required: true,
    },
    width: {
      baseName: "width",
      type: "ListStreamColumnWidth",
      required: true,
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
