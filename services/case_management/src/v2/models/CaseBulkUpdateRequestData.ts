import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { CaseBulkResourceType } from "./CaseBulkResourceType";
import { CaseBulkUpdateRequestAttributes } from "./CaseBulkUpdateRequestAttributes";

/**
 * Data object wrapping the bulk update type and attributes.
 */
export class CaseBulkUpdateRequestData {
  /**
   * Attributes for the bulk update, specifying which cases to update and the action to apply.
   */
  "attributes": CaseBulkUpdateRequestAttributes;
  /**
   * JSON:API resource type for bulk case operations.
   */
  "type": CaseBulkResourceType;
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
      type: "CaseBulkUpdateRequestAttributes",
      required: true,
    },
    type: {
      baseName: "type",
      type: "CaseBulkResourceType",
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
    return CaseBulkUpdateRequestData.attributeTypeMap;
  }

  public constructor() {}
}
