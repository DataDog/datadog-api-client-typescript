import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Batch-list pagination metadata.
 */
export class RumRecoveryBatchListMeta {
  /**
   * Opaque next-page cursor. Omitted on the final page.
   */
  "nextCursor"?: string;
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
    nextCursor: {
      baseName: "next_cursor",
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
    return RumRecoveryBatchListMeta.attributeTypeMap;
  }

  public constructor() {}
}
