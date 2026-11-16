import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Server-generated reference to an experiment action requiring approval.
 */
export class FeatureFlagSuggestionExperimentAction {
  /**
   * The proposed experiment action.
   */
  "action": string;
  /**
   * The ID of the experiment.
   */
  "experimentId": string;
  /**
   * The version of the experiment action reference.
   */
  "version": number;
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
    action: {
      baseName: "action",
      type: "string",
      required: true,
    },
    experimentId: {
      baseName: "experiment_id",
      type: "string",
      required: true,
      format: "uuid",
    },
    version: {
      baseName: "version",
      type: "number",
      required: true,
      format: "int64",
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
    return FeatureFlagSuggestionExperimentAction.attributeTypeMap;
  }

  public constructor() {}
}
