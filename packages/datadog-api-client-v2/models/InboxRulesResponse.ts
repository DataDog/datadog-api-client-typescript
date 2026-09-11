/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { InboxRuleDataResponse } from "./InboxRuleDataResponse";
import { SecurityAutomationRulesLinks } from "./SecurityAutomationRulesLinks";
import { SecurityAutomationRulesMeta } from "./SecurityAutomationRulesMeta";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * A list of inbox rules with pagination metadata.
 */
export class InboxRulesResponse {
  /**
   * A list of inbox rule data objects.
   */
  "data": Array<InboxRuleDataResponse>;
  /**
   * Pagination links for the list of automation rules.
   */
  "links": SecurityAutomationRulesLinks;
  /**
   * Metadata for the list of automation rules.
   */
  "meta": SecurityAutomationRulesMeta;

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
      type: "Array<InboxRuleDataResponse>",
      required: true,
    },
    links: {
      baseName: "links",
      type: "SecurityAutomationRulesLinks",
      required: true,
    },
    meta: {
      baseName: "meta",
      type: "SecurityAutomationRulesMeta",
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
    return InboxRulesResponse.attributeTypeMap;
  }

  public constructor() {}
}
