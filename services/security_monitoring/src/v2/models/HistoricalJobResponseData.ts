import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { HistoricalJobDataType } from "./HistoricalJobDataType";
import { HistoricalJobResponseAttributes } from "./HistoricalJobResponseAttributes";

/**
 * Historical job response data.
 */
export class HistoricalJobResponseData {
  /**
   * Historical job attributes.
   */
  "attributes"?: HistoricalJobResponseAttributes;
  /**
   * ID of the job.
   */
  "id"?: string;
  /**
   * Type of payload.
   */
  "type"?: HistoricalJobDataType;
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
    attributes: {
      baseName: "attributes",
      type: "HistoricalJobResponseAttributes",
    },
    id: {
      baseName: "id",
      type: "string",
    },
    type: {
      baseName: "type",
      type: "HistoricalJobDataType",
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
    return HistoricalJobResponseData.attributeTypeMap;
  }

  public constructor() {}
}
