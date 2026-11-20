import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { RUMRecoveryCountResponseAttributes } from "./RUMRecoveryCountResponseAttributes";
import { RUMRecoveryCountResponseDataType } from "./RUMRecoveryCountResponseDataType";

/**
 * JSON:API resource.
 */
export class RUMRecoveryCountResponseData {
  /**
   * Approximate recoverable count.
   */
  "attributes": RUMRecoveryCountResponseAttributes;
  /**
   * Resource identifier.
   */
  "id": string;
  /**
   * JSON:API resource type.
   */
  "type": RUMRecoveryCountResponseDataType;
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
      type: "RUMRecoveryCountResponseAttributes",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    type: {
      baseName: "type",
      type: "RUMRecoveryCountResponseDataType",
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
    return RUMRecoveryCountResponseData.attributeTypeMap;
  }

  public constructor() {}
}
