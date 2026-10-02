import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Model entries removed by the update. Empty arrays mean no entries were removed.
 */
export class ExperimentsUpdateMetricSQLModelV2ResponseMeta {
  /**
   * Measure column names removed from the model.
   */
  "deletedMeasures"?: Array<string>;
  /**
   * Property names removed from the model.
   */
  "deletedProperties"?: Array<string>;
  /**
   * Subject type IDs removed from the model.
   */
  "deletedSubjectTypes"?: Array<string>;
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
    deletedMeasures: {
      baseName: "deleted_measures",
      type: "Array<string>",
    },
    deletedProperties: {
      baseName: "deleted_properties",
      type: "Array<string>",
    },
    deletedSubjectTypes: {
      baseName: "deleted_subject_types",
      type: "Array<string>",
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
    return ExperimentsUpdateMetricSQLModelV2ResponseMeta.attributeTypeMap;
  }

  public constructor() {}
}
