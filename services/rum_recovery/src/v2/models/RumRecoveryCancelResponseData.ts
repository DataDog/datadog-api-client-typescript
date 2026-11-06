import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { RumRecoveryCancelResponseAttributes } from "./RumRecoveryCancelResponseAttributes";
import { RumRecoveryRequestType } from "./RumRecoveryRequestType";

/**
 * JSON:API resource.
 */
export class RumRecoveryCancelResponseData {
  /**
   * Batch cancellation acknowledgment.
   */
  "attributes": RumRecoveryCancelResponseAttributes;
  /**
   * Resource identifier.
   */
  "id": string;
  /**
   * JSON:API resource type.
   */
  "type": RumRecoveryRequestType;
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
      type: "RumRecoveryCancelResponseAttributes",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    type: {
      baseName: "type",
      type: "RumRecoveryRequestType",
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
    return RumRecoveryCancelResponseData.attributeTypeMap;
  }

  public constructor() {}
}
