import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * A mapping between a subject type and its identifying SQL column.
 */
export class ExperimentsMetricSQLModelV2DTODataAttributesSubjectTypesItems {
  /**
   * Name of the SQL result column that identifies subjects of this type.
   */
  "columnName"?: string;
  /**
   * ID of the subject type used by this configuration.
   */
  "subjectTypeId"?: string;
  /**
   * Read-only measure ID. Pass it as warehouse_metric_measure.id when the metric operation is `uniqueSubjects`.
   */
  "uniqueSubjectCountMeasureId"?: string;
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
    subjectTypeId: {
      baseName: "subject_type_id",
      type: "string",
    },
    uniqueSubjectCountMeasureId: {
      baseName: "unique_subject_count_measure_id",
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
    return ExperimentsMetricSQLModelV2DTODataAttributesSubjectTypesItems.attributeTypeMap;
  }

  public constructor() {}
}
