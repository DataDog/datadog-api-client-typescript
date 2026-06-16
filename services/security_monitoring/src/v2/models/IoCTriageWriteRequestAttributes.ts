import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { IoCTriageState } from "./IoCTriageState";

/**
 * Attributes for setting an indicator's triage state.
 */
export class IoCTriageWriteRequestAttributes {
  /**
   * The indicator value to triage (for example, an IP address or domain).
   */
  "indicator": string;
  /**
   * Current triage state of the indicator.
   */
  "triageState": IoCTriageState;
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
    indicator: {
      baseName: "indicator",
      type: "string",
      required: true,
    },
    triageState: {
      baseName: "triage_state",
      type: "IoCTriageState",
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
    return IoCTriageWriteRequestAttributes.attributeTypeMap;
  }

  public constructor() {}
}
