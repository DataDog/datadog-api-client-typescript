import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Object containing array of IDs of canceled downtimes.
 */
export class CanceledDowntimesIds {
  /**
   * ID of downtimes that were canceled.
   */
  "cancelledIds"?: Array<number>;
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
    cancelledIds: {
      baseName: "cancelled_ids",
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
    return CanceledDowntimesIds.attributeTypeMap;
  }

  public constructor() {}
}
