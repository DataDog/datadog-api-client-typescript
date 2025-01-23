/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ReorderMuteRulesParametersData } from "./ReorderMuteRulesParametersData";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Body of the mute rule reorder request: the full list of mute rules needs to be provided in the new order.
 */
export class ReorderMuteRulesParameters {
  /**
   * The `ReorderMuteRulesParameters` `data`.
   */
  "data"?: Array<ReorderMuteRulesParametersData>;

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
    data: {
      baseName: "data",
      type: "Array<ReorderMuteRulesParametersData>",
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
    return ReorderMuteRulesParameters.attributeTypeMap;
  }

  public constructor() {}
}
