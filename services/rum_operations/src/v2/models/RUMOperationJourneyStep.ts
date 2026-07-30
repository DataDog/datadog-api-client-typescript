import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { RUMOperationJourneyCompositeRule } from "./RUMOperationJourneyCompositeRule";
import { RUMOperationJourneyNode } from "./RUMOperationJourneyNode";
import { RUMOperationJourneyStepType } from "./RUMOperationJourneyStepType";

/**
 * A single step of a RUM operation's journey. Matches RUM events either through a list of `nodes`
 * or through a `composite` rule; the two are mutually exclusive.
 */
export class RUMOperationJourneyStep {
  /**
   * A composite rule combining several predicates. Used as an alternative to `nodes` on a journey
   * step when several conditions must be matched together, in any order or in a specific order.
   */
  "composite"?: RUMOperationJourneyCompositeRule;
  /**
   * The list of nodes that can match this step. Mutually exclusive with `composite`.
   */
  "nodes"?: Array<RUMOperationJourneyNode>;
  /**
   * The type of a step within a RUM operation's journey.
   */
  "type": RUMOperationJourneyStepType;
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
    composite: {
      baseName: "composite",
      type: "RUMOperationJourneyCompositeRule",
    },
    nodes: {
      baseName: "nodes",
      type: "Array<RUMOperationJourneyNode>",
    },
    type: {
      baseName: "type",
      type: "RUMOperationJourneyStepType",
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
    return RUMOperationJourneyStep.attributeTypeMap;
  }

  public constructor() {}
}
