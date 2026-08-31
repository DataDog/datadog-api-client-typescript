import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { UsageQuotaResponseAttributes } from "./UsageQuotaResponseAttributes";
import { UsageQuotaType } from "./UsageQuotaType";

/**
 * A usage quota resource.
 */
export class UsageQuotaResponseData {
  /**
   * Attributes of a usage quota.
   */
  "attributes": UsageQuotaResponseAttributes;
  /**
   * An opaque usage quota identifier. Clients must pass this value back verbatim in update and delete requests and must not infer any structure from it.
   */
  "id": string;
  /**
   * The JSON:API resource type for a usage quota.
   */
  "type": UsageQuotaType;
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
      type: "UsageQuotaResponseAttributes",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    type: {
      baseName: "type",
      type: "UsageQuotaType",
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
    return UsageQuotaResponseData.attributeTypeMap;
  }

  public constructor() {}
}
