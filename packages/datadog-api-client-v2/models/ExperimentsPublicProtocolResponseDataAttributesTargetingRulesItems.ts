/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ExperimentsPublicProtocolResponseDataAttributesTargetingRulesItemsConditionsItems } from "./ExperimentsPublicProtocolResponseDataAttributesTargetingRulesItemsConditionsItems";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * A targeting rule supplied by the protocol.
 */
export class ExperimentsPublicProtocolResponseDataAttributesTargetingRulesItems {
  /**
   * Conditions that define this targeting rule.
   */
  "conditions"?: Array<ExperimentsPublicProtocolResponseDataAttributesTargetingRulesItemsConditionsItems>;

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
    conditions: {
      baseName: "conditions",
      type: "Array<ExperimentsPublicProtocolResponseDataAttributesTargetingRulesItemsConditionsItems>",
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
    return ExperimentsPublicProtocolResponseDataAttributesTargetingRulesItems.attributeTypeMap;
  }

  public constructor() {}
}
