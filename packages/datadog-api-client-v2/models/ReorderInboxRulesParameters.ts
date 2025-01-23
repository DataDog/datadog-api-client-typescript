/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ReorderInboxRulesParametersData } from "./ReorderInboxRulesParametersData";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Body of the inbox rule reorder request: the full list of inbox rules needs to be provided in the new order.
 */
export class ReorderInboxRulesParameters {
  /**
   * The `ReorderInboxRulesParameters` `data`.
   */
  "data"?: Array<ReorderInboxRulesParametersData>;

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
      type: "Array<ReorderInboxRulesParametersData>",
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
    return ReorderInboxRulesParameters.attributeTypeMap;
  }

  public constructor() {}
}
