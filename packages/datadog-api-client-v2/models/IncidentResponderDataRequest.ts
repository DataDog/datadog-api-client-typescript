/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { IncidentResponderRelationshipsRequest } from "./IncidentResponderRelationshipsRequest";
import { IncidentResponderType } from "./IncidentResponderType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Incident responder data in a create request.
 */
export class IncidentResponderDataRequest {
  /**
   * Relationships for creating an incident responder.
   */
  "relationships": IncidentResponderRelationshipsRequest;
  /**
   * Incident responder resource type.
   */
  "type": IncidentResponderType;

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
    relationships: {
      baseName: "relationships",
      type: "IncidentResponderRelationshipsRequest",
      required: true,
    },
    type: {
      baseName: "type",
      type: "IncidentResponderType",
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
    return IncidentResponderDataRequest.attributeTypeMap;
  }

  public constructor() {}
}
