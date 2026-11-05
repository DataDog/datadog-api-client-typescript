/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { AiGatewayProviderInitialBindingRelation } from "./AiGatewayProviderInitialBindingRelation";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Reserved initial provider access binding. Initial provider sharing is unavailable.
 */
export class AiGatewayProviderInitialBinding {
  /**
   * Access principals in type:id form.
   */
  "principals": Array<string>;
  /**
   * Provider access relation. Editor also grants View.
   */
  "relation": AiGatewayProviderInitialBindingRelation;

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
      type: "AiGatewayProviderInitialBindingRelation",
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
    return AiGatewayProviderInitialBinding.attributeTypeMap;
  }

  public constructor() {}
}
