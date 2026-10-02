import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Mapping between a subject type and its identifier column in the SQL model.
 */
export class ExperimentsCreateExposureSQLModelV2RequestDataAttributesSubjectTypesItems {
  /**
   * SQL result column that contains the subject identifier.
   */
  "columnName": string;
  /**
   * Identifier of the subject type mapped to this column.
   */
  "subjectTypeId": string;
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
    subjectTypeId: {
      baseName: "subject_type_id",
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
    return ExperimentsCreateExposureSQLModelV2RequestDataAttributesSubjectTypesItems.attributeTypeMap;
  }

  public constructor() {}
}
