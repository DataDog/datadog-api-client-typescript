import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { SeverityOverrideDataType } from "./SeverityOverrideDataType";

/**
 * Data of the severity override response.
 */
export class SeverityOverrideResponseData {
  /**
   * Unique identifier of the severity override request.
   */
  "id": string;
  /**
   * Severity override resource type.
   */
  "type": SeverityOverrideDataType;
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
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    type: {
      baseName: "type",
      type: "SeverityOverrideDataType",
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
    return SeverityOverrideResponseData.attributeTypeMap;
  }

  public constructor() {}
}
