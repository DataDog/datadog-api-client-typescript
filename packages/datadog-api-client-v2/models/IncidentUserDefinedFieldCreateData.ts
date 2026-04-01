/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { IncidentUserDefinedFieldAttributesCreateRequest } from "./IncidentUserDefinedFieldAttributesCreateRequest";
import { IncidentUserDefinedFieldCreateRelationships } from "./IncidentUserDefinedFieldCreateRelationships";
import { IncidentUserDefinedFieldType } from "./IncidentUserDefinedFieldType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Data for creating an incident user-defined field.
 */
export class IncidentUserDefinedFieldCreateData {
  /**
   * Attributes for creating an incident user-defined field.
   */
  "attributes": IncidentUserDefinedFieldAttributesCreateRequest;
  /**
   * Relationships for creating an incident user-defined field.
   */
  "relationships": IncidentUserDefinedFieldCreateRelationships;
  /**
   * The incident user defined fields type.
   */
  "type": IncidentUserDefinedFieldType;

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
      type: "IncidentUserDefinedFieldAttributesCreateRequest",
      required: true,
    },
    relationships: {
      baseName: "relationships",
      type: "IncidentUserDefinedFieldCreateRelationships",
      required: true,
    },
    type: {
      baseName: "type",
      type: "IncidentUserDefinedFieldType",
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
    return IncidentUserDefinedFieldCreateData.attributeTypeMap;
  }

  public constructor() {}
}
