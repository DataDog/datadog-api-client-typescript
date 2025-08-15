/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * The definition of `BulkPutAppsDatastoreItemsRequestDataAttributes` object.
 */
export class BulkPutAppsDatastoreItemsRequestDataAttributes {
  /**
   * The `attributes` `conflict_mode`.
   */
  "conflictMode"?: string;
  /**
   * The `attributes` `values`.
   */
  "values": Array<{ [key: string]: any }>;

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
    conflictMode: {
      baseName: "conflict_mode",
      type: "string",
    },
    values: {
      baseName: "values",
      type: "Array<{ [key: string]: any; }>",
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
    return BulkPutAppsDatastoreItemsRequestDataAttributes.attributeTypeMap;
  }

  public constructor() {}
}
