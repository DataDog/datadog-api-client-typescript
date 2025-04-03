import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { AWSNewExternalIDResponseAttributes } from "./AWSNewExternalIDResponseAttributes";
import { AWSNewExternalIDResponseDataType } from "./AWSNewExternalIDResponseDataType";

/**
 * AWS External ID response body.
 */
export class AWSNewExternalIDResponseData {
  /**
   * AWS External ID response body.
   */
  "attributes"?: AWSNewExternalIDResponseAttributes;
  /**
   * The `AWSNewExternalIDResponseData` `id`.
   */
  "id": string;
  /**
   * The `AWSNewExternalIDResponseData` `type`.
   */
  "type": AWSNewExternalIDResponseDataType;
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
      type: "AWSNewExternalIDResponseAttributes",
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    type: {
      baseName: "type",
      type: "AWSNewExternalIDResponseDataType",
      required: true,
    },
    additionalProperties: {
      baseName: "additionalProperties",
      type: "any",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return AWSNewExternalIDResponseData.attributeTypeMap;
  }

  public constructor() {}
}
