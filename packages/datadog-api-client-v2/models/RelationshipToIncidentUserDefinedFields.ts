/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { RelationshipToIncidentUserDefinedFieldData } from "./RelationshipToIncidentUserDefinedFieldData";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Relationship to incident user defined fields.
 */
export class RelationshipToIncidentUserDefinedFields {
  /**
   * An array of user defined fields.
   */
  "data": Array<RelationshipToIncidentUserDefinedFieldData>;

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
      type: "Array<RelationshipToIncidentUserDefinedFieldData>",
      required: true,
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return RelationshipToIncidentUserDefinedFields.attributeTypeMap;
  }

  public constructor() {}
}
