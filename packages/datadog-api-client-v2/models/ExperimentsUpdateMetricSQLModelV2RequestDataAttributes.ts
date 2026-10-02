/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ExperimentsCreateExposureSQLModelV2RequestDataAttributesSubjectTypesItems } from "./ExperimentsCreateExposureSQLModelV2RequestDataAttributesSubjectTypesItems";
import { ExperimentsCreateMetricSQLModelV2RequestDataAttributesMeasuresItems } from "./ExperimentsCreateMetricSQLModelV2RequestDataAttributesMeasuresItems";
import { ExperimentsMetricSQLModelPropertyInput } from "./ExperimentsMetricSQLModelPropertyInput";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Complete column mappings and query used to replace the metric SQL model.
 */
export class ExperimentsUpdateMetricSQLModelV2RequestDataAttributes {
  /**
   * SQL column used to partition the source data by date.
   */
  "datePartitionColumn"?: string;
  /**
   * Text that explains the metric SQL model.
   */
  "description"?: string;
  /**
   * Measures available from the SQL model's result columns.
   */
  "measures"?: Array<ExperimentsCreateMetricSQLModelV2RequestDataAttributesMeasuresItems>;
  /**
   * Metadata retained for resources imported from another system.
   */
  "migrationMetadata"?: any;
  /**
   * Display name of the metric SQL model.
   */
  "name": string;
  /**
   * Property columns exposed by the SQL model.
   */
  "properties"?: Array<ExperimentsMetricSQLModelPropertyInput>;
  /**
   * SQL query that produces the model's source data.
   */
  "sql": string;
  /**
   * Subject types mapped to columns in the SQL model.
   */
  "subjectTypes": Array<ExperimentsCreateExposureSQLModelV2RequestDataAttributesSubjectTypesItems>;
  /**
   * SQL column that supplies the event timestamp.
   */
  "timestampColumn": string;

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
    datePartitionColumn: {
      baseName: "date_partition_column",
      type: "string",
    },
    description: {
      baseName: "description",
      type: "string",
    },
    measures: {
      baseName: "measures",
      type: "Array<ExperimentsCreateMetricSQLModelV2RequestDataAttributesMeasuresItems>",
    },
    migrationMetadata: {
      baseName: "migration_metadata",
      type: "any",
    },
    name: {
      baseName: "name",
      type: "string",
      required: true,
    },
    properties: {
      baseName: "properties",
      type: "Array<ExperimentsMetricSQLModelPropertyInput>",
    },
    sql: {
      baseName: "sql",
      type: "string",
      required: true,
    },
    subjectTypes: {
      baseName: "subject_types",
      type: "Array<ExperimentsCreateExposureSQLModelV2RequestDataAttributesSubjectTypesItems>",
      required: true,
    },
    timestampColumn: {
      baseName: "timestamp_column",
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
    return ExperimentsUpdateMetricSQLModelV2RequestDataAttributes.attributeTypeMap;
  }

  public constructor() {}
}
