import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Property column available from the exposure SQL model.
 */
export class ExperimentsExposureSQLModelV2DTODataAttributesItems {
  /**
   * SQL result column that contains this property.
   */
  "columnName"?: string;
  /**
   * Data type of the property column.
   */
  "columnType"?: string;
  /**
   * Description of the exposure property.
   */
  "description"?: string;
  /**
   * Identifier of the exposure property.
   */
  "id"?: string;
  /**
   * Metadata associated with migration of this resource.
   */
  "migrationMetadata"?: any;
  /**
   * Display name of the exposure property.
   */
  "name"?: string;
  /**
   * Suffix used for this property column in the analysis pipeline.
   */
  "pipelineColumnSuffix"?: string;
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
      type: "string",
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
    pipelineColumnSuffix: {
      baseName: "pipeline_column_suffix",
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
    return ExperimentsExposureSQLModelV2DTODataAttributesItems.attributeTypeMap;
  }

  public constructor() {}
}
