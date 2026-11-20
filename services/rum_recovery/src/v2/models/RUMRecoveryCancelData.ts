import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { RUMRecoveryCancelAttributes } from "./RUMRecoveryCancelAttributes";

/**
 * JSON:API resource.
 */
export class RUMRecoveryCancelData {
  /**
   * Batch cancellation.
   */
  "attributes": RUMRecoveryCancelAttributes;
  /**
   * Optional resource identifier.
   */
  "id"?: string;
  /**
   * JSON:API resource type.
   */
  "type"?: string;
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
      type: "RUMRecoveryCancelAttributes",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
    },
    type: {
      baseName: "type",
      type: "string",
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
    return RUMRecoveryCancelData.attributeTypeMap;
  }

  public constructor() {}
}
