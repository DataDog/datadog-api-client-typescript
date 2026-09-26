import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { AIGuardSdsFindingLocation } from "./AIGuardSdsFindingLocation";

/**
 * A sensitive data finding detected by the SDS scanner.
 */
export class AIGuardSdsFinding {
  /**
   * The category of sensitive data detected.
   */
  "category": string;
  /**
   * The location of a sensitive data match within the evaluated request.
   */
  "location": AIGuardSdsFindingLocation;
  /**
   * The human-readable name of the SDS rule that triggered.
   */
  "ruleDisplayName": string;
  /**
   * The tag identifier of the SDS rule that triggered.
   */
  "ruleTag": string;
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
    category: {
      baseName: "category",
      type: "string",
      required: true,
    },
    location: {
      baseName: "location",
      type: "AIGuardSdsFindingLocation",
      required: true,
    },
    ruleDisplayName: {
      baseName: "rule_display_name",
      type: "string",
      required: true,
    },
    ruleTag: {
      baseName: "rule_tag",
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
    return AIGuardSdsFinding.attributeTypeMap;
  }

  public constructor() {}
}
