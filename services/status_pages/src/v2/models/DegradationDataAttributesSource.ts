import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { DegradationDataAttributesSourceType } from "./DegradationDataAttributesSourceType";

/**
 * The source of the degradation.
 */
export class DegradationDataAttributesSource {
  /**
   * Timestamp of when the source was created.
   */
  "createdAt": Date;
  /**
   * The ID of the source.
   */
  "sourceId": string;
  /**
   * The type of the source.
   */
  "type": DegradationDataAttributesSourceType;
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
    createdAt: {
      baseName: "created_at",
      type: "Date",
      required: true,
      format: "date-time",
    },
    sourceId: {
      baseName: "source_id",
      type: "string",
      required: true,
    },
    type: {
      baseName: "type",
      type: "DegradationDataAttributesSourceType",
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
    return DegradationDataAttributesSource.attributeTypeMap;
  }

  public constructor() {}
}
