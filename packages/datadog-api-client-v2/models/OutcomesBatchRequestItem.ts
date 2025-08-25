/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { State } from "./State";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Scorecard outcome for a specific rule, for a given service within a batched update.
 */
export class OutcomesBatchRequestItem {
  /**
   * Any remarks regarding the scorecard rule's evaluation, and supports HTML hyperlinks.
   */
  "remarks"?: string;
  /**
   * The unique ID for a scorecard rule.
   */
  "ruleId": string;
  /**
   * The unique name for a service in the catalog.
   */
  "serviceName": string;
  /**
   * The state of the rule evaluation.
   */
  "state": State;

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
    remarks: {
      baseName: "remarks",
      type: "string",
    },
    ruleId: {
      baseName: "rule_id",
      type: "string",
      required: true,
    },
    serviceName: {
      baseName: "service_name",
      type: "string",
      required: true,
    },
    state: {
      baseName: "state",
      type: "State",
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
    return OutcomesBatchRequestItem.attributeTypeMap;
  }

  public constructor() {}
}
