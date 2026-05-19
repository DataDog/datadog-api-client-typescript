/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { LLMObsExperimentationSortFieldDirection } from "./LLMObsExperimentationSortFieldDirection";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * A field and direction to sort results by.
 */
export class LLMObsExperimentationSortField {
  /**
   * Sort direction.
   */
  "direction"?: LLMObsExperimentationSortFieldDirection;
  /**
   * The field name to sort on.
   */
  "field": string;

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
    direction: {
      baseName: "direction",
      type: "LLMObsExperimentationSortFieldDirection",
    },
    field: {
      baseName: "field",
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
    return LLMObsExperimentationSortField.attributeTypeMap;
  }

  public constructor() {}
}
