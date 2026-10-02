import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ExperimentsStartExperimentV2RequestData } from "./ExperimentsStartExperimentV2RequestData";

/**
 * Request to start the experiment.
 */
export class ExperimentsStartExperimentV2Request {
  /**
   * JSON:API resource containing the experiment identity.
   */
  "data": ExperimentsStartExperimentV2RequestData;
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
      type: "ExperimentsStartExperimentV2RequestData",
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
    return ExperimentsStartExperimentV2Request.attributeTypeMap;
  }

  public constructor() {}
}
