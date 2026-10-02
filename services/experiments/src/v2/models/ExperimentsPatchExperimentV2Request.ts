import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ExperimentsPatchExperimentV2RequestData } from "./ExperimentsPatchExperimentV2RequestData";

/**
 * Request to update the experiment.
 */
export class ExperimentsPatchExperimentV2Request {
  /**
   * JSON:API resource containing the experiment identity and fields.
   */
  "data": ExperimentsPatchExperimentV2RequestData;
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
      type: "ExperimentsPatchExperimentV2RequestData",
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
    return ExperimentsPatchExperimentV2Request.attributeTypeMap;
  }

  public constructor() {}
}
