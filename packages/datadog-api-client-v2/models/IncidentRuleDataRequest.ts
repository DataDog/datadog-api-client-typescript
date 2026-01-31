/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { IncidentRuleAttributesRequest } from "./IncidentRuleAttributesRequest";
import { IncidentRuleType } from "./IncidentRuleType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

export class IncidentRuleDataRequest {
  "attributes": IncidentRuleAttributesRequest;
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
      type: "IncidentRuleAttributesRequest",
      required: true,
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
    return IncidentRuleDataRequest.attributeTypeMap;
  }

  public constructor() {}
}
