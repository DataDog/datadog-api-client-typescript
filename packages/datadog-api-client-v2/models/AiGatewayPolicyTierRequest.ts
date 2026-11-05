/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { AiGatewayPolicyTargetRequest } from "./AiGatewayPolicyTargetRequest";

import { AttributeTypeMap, Int64 } from "../../datadog-api-client-common/util";

/**
 * Routing policy tier supplied in a request.
 */
export class AiGatewayPolicyTierRequest {
  /**
   * Routing priority.
   */
  "priority"?: Int64;
  "targets": Array<AiGatewayPolicyTargetRequest>;

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
    priority: {
      baseName: "priority",
      type: "number",
      format: "int64",
    },
    targets: {
      baseName: "targets",
      type: "Array<AiGatewayPolicyTargetRequest>",
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
    return AiGatewayPolicyTierRequest.attributeTypeMap;
  }

  public constructor() {}
}
