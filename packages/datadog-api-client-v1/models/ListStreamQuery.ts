/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ListStreamSource } from "./ListStreamSource";

import {
  AttributeTypeMap,
  UnparsedObject,
} from "../../datadog-api-client-common/util";

/**
 * Updated list stream widget.
 */
export class ListStreamQuery {
  /**
   * Source from which to query items to display in the stream.
   */
  "dataSource": ListStreamSource | UnparsedObject;
  /**
   * List of indexes.
   */
  "indexes"?: Array<string>;
  /**
   * Widget query.
   */
  "queryString": string;
  /**
   * Option for storage location. Feature in Private Beta.
   */
  "storage"?: string;

  /**
   * @ignore
   */
  "unparsedObject"?: UnparsedObject;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    dataSource: {
      baseName: "data_source",
      type: "ListStreamSource",
      required: true,
    },
    indexes: {
      baseName: "indexes",
      type: "Array<string>",
    },
    queryString: {
      baseName: "query_string",
      type: "string",
      required: true,
    },
    storage: {
      baseName: "storage",
      type: "string",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return ListStreamQuery.attributeTypeMap;
  }

  public constructor() {}
}
