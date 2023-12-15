/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { IncidentImpactsType } from "./IncidentImpactsType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Relationship to impact object.
 */
export class RelationshipToIncidentImpactData {
  /**
   * A unique identifier that represents the impact.
   */
  "id": string;
  /**
   * The incident impacts type.
   */
  "type": IncidentImpactsType;

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
      type: "IncidentImpactsType",
      required: true,
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return RelationshipToIncidentImpactData.attributeTypeMap;
  }

  public constructor() {}
}
