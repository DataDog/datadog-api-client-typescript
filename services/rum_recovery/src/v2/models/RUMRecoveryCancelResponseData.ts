import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { RUMRecoveryCancelResponseAttributes } from "./RUMRecoveryCancelResponseAttributes";
import { RUMRecoveryRequestType } from "./RUMRecoveryRequestType";

/**
 * JSON:API resource.
 */
export class RUMRecoveryCancelResponseData {
  /**
   * Batch cancellation acknowledgment.
   */
  "attributes": RUMRecoveryCancelResponseAttributes;
  /**
   * Resource identifier.
   */
  "id": string;
  /**
   * JSON:API resource type.
   */
  "type": RUMRecoveryRequestType;
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
      type: "RUMRecoveryCancelResponseAttributes",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    type: {
      baseName: "type",
      type: "RUMRecoveryRequestType",
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
    return RUMRecoveryCancelResponseData.attributeTypeMap;
  }

  public constructor() {}
}
