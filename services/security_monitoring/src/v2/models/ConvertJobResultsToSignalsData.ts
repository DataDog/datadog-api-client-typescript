import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ConvertJobResultsToSignalsAttributes } from "./ConvertJobResultsToSignalsAttributes";
import { ConvertJobResultsToSignalsDataType } from "./ConvertJobResultsToSignalsDataType";

/**
 * Data for converting historical job results to signals.
 */
export class ConvertJobResultsToSignalsData {
  /**
   * Attributes for converting historical job results to signals.
   */
  "attributes"?: ConvertJobResultsToSignalsAttributes;
  /**
   * Type of payload.
   */
  "type"?: ConvertJobResultsToSignalsDataType;
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
      type: "ConvertJobResultsToSignalsAttributes",
    },
    type: {
      baseName: "type",
      type: "ConvertJobResultsToSignalsDataType",
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
    return ConvertJobResultsToSignalsData.attributeTypeMap;
  }

  public constructor() {}
}
