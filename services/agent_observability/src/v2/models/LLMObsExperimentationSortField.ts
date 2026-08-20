import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { LLMObsExperimentationSortFieldDirection } from "./LLMObsExperimentationSortFieldDirection";

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
