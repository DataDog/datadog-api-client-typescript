import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { FindingAttributes } from "./FindingAttributes";
import { FindingType } from "./FindingType";

/**
 * A single finding without the message and resource configuration.
 */
export class Finding {
  /**
   * The JSON:API attributes of the finding.
   */
  "attributes"?: FindingAttributes;
  /**
   * The unique ID for this finding.
   */
  "id"?: string;
  /**
   * The JSON:API type for findings.
   */
  "type"?: FindingType;
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
      type: "FindingAttributes",
    },
    id: {
      baseName: "id",
      type: "string",
    },
    type: {
      baseName: "type",
      type: "FindingType",
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
    return Finding.attributeTypeMap;
  }

  public constructor() {}
}
