import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { AiGatewayCaptureOverrideResponseDataAttributes } from "./AiGatewayCaptureOverrideResponseDataAttributes";
import { AiGatewayCaptureOverrideResponseDataType } from "./AiGatewayCaptureOverrideResponseDataType";

/**
 * Saved data capture override with its identifier, mode, scope, and revision.
 */
export class AiGatewayCaptureOverrideResponseData {
  /**
   * Saved name, capture mode, request filters, and revision of the override.
   */
  "attributes": AiGatewayCaptureOverrideResponseDataAttributes;
  /**
   * UUID of the saved override, used to retrieve it from the configuration or change it.
   */
  "id": string;
  /**
   * Data capture overrides resource type.
   */
  "type": AiGatewayCaptureOverrideResponseDataType;
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
      type: "AiGatewayCaptureOverrideResponseDataAttributes",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
      format: "uuid",
    },
    type: {
      baseName: "type",
      type: "AiGatewayCaptureOverrideResponseDataType",
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
    return AiGatewayCaptureOverrideResponseData.attributeTypeMap;
  }

  public constructor() {}
}
