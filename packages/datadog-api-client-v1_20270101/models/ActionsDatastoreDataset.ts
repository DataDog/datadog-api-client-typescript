/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ActionsDatastoreDatasetDataSource } from "./ActionsDatastoreDatasetDataSource";
import { DatasetColumn } from "./DatasetColumn";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

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
