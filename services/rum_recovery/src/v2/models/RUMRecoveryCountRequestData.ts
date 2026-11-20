import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { RUMRecoveryCountAttributes } from "./RUMRecoveryCountAttributes";

/**
 * JSON:API resource.
 */
export class RUMRecoveryCountRequestData {
  /**
   * Query for a recovery estimate. The range cannot exceed 180 days; from cannot be more than 4 years ago and to cannot be more than 1 hour in the future. Session availability depends on the configured archive retention.
   */
  "attributes": RUMRecoveryCountAttributes;
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
      type: "RUMRecoveryCountAttributes",
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
    return RUMRecoveryCountRequestData.attributeTypeMap;
  }

  public constructor() {}
}
