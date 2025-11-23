/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { GetCohortResponseDataAttributesCohortsItemsValuesItems } from "./GetCohortResponseDataAttributesCohortsItemsValuesItems";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

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
