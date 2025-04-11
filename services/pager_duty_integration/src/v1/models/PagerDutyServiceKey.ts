import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * PagerDuty service object key.
 */
export class PagerDutyServiceKey {
  /**
   * Your service key in PagerDuty.
   */
  "serviceKey": string;
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
    serviceKey: {
      baseName: "service_key",
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
    return PagerDutyServiceKey.attributeTypeMap;
  }

  public constructor() {}
}
