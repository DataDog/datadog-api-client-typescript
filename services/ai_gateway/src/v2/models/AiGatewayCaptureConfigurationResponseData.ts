import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { AiGatewayCaptureConfigurationResponseDataAttributes } from "./AiGatewayCaptureConfigurationResponseDataAttributes";
import { AiGatewayCaptureConfigurationResponseDataType } from "./AiGatewayCaptureConfigurationResponseDataType";

/**
 * Organization data capture configuration, including its default mode and scoped overrides.
 */
export class AiGatewayCaptureConfigurationResponseData {
  /**
   * Organization default mode, scoped overrides, and current configuration revision.
   */
  "attributes": AiGatewayCaptureConfigurationResponseDataAttributes;
  /**
   * Identifier of the organization configuration resource, always `organization`.
   */
  "id": string;
  /**
   * Data capture configurations resource type.
   */
  "type": AiGatewayCaptureConfigurationResponseDataType;
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
    attributes: {
      baseName: "attributes",
      type: "AiGatewayCaptureConfigurationResponseDataAttributes",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    type: {
      baseName: "type",
      type: "AiGatewayCaptureConfigurationResponseDataType",
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
    return AiGatewayCaptureConfigurationResponseData.attributeTypeMap;
  }

  public constructor() {}
}
