/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { AiGatewayModelGroupBindingRelation } from "./AiGatewayModelGroupBindingRelation";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Initial access binding for an AI Gateway model group.
 */
export class AiGatewayModelGroupBinding {
  /**
   * Principals granted the relation.
   */
  "principals": Array<string>;
  /**
   * Access relation granted on a model group.
   */
  "relation": AiGatewayModelGroupBindingRelation;

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
    principals: {
      baseName: "principals",
      type: "Array<string>",
      required: true,
    },
    relation: {
      baseName: "relation",
      type: "AiGatewayModelGroupBindingRelation",
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
    return AiGatewayModelGroupBinding.attributeTypeMap;
  }

  public constructor() {}
}
