import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ExperimentsPatchBanditV2RequestData } from "./ExperimentsPatchBanditV2RequestData";

/**
 * Request to update a bandit.
 */
export class ExperimentsPatchBanditV2Request {
  /**
   * Bandit resource with the attributes to change.
   */
  "data": ExperimentsPatchBanditV2RequestData;
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
      type: "ExperimentsPatchBanditV2RequestData",
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
    return ExperimentsPatchBanditV2Request.attributeTypeMap;
  }

  public constructor() {}
}
