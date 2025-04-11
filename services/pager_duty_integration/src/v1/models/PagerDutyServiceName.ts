import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * PagerDuty service object name.
 */
export class PagerDutyServiceName {
  /**
   * Your service name associated service key in PagerDuty.
   */
  "serviceName": string;
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
    serviceName: {
      baseName: "service_name",
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
    return PagerDutyServiceName.attributeTypeMap;
  }

  public constructor() {}
}
