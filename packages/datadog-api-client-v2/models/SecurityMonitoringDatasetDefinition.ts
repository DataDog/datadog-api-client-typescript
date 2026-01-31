/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { SecurityMonitoringDatasetDefinitionColumn } from "./SecurityMonitoringDatasetDefinitionColumn";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * The definition of a dataset, including its data source, name, indexes, and columns.
 */
export class SecurityMonitoringDatasetDefinition {
  /**
   * The columns in the dataset.
   */
  "columns": Array<SecurityMonitoringDatasetDefinitionColumn>;
  /**
   * The data source for the dataset.
   */
  "dataSource": string;
  /**
   * The indexes to use for the dataset.
   */
  "indexes"?: Array<string>;
  /**
   * The name of the dataset. Must start with a letter, contain only lowercase letters, numbers, and underscores, and be at most 255 characters long.
   */
  "name": string;

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
    columns: {
      baseName: "columns",
      type: "Array<SecurityMonitoringDatasetDefinitionColumn>",
      required: true,
    },
    dataSource: {
      baseName: "data_source",
      type: "string",
      required: true,
    },
    indexes: {
      baseName: "indexes",
      type: "Array<string>",
    },
    name: {
      baseName: "name",
      type: "string",
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
    return SecurityMonitoringDatasetDefinition.attributeTypeMap;
  }

  public constructor() {}
}
