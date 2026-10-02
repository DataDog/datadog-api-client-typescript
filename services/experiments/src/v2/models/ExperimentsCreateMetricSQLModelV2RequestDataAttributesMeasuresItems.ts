import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ExperimentsCreateExposureSQLModelV2RequestDataAttributesItemsColumnType } from "./ExperimentsCreateExposureSQLModelV2RequestDataAttributesItemsColumnType";

/**
 * Column in the SQL model that supplies values for a metric measure.
 */
export class ExperimentsCreateMetricSQLModelV2RequestDataAttributesMeasuresItems {
  /**
   * SQL result column that contains the measure values.
   */
  "columnName": string;
  /**
   * Data type of a column in the SQL model.
   */
  "columnType": ExperimentsCreateExposureSQLModelV2RequestDataAttributesItemsColumnType;
  /**
   * Description of the measure.
   */
  "description"?: string;
  /**
   * Metadata associated with migration of this resource.
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
      required: true,
    },
    columnType: {
      baseName: "column_type",
      type: "ExperimentsCreateExposureSQLModelV2RequestDataAttributesItemsColumnType",
      required: true,
    },
    description: {
      baseName: "description",
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
    return ExperimentsCreateMetricSQLModelV2RequestDataAttributesMeasuresItems.attributeTypeMap;
  }

  public constructor() {}
}
