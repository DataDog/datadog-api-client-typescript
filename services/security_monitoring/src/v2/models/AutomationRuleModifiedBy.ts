import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { AutomationRuleActorType } from "./AutomationRuleActorType";

/**
 * The user or Datadog system who last modified the rule.
 */
export class AutomationRuleModifiedBy {
  /**
   * The actor's identifier (a user UUID or a system identifier).
   */
  "id": string;
  /**
   * The name of the actor.
   */
  "name": string;
  /**
   * Whether the actor is a user or the Datadog system.
   */
  "type": AutomationRuleActorType;
  /**
   * A container for additional, undeclared properties.
   * This is a holder for any undeclared properties as specified with
   * the 'additionalProperties' keyword in the OAS document.
   */
  "additionalProperties"?: { [key: string]: any; };
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
    name: {
      baseName: "name",
      type: "string",
      required: true,
    },
    type: {
      baseName: "type",
      type: "AutomationRuleActorType",
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
    return AutomationRuleModifiedBy.attributeTypeMap;
  }

  public constructor() {}
}
