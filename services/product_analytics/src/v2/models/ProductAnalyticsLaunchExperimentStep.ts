import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Experiment linked to the launch. The draft fields are cleared when `experiment_id` is set.
 */
export class ProductAnalyticsLaunchExperimentStep {
  /**
   * UUID of the linked experiment.
   */
  "experimentId"?: string;
  /**
   * Hypothesis of a draft experiment.
   */
  "hypothesis"?: string;
  /**
   * Name of a draft experiment.
   */
  "name"?: string;
  /**
   * Protocol ID of a draft experiment.
   */
  "protocolId"?: string;
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
    experimentId: {
      baseName: "experiment_id",
      type: "string",
    },
    hypothesis: {
      baseName: "hypothesis",
      type: "string",
    },
    name: {
      baseName: "name",
      type: "string",
    },
    protocolId: {
      baseName: "protocol_id",
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
    return ProductAnalyticsLaunchExperimentStep.attributeTypeMap;
  }

  public constructor() {}
}
