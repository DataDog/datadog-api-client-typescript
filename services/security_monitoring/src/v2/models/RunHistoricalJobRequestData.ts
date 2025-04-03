import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { RunHistoricalJobRequestAttributes } from "./RunHistoricalJobRequestAttributes";
import { RunHistoricalJobRequestDataType } from "./RunHistoricalJobRequestDataType";

/**
 * Data for running a historical job request.
 */
export class RunHistoricalJobRequestData {
  /**
   * Run a historical job request.
   */
  "attributes"?: RunHistoricalJobRequestAttributes;
  /**
   * Type of data.
   */
  "type"?: RunHistoricalJobRequestDataType;
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
      type: "RunHistoricalJobRequestAttributes",
    },
    type: {
      baseName: "type",
      type: "RunHistoricalJobRequestDataType",
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
    return RunHistoricalJobRequestData.attributeTypeMap;
  }

  public constructor() {}
}
