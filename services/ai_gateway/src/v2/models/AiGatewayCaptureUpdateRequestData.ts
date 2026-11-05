import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { AiGatewayCaptureUpdateRequestDataAttributes } from "./AiGatewayCaptureUpdateRequestDataAttributes";
import { AiGatewayCaptureUpdateRequestDataType } from "./AiGatewayCaptureUpdateRequestDataType";

/**
 * Existing override identifier, replacement settings, and revisions required for the update.
 */
export class AiGatewayCaptureUpdateRequestData {
  /**
   * Replacement settings and revisions for updating the override.
   */
  "attributes": AiGatewayCaptureUpdateRequestDataAttributes;
  /**
   * UUID of the override to replace. Must match the `id` path parameter.
   */
  "id": string;
  /**
   * Data capture overrides resource type.
   */
  "type": AiGatewayCaptureUpdateRequestDataType;
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
      type: "AiGatewayCaptureUpdateRequestDataAttributes",
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
      type: "AiGatewayCaptureUpdateRequestDataType",
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
    return AiGatewayCaptureUpdateRequestData.attributeTypeMap;
  }

  public constructor() {}
}
