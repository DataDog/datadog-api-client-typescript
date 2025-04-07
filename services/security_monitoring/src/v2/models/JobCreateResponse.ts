import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { JobCreateResponseData } from "./JobCreateResponseData";

/**
 * Run a historical job response.
 */
export class JobCreateResponse {
  /**
   * The definition of `JobCreateResponseData` object.
   */
  "data"?: JobCreateResponseData;
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
      type: "JobCreateResponseData",
    },
    additionalProperties: {
      baseName: "additionalProperties",
      type: "any",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return JobCreateResponse.attributeTypeMap;
  }

  public constructor() {}
}
