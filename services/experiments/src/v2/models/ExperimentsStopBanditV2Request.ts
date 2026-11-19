import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ExperimentsStopBanditV2RequestData } from "./ExperimentsStopBanditV2RequestData";

/**
 * Request to stop a bandit and serve one variant.
 */
export class ExperimentsStopBanditV2Request {
  /**
   * The variant to serve once the bandit stops.
   */
  "data": ExperimentsStopBanditV2RequestData;
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
      type: "ExperimentsStopBanditV2RequestData",
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
    return ExperimentsStopBanditV2Request.attributeTypeMap;
  }

  public constructor() {}
}
