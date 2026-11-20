import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ActionsDatastoreDatasetDataSource } from "./ActionsDatastoreDatasetDataSource";
import { DatasetColumn } from "./DatasetColumn";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */
export class ActionsDatastoreDataset {
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "columns": Array<DatasetColumn>;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "dataSource": ActionsDatastoreDatasetDataSource;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "id": string;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "name": string;
  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    columns: {
      baseName: "columns",
      type: "Array<DatasetColumn>",
      required: true,
    },
    dataSource: {
      baseName: "data_source",
      type: "ActionsDatastoreDatasetDataSource",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    name: {
      baseName: "name",
      type: "string",
      required: true,
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return ActionsDatastoreDataset.attributeTypeMap;
  }

  public constructor() {}
}
