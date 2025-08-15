/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { BulkPutAppsDatastoreItemsRequestDataAttributes } from "./BulkPutAppsDatastoreItemsRequestDataAttributes";
import { BulkPutAppsDatastoreItemsRequestDataType } from "./BulkPutAppsDatastoreItemsRequestDataType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * The definition of `BulkPutAppsDatastoreItemsRequestData` object.
 */
export class BulkPutAppsDatastoreItemsRequestData {
  /**
   * The definition of `BulkPutAppsDatastoreItemsRequestDataAttributes` object.
   */
  "attributes"?: BulkPutAppsDatastoreItemsRequestDataAttributes;
  /**
   * The `BulkPutAppsDatastoreItemsRequestData` `id`.
   */
  "id"?: string;
  /**
   * Items resource type.
   */
  "type": BulkPutAppsDatastoreItemsRequestDataType;

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
      type: "BulkPutAppsDatastoreItemsRequestDataAttributes",
    },
    id: {
      baseName: "id",
      type: "string",
    },
    type: {
      baseName: "type",
      type: "BulkPutAppsDatastoreItemsRequestDataType",
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
    return BulkPutAppsDatastoreItemsRequestData.attributeTypeMap;
  }

  public constructor() {}
}
