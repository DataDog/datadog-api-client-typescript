/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ExperimentsCreateExposureSQLModelV2RequestDataAttributesItemsColumnType } from "./ExperimentsCreateExposureSQLModelV2RequestDataAttributesItemsColumnType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * A measure available from a metric SQL model column.
 */
export class ExperimentsMetricSQLModelV2DTODataAttributesMeasuresItems {
  /**
   * Name of the SQL result column that supplies this measure.
   */
  "columnName"?: string;
  /**
   * Data type of a column in the SQL model.
   */
  "columnType"?: ExperimentsCreateExposureSQLModelV2RequestDataAttributesItemsColumnType;
  /**
   * Text that explains the measure.
   */
  "description"?: string;
  /**
   * ID of the measure.
   */
  "id"?: string;
  /**
   * Metadata retained for resources imported from another system.
   */
  "migrationMetadata"?: any;
  /**
   * Display name of the measure.
   */
  "name"?: string;

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
    columnName: {
      baseName: "column_name",
      type: "string",
    },
    columnType: {
      baseName: "column_type",
      type: "ExperimentsCreateExposureSQLModelV2RequestDataAttributesItemsColumnType",
    },
    description: {
      baseName: "description",
      type: "string",
    },
    id: {
      baseName: "id",
      type: "string",
    },
    migrationMetadata: {
      baseName: "migration_metadata",
      type: "any",
    },
    name: {
      baseName: "name",
      type: "string",
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
    return ExperimentsMetricSQLModelV2DTODataAttributesMeasuresItems.attributeTypeMap;
  }

  public constructor() {}
}
