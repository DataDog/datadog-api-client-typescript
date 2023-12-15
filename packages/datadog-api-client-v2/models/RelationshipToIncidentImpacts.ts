/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { RelationshipToIncidentImpactData } from "./RelationshipToIncidentImpactData";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Relationship to impacts.
 */
export class RelationshipToIncidentImpacts {
  /**
   * An array of incident impacts.
   */
  "data": Array<RelationshipToIncidentImpactData>;

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
      type: "Array<RelationshipToIncidentImpactData>",
      required: true,
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return RelationshipToIncidentImpacts.attributeTypeMap;
  }

  public constructor() {}
}
