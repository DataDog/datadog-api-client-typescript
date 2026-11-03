/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ExperimentsMetricSQLModelV2DTODataAttributesMeasuresItems } from "./ExperimentsMetricSQLModelV2DTODataAttributesMeasuresItems";
import { ExperimentsMetricSQLModelV2DTODataAttributesSubjectTypesItems } from "./ExperimentsMetricSQLModelV2DTODataAttributesSubjectTypesItems";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Details of the metric SQL model.
 */
export class ExperimentsMetricSQLModelV2DTODataAttributes {
  /**
   * Time when this resource was certified.
   */
  "certifiedAt"?: Date;
  /**
   * Time when this resource was created.
   */
  "createdAt"?: Date;
  /**
   * SQL column used to partition the source data by date.
   */
  "datePartitionColumn"?: string;
  /**
   * Text that explains the metric SQL model.
   */
  "description"?: string;
  /**
   * Read-only measure ID. Pass it as warehouse_metric_measure.id when the metric operation is count.
   */
  "eventCountMeasureId"?: string;
  /**
   * Number of experiments that reference this resource.
   */
  "experimentCount"?: number;
  /**
   * Whether this resource has been certified.
   */
  "isCertified"?: boolean;
  /**
   * Measures available from the SQL model's result columns.
   */
  "measures"?: Array<ExperimentsMetricSQLModelV2DTODataAttributesMeasuresItems>;
  /**
   * Number of metrics that use this SQL model.
   */
  "metricCount"?: number;
  /**
   * Metadata retained for resources imported from another system.
   */
  "migrationMetadata"?: any;
  /**
   * Display name of the metric SQL model.
   */
  "name"?: string;
  /**
   * Property columns exposed by the SQL model.
   */
  "properties"?: Array<ExperimentsMetricSQLModelV2DTODataAttributesMeasuresItems>;
  /**
   * SQL query that produces the model's source data.
   */
  "sql"?: string;
  /**
   * Subject types mapped to columns in the SQL model.
   */
  "subjectTypes"?: Array<ExperimentsMetricSQLModelV2DTODataAttributesSubjectTypesItems>;
  /**
   * SQL column that supplies the event timestamp.
   */
  "timestampColumn"?: string;
  /**
   * Time when this resource was last updated.
   */
  "updatedAt"?: Date;

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
    certifiedAt: {
      baseName: "certified_at",
      type: "Date",
      format: "date-time",
    },
    createdAt: {
      baseName: "created_at",
      type: "Date",
      format: "date-time",
    },
    datePartitionColumn: {
      baseName: "date_partition_column",
      type: "string",
    },
    description: {
      baseName: "description",
      type: "string",
    },
    eventCountMeasureId: {
      baseName: "event_count_measure_id",
      type: "string",
    },
    experimentCount: {
      baseName: "experiment_count",
      type: "number",
      format: "int64",
    },
    isCertified: {
      baseName: "is_certified",
      type: "boolean",
    },
    measures: {
      baseName: "measures",
      type: "Array<ExperimentsMetricSQLModelV2DTODataAttributesMeasuresItems>",
    },
    metricCount: {
      baseName: "metric_count",
      type: "number",
      format: "int64",
    },
    migrationMetadata: {
      baseName: "migration_metadata",
      type: "any",
    },
    name: {
      baseName: "name",
      type: "string",
    },
    properties: {
      baseName: "properties",
      type: "Array<ExperimentsMetricSQLModelV2DTODataAttributesMeasuresItems>",
    },
    sql: {
      baseName: "sql",
      type: "string",
    },
    subjectTypes: {
      baseName: "subject_types",
      type: "Array<ExperimentsMetricSQLModelV2DTODataAttributesSubjectTypesItems>",
    },
    timestampColumn: {
      baseName: "timestamp_column",
      type: "string",
    },
    updatedAt: {
      baseName: "updated_at",
      type: "Date",
      format: "date-time",
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
    return ExperimentsMetricSQLModelV2DTODataAttributes.attributeTypeMap;
  }

  public constructor() {}
}
