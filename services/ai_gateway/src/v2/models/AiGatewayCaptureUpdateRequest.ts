import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { AiGatewayCaptureUpdateRequestData } from "./AiGatewayCaptureUpdateRequestData";

/**
 * Request body for replacing a scoped data capture override.
 */
export class AiGatewayCaptureUpdateRequest {
  /**
   * Existing override identifier, replacement settings, and revisions required for the update.
   */
  "data": AiGatewayCaptureUpdateRequestData;
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
      type: "AiGatewayCaptureUpdateRequestData",
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
    return AiGatewayCaptureUpdateRequest.attributeTypeMap;
  }

  public constructor() {}
}
