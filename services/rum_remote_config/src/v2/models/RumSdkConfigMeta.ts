import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Metadata associated with a RUM SDK configuration.
 */
export class RumSdkConfigMeta {
  /**
   * The timestamp of the last update to this configuration.
   */
  "updatedAt": Date;
  /**
   * The handle of the user who last updated this configuration.
   */
  "updatedBy": string;
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
    updatedAt: {
      baseName: "updated_at",
      type: "Date",
      required: true,
      format: "date-time",
    },
    updatedBy: {
      baseName: "updated_by",
      type: "string",
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
    return RumSdkConfigMeta.attributeTypeMap;
  }

  public constructor() {}
}
