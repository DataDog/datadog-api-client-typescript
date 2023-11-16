/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { IncidentRespondersType } from "./IncidentRespondersType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Relationship to impact object.
 */
export class RelationshipToIncidentResponderData {
  /**
   * A unique identifier that represents the responder.
   */
  "id": string;
  /**
   * The incident responders type.
   */
  "type": IncidentRespondersType;

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
      type: "IncidentRespondersType",
      required: true,
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return RelationshipToIncidentResponderData.attributeTypeMap;
  }

  public constructor() {}
}
