/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { IncidentRuleDataAttributesResponse } from "./IncidentRuleDataAttributesResponse";
import { IncidentRuleResponseType } from "./IncidentRuleResponseType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Incident rule data in a response.
 */
export class IncidentRuleDataResponse {
  /**
   * Attributes of an incident rule in a response.
   */
  "attributes": IncidentRuleDataAttributesResponse;
  /**
   * The rule identifier.
   */
  "id": string;
  /**
   * Incident rule response resource type.
   */
  "type": IncidentRuleResponseType;

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
      type: "IncidentRuleDataAttributesResponse",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
      format: "uuid",
    },
    type: {
      baseName: "type",
      type: "IncidentRuleResponseType",
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
    return IncidentRuleDataResponse.attributeTypeMap;
  }

  public constructor() {}
}
