import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ExperimentsAnalysisPlanWriteV2RequestData } from "./ExperimentsAnalysisPlanWriteV2RequestData";

/**
 * Request to update the analysis settings for an experiment.
 */
export class ExperimentsAnalysisPlanWriteV2Request {
  /**
   * Analysis plan resource to update.
   */
  "data": ExperimentsAnalysisPlanWriteV2RequestData;
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
      type: "ExperimentsAnalysisPlanWriteV2RequestData",
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
    return ExperimentsAnalysisPlanWriteV2Request.attributeTypeMap;
  }

  public constructor() {}
}
