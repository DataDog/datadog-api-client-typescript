import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { FindingDataType } from "./FindingDataType";

export class FindingData {
  /**
   * Unique identifier of the security finding.
   */
  "id": string;
  /**
   * Security findings resource type.
   */
  "type": FindingDataType;
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
      type: "FindingDataType",
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
    return FindingData.attributeTypeMap;
  }

  public constructor() {}
}
