/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { IncidentRulePatchDataAttributesRequest } from "./IncidentRulePatchDataAttributesRequest";
import { IncidentRuleType } from "./IncidentRuleType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Incident rule data in a patch request.
 */
export class IncidentRulePatchDataRequest {
  /**
   * Attributes for patching an incident rule. All fields are optional.
   */
  "attributes"?: IncidentRulePatchDataAttributesRequest;
  /**
   * The rule identifier.
   */
  "id": string;
  /**
   * Incident rule resource type.
   */
  "type": IncidentRuleType;

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
      type: "IncidentRulePatchDataAttributesRequest",
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
      format: "uuid",
    },
    type: {
      baseName: "type",
      type: "IncidentRuleType",
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
    return IncidentRulePatchDataRequest.attributeTypeMap;
  }

  public constructor() {}
}
