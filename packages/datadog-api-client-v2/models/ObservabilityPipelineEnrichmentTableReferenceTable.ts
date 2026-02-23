/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Uses a Datadog reference table to enrich logs.
 */
export class ObservabilityPipelineEnrichmentTableReferenceTable {
  /**
   * Name of the environment variable or secret that holds the Datadog application key used to access the reference table.
   */
  "appKeyKey"?: string;
  /**
   * List of column names to include from the reference table. If not provided, all columns are included.
   */
  "columns"?: Array<string>;
  /**
   * Path to the field in the log event to match against the reference table.
   */
  "keyField": string;
  /**
   * The unique identifier of the reference table.
   */
  "tableId": string;

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
    appKeyKey: {
      baseName: "app_key_key",
      type: "string",
    },
    columns: {
      baseName: "columns",
      type: "Array<string>",
    },
    keyField: {
      baseName: "key_field",
      type: "string",
      required: true,
    },
    tableId: {
      baseName: "table_id",
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
    return ObservabilityPipelineEnrichmentTableReferenceTable.attributeTypeMap;
  }

  public constructor() {}
}
