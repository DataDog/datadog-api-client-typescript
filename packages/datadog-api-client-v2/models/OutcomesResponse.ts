/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { OutcomesResponseDataItem } from "./OutcomesResponseDataItem";
import { OutcomesResponseIncludedItem } from "./OutcomesResponseIncludedItem";
import { OutcomesResponseLinks } from "./OutcomesResponseLinks";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Scorecard outcomes - the result of a rule for a service.
 */
export class OutcomesResponse {
  /**
   * List of rule outcomes.
   */
  "data"?: Array<OutcomesResponseDataItem>;
  /**
   * Array of rule details.
   */
  "included"?: Array<OutcomesResponseIncludedItem>;
  /**
   * Links attributes.
   */
  "links"?: OutcomesResponseLinks;

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
      type: "Array<OutcomesResponseDataItem>",
    },
    included: {
      baseName: "included",
      type: "Array<OutcomesResponseIncludedItem>",
    },
    links: {
      baseName: "links",
      type: "OutcomesResponseLinks",
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
    return OutcomesResponse.attributeTypeMap;
  }

  public constructor() {}
}
