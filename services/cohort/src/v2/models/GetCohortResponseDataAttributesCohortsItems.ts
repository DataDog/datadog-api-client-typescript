import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { GetCohortResponseDataAttributesCohortsItemsValuesItems } from "./GetCohortResponseDataAttributesCohortsItemsValuesItems";

export class GetCohortResponseDataAttributesCohortsItems {
  "cohort"?: string;
  "cohortSize"?: number;
  "startTime"?: number;
  "values"?: Array<GetCohortResponseDataAttributesCohortsItemsValuesItems>;
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
    cohort: {
      baseName: "cohort",
      type: "string",
    },
    cohortSize: {
      baseName: "cohort_size",
      type: "number",
      format: "int64",
    },
    startTime: {
      baseName: "start_time",
      type: "number",
      format: "int64",
    },
    values: {
      baseName: "values",
      type: "Array<GetCohortResponseDataAttributesCohortsItemsValuesItems>",
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
    return GetCohortResponseDataAttributesCohortsItems.attributeTypeMap;
  }

  public constructor() {}
}
