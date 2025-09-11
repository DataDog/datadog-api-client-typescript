import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { DatastoreItemConflictMode } from "./DatastoreItemConflictMode";

/**
 * Configuration for bulk inserting multiple items into a datastore.
 */
export class BulkPutAppsDatastoreItemsRequestDataAttributes {
  /**
   * How to handle conflicts when inserting items that already exist in the datastore.
   */
  "conflictMode"?: DatastoreItemConflictMode;
  /**
   * An array of items to add to the datastore, where each item is a set of key-value pairs representing the item's data. Up to 100 items can be updated in a single request.
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
      type: "DatastoreItemConflictMode",
    },
    values: {
      baseName: "values",
      type: "Array<{ [key: string]: any; }>",
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
    return BulkPutAppsDatastoreItemsRequestDataAttributes.attributeTypeMap;
  }

  public constructor() {}
}
