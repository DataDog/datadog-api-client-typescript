import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { MuteFindingsRequestData } from "./MuteFindingsRequestData";

/**
 * Request to mute or unmute security findings.
 */
export class MuteFindingsRequest {
  /**
   * Data of the mute request.
   */
  "data": MuteFindingsRequestData;
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
      type: "MuteFindingsRequestData",
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
    return MuteFindingsRequest.attributeTypeMap;
  }

  public constructor() {}
}
