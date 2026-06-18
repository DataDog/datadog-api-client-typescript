import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { DelegatedTokenAttributes } from "./DelegatedTokenAttributes";
import { DelegatedTokenType } from "./DelegatedTokenType";

/**
 * A delegated token resource.
 */
export class DelegatedTokenData {
  /**
   * Attributes of a delegated token.
   */
  "attributes": DelegatedTokenAttributes;
  /**
   * A random UUID assigned to this token issuance.
   */
  "id": string;
  /**
   * The resource type for a delegated token.
   */
  "type": DelegatedTokenType;
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
      type: "DelegatedTokenAttributes",
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
      type: "DelegatedTokenType",
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
    return DelegatedTokenData.attributeTypeMap;
  }

  public constructor() {}
}
