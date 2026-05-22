import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Per-item status returned for a bulk subscription request.
 */
export class SampleLogGenerationBulkSubscriptionItemMeta {
  /**
   * A description of the error encountered for this content pack, if the subscription could not be created.
   */
  "error"?: string;
  /**
   * The HTTP status code that resulted from creating the subscription for this content pack.
   */
  "status": number;
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
    error: {
      baseName: "error",
      type: "string",
    },
    status: {
      baseName: "status",
      type: "number",
      required: true,
      format: "int32",
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
    return SampleLogGenerationBulkSubscriptionItemMeta.attributeTypeMap;
  }

  public constructor() {}
}
