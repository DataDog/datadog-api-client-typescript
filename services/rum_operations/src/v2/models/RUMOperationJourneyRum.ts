import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { RUMOperationJourneyStep } from "./RUMOperationJourneyStep";

/**
 * The definition of a RUM operation's journey, used to detect it from RUM events.
 */
export class RUMOperationJourneyRum {
  /**
   * The ordered list of steps composing the RUM journey.
   */
  "rumSteps": Array<RUMOperationJourneyStep>;
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
    rumSteps: {
      baseName: "rum_steps",
      type: "Array<RUMOperationJourneyStep>",
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
    return RUMOperationJourneyRum.attributeTypeMap;
  }

  public constructor() {}
}
