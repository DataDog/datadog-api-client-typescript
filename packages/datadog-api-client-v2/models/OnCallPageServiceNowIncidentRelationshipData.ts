/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { OnCallPageServiceNowIncidentType } from "./OnCallPageServiceNowIncidentType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Reference to a ServiceNow incident.
 */
export class OnCallPageServiceNowIncidentRelationshipData {
  /**
   * The ID of the ServiceNow incident.
   */
  "id": string;
  /**
   * ServiceNow incident resource type.
   */
  "type": OnCallPageServiceNowIncidentType;

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
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    type: {
      baseName: "type",
      type: "OnCallPageServiceNowIncidentType",
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
    return OnCallPageServiceNowIncidentRelationshipData.attributeTypeMap;
  }

  public constructor() {}
}
