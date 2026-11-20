import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { RUMRecoveryCreateResponseAttributes } from "./RUMRecoveryCreateResponseAttributes";
import { RUMRecoveryRequestType } from "./RUMRecoveryRequestType";

/**
 * JSON:API resource.
 */
export class RUMRecoveryCreateResponseData {
  /**
   * Accepted recovery request.
   */
  "attributes": RUMRecoveryCreateResponseAttributes;
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
      type: "RUMRecoveryCreateResponseAttributes",
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
    return RUMRecoveryCreateResponseData.attributeTypeMap;
  }

  public constructor() {}
}
