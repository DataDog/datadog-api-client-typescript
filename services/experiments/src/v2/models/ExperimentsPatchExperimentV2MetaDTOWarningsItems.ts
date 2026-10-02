import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * A warning returned after an experiment update.
 */
export class ExperimentsPatchExperimentV2MetaDTOWarningsItems {
  /**
   * Code that identifies the warning.
   */
  "code": string;
  /**
   * Explanation of the warning and its effect on the update.
   */
  "detail": string;
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
    code: {
      baseName: "code",
      type: "string",
      required: true,
    },
    detail: {
      baseName: "detail",
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
    return ExperimentsPatchExperimentV2MetaDTOWarningsItems.attributeTypeMap;
  }

  public constructor() {}
}
