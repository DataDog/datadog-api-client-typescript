/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { IncidentServiceNowRecordDataAttributesRequest } from "./IncidentServiceNowRecordDataAttributesRequest";
import { IncidentServiceNowRecordPromptType } from "./IncidentServiceNowRecordPromptType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * ServiceNow record data in a create request.
 */
export class IncidentServiceNowRecordDataRequest {
  /**
   * Attributes for creating a ServiceNow record for an incident.
   */
  "attributes": IncidentServiceNowRecordDataAttributesRequest;
  /**
   * ServiceNow record prompt resource type.
   */
  "type": IncidentServiceNowRecordPromptType;

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
      type: "IncidentServiceNowRecordDataAttributesRequest",
      required: true,
    },
    type: {
      baseName: "type",
      type: "IncidentServiceNowRecordPromptType",
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
    return IncidentServiceNowRecordDataRequest.attributeTypeMap;
  }

  public constructor() {}
}
