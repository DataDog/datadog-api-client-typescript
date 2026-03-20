/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { IncidentUserDefinedFieldAttributesUpdateRequest } from "./IncidentUserDefinedFieldAttributesUpdateRequest";
import { IncidentUserDefinedFieldType } from "./IncidentUserDefinedFieldType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Data for updating an incident user-defined field.
 */
export class IncidentUserDefinedFieldUpdateData {
  /**
   * Attributes for updating an incident user-defined field. All fields are optional.
   */
  "attributes": IncidentUserDefinedFieldAttributesUpdateRequest;
  /**
   * The unique identifier of the user-defined field to update.
   */
  "id": string;
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
      type: "IncidentUserDefinedFieldAttributesUpdateRequest",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
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
    return IncidentUserDefinedFieldUpdateData.attributeTypeMap;
  }

  public constructor() {}
}
