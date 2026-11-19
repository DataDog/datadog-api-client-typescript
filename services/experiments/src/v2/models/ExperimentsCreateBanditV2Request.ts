import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ExperimentsCreateBanditV2RequestData } from "./ExperimentsCreateBanditV2RequestData";

/**
 * Request to create a draft bandit.
 */
export class ExperimentsCreateBanditV2Request {
  /**
   * Bandit resource to create.
   */
  "data": ExperimentsCreateBanditV2RequestData;
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
      type: "ExperimentsCreateBanditV2RequestData",
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
    return ExperimentsCreateBanditV2Request.attributeTypeMap;
  }

  public constructor() {}
}
