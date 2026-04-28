import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { MuteFindingsResponseData } from "./MuteFindingsResponseData";

/**
 * Response for the mute or unmute request.
 */
export class MuteFindingsResponse {
  /**
   * Data of the mute response.
   */
  "data"?: MuteFindingsResponseData;
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
      type: "MuteFindingsResponseData",
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
    return MuteFindingsResponse.attributeTypeMap;
  }

  public constructor() {}
}
