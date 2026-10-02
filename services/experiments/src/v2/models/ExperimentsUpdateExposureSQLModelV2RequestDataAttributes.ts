import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ExperimentsCreateExposureSQLModelV2RequestDataAttributesSubjectTypesItems } from "./ExperimentsCreateExposureSQLModelV2RequestDataAttributesSubjectTypesItems";
import { ExperimentsSQLModelPropertyInput } from "./ExperimentsSQLModelPropertyInput";

/**
 * Complete column mappings and query used to replace the exposure SQL model.
 */
export class ExperimentsUpdateExposureSQLModelV2RequestDataAttributes {
  /**
   * SQL column used to partition the source data by date.
   */
  "datePartitionColumn"?: string;
  /**
   * SQL column that identifies the experiment for each exposure.
   */
  "experimentColumn": string;
  /**
   * Metadata retained for resources imported from another system.
   */
  "migrationMetadata"?: any;
  /**
   * Display name of the exposure SQL model.
   */
  "name": string;
  /**
   * Property columns exposed by the SQL model.
   */
  "properties"?: Array<ExperimentsSQLModelPropertyInput>;
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
   * SQL column that identifies the variant for each exposure.
   */
  "variantColumn": string;
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
    experimentColumn: {
      baseName: "experiment_column",
      type: "string",
      required: true,
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
      type: "Array<ExperimentsSQLModelPropertyInput>",
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
    variantColumn: {
      baseName: "variant_column",
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
    return ExperimentsUpdateExposureSQLModelV2RequestDataAttributes.attributeTypeMap;
  }

  public constructor() {}
}
