import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { DatastoreItemConflictMode } from "./DatastoreItemConflictMode";

/**
 * The definition of `BulkPutAppsDatastoreItemsRequestDataAttributes` object.
 */
export class BulkPutAppsDatastoreItemsRequestDataAttributes {
  /**
   * The definition of `DatastoreItemConflictMode` object.
   */
  "conflictMode"?: DatastoreItemConflictMode;
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
