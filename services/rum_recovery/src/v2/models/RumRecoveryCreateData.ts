import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { RumRecoveryCreateAttributes } from "./RumRecoveryCreateAttributes";

/**
 * JSON:API resource.
 */
export class RumRecoveryCreateData {
  /**
   * Targeted recovery (the default) or query-based batch recovery.
   */
  "attributes": RumRecoveryCreateAttributes;
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
      type: "RumRecoveryCreateAttributes",
      required: true,
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
    return RumRecoveryCreateData.attributeTypeMap;
  }

  public constructor() {}
}
