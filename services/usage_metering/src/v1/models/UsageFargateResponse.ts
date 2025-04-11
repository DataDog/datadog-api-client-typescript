import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { UsageFargateHour } from "./UsageFargateHour";

/**
 * Response containing the number of Fargate tasks run and hourly usage.
 */
export class UsageFargateResponse {
  /**
   * Array with the number of hourly Fargate tasks recorded for a given organization.
   */
  "usage"?: Array<UsageFargateHour>;
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
    usage: {
      baseName: "usage",
      type: "Array<UsageFargateHour>",
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
    return UsageFargateResponse.attributeTypeMap;
  }

  public constructor() {}
}
