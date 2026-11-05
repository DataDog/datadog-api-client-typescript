import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { AiGatewayCaptureOverrideResponseData } from "./AiGatewayCaptureOverrideResponseData";

/**
 * Response containing a data capture override after creation or replacement.
 */
export class AiGatewayCaptureOverrideResponse {
  /**
   * Saved data capture override with its identifier, mode, scope, and revision.
   */
  "data": AiGatewayCaptureOverrideResponseData;
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
      type: "AiGatewayCaptureOverrideResponseData",
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
    return AiGatewayCaptureOverrideResponse.attributeTypeMap;
  }

  public constructor() {}
}
