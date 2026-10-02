import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ExperimentsCreateExperimentV2RequestData } from "./ExperimentsCreateExperimentV2RequestData";

/**
 * Request to create an experiment draft.
 */
export class ExperimentsCreateExperimentV2Request {
  /**
   * Experiment resource to create.
   */
  "data": ExperimentsCreateExperimentV2RequestData;
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
    data: {
      baseName: "data",
      type: "ExperimentsCreateExperimentV2RequestData",
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
    return ExperimentsCreateExperimentV2Request.attributeTypeMap;
  }

  public constructor() {}
}
