import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Reason to record when canceling the experiment.
 */
export class ExperimentsCancelExperimentV2RequestDataAttributes {
  /**
   * Reason the experiment was canceled. Stored as the decision reason on the experiment conclusion. Must not
   * be blank.
   */
  "reason": string;
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
    reason: {
      baseName: "reason",
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
    return ExperimentsCancelExperimentV2RequestDataAttributes.attributeTypeMap;
  }

  public constructor() {}
}
