import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { AiGatewayCaptureCreateRequestData } from "./AiGatewayCaptureCreateRequestData";

/**
 * Request body for creating a scoped data capture override.
 */
export class AiGatewayCaptureCreateRequest {
  /**
   * New data capture override with a client-generated UUID and its settings.
   */
  "data": AiGatewayCaptureCreateRequestData;
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
      type: "AiGatewayCaptureCreateRequestData",
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
    return AiGatewayCaptureCreateRequest.attributeTypeMap;
  }

  public constructor() {}
}
