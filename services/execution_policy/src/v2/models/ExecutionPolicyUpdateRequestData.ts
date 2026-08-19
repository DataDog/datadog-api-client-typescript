import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ExecutionPolicyType } from "./ExecutionPolicyType";
import { ExecutionPolicyWriteAttributes } from "./ExecutionPolicyWriteAttributes";

/**
 * Object for a single execution policy.
 */
export class ExecutionPolicyUpdateRequestData {
  /**
   * Attributes used to create or update an execution policy.
   */
  "attributes": ExecutionPolicyWriteAttributes;
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
      type: "ExecutionPolicyWriteAttributes",
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
    return ExecutionPolicyUpdateRequestData.attributeTypeMap;
  }

  public constructor() {}
}
