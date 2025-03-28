/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { CloudWorkloadSecurityAgentPolicyBatchUpdateAttributes } from "./CloudWorkloadSecurityAgentPolicyBatchUpdateAttributes";
import { CloudWorkloadSecurityAgentPolicyBatchUpdateDataType } from "./CloudWorkloadSecurityAgentPolicyBatchUpdateDataType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Object containing batch update data for multiple Agent policies
 */
export class CloudWorkloadSecurityAgentPolicyBatchUpdateData {
  /**
   * Attributes for the batch update operation
   */
  "attributes": CloudWorkloadSecurityAgentPolicyBatchUpdateAttributes;
  /**
   * Identifier for the batch operation
   */
  "id": string;
  /**
   * Type of the batch update operation
   */
  "type": CloudWorkloadSecurityAgentPolicyBatchUpdateDataType;

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
      type: "CloudWorkloadSecurityAgentPolicyBatchUpdateAttributes",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    type: {
      baseName: "type",
      type: "CloudWorkloadSecurityAgentPolicyBatchUpdateDataType",
      required: true,
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
    return CloudWorkloadSecurityAgentPolicyBatchUpdateData.attributeTypeMap;
  }

  public constructor() {}
}
