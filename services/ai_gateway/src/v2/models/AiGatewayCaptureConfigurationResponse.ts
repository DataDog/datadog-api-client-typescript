import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { AiGatewayCaptureConfigurationResponseData } from "./AiGatewayCaptureConfigurationResponseData";

/**
 * Response containing the organization data capture configuration.
 */
export class AiGatewayCaptureConfigurationResponse {
  /**
   * Organization data capture configuration, including its default mode and scoped overrides.
   */
  "data": AiGatewayCaptureConfigurationResponseData;
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
      type: "AiGatewayCaptureConfigurationResponseData",
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
    return AiGatewayCaptureConfigurationResponse.attributeTypeMap;
  }

  public constructor() {}
}
