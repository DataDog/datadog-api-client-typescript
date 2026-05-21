/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { IncidentBatchUpdateRuleExecutionStatesDataAttributes } from "./IncidentBatchUpdateRuleExecutionStatesDataAttributes";
import { IncidentRuleExecutionStateType } from "./IncidentRuleExecutionStateType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Data for batch updating rule execution states.
 */
export class IncidentBatchUpdateRuleExecutionStatesData {
  /**
   * Attributes for batch updating rule execution states.
   */
  "attributes": IncidentBatchUpdateRuleExecutionStatesDataAttributes;
  /**
   * Incident rule execution state resource type.
   */
  "type": IncidentRuleExecutionStateType;

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
      type: "IncidentBatchUpdateRuleExecutionStatesDataAttributes",
      required: true,
    },
    type: {
      baseName: "type",
      type: "IncidentRuleExecutionStateType",
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
    return IncidentBatchUpdateRuleExecutionStatesData.attributeTypeMap;
  }

  public constructor() {}
}
