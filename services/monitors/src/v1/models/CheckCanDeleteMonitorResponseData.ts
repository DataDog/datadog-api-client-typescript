import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Wrapper object with the list of monitor IDs.
 */
export class CheckCanDeleteMonitorResponseData {
  /**
   * An array of Monitor IDs that can be safely deleted.
   */
  "ok"?: Array<number>;
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
    ok: {
      baseName: "ok",
      type: "Array<number>",
      format: "int64",
    },
    additionalProperties: {
      baseName: "additionalProperties",
      type: "any",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return CheckCanDeleteMonitorResponseData.attributeTypeMap;
  }

  public constructor() {}
}
