import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ExecutionPolicyAttributes } from "./ExecutionPolicyAttributes";
import { ExecutionPolicyType } from "./ExecutionPolicyType";

/**
 * Object for a single execution policy.
 */
export class ExecutionPolicyResponseData {
  /**
   * An execution policy.
   */
  "attributes": ExecutionPolicyAttributes;
  /**
   * The ID of the execution policy.
   */
  "id": string;
  /**
   * The type of the resource. The value should always be `execution_policy`.
   */
  "type": ExecutionPolicyType;
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
      type: "ExecutionPolicyAttributes",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    type: {
      baseName: "type",
      type: "ExecutionPolicyType",
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
    return ExecutionPolicyResponseData.attributeTypeMap;
  }

  public constructor() {}
}
