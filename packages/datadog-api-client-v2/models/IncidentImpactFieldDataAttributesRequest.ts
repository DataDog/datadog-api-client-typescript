/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { IncidentImpactFieldChoice } from "./IncidentImpactFieldChoice";
import { IncidentImpactFieldValueType } from "./IncidentImpactFieldValueType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Attributes for creating an impact field.
 */
export class IncidentImpactFieldDataAttributesRequest {
  /**
   * The display name of the impact field.
   */
  "displayName": string;
  /**
   * The choices for dropdown or multiselect fields.
   */
  "fieldChoices"?: Array<IncidentImpactFieldChoice>;
  /**
   * The type of an impact field.
   */
  "fieldType": IncidentImpactFieldValueType;
  /**
   * The normalized name of the impact field (used as identifier).
   */
  "name": string;
  /**
   * The tag key associated with the field (for metrictag type).
   */
  "tagKey"?: string;

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
    displayName: {
      baseName: "display_name",
      type: "string",
      required: true,
    },
    fieldChoices: {
      baseName: "field_choices",
      type: "Array<IncidentImpactFieldChoice>",
    },
    fieldType: {
      baseName: "field_type",
      type: "IncidentImpactFieldValueType",
      required: true,
    },
    name: {
      baseName: "name",
      type: "string",
      required: true,
    },
    tagKey: {
      baseName: "tag_key",
      type: "string",
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
    return IncidentImpactFieldDataAttributesRequest.attributeTypeMap;
  }

  public constructor() {}
}
