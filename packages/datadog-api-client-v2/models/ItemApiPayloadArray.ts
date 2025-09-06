/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ItemApiPayloadData } from "./ItemApiPayloadData";
import { ItemApiPayloadMeta } from "./ItemApiPayloadMeta";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * A collection of datastore items with pagination and schema metadata.
 */
export class ItemApiPayloadArray {
  /**
   * An array of datastore items with their content and metadata.
   */
  "data": Array<ItemApiPayloadData>;
  /**
   * Additional metadata about a collection of datastore items, including pagination and schema information.
   */
  "meta"?: ItemApiPayloadMeta;

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
      type: "Array<ItemApiPayloadData>",
      required: true,
    },
    meta: {
      baseName: "meta",
      type: "ItemApiPayloadMeta",
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
    return ItemApiPayloadArray.attributeTypeMap;
  }

  public constructor() {}
}
