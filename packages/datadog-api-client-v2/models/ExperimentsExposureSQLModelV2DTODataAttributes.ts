/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ExperimentsCreateExposureSQLModelV2RequestDataAttributesSubjectTypesItems } from "./ExperimentsCreateExposureSQLModelV2RequestDataAttributesSubjectTypesItems";
import { ExperimentsExposureSQLModelV2DTODataAttributesItems } from "./ExperimentsExposureSQLModelV2DTODataAttributesItems";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Query and column mappings used to read experiment assignment data.
 */
export class ExperimentsExposureSQLModelV2DTODataAttributes {
  /**
   * Time when the exposure SQL model was archived.
   */
  "archivedAt"?: Date;
  /**
   * Time when the exposure SQL model was created.
   */
  "createdAt"?: Date;
  /**
   * Column used to identify date partitions in the exposure data.
   */
  "datePartitionColumn"?: string;
  /**
   * SQL result column that contains the experiment key.
   */
  "experimentColumn"?: string;
  /**
   * Number of experiments associated with the exposure SQL model.
   */
  "experimentCount"?: number;
  /**
   * Metadata associated with migration of this resource.
   */
  "migrationMetadata"?: any;
  /**
   * Display name of the exposure SQL model.
   */
  "name"?: string;
  /**
   * Property columns available for filtering or splitting exposure data.
   */
  "properties"?: Array<ExperimentsExposureSQLModelV2DTODataAttributesItems>;
  /**
   * SQL query that supplies the experiment assignment data.
   */
  "sql"?: string;
  /**
   * Mappings between subject types and their identifier columns.
   */
  "subjectTypes"?: Array<ExperimentsCreateExposureSQLModelV2RequestDataAttributesSubjectTypesItems>;
  /**
   * SQL result column that contains the assignment timestamp.
   */
  "timestampColumn"?: string;
  /**
   * Time when the exposure SQL model was last updated.
   */
  "updatedAt"?: Date;
  /**
   * SQL result column that contains the assigned variant.
   */
  "variantColumn"?: string;

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
    archivedAt: {
      baseName: "archived_at",
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
    experimentColumn: {
      baseName: "experiment_column",
      type: "string",
    },
    experimentCount: {
      baseName: "experiment_count",
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
      type: "Array<ExperimentsExposureSQLModelV2DTODataAttributesItems>",
    },
    sql: {
      baseName: "sql",
      type: "string",
    },
    subjectTypes: {
      baseName: "subject_types",
      type: "Array<ExperimentsCreateExposureSQLModelV2RequestDataAttributesSubjectTypesItems>",
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
    variantColumn: {
      baseName: "variant_column",
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
    return ExperimentsExposureSQLModelV2DTODataAttributes.attributeTypeMap;
  }

  public constructor() {}
}
