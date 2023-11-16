/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { RelationshipToIncidentResponderData } from "./RelationshipToIncidentResponderData";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Relationship to incident responders.
 */
export class RelationshipToIncidentResponders {
  /**
   * An array of incident responders.
   */
  "data": Array<RelationshipToIncidentResponderData>;

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
      type: "Array<RelationshipToIncidentResponderData>",
      required: true,
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return RelationshipToIncidentResponders.attributeTypeMap;
  }

  public constructor() {}
}
