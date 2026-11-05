import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { AiGatewayCaptureDeleteRequestData } from "./AiGatewayCaptureDeleteRequestData";

/**
 * Request body for deleting a scoped data capture override.
 */
export class AiGatewayCaptureDeleteRequest {
  /**
   * Override identifier, revisions, and confirmation required for deletion.
   */
  "data": AiGatewayCaptureDeleteRequestData;
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
      type: "AiGatewayCaptureDeleteRequestData",
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
    return AiGatewayCaptureDeleteRequest.attributeTypeMap;
  }

  public constructor() {}
}
