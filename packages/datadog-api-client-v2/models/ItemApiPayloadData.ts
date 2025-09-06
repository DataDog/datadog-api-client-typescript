/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { DatastoreItemsDataType } from "./DatastoreItemsDataType";
import { ItemApiPayloadDataAttributes } from "./ItemApiPayloadDataAttributes";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Core data and metadata for a single datastore item.
 */
export class ItemApiPayloadData {
  /**
   * Metadata and content of a datastore item.
   */
  "attributes"?: ItemApiPayloadDataAttributes;
  /**
   * The unique identifier of the datastore.
   */
  "id"?: string;
  /**
   * The resource type for datastore items.
   */
  "type": DatastoreItemsDataType;

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
    attributes: {
      baseName: "attributes",
      type: "ItemApiPayloadDataAttributes",
    },
    id: {
      baseName: "id",
      type: "string",
    },
    type: {
      baseName: "type",
      type: "DatastoreItemsDataType",
      required: true,
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
    return ItemApiPayloadData.attributeTypeMap;
  }

  public constructor() {}
}
