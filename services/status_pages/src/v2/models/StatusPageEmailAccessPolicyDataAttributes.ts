import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ExecutionPolicyEffect } from "./ExecutionPolicyEffect";

/**
 * Attributes of a status page email access policy.
 */
export class StatusPageEmailAccessPolicyDataAttributes {
  /**
   * Timestamp of when the email access policy was created.
   */
  "createdAt": Date;
  /**
   * Whether the policy allows or denies matching actions.
   */
  "effect": ExecutionPolicyEffect;
  /**
   * The email address pattern matched by the policy.
   */
  "pattern": string;
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
    effect: {
      baseName: "effect",
      type: "ExecutionPolicyEffect",
      required: true,
    },
    pattern: {
      baseName: "pattern",
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
    return StatusPageEmailAccessPolicyDataAttributes.attributeTypeMap;
  }

  public constructor() {}
}
