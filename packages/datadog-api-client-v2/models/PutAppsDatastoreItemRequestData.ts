/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { DatastoreItemsDataType } from "./DatastoreItemsDataType";
import { PutAppsDatastoreItemRequestDataAttributes } from "./PutAppsDatastoreItemRequestDataAttributes";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * The definition of `PutAppsDatastoreItemRequestData` object.
 */
export class PutAppsDatastoreItemRequestData {
  /**
   * The definition of `PutAppsDatastoreItemRequestDataAttributes` object.
   */
  "attributes"?: PutAppsDatastoreItemRequestDataAttributes;
  /**
   * The `PutAppsDatastoreItemRequestData` `id`.
   */
  "id"?: string;
  /**
   * Items resource type.
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
      type: "PutAppsDatastoreItemRequestDataAttributes",
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
    return PutAppsDatastoreItemRequestData.attributeTypeMap;
  }

  public constructor() {}
}
