import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ExperimentsPublicProtocolResponseData } from "./ExperimentsPublicProtocolResponseData";

/**
 * Response containing the protocol.
 */
export class ExperimentsPublicProtocolResponse {
  /**
   * JSON:API resource containing the protocol identity and fields.
   */
  "data": ExperimentsPublicProtocolResponseData;
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
      type: "ExperimentsPublicProtocolResponseData",
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
    return ExperimentsPublicProtocolResponse.attributeTypeMap;
  }

  public constructor() {}
}
