import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Indicates which cross-product fields of a permanent RUM retention filter can be updated.
 */
export class RumPermanentRetentionFilterEditability {
  /**
   * Whether the APM trace cross-product configuration of the filter can be updated.
   */
  "traceEditable"?: boolean;
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
    traceEditable: {
      baseName: "trace_editable",
      type: "boolean",
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
    return RumPermanentRetentionFilterEditability.attributeTypeMap;
  }

  public constructor() {}
}
