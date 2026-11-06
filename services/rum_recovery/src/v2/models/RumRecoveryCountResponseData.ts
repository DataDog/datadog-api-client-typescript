import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { RumRecoveryCountResponseAttributes } from "./RumRecoveryCountResponseAttributes";
import { RumRecoveryCountResponseDataType } from "./RumRecoveryCountResponseDataType";

/**
 * JSON:API resource.
 */
export class RumRecoveryCountResponseData {
  /**
   * Approximate recoverable count.
   */
  "attributes": RumRecoveryCountResponseAttributes;
  /**
   * Resource identifier.
   */
  "id": string;
  /**
   * JSON:API resource type.
   */
  "type": RumRecoveryCountResponseDataType;
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
      type: "RumRecoveryCountResponseAttributes",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    type: {
      baseName: "type",
      type: "RumRecoveryCountResponseDataType",
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
    return RumRecoveryCountResponseData.attributeTypeMap;
  }

  public constructor() {}
}
